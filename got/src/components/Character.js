import React from 'react'

class Character extends React.Component {
	render() {
		return(
			<>
				<img src={this.props.image} />
				<h2>{this.props.fullName}</h2>
				<h3>{this.props.title}</h3>
			</>
			)
	}
}

export default Character