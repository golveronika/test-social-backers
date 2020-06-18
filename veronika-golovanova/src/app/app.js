import './app.css'
import LaunchList from '../components/launch-list/launch-list-connected'
import React, { Component } from 'react'

const BASE_CLASS_NAME = 'sbks-app'

class App extends Component {
	render() {
		return (
			<div className={BASE_CLASS_NAME}>
				<header className={`${BASE_CLASS_NAME}-header`}>
					<div className={`${BASE_CLASS_NAME}-logo`}>
						<span role='img' aria-label='Rocket'>
							🚀
						</span>
					</div>
					<h1 className={`${BASE_CLASS_NAME}-title`}>DemoApp</h1>
				</header>
				<div className={`${BASE_CLASS_NAME}-content`}>
					<LaunchList />
				</div>
			</div>
		)
	}
}

export default App
