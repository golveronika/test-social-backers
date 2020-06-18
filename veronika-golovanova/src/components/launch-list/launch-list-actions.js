import { actions } from './launch-list-reducer'
import endpoints from '../../const/endpoints'

const logError = (err) => {
	console.error('Error loading data: ', err)
}

export const loadLaunches = () => async (dispatch, getState) => {
	dispatch({ type: actions.LOAD_START })
	try {
		const response = await fetch(endpoints.LAUNCHES_ALL)
		if (response.ok) {
			const data = await response.json()
			dispatch({ type: actions.SET_LAUNCHES, data })
		} else {
			logError(response.statusText)
		}
	} catch (error) {
		logError(error)
	}
	dispatch({ type: actions.LOAD_FINISH })
}

export const onFilterChange = (value) => ({ type: actions.FILTER, value })

export const switchDetails = (flightNumber) => (dispatch, getState) => {
	const currentDetails = getState().launchList.openedDetails
	if (currentDetails === flightNumber) {
		dispatch({ type: actions.CLOSE_DETAILS })
	} else {
		dispatch({ type: actions.OPEN_DETAILS, flightNumber })
	}
}
