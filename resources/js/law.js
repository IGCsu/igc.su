const CLASS_EDITABLE = '.law-article-text-editable';
const CLASS_PARAGRAPH = '.law-article-text-paragraph';
const CLASS_PARAGRAPH_TEXT = CLASS_PARAGRAPH + ' > span';
const CLASS_PARAGRAPH_NUM = CLASS_PARAGRAPH + ' > small';
const CLASS_TEXTAREA = '.law-article-text-textarea';

const saveLaw = $elem => {

};

$(document).on('click', CLASS_PARAGRAPH_NUM, function(e){

	if(!e.ctrlKey) return;

	const $elem = $(this).closest(CLASS_PARAGRAPH);
	const $text = $elem.find(CLASS_PARAGRAPH_TEXT);

	if($elem.hasClass(CLASS_EDITABLE)){
		saveLaw($elem);
	}else{
		$elem.append('<textarea class="' + CLASS_TEXTAREA + '">' + $text.html() + '</textarea>');
		$elem.addClass(CLASS_EDITABLE);
	}

});

$(document).on('input', CLASS_TEXTAREA, function(e){
	const $text = $(this).closest(CLASS_PARAGRAPH).find(CLASS_PARAGRAPH_TEXT);
	$text.html(this.value);
})
