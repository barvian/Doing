import React, { PureComponent } from 'react'
import Task from '../Task'
import styles from './styles'

export default class TaskList extends PureComponent {
  render() {
    const { tasks } = this.props

    return !tasks || tasks.length <= 0 ? null : tasks.map((task, i) => (
      <Task key={i}
        task={task}
        style={i > 0 && styles.adjacentItem}
      />
    ))
  }
}
