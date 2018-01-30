import {inject as injectFaqFooter} from './module/faq-footer';

const injectables = [
	['.oi-faq__footer',injectFaqFooter]
]

const onReady = () => {
	injectables.forEach(injectable =>
		[...document.querySelectorAll(injectable[0])].forEach($el => injectable[1]($el))
	)
}

const boot = (fn) => {
	if(document.readyState == ('interactive' || 'complete')) {
		fn();
	}
	else {
		document.addEventListener('readystatechange', ev => {
			if(document.readyState === 'interactive') fn();
		});
	}

}

boot(onReady);
