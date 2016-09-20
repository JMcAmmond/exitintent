(function($) {

    $.fn.exitintent = function(options) {

        var settings = $.extend({
            timer       : 1000,
            delay       : 0,
            sensitivity : 20,
            disabled    : false,
            closeBtn    : true,
            customClose : null,
            animation   : 'bounceIn',
            callback    : function() {}
        }, options);

        var _html = document.documentElement,
            _delayTimer = null,
            _el = this;

        /**
         *
         */
        (function init() {
            if(settings.closeBtn) {
                _el.prepend('<span class="ei-close">&times;</span>')
            }

            if(settings.animation) {
                _el.addClass('animated ' + settings.animation);
            }

            _el.addClass('ei-content')
                .wrap('<div class="ei-modal"></div>');

            _el = $(_el).closest('.ei-modal');

            attachClickEvents();

            setTimeout(attachEvents, settings.timer);
        })();

        /**
         * Attach click events to modal
         */
        function attachClickEvents() {
            if( settings.customClose ) {
                _el.find(settings.customClose).on('click', function() {
                    _el.hide();
                })
            }

            _el.on('click', function() {
                _el.hide();
            }).children().click(function(e) {
                return false;
            });

            _el.find('.ei-close').on('click', function() {
                _el.hide();
            });
        }

        /**
         * Attaches events to the window and close modal events
         */
        function attachEvents() {
            if ( isDisabled() ) { return; }

            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
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

            _el.show();

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
         * Returned functions
         */
        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        }
    };

}(jQuery));