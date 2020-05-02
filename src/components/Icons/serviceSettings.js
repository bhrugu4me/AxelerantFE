import React, { PureComponent } from 'react';

type Props = {
	fill: string,
	style: Object,
	stroke: string,
	width: string,
	className: string,
};

class ServiceSettings extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			fill = '',
			style = {},
			stroke = '',
			width = '32',
			className = '',
		} = this.props;
		return (
			<svg
				width={width}
				style={style}
				viewBox='0 0 32 32'
				stroke={stroke}
				xmlns='http://www.w3.org/2000/svg'
				className={`svg-icon ${className || ''}`}
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g id='folder_x5F_settings'>
					<path
						fill={fill}
						d='M31.999,22.988L32,8h-2V6H10V4H0v28h31.999v-8.988C31.999,23.008,32,23.004,32,23S31.999,22.992,31.999,22.988z M2,29.999   V6h6v4h21.999v7.348C28.35,15.307,25.829,14,23,14c-4.973,0-9,4.027-9,9c0,2.829,1.307,5.35,3.348,6.999H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.885-6.883c0.009-3.801,3.084-6.876,6.885-6.885c3.799,0.009,6.874,3.084,6.883,6.885   C29.874,26.799,26.799,29.874,23,29.883z M29.999,29.999H28.65c0.496-0.4,0.948-0.853,1.349-1.349V29.999z'
					/>
					<path
						fill={fill}
						d='M28,24v-2.001h-1.663c-0.063-0.212-0.145-0.413-0.245-0.606l1.187-1.187l-1.416-1.415l-1.165,1.166   c-0.22-0.123-0.452-0.221-0.697-0.294V18h-2v1.662c-0.229,0.068-0.446,0.158-0.652,0.27l-1.141-1.14l-1.415,1.415l1.14,1.14   c-0.112,0.207-0.202,0.424-0.271,0.653H18v2h1.662c0.073,0.246,0.172,0.479,0.295,0.698l-1.165,1.163l1.413,1.416l1.188-1.187   c0.192,0.101,0.394,0.182,0.605,0.245V28H24v-1.665c0.229-0.068,0.445-0.158,0.651-0.27l1.212,1.212l1.414-1.416l-1.212-1.21   c0.111-0.206,0.201-0.423,0.27-0.651H28z M22.999,24.499c-0.829-0.002-1.498-0.671-1.501-1.5c0.003-0.829,0.672-1.498,1.501-1.501   c0.829,0.003,1.498,0.672,1.5,1.501C24.497,23.828,23.828,24.497,22.999,24.499z'
					/>
				</g>
			</svg>
		);
	}
}

export default ServiceSettings;
