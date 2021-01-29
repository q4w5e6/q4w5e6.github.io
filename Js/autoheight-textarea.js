$(function () {
    var hiddenTextarea;

    var HIDDEN_STYLE = `
        height:0 !important;
        visibility:hidden !important;
        overflow:hidden !important;
        position:absolute !important;
        z-index:-1000 !important;
        top:0 !important;
        right:0 !important;
    `;

    // 所有可能会影响到height的css属性
    var CONTEXT_STYLE = [
        'letter-spacing',
        'line-height',
        'padding-top',
        'padding-bottom',
        'font-family',
        'font-weight',
        'font-size',
        'text-rendering',
        'text-transform',
        'width',
        'text-indent',
        'padding-left',
        'padding-right',
        'border-width',
        'box-sizing'
    ];
    // 获取设置在当前textarea上的css属性
    function calculateNodeStyling(targetElement) {
        var style = window.getComputedStyle(targetElement);

        var boxSizing = style.getPropertyValue('box-sizing');

        var paddingSize = (
            parseFloat(style.getPropertyValue('padding-bottom')) +
            parseFloat(style.getPropertyValue('padding-top'))
        );

        var borderSize = (
            parseFloat(style.getPropertyValue('border-bottom-width')) +
            parseFloat(style.getPropertyValue('border-top-width'))
        );

        var contextStyle = CONTEXT_STYLE
            .map(function (value) {
                return value + ':' + style.getPropertyValue(value)
            }).join(';');

        return { contextStyle, paddingSize, borderSize, boxSizing };
    }
    $('body').on('focus', 'textarea', function () {
        // 如果不存在就新建一个隐藏的textarea
        var _this = $(this);
        if (!hiddenTextarea) {
            hiddenTextarea = document.createElement('textarea');
            document.body.appendChild(hiddenTextarea);
        }
        var {
            paddingSize,
            borderSize,
            boxSizing,
            contextStyle
        } = calculateNodeStyling(_this[0]);
        // 将获取到得当前得textarea的css属性作用于隐藏的textarea
        hiddenTextarea.setAttribute('style', HIDDEN_STYLE + contextStyle);
    }).on('keydown keyup', 'textarea', function () {
        var _this = $(this);
        var {
            paddingSize,
            borderSize,
            boxSizing,
            contextStyle
        } = calculateNodeStyling(_this[0]);
        // 将获取到得当前得textarea的css属性作用于隐藏的textarea
        hiddenTextarea.setAttribute('style', HIDDEN_STYLE + contextStyle);
        // 将当前的textarea的value设置到隐藏的textarea上面
        hiddenTextarea.value = _this[0].value || _this[0].placeholder || '';

        // 获取隐藏的textarea的height
        var height = hiddenTextarea.scrollHeight;

        if (boxSizing === 'border-box') {
            height = height + borderSize;
        } else if (boxSizing === 'content-box') {
            height = height - paddingSize;
        }

        hiddenTextarea.value = '';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

        // 如果设置有最小行数和最大行数时的判断条件，如果没有设置则取rows为最小行数
        var minRows = _this.attr('rows') ? _this.attr('rows') : _this.attr('data-min-rows') ? _this.attr('data-min-rows') : 1;
        var maxRows = _this.attr('data-max-rows') ? _this.attr('data-max-rows') : null;
        if (minRows !== null) {
            var minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            var maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            height = Math.min(maxHeight, height);
        }

        // 将得到的height的高度设置到当前的textarea上面
        _this.css('height', height + 'px');
    }).on('blur', 'textarea', function () {
        // 删除掉无用的隐藏的textarea
        hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
        hiddenTextarea = null;
    })
})