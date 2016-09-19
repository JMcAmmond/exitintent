(function($) {

    $.fn.exitintent = function(options) {

        var settings = $.extend({
            timer       : 1000,
            delay       : 0,
            sensitivity : 20,
            disabled    : false,
            closeBtn    : true,
            callback    : function() {}
        }, options);

        var _html = document.documentElement,
            _delayTimer = null,
            _self = this;

        /**
         *
         */
        function attachEvents() {
            if ( isDisabled() ) { return; }

            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);

            _self.find('.ei-close').on('click', function() {
                _self.hide();
            });
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
         *
         */
        (function wrapContent() {
            _self.addClass('ei-content')
                .wrap('<div class="ei-modal"></div>');

            if(settings.closeBtn) {
                _self.prepend('<span class="ei-close">&times;</span>')
            }

            _self = $(_self).closest('.ei-modal');
        })();

        /**
         * Attach Exit Intent after allotted time
         */
        setTimeout(attachEvents, settings.timer);

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