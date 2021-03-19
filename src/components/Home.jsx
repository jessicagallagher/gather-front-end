import React, { Component } from 'react'
import EventCard from './EventCard'

export default class Home extends Component {
	render() {
		return (

			<div className="for-backgrounds">
        <div className="container-fluid px-0 mb-5 for-backgrounds">
          <div className="hero">
            <p className="text-center hero-text mb-0 d-flex justify-content-center real">G a t h e r</p>
            <p className="text-center hero-text reflection d-flex justify-content-center">G a t h e r</p>
          </div>
        </div>
        <EventCard events={ this.props.events }/>
  			</div>
		)
	}
}