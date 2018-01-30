import {inject as injectFaqFooter} from './module/faq-footer';
import {inject as injectResend} from './module/resend-widget';

const injectables = [
	['.oi-faq__footer', injectFaqFooter],
	['.oi-resend-widget', injectResend]
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
