import {select} from 'd3-selection';
import {range} from 'd3-array';
import {forceSimulation, forceCollide, forceRadial, forceCenter, forceManyBody} from 'd3-force'

const radius = 23;
const startRadius = 1000;
const endRadius = 180;

const colours = [
	'#FF4E36',
	'#008E89',
	'#005689',
	'#57BBD4',
];

const inject = ($element) => {

	const nodes = [
		...range(120).map(function(f) { return {
			radius: radius,
			colour: f%colours.length
		}; }),
		{
			radius: endRadius,
			colour: 0,
			fx: 0,
			fy: 0
		}
	]

	const node = select($element.querySelector('.oi-hero__bg'))
		.append("div")
		.selectAll("circle")
		.data(nodes)
		.enter()
			.append("figure")
			.attr("data-colour", (f)=>f.colour)

	const simulation = forceSimulation([...nodes]);
		simulation
			.force("r", forceRadial(startRadius));

		range(30).map(simulation.tick);
		simulation
			.force('charge', forceManyBody().strength(1))
			.force('collision', forceCollide().radius(d => d.radius+1))
			.force('center', forceCenter())
			.force("r", forceRadial(endRadius))
			.on("tick", ticked);

	function ticked() {
		node.attr(
			'style',
			(d) => `transform: translateY(${d.y-(radius)}px) translateX(${d.x-(radius)}px)`
		)
	}

}


export { inject }
