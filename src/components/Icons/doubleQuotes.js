import React from 'react';

const SVG = (
	style = {},
	fill = '',
	stroke = '',
	width = '100%',
	className = '',
	viewBox = '0 0 8 8'
) => (
	<svg
		width={width}
		style={style}
		height={width}
		viewBox={viewBox}
		stroke={stroke}
		xmlns='http://www.w3.org/2000/svg'
		className={`svg-icon ${className || ''}`}
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<path
			fill={fill}
			d='M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z'
			transform='translate(0 1)'
		/>
	</svg>
);

export default SVG;
