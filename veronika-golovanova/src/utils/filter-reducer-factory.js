const DEFAULT_STATE = ''

export const createFilterReducer = (filterActions) => (
	state = DEFAULT_STATE,
	action
) => {
	switch (action.type) {
		case filterActions.SET_FILTER:
			return action.value
		case filterActions.CLEAR_FILTER:
			return DEFAULT_STATE
		default:
			return state
	}
}

export const createFilterActions = (reducerId) => ({
	SET_FILTER: `${reducerId}/setFilter`,
	CLEAR_FILTER: `${reducerId}/clearFilter`,
})
