import React, { Component } from 'react';
import { 
	Container,
	ListGroup,
	ListGroupItem,
	Button
}, from 'reactstrap';
import { 
	CSSTransition, TransitionGroup
}, from 'react-transition-group';
import uuid from 'uuid'; // DELETE ME

class ShoppingList extends Component {
	state = {
		items: [
			{ id: uuid(), name: 'Eggs' },
			{ id: uuid(), name: 'Milk' },
			{ id: uuid(), name: 'Steak' },
			{ id: uuid(), name: 'Water' },
		]
	}

	render() {
		const { items } = this.state; // "destructuring"
		return(
			<Container>
				<Button 
					color="dark" 
					style={{marginBottom: '2rem'}} 
					onClick={() => {
						const name = prompt('Enter Item Name');
						if(name) {
							this.setState(state => ({
								items: [...state.items, { id: uuid(), name }]
							}));
						}
				}}>Add Item</Button>
			</Container>
		);
	}
}

export default ShoppingList;