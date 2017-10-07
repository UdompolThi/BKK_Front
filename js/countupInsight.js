
$(window).scroll(startCounter);

function startCounter() {

    if ($(window).scrollTop() > 1900) {
        $(window).off("scroll", startCounter);
        $('#countYear').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }

    if ($(window).scrollTop() > 1900) {
        $(window).off("scroll", startCounter);
        $('#countDoctor').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }

    if ($(window).scrollTop() > 1900) {
        $(window).off("scroll", startCounter);
        $('#countCase').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1400,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }

}