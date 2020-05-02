import React, { PureComponent } from 'react';

type Props = {
	fill: string,
	style: Object,
	stroke: string,
	width: string,
	className: string,
};

class ServiceBusiness extends PureComponent<Props> {
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
				height={width}
				viewBox='0 0 48 48'
				stroke={stroke}
				xmlns='http://www.w3.org/2000/svg'
				className={`svg-icon ${className || ''}`}
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g id='Expanded'>
					<g>
						<g>
							<path
								fill={fill}
								d='M44,48H4c-2.206,0-4-1.794-4-4V4c0-2.206,1.794-4,4-4h40c2.206,0,4,1.794,4,4v40C48,46.206,46.206,48,44,48z M4,2     C2.897,2,2,2.897,2,4v40c0,1.103,0.897,2,2,2h40c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H4z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M24,30c-0.552,0-1-0.447-1-1V15c0-0.553,0.448-1,1-1s1,0.447,1,1v14C25,29.553,24.552,30,24,30z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M34,30c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1s1,0.447,1,1v4C35,29.553,34.552,30,34,30z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M14,18c-0.552,0-1-0.447-1-1V7c0-0.553,0.448-1,1-1s1,0.447,1,1v10C15,17.553,14.552,18,14,18z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M14,30c-0.552,0-1-0.447-1-1v-8c0-0.553,0.448-1,1-1s1,0.447,1,1v8C15,29.553,14.552,30,14,30z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M34,22c-0.552,0-1-0.447-1-1V7c0-0.553,0.448-1,1-1s1,0.447,1,1v14C35,21.553,34.552,22,34,22z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M24,12c-0.552,0-1-0.447-1-1V7c0-0.553,0.448-1,1-1s1,0.447,1,1v4C25,11.553,24.552,12,24,12z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M37,26h-6c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h6c0.552,0,1,0.447,1,1v4C38,25.553,37.552,26,37,26z M32,24h4v-2     h-4V24z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M27,16h-6c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h6c0.552,0,1,0.447,1,1v4C28,15.553,27.552,16,27,16z M22,14h4v-2     h-4V14z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M17,22h-6c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h6c0.552,0,1,0.447,1,1v4C18,21.553,17.552,22,17,22z M12,20h4v-2     h-4V20z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M34,42c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S36.206,42,34,42z M34,36c-1.103,0-2,0.897-2,2s0.897,2,2,2     s2-0.897,2-2S35.103,36,34,36z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M24,42c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,42,24,42z M24,36c-1.103,0-2,0.897-2,2s0.897,2,2,2     s2-0.897,2-2S25.103,36,24,36z'
							/>
						</g>
						<g>
							<path
								fill={fill}
								d='M14,42c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S16.206,42,14,42z M14,36c-1.103,0-2,0.897-2,2s0.897,2,2,2     s2-0.897,2-2S15.103,36,14,36z'
							/>
						</g>
					</g>
				</g>
			</svg>
		);
	}
}

export default ServiceBusiness;
