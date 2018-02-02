const inject = ($element) => {

	const $buttonWrapper = $element.querySelector('.oi-faq-more__button');
	const $button = $buttonWrapper.querySelector('button');
	const $content = $element.querySelector('.oi-faq-more__content');

	const contentClientHeight = $content.clientHeight;
	const wrapperClientHeight = $buttonWrapper.clientHeight;

	$button.addEventListener('click', ev => {

		$buttonWrapper.remove();

		requestAnimationFrame(()=>{
			$content.style.height = wrapperClientHeight;
			$content.classList.add('oi-faq-more__content--reveal');
			requestAnimationFrame(()=>{
				$content.style.height = contentClientHeight;
				setTimeout(()=>{
					requestAnimationFrame(()=>{
						$content.style.height = null;
						$content.setAttribute('aria-hidden',false);
						$content.classList.remove('oi-faq-more__content--reveal');
					});
				},500)
			})
		});
	})

}


export { inject }
