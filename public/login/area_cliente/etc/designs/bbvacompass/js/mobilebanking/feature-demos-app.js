/***** This file has a dependency on: content.js ******/
_log = function(obj){if (typeof(console) != 'undefined'){console.log(obj);}}
var features = {
	
	defaultLang : 'eng',
	lang  : null,
	featureTempl : '<div class="swiper-slide">'+ 
		        	'<img src="${imgURL}" alt="${imgAlt}"  >'+
		        	'<div class="txt-swiper">'+
			        	'<p class="tit-slide">${title}</p>'+
			        	'<p class="txt-slide">${text}</p>'+
			        '</div>'+
			        '<div class="clear"></div>'+
		           '</div>',
	
	loadFeatures : function(lang){
		var _features = content[lang];
		_features = (null == _features) ? content[this.defaultLang] : _features;
		var featuresWrapper = $('.swiper-wrapper');
		for(var i=0,ii=_features.length;i<ii; i++){
			var feature = _features[i];
			var title = feature.title;
			var imgAlt = feature.image.alt;
			var imgURL = feature.image.url;
			var text = feature.text;
			var html = this.featureTempl.replace('${imgURL}',imgURL).replace('${title}',title).replace('${imgAlt}',imgAlt).replace('${text}',text);
			featuresWrapper.append(html);
		}
	}
	
}

