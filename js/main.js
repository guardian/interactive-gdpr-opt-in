import {inject as injectFaq} from './module/faq';
//import {inject as injectFaqFooter} from './module/faq-footer';
import {inject as injectHero} from './module/hero';
//import {inject as injectFaqMore} from './module/faq-more';
//import {inject as injectResend} from './module/resend-widget';

const injectables = [
	['.oi-hero', injectHero],
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
