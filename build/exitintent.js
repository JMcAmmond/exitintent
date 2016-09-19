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
         * Attaches events to the window and close modal events
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
         * Handles mouse leave events
         * @param event
         */
        function handleMouseleave(event) {
            if (event.clientY > settings.sensitivity) { return; }

            _delayTimer = setTimeout(fire, settings.delay);
        }

        /**
         * Handles mouse enter events
         */
        function handleMouseenter() {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null;
            }
        }

        /**
         * Fires the exit intent modal
         */
        function fire() {
            if( isDisabled() ) { return; }

            settings.callback();
            disable();
        }

        /**
         * Disables exit intent and removes event listeners
         */
        function disable() {
            settings.disabled = true;

            _html.removeEventListener('mouseleave', handleMouseleave);
            _html.removeEventListener('mouseenter', handleMouseenter);
        }

        /**
         * Checks if exit intent is disabled
         * @returns {boolean}
         */
        function isDisabled() {
            return settings.disabled;
        }

        /**
         * Wraps content and in '.ei-modal' div and prepend close button
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
         * Returned functions
         */
        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        }
    };

}(jQuery));