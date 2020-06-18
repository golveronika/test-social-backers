# Demo App

## Installation
```
npm install
```

## Usage
Run all services in development mode.

```
npm run dev
```

App is running: https://prnt.sc/p95jly

## Default ports configuration
- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- API: http://localhost:5000

# Tasks
Choose as many tasks as you like from the list below.
Create commit for each finished task and push it back to the `master`.
Tasks are sorted by difficulty from easiest to hardest in each section (Frontend, Backend).

## Frontend tasks

### F1) Sort launches
Sort listed launches alphabetically by flight name.

Result: https://prnt.sc/p94mec

### F2) Fix filter bug
There is a text input above the launches list. This input is used to filter launches by name but currently is not working. Fix it.

Result: https://prnt.sc/p94mke

### F3) Show flight detail
When click on 'Show details' button, load launch details and show it instead of TODO text.

Launch details should be loaded from `http://localhost:4000/launches/[flight number]`. This endpoint will return mock data until task **B3** is finished.

Display details text, mission patch image, launch site name and rocket name/type. Do not worry about CSS formatting.

Result: https://prnt.sc/r4v7ud

## Backend tasks

### B1) Fix bug in /launches/all
The launch date displays "Date is not available".

It's because field `launch_date` is missing in response from `http://localhost:4000/launches/all`.
Fix it by providing launch date in UTC from SpaceX API.

Result: https://prnt.sc/p95fw0

### B2) Callbackify promise middleware
Implement wrapper function that converts promise middleware to callback middleware.

Extract `res.json()` calls and error handling to the wrapper in `server/index.js`.
Use the wrapper on every route in `server/index.js`.

### B3) Implement new endpoints and replace mock in /launches/[flight number]
Expected call structure:
- `http://localhost:4000/launches/[flight number]`
	- calls `http://localhost:5000/api/0/launches/[flight number]`
		- calls `https://api.spacexdata.com/v3/launches?flight_number=[flight number]`
	- calls `http://localhost:5000/api/0/ship-stats/[ship id],[ship id],...`
		- calls `https://api.spacexdata.com/v3/ships?ship_id=[ship id]`

Implement endpoint `http://localhost:5000/api/0/launches/[flight number]`
- It loads launch detail by flight number from `https://api.spacexdata.com/v3/launches?flight_number=[flight number]` and returns it as is.
- Example output can be found in the `server/launches-mock.js`, all but field `ship_stats`.

Implement endpoint `http://localhost:5000/api/0/ship-stats/[ship id],[ship id],...`
- It loads ship detail for each ship ID from `https://api.spacexdata.com/v3/ships?ship_id=[ship id]` and returns only `{total_weight: number, oldest_ship: string}`.
	- `total_weight`: sum of ships' weights in `weight_kg`,
	- `oldest_ship`: name of oldest ship by `year_built`.
- Example output can be found in the `server/launches-mock.js`, inside field `ship_stats`.
- Ship IDs are available in `ships` field in response of previously implemented endpoint `http://localhost:5000/api/0/launches/[flight number]` for instance `ELSBETH3`.

Replace mocked endpoint `http://localhost:4000/launches/[flight number]` by flight data loaded from `http://localhost:5000/api/0/launches/[flight number]` merged with ship stats `http://localhost:5000/api/0/ship-stats/[ship id],[ship id],...` to its `ship_stats` field to have the response with the same structure as in `server/launches-mock.js`.
