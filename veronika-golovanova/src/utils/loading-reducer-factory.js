const DEFAULT_STATE = false

const createLoadingReducer = (loadingActions) => (
	state = DEFAULT_STATE,
	action
) => {
	switch (action.type) {
		case loadingActions.LOAD_START:
			return true
		case loadingActions.LOAD_FINISH:
			return false
		default:
			return state
	}
}

const createLoadingActions = (reducerId) => ({
	LOAD_START: `${reducerId}/loadStart`,
	LOAD_FINISH: `${reducerId}/loadFinish`,
})

export { createLoadingReducer, createLoadingActions }
