import React, { Component } from 'react'
import { Input, Button } from 'reactstrap'

import { connect } from 'react-redux'
import { deleteCompleted, addTodo } from '../actions'

class TodoForm extends Component {
	state = {
		newTodo: '',
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	addNewTodo = e => {
		e.preventDefault()
		this.props.addTodo(this.state.newTodo)
		this.setState({
			newTodo: '',
		})
	}

	submitNewTodo = e => {
		if (e.keyCode === 13) {
			e.preventDefault()
			this.props.addTodo(this.state.newTodo)
			this.setState({
				newTodo: '',
			})
		}
	}

	deleteCompleted = e => {
		e.preventDefault()
		this.props.deleteCompleted()
	}

	render() {
		return (
			<form className="todo-form" onSubmit={e => e.preventDefault()}>
                <div className='input-btn'>
                    <Input
                        className="todo-input"
                        type="text"
                        name="newTodo"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        onKeyDown={this.submitNewTodo}
                        placeholder="Enter Task"
                        required
                    />
                    <Button className="add-btn" onClick={this.addNewTodo}>
                        Add
                    </Button>
                </div>
                <div>
                    <Button className="clear-btn" onClick={this.deleteCompleted}>
                        Clear
                    </Button>
                </div>

			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList,
	}
}

export default connect(
	mapStateToProps,
	{ addTodo, deleteCompleted },
)(TodoForm)