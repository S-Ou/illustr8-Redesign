function imgload(folder) {
	var x = 1
	//$.ajax({
		//url: "../img/" + folder,
		//success: function(data){
			//$(data).find("a:contains(.jpg)").each(function(){
				// will loop through 
				// var images = $(this).attr("href");

			var imagenamelist = {'advertising': ['81Hongi.jpg', '8Bike.jpg', '8Car.jpg', '8Handbag.jpg', '8Moneybag.jpg', '8OpenSign.jpg', '8PrintPorn.jpg', '8ZombieAndy.jpg', '9Fish7GillShark.jpg', '9FishFullPoster.jpg', '9FishGreynurse.jpg', '9FishGreynurse2.jpg', '9FishGroper.jpg', '9FishMorayEel.jpg', '9FishOctopus.jpg', '9FishStingray.jpg', '9FishTigershark.jpg', '9FishTurtle.jpg', '9Rock page.jpg', '9Rock soft.jpg', '9Rocknrolltrain2.jpg', '9Santa.jpg', 'ASBcardoor1.jpg', 'ASBcardoor2.jpg', 'Rabogirl.jpg', 'Rock-hard.jpg', 'Rocknrolltrain1.jpg', 'skytowersanta.jpg', 'westfield.eden.jpg', 'westfield.glass.jpg', 'westfield.street.jpg', 'Westfieldsnowman.jpg'], 'books': ['7NZBusRWC.jpg', '7Snail-Derek.jpg', '8Caravan.jpg', '8NZBus.aug2011.jpg', '8NZBusBalmcover.jpg', '8NZBusgunslinger.jpg', '9bumblebee.jpg', '9egg.jpg', '9iceblock.jpg', '9kiwi.package.jpg', '9nzbusjul2010.jpg', '9nzbusmar2010.jpg', '9nzbusnov2010.jpg', '9vegemite.jpg', '9wrongside1.jpg', '9wrongside2.jpg', '9wrongside3.jpg', '9wrongside4.jpg', '9wrongside5.jpg', '9wrongside6.jpg', 'Home.jpg', 'NZBus-dec.jan.jpg', 'NZBus-march.jpg', 'NZBus-may.jpg', 'NZBus-october.jpg', 'Pearson-crow.jpg', 'Pearson-Eelgod.jpg', 'Pearson-Freya.jpg', 'Pearson-Pangu.jpg', 'Pearson.jpg', 'ProDesign.jpg'], 'clients': ['Adrenalin-Publishing.jpg', 'AGM-Publishing.jpg', 'Colenso.jpg', 'DBreweries.jpg', 'Designworks.jpg', 'Herald-on-Sunday.jpg', 'Lion.jpg', 'M&CSaatchi.jpg', 'NZ-Listener.jpg', 'Ogilvy.jpg', 'Pearson-Education.jpg', 'TBWAWhybin2.jpg', 'The-NZ-Herald.jpg', 'YandR.jpg'], 'editorial': ['alan-bollard.jpg', 'beauty-myth.jpg', 'cake.jpg', 'Celebrities.jpg', 'conscience.jpg', 'dancin.jpg', 'drink.jpg', 'group-portrait.jpg', 'house-worries.jpg', 'immigration.jpg', 'john-fellet.jpg', 'runaway.jpg', 'saintly-mother.jpg', 'whittle.jpg', 'womens-guilt.jpg'], 'linework': ['8JasolPod.jpg', '8JasolPod2.jpg', '8sandl.boyladderleft.jpg', '8sandl.boyladderright.jpg', '8sandl.snake1.jpg', '8sandl.snake2.jpg', '9Goodchute.jpg', '9Parachutefail.jpg', '9scrumBW.jpg', '9scrummachine.jpg', 'anatomy-back.jpg', 'anatomy-biceps.jpg', 'anatomy-legs.jpg', 'cardiovascular.system.jpg', 'cow-bondage.jpg', 'error-message.jpg', 'flying-carotid.jpg', 'line-house.jpg', 'Pearson-dinghy.jpg', 'Pearson-fullpage.jpg', 'Pearson-parachute.jpg', 'pregnant.jpg', 'respiratory.system.jpg', 'sax.jpg', 'splat.jpg', 'yee-haa.jpg'], 'other': ['9Chihuahua.jpg', '9E2maxcarricature.jpg', '9Fern.jpg', '9Pukeko.jpg', '9SantaCards2.jpg', 'austins.jpg', 'Bear.jpg', 'Bearflash.jpg', 'bugatti.jpg', 'capsicums.jpg', 'Dogs.jpg', 'hibiscus.jpg', 'Holly.jpg', 'littlemonkeyslogo.jpg', 'MR-shoe-1.jpg', 'MR-shoe-2.jpg', 'MR-shoe-3.jpg', 'MR-shoe-4.jpg', 'MR-shoe-5.jpg', 'MR-shoe-6.jpg', 'MR-shoe-7.jpg', 'painter.jpg', 'pearshaped.jpg', 'pukeko.jpg', 'smug-pc.jpg', 'snapper-classic-logo.jpg'], 'portraits': ['9Annetteandmother.jpg', '9Arron.jpg', '9CuttsPortrait.jpg', '9DameEdna.jpg', '9Nan.jpg', '9OliveRose.jpg', '9PaulHolmes.jpg', 'ali.jpg', 'allysonbro.jpg', 'annette.jpg', 'chris-m.jpg', 'DennyKrane.jpg', 'flatley.jpg', 'geoff-f-rough.jpg', 'geoff-f.jpg', 'graham.jpg', 'jean-luc.jpg', 'kirsty.jpg', 'Kris.jpg', 'Max.jpg', 'ornithologist-rough.jpg', 'ornithologist.jpg', 'remi.jpg', 'Self.jpg', 'Stefan.jpg', 'theolds.jpg', 'Titanias.jpg', 'warwick.jpg', 'zara.jpg'], 'storyboards': ['9fishing-fr1.jpg', '9fishing-fr2.jpg', '9fishing-fr4.jpg', '9gamefr1.jpg', '9gamefr2.jpg', '9gamefr3.5.jpg', '9gamefr3.jpg', '9gamefr4.jpg', '9NWfr1.1.jpg', '9NWfr1.5b.jpg', '9NWfr3.1.jpg', '9NWfr4.jpg', '9NWfr8.1.jpg', '9ProCare1.jpg', '9ProCare2.jpg', '9ProCare3.jpg', 'AAframe11.jpg', 'AAframe13.jpg', 'AAframe9.jpg', 'Adidas1.jpg', 'Adidas2.jpg', 'Adidas3.jpg', 'Adidas4.jpg', 'adshell-day.jpg', 'adshell-night.jpg', 'AIGframe1.jpg', 'AIGframe2.jpg', 'AIGframe3.jpg', 'AIGframe4.jpg', 'AIGframe5.jpg', 'AIGframe6.jpg', 'Bar3.jpg', 'BMW.jpg', 'Butterchicken.jpg', 'BWframe11.jpg', 'BWframe2.jpg', 'BWframe3.jpg', 'BWframe7.jpg', 'BWframe8.jpg', 'BWphone.jpg', 'Carinterior.jpg', 'Cerebos.jpg', 'crate-stage1.jpg', 'landcruiser.jpg', 'LesMills-vis1.jpg', 'LesMills-vis2.jpg', 'LesMills-vis3.jpg', 'Megabloks.jpg', 'pizza-guy.jpg', 'pizzabox.jpg', 'promo-girl.jpg', 'scooter.jpg', 'skycityframe1.jpg', 'skycityframe3.jpg', 'skycityframe5.jpg', 'skycityframe6.jpg', 'skycityframe7.jpg', 'Tyretrack.jpg', 'vendingmachine.jpg', 'vouchers.jpg']};
			names = imagenamelist[folder];
	
			var arrayLength = names.length;
			for (var i = 0; i < arrayLength; i++) {
				images = names[i];
		
			
				var imgcode = '<img src="' + "../img/" + folder + "/" + images + '" alt="' + images + '">';
				var code = '<li><a href="#slide' + x + '">' + imgcode + '</a></li>'

				console.log(code);

				$('#slippry-gallery').append(code);

				x = x + 1
			}
			//});
			const scriptTag = document.createElement("script");
			scriptTag.src = "../slippry/slp-gallery.js";
			document.body.appendChild(scriptTag);
		//}
	//});
};