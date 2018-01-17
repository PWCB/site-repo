$(document).ready(function() {
	var total_images = $("body img").length;
	var images_loaded = 0;
	$("body table").hide();
	$("body span").show();
	$("body").find('img').each(function() {
		var fakeSrc = $(this).attr('src');
		$("<img/>").attr("src", fakeSrc).css('display', 'none').load(function() {
			images_loaded++;
			if (images_loaded >= total_images) {
				// now all images are loaded.
				//alert("all images are loaded. Click OK to view.")
				$("body table").show();
				$("body span").hide();
			}
		});

	});

});
