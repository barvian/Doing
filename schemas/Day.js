export default class Day {
  static schema = {
    name: 'Day',
    properties: {
      date: { type: 'date', indexed: true },
      theme: 'string',
      intention: 'string',
      tasks: { type: 'list', objectType: 'Task' }
    }
  }
}
