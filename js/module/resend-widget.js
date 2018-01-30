import{RESEND_URL} from '../conf.js';

const STR_WAIT = 'Sending…';
const STR_TKS = 'All set! Please check your inbox';

const STR_ERR = 'Sorry! Something went wrong, try again in a while';

const send = (formdata) =>

	new Promise((yay, nay) => {
	var xhr = new XMLHttpRequest();

	xhr.open("POST", RESEND_URL, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = () => {
		if(xhr.readyState == XMLHttpRequest.DONE) {
			if(xhr.status == 200) {
				yay();
			}
			else {
				nay(xhr.status)
			}
		}
	}
	xhr.send(formdata);
	setTimeout(()=>{
		xhr.abort();
	},500);
});

const $error = (()=>{
	const $rt = document.createElement('div');
	$rt.className = 'oi-resend-widget__error';
	$rt.hide = () => $rt.style.display = 'none';
	$rt.show = (text) => {
		$rt.style.display = 'block'; $rt.innerText = text;
	}
	return $rt;
})();

const makeParagraphButton = (text) => {
	const $button = document.createElement('p');
	$button.className = 'oi-cta oi-cta--paragraph';
	$button.innerText = text
	return $button;
}

const inject = $element => {

	$element.append($error);

	const $block = $element.querySelector('.oi-resend-widget__hotdog');
	const $cta = $block.querySelector('button');

	$element.addEventListener('submit', ev => {

		ev.preventDefault();

		$error.hide();

		const $spinner = makeParagraphButton(STR_WAIT);
		const formdata = new FormData(ev.target);

		$cta.classList.add('u-h');
		$block.appendChild($spinner);

		send(formdata).then(()=>{
			$block.innerHTML = '';
			$block.appendChild(
				makeParagraphButton(STR_TKS)
			);
		}).catch(err => {
			$cta.classList.remove('u-h');
			$spinner.remove();
			if(typeof err === 'string') {
				$error.show(err);
			}
			else {
				console.error(err);
				$error.show(STR_ERR);
			}
		})
	})

}

export { inject }
