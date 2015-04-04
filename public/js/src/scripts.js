var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
        // this.$document.trigger('mousemove');
        // this.$window.trigger('resize');
    },

    setVars: function() {
        this.$window = $(window);
        this.$document = $(document);
        this.$body = $('body');
        this.$htmlBody = $('html, body');
        this.$cursor = $('.eggplant-cursor');
        // this.$scrollClick = $('.scroll-click');
    },

    bindEvents: function() {
        this.$document.on('mousemove', this.placeCursor.bind(this));
        this.$scrollClick.on('click', this.scrollToSection.bind(this));
    },

    placeCursor: function(e) {
        console.log('moved');
        var offsetLeft = 40;
        var offsetTop = 100;
        var x = e.pageX - offsetLeft;
        var y = e.pageY - offsetTop;
        this.$cursor.css({'left': x, 'top': y});
        // this.$cursor.removeClass('hide');
        //this.$body.append('')
    },

    scrollToSection: function(e) {
        e.preventDefault();
        console.log('scrolling');
        var $el = $(e.currentTarget);
        var anchor = $el.attr('href');
        var offset = $(anchor).offset().top;
        this.$htmlBody.animate({scrollTop: offset}, 300);
        setTimeout(function() {
            window.location.hash = anchor.slice(0);
        }, 300);
    },

    scrollToTop: function(e) {
        e.preventDefault();
        this.$htmlBody.animate({scrollTop: 0}, 300);
        setTimeout(function() {
            window.location.hash = '';
        }, 300);
    }
};

SITE.init();
