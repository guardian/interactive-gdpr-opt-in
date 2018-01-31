const VOTE_YAY = 'helpful';
const VOTE_NAY = 'useless';

const TEXT_YAY = 'That was helpful';
const TEXT_NAY = 'That was useless';
const TEXT_TKS = 'Thank you for the feedback!';

const makeVoteButton = (type, title) => {
	const $button = document.createElement('button');
	$button.className = 'oi-cta oi-cta--secondary--purple';
	$button.dataset.linkName = `optin : ${type} : ${title}`
	$button.innerHTML = type === VOTE_YAY
		? TEXT_YAY
		: TEXT_NAY

	return $button;
}

const makeThanks = () => {
	const $button = document.createElement('p');
	$button.className = 'oi-cta oi-cta--paragraph';
	$button.innerHTML = TEXT_TKS
	return $button;
}

const inject = ($element) => {

	const $title = $element.dataset.name;

	[VOTE_YAY, VOTE_NAY].forEach(vote => {
		const $button = makeVoteButton(vote, $title);
		$button.addEventListener('click', () => {
			$element.innerHTML = ''
			$element.appendChild(makeThanks());
		})
		$element.appendChild(
			$button
		)
	})
}


export { inject }
