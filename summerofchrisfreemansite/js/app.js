$(document).ready(function() {

	$(".video").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 385,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'				: 'transparent',
			'allowfullscreen'	: 'true'
			}
		});

		return false;
	});

	 $(function () {
        var lineAdded = false;
        $(window).resize(function () {
            if (!lineAdded && $(window).width() < 660) {
                 lineAdded = true;
                 $(".xline2").append("<br> text text text");
            } else if (lineAdded && $(window).width() >= 660) {
                lineAdded = false;
                $(".xline2").remove();
            }
        });
    });

 });