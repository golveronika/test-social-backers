const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

const wrapper = (fn) => {
	return async function(req, res, next) {
		// Task B2: Implement here and then use it below
		// Example usage:
		// app.get('/launches/all', wrapper(async function(req, res) {
		//   const response = ...
		//   return await response.json()
		// }))
	}
}

app.get('/launches/all', async function(req, res, next) {
	try {
		const response = await fetch('http://localhost:5000/api/0/launches/all')
		if (!response.ok) throw new Error(response.statusCode)
		res.json(await response.json())
	} catch (e) {
		next(e)
	}
})

app.get('/launches/:id', async function(req, res, next) {
	try {
		const mock = require('./launches-mock')
		mock.flight_number = req.params.id
		return res.json(mock)
	} catch (e) {
		next(e)
	}
})

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(4000)
