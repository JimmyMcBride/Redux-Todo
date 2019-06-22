import React from 'react'
import Todo from './Todo'
import { toggleCompleted } from '../actions'
import { connect } from 'react-redux'

const TodoList = props => {
	return (
		<div className="todo-list">
			{props.todoList.map(todo => {
				return (
					<div key={todo.id}>
						<Todo
							toggleCompleted={() => props.toggleCompleted(todo.id)}
							todo={todo}
						/>
					</div>
				)
			})}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList,
	}
}

export default connect(
	mapStateToProps,
	{ toggleCompleted },
)(TodoList)