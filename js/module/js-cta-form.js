const inject = ($element) => {

	if(document.cookie.indexOf('GU_U=') > -1) {
		$element.querySelector('.js-cta-form__default').remove();
		$element.querySelector('.js-cta-form__alt').style.display = 'block';
	}

}


export { inject }
