export default class Task {
  static schema = {
    name: 'Task',
    properties: {
      text: 'string',
      done: 'bool'
    }
  }
}