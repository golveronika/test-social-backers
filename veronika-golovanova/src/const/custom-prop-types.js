import PropTypes from 'prop-types'

export default {
	Children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	Launch: PropTypes.shape({
		flight_number: PropTypes.number.isRequired,
		launch_date: PropTypes.string,
		mission_name: PropTypes.string.isRequired,
	}),
}
