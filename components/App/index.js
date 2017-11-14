import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, StatusBar, ScrollView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Intention from '../Intention'
import LinearGradient from 'react-native-linear-gradient'
import TaskList from '../TaskList'
import FAB from '../FAB'
import Realm from 'realm'
import DaySchema from '../../schemas/Day'
import TaskSchema from '../../schemas/Task'
import * as themes from '../../themes'
import styles from './styles'

const mock = [{ text: 'do it' }, { text: 'do it.' }, { text: 'do it.' }]

export default class App extends PureComponent {
  state = {
    realm: null,
    intentionValue: '',
    themeName: Object.keys(themes)[1],
    tasks: []
  }

  componentWillMount() {
    Realm.open({ schema: [DaySchema, TaskSchema] })
      .then(this.handleRealmOpen)
  }

  handleRealmOpen = (realm) => {
    this.realm = realm

    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    yesterday.setUTCHours(0, 0, 0, 0)

    this.todays = this.realm.objects('Day')
      .filtered('$0 <= date && date <= $1', yesterday, today)
    if (this.todays.length <= 0) {
      this.realm.write(() => {
        this.realm.create('Day', {
          theme: this.state.themeName,
          date: today,
          intention: this.state.intentionValue
        })
      })
    } else {
      this.setState({
        intentionValue: this.todays[0].intention,
        themeName: this.todays[0].theme
      })
    }
  }

  handleIntentionBlur = () => {
    this.realm.write(() => {
      this.todays[0].intention = this.state.intentionValue
    })
  }

  handleIntentionChangeText = (text) => {
    this.setState({ intentionValue: text })
  }

  render() {
    const { intentionValue, themeName, tasks } = this.state
    const theme = themes[themeName]

    return (
      <ThemeProvider theme={theme}>
        <LinearGradient
          style={styles.background}
          start={{ x: 0.25, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={theme.gradient}
        >
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
              <Intention
                style={styles.intention}
                placeholder="What are you trying to accomplish today?"
                onChangeText={this.handleIntentionChangeText}
                onBlur={this.handleIntentionBlur}
                value={intentionValue}
              />
              <TaskList tasks={mock} />
            </ScrollView>
            <FAB style={styles.addButton} />
          </KeyboardAvoidingView>
        </LinearGradient>
      </ThemeProvider>
    )
  }
}
