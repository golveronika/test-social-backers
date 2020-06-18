import './input.css'
import Button from '../button/button'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const BASE_CLASS_NAME = 'sbks-input'

class Input extends Component {
	static propTypes = {
		isEnabled: PropTypes.bool,
		onChange: PropTypes.func,
		value: PropTypes.string,
	}

	static defaultProps = {
		isEnabled: true,
		onChange: () => {},
		value: '',
	}

	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onClear = this.onClear.bind(this)
	}

	onChange(e) {
		const { isEnabled, onChange } = this.props
		if (!isEnabled) return
		onChange(e.target.value)
	}

	onClear() {
		const { onChange } = this.props
		onChange('')
	}

	render() {
		const { isEnabled, value } = this.props
		const cls = classnames(BASE_CLASS_NAME, { isEnabled })

		return (
			<div className={cls}>
				<input type='text' onChange={this.onChange} value={value} />
				<Button onAction={this.onClear} isEnabled={!!value}>
					<span role='img' aria-label='Cancel'>
						❌
					</span>
				</Button>
			</div>
		)
	}
}

export default Input
