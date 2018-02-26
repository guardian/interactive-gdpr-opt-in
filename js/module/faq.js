const cleanupDetails = ($details) => {
	$details.style.maxHeight = null;
	$details.style.position = 'absolute';
	$details.style.visibility = 'hidden';
}

const cleanupAfterAnim = (ev) => {
	ev.target.style.maxHeight = null;
	ev.target.removeEventListener('transitionend',cleanupAfterAnim);
}

const getPadding = ($details) => {
	try {
		const computed = window.getComputedStyle($details);
		return parseInt(computed.getPropertyValue('padding-bottom'),10)
		+ parseInt(computed.getPropertyValue('padding-top'),10);
	} catch(err) {
		return 10;
	}
}

const setAria = ($element, $details, isOpen) => {
	$element.setAttribute('aria-expanded', isOpen);
	$details.setAttribute('aria-visible', isOpen);
}

const inject = ($element) => {

	const $details = $element.querySelector('.oi-faq__details');
	const $summary = $element.querySelector('summary');

	const padding = getPadding($details);

	const observer = new MutationObserver(mutations => {
		if(mutations.pop().attributeName === 'open') {

			setAria($element, $details, $element.getAttribute('open') !== null);

			if($element.getAttribute('open') !== null) {
				const targetHeight = $details.clientHeight * 1.1;
				$details.style.visibility = 'visible';
				$details.style.maxHeight = `${padding}px`;
				$details.style.position = 'relative';
				requestAnimationFrame(()=>{
					$details.style.maxHeight = `${targetHeight}px`;
				});
				$details.addEventListener('transitionend',cleanupAfterAnim)
			}
			else {
				$details.removeEventListener('transitionend',cleanupAfterAnim);
				cleanupDetails($details);
			}
		}
	});

	requestAnimationFrame(()=>{
		cleanupDetails($details);
		setAria($element, $details, $element.getAttribute('open') !== null);
		observer.observe($element, {attributes: true});
	});

}


export { inject }
