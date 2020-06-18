import { combineReducers } from 'redux'
import {
	createLoadingActions,
	createLoadingReducer,
} from '../../utils/loading-reducer-factory'
import {
	createFilterActions,
	createFilterReducer,
} from '../../utils/filter-reducer-factory'

const REDUCER_ID = 'launch-list'

export const actions = {
	SET_LAUNCHES: `${REDUCER_ID}/setLaunches`,
	FILTER: `${REDUCER_ID}/filter`,
	OPEN_DETAILS: `${REDUCER_ID}/openDetail`,
	CLOSE_DETAILS: `${REDUCER_ID}/closeDetail`,
	...createLoadingActions(REDUCER_ID),
	...createFilterActions(REDUCER_ID),
}

const openedDetails = (state = null, action) => {
	switch (action.type) {
		case actions.OPEN_DETAILS:
			return action.flightNumber
		case actions.CLOSE_DETAILS:
			return null
		default:
			return state
	}
}

const launchesCollection = (state = null, action) => {
	switch (action.type) {
		case actions.SET_LAUNCHES:
			return action.data
		default:
			return state
	}
}

export default combineReducers({
	isLoading: createLoadingReducer(actions),
	filterValue: createFilterReducer(actions),
	openedDetails,
	launchesCollection,
})
