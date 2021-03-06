import React, { PureComponent } from 'react';

type Props = {
	fill: string,
	style: Object,
	stroke: string,
	width: string,
	className: string,
};

class Mail extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			fill = '#333',
			style = {},
			stroke = '',
			width = '32',
			className = '',
		} = this.props;
		return (
			<svg
				width={width}
				style={style}
				height={width}
				viewBox='0 0 16 16'
				stroke={stroke}
				xmlns='http://www.w3.org/2000/svg'
				className={`svg-icon ${className || ''}`}
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<title />
				<defs />
				<g
					fill='none'
					fillRule='evenodd'
					id='Icons with numbers'
					stroke='none'
					strokeWidth='1'
				>
					<g
						fill={fill}
						id='Group'
						transform='translate(-336.000000, 0.000000)'
					>
						<path
							d='M345.731959,8.48453617 L350.681755,12.7272182 C350.501681,12.8954635 350.259495,13 349.993155,13 L338.006845,13 C337.739189,13 337.496237,12.8970552 337.316068,12.7290845 L342.268041,8.48453617 L344,10.0000001 Z M344,9 L337.318245,3.27278178 C337.498319,3.10453648 337.740505,3 338.006845,3 L349.993155,3 C350.260811,3 350.503763,3.10294483 350.683932,3.27091553 Z M351,12.1856084 L346.167358,8.07885766 L351,3.875422 L351,12.1856084 L351,12.1856084 Z M337,12.1856079 L337,3.87815189 L341.832642,8.07885742 L337,12.1856079 L337,12.1856079 Z M337,12.1856079'
							id='Shape'
							fill={fill}
						/>
					</g>
				</g>
			</svg>
		);
	}
}

export default Mail;
