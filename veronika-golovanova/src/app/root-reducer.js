import { combineReducers } from 'redux'
import launchListReducer from '../components/launch-list/launch-list-reducer'

export default combineReducers({
	launchList: launchListReducer,
})
