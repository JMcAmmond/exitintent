(function($) {

    $.fn.exitintent = function(options) {

        /**
         *
         */
        var settings = $.extend({
            timer       : 1000,
            callback    : function() {},
            delay       : 0,
            sensitivity : 20,
            disabled    : false
        }, options);

        /**
         *
         * @type {*|Element}
         * @private
         */
        var _html = document.documentElement,
            _delayTimer = null;

        /**
         *
         */
        function attachExitIntent() {
            if ( isDisabled() ) { return; }

            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
        }

        /**
         *
         * @param event
         */
        function handleMouseleave(event) {
            if (event.clientY > settings.sensitivity) { return; }

            _delayTimer = setTimeout(fire, settings.delay);
        }

        /**
         *
         */
        function handleMouseenter() {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null;
            }
        }

        /**
         *
         */
        function fire() {
            if( isDisabled() ) { return; }

            settings.callback();
            disable();
        }

        /**
         *
         */
        function disable() {
            settings.disabled = true;

            _html.removeEventListener('mouseleave', handleMouseleave);
            _html.removeEventListener('mouseenter', handleMouseenter);
        }

        /**
         *
         * @returns {boolean}
         */
        function isDisabled() {
            return settings.disabled;
        }

        /**
         * Attach Exit Intent after allotted time
         */
        setTimeout(attachExitIntent, settings.timer);

        /**
         *
         */
        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        }
    };

}(jQuery));