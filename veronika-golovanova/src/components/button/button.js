import './button.css'
import classnames from 'classnames'
import customPropTypes from '../../const/custom-prop-types'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const BASE_CLASS_NAME = 'sbks-button'

class Button extends Component {
	static propTypes = {
		isEnabled: PropTypes.bool,
		onAction: PropTypes.func,
		children: customPropTypes.Children,
	}

	static defaultProps = {
		isEnabled: true,
		onAction: () => {},
	}

	constructor(props) {
		super(props)
		this.onAction = this.onAction.bind(this)
	}

	onAction() {
		const { isEnabled, onAction } = this.props
		if (!isEnabled) return
		onAction()
	}

	render() {
		const { isEnabled, children } = this.props
		const cls = classnames(BASE_CLASS_NAME, { isEnabled })

		return (
			<div onClick={this.onAction} className={cls}>
				{children}
			</div>
		)
	}
}

export default Button
