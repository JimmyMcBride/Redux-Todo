import React, { Component } from 'react'

import { connect } from 'react-redux'
import { deleteCompleted, addTodo } from '../actions'

class TodoForm extends Component {
	state = {
		newTodo: '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewTodo = event => {
		event.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({
			newTodo: '',
		});
	};

	deleteCompleted = event => {
		event.preventDefault();
		this.props.deleteCompleted();
	};

	render() {
		return (
			<form className="todo-form" onSubmit={e => e.preventDefault()}>
				<input
					className="todo-input"
					type="text"
					name="newTodo"
					value={this.state.newTodo}
					onChange={this.handleInputChange}
					placeholder="Enter Task"
					required
				/>
				<div className="buttons">
					<div>
						<button className="add-btn" onClick={this.addNewTodo}>
							Add
						</button>
					</div>
					<div>
						<button className="clear-btn" onClick={this.deleteCompleted}>
							Clear
						</button>
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList,
	};
};

export default connect(
	mapStateToProps,
	{ addTodo, deleteCompleted },
)(TodoForm);