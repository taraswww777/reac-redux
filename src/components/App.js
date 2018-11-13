import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
// import logo from '../logo.svg';
import styled from 'styled-components';

const Input = styled.input`
	color: red;
`;
const Button = styled.button`
	color: red;
`;
const List = styled.ul`
	color: red;
`;

class App extends Component {

	addTrack() {
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}


	findTrack() {
		this.props.onFindTrack(this.searchInput.value);
	}

	render() {
		console.log('this.props', this.props);
		let tracks = _.get(this.props, 'tracks');

		return (
			<div>
				<p>
					<Input type="text" ref={(input) => {
						this.trackInput = input
					}}/>

					<Button onClick={this.addTrack.bind(this)}>fwf</Button>
				</p>
				<p>
					<Input type="text" ref={(input) => {
						this.searchInput = input
					}}/>
					<Button onClick={this.findTrack.bind(this)}>search</Button>

				</p>

				{tracks &&
				<List>
					{tracks.map((track) =>
						<li key={track.id}>{track.name}</li>
					)}
				</List>
				}
				{/*<img src={logo} alt="logo"/>*/}
			</div>
		);
	}
}

export default connect(
	state => ({//
		state: state,
		tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			const payload = {
				id: Date.now().toString(),
				name: trackName
			};
			dispatch({type: 'ADD_TRACK', payload: payload});
		},
		onFindTrack: (name) => {
			dispatch({type: 'FIND_TRACK', payload: name});
		}
	})
)(App);
