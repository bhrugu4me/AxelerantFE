import React from 'react';

const SVG = (
	style = {},
	fill = '',
	stroke = '',
	width = '100%',
	className = '',
	viewBox = '0 0 297 297'
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
			d='M269.415,105.583h-31.808V54.592c0-17.378-14.137-31.516-31.514-31.516H31.511C14.136,23.076,0,37.214,0,54.592v95.409
	c0,17.377,14.136,31.515,31.511,31.515h22.933v32.989c0,4.011,2.415,7.626,6.121,9.16c1.227,0.508,2.515,0.755,3.792,0.755
	c2.58,0,5.117-1.008,7.013-2.905l27.619-27.625v17.343c0,15.213,12.375,27.59,27.587,27.59h76.762l32.191,32.196
	c1.896,1.898,4.433,2.905,7.014,2.905c1.277,0,2.564-0.247,3.791-0.755c3.706-1.534,6.121-5.149,6.121-9.16v-25.186h16.961
	c15.211,0,27.585-12.377,27.585-27.59v-78.061C297,117.959,284.626,105.583,269.415,105.583z M64.357,161.686H31.511
	c-6.44,0-11.681-5.242-11.681-11.684V54.592c0-6.443,5.24-11.686,11.681-11.686h174.583c6.442,0,11.684,5.242,11.684,11.686v95.409
	c0,6.442-5.241,11.684-11.684,11.684h-98.841c-2.629,0-5.151,1.045-7.012,2.905l-25.969,25.974v-18.964
	C74.272,166.125,69.833,161.686,64.357,161.686z M277.17,211.232c0,4.278-3.478,7.761-7.755,7.761H242.54
	c-5.475,0-9.915,4.438-9.915,9.914v11.162l-18.17-18.172c-1.858-1.86-4.381-2.904-7.011-2.904h-80.869
	c-4.277,0-7.757-3.482-7.757-7.761v-29.717h87.275c17.377,0,31.514-14.138,31.514-31.515v-24.588h31.808
	c4.276,0,7.755,3.48,7.755,7.759V211.232z'
		/>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
		<g></g>
	</svg>
);

export default SVG;