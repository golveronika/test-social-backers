const fetch = require('node-fetch')

module.exports = async function(req, res, next) {
	try {
		const response = await fetch('https://api.spacexdata.com/v3/launches')
		if (!response.ok) throw new Error(response.statusCode)
		const launches = await response.json()

		const output = launches.map(
			({ flight_number, mission_name, launch_date_utc, details }) => ({
				flight_number,
				mission_name,
				launch_date: launch_date_utc,
				fly_details: details
			})
		)

		console.log("output", output);

		res.json(output)
	} catch (e) {
		next(e)
	}
}
