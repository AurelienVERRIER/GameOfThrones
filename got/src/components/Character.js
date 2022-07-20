import React from 'react'

class Character extends React.Component {
	render() {
		return(
			<>
				<h2>{this.props.fullName}</h2>
				<h3>{this.props.title}</h3>
				<img src={this.props.image} />
			</>
			)
	}
}

export default Character