const fetch = require('node-fetch')

module.exports = async function(req, res, next) {

	try {
		const response = await fetch(`https://api.spacexdata.com/v3/launches?flight_number=${req.params.id}`)
		if (!response.ok) throw new Error(response.statusCode)
		const launches = await response.json()

		const output = launches.map(
			({ flight_number, mission_name, launch_date_utc }) => ({
				flight_number,
				mission_name,
				launch_date: launch_date_utc
			})
		)
		res.json(output)
	} catch (e) {
		next(e)
	}
}