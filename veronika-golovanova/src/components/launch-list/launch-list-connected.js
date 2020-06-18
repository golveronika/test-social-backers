import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { containsSimilar } from '../../utils/string'
import { isoToLocale } from '../../utils/date'
import {
	loadLaunches,
	onFilterChange,
	switchDetails,
} from './launch-list-actions'
import LaunchList from './launch-list'

const filterLaunches = (filterValue, launch) =>
	containsSimilar(launch.mission_name, filterValue)

const mapLaunches = (openedDetails, launch) => ({
	...launch,
	launch_date: launch.launch_date
		? isoToLocale(launch.launch_date)
		: 'Date is not available',
	details: openedDetails === launch.flight_number,
})

const dispatchToProps = (dispatch) =>
	bindActionCreators({ loadLaunches, onFilterChange, switchDetails }, dispatch)

const mapStateToProps = (state) => {
	const {
		isLoading,
		launchesCollection,
		filterValue,
		openedDetails,
	} = state.launchList
	let launches = (launchesCollection || [])
		.map(mapLaunches.bind(null, openedDetails))
		.filter(filterLaunches.bind(this, filterValue))

	return {
		filterValue,
		isLoading,
		launches,
	}
}

export default connect(mapStateToProps, dispatchToProps)(LaunchList)
