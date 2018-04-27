import {inject as injectFaq} from './module/faq';
import {inject as injectForm} from './module/js-cta-form';

const injectables = [
	['.js-cta-form', injectForm],
	['.oi-faq', injectFaq],
]

const onReady = () => {
	injectables.forEach(injectable =>
		[...document.querySelectorAll(injectable[0])].forEach($el => {
			try {
				injectable[1]($el)
			} catch(err) {
				console.error(err);
			}
		})
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
