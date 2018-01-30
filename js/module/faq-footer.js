"use strict";

const VOTE_YAY = 'helpful';
const VOTE_NAY = 'useless';

const TEXT_YAY = 'That was helpful'
const TEXT_NAY = 'That was useless'
const TEXT_TKS = 'Thank you for the feedback!'

const makeVoteButton = (type, title) => {
	const $button = document.createElement('button');
	$button.className = 'oi-cta oi-cta--secondary--purple';
	$button.dataset.linkName = `optin : ${type} : ${title}`
	$button.innerText = type === VOTE_YAY
		? TEXT_YAY
		: TEXT_NAY

	return $button;
}

const $thanks = (()=>{
	const $button = document.createElement('button');
	$button.className = 'oi-cta oi-cta--paragraph';
	$button.innerText = TEXT_TKS
	return $button;
})()

const inject = ($element) => {

	const $title = $element.closest('.oi-faq').querySelector('.oi-faq__header').innerText;
	[VOTE_YAY, VOTE_NAY].forEach(vote => {
		const $button = makeVoteButton(vote, $title);
		$button.addEventListener('click', () => {
			$element.innerHTML = ''
			$element.appendChild($thanks);
		})
		$element.appendChild(
			$button
		)
	})
}


export { inject }
