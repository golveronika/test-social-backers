import './launch-list.css'
import Button from '../button/button'
import classnames from 'classnames'
import customPropTypes from '../../const/custom-prop-types'
import Input from '../input/input'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const BASE_CLASS_NAME = 'sbks-launchList'

class LaunchList extends Component {
	static propTypes = {
		filterValue: PropTypes.string,
		isLoading: PropTypes.bool,
		launches: PropTypes.arrayOf(customPropTypes.Launch),
		loadLaunches: PropTypes.func.isRequired,
		onFilterChange: PropTypes.func.isRequired,
		switchDetails: PropTypes.func.isRequired,
	}

	static defaultProps = {
		filterValue: '',
		isLoading: false,
		launches: [],
	}

	componentDidMount() {
		this.props.loadLaunches()
	}

	renderLaunch(launch) {
		const { mission_name, launch_date, flight_number, details } = launch
		const { switchDetails } = this.props

		return (
			<div
				className={`${BASE_CLASS_NAME}-launch`}
				key={`${flight_number}_${mission_name}`}
			>
				<div className={`${BASE_CLASS_NAME}-row`}>
					<div className={`${BASE_CLASS_NAME}-name`}>{mission_name}</div>
					<div className={`${BASE_CLASS_NAME}-date`}>{launch_date}</div>
					<div className={`${BASE_CLASS_NAME}-button`}>
						<Button onAction={switchDetails.bind(this, flight_number)}>
							{details ? 'Hide' : 'Show'} details
						</Button>
					</div>
				</div>
				{details && (
					<div className={`${BASE_CLASS_NAME}-detail`}>
						TODO: Show launch details here.
					</div>
				)}
			</div>
		)
	}

	render() {
		const { isLoading, launches, filterValue, onFilterChange } = this.props
		const cls = classnames(BASE_CLASS_NAME, { isLoading })

		return (
			<div className={cls}>
				{isLoading ? (
					<div className='sbks-loader'>Loading...</div>
				) : (
					<div className={`${BASE_CLASS_NAME}-list`}>
						<Input value={filterValue} onChange={onFilterChange} />
						{launches.length ? (
							launches.map(this.renderLaunch, this)
						) : (
							<span>List is empty</span>
						)}
					</div>
				)}
			</div>
		)
	}
}

export default LaunchList
