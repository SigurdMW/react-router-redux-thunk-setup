import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
	render(){
		return (
			<div>Home
				<Link to="/about">About</Link>
			</div>
		)
	}
}

export default Home