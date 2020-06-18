const fetch = require('node-fetch')

module.exports = async function(req, res, next) {

	try {
		const response = await fetch(`https://api.spacexdata.com/v3/ships?ship_id=${req.params.ids}`)
		if (!response.ok) throw new Error(response.statusCode)
		const launches = await response.json()

		const output = launches.map(
			({ weight_kg, ship_name }) => ({
				total_weight: weight_kg,
				oldest_ship: ship_name,
			})
		)
		res.json(output)
	} catch (e) {
		next(e)
	}
}