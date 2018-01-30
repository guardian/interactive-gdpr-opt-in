const template =
`
	<a class="oi-cta oi-cta--secondary--purple">
		That was helpful
	</a>
	<a class="oi-cta oi-cta--secondary--purple">
		I hate everything that stands for
	</a>
`

const inject = ($element) => {
	$element.innerHTML = template;
}


export { inject }
