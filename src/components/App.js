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
		// console.log('this.trackInput:', this.trackInput.value);
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}

	render() {
		console.log('this.props.testStore', this.props.testStore);
		let testStore = _.get(this.props, 'testStore');
		return (
			<div>
				<Input type="text" ref={(input) => {
					this.trackInput = input
				}}/>
				<Button onClick={this.addTrack.bind(this)}>fwf</Button>
				{testStore &&
				<List>
					{testStore.map((track, i) =>
						<li key={i}>{track}</li>
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
		testStore: state
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			dispatch({type: 'ADD_TRACK', payload: trackName});
		}
	})
)(App);
