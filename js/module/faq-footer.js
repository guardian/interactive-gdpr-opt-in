const VOTE_YAY = 'helpful';
const VOTE_NAY = 'useless';

const TEXT_YAY  = `That was useful`;
const TEXT_NAY  = `I don't understand`;
const TEXT_TKS  = `Thank you for the feedback!`;
const TEXT_HELP = `If you’d like to know more, please contact us at <a class="oi-a" href="mailto:stay.with.us@theguardian.com" data-link-name="gdpr-oi-campaign : landing : faq : email : $1">stay.with.us@theguardian.com</a>`;

const makeVoteButton = (type, title) => {
	const $button = document.createElement('button');
	$button.className = 'oi-cta oi-cta--secondary--faq';
	$button.dataset.linkName = `gdpr-oi-campaign : landing : faq : ${type} : ${title}`
	$button.innerHTML = type === VOTE_YAY
		? TEXT_YAY
		: TEXT_NAY

	return $button;
}

const makeThanks = (type, title) => {
	const $button = document.createElement('p');
	$button.className = 'oi-faq__paragraph';
	$button.innerHTML = type === VOTE_YAY ? TEXT_TKS : TEXT_HELP.replace('$1',title)
	return $button;
}

const inject = ($element) => {

	const title = $element.dataset.name;

	[VOTE_YAY, VOTE_NAY].forEach(vote => {
		const $button = makeVoteButton(vote, title);
		$button.addEventListener('click', () => {
			$element.innerHTML = ''
			$element.appendChild(makeThanks(vote, title));
		})
		$element.appendChild(
			$button
		)
	})
}


export { inject }
