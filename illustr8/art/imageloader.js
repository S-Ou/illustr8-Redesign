function imgload(folder) {
	var x = 1
	$.ajax({
		url: "../img/" + folder,
		success: function(data){
			$(data).find("a:contains(.jpg)").each(function(){
				// will loop through 
				var images = $(this).attr("href");

				var imgcode = '<img src="' + "../img/" + folder + "/" + images + '" alt="' + images + '">';
				var code = '<li><a href="#slide' + x + '">' + imgcode + '</a></li>'

				 console.log(code);

				$('#slippry-gallery').append(code);

				x = x + 1
			});
			const scriptTag = document.createElement("script");
			scriptTag.src = "../slippry/slp-gallery.js";
			document.body.appendChild(scriptTag);
		}
	});
};