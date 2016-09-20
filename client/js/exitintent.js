(function($) {

    $.fn.exitintent = function(options) {

        var settings = $.extend({
            timer       : 1000,
            delay       : 0,
            sensitivity : 20,
            disabled    : false,
            closeBtn    : true,
            animation   : 'bounceIn',
            callback    : function() {}
        }, options);

        var _html = document.documentElement,
            _delayTimer = null,
            _self = this;

        (function init() {
            if(settings.closeBtn) {
                _self.prepend('<span class="ei-close">&times;</span>')
            }

            if(settings.animation) {
                _self.addClass("animated " + settings.animation);
            }

            _self.addClass('ei-content')
                .wrap('<div class="ei-modal"></div>');

            _self = $(_self).closest('.ei-modal');

            attachClickEvents();

            setTimeout(attachEvents, settings.timer);
        })();

        /**
         * Attach click events to modal
         */
        function attachClickEvents() {
            //Hide modal when clicking outside modal
            _self.on('click', function() {
                _self.hide();
            }).children().click(function(e) {
                return false;
            });

            //Hide modal when close button is clicked
            _self.find('.ei-close').on('click', function() {
                _self.hide();
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

        function centerElement(el) {
            el.css({
                'position': 'absolute',
                'left': '50%',
                'top': '50%',
                'z-index': 10000
            });

            el.css({
                'margin-left': -el.outerWidth() / 2 + 'px',
                'margin-top': -el.outerHeight() / 2 + 'px'
            });
        }

        /**
         * Fires the exit intent modal
         */
        function fire() {
            if( isDisabled() ) { return; }

            _self.show();
            centerElement(_self.find('.ei-content'));

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