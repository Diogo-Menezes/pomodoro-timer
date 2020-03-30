import React from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import vibrate from './utils/vibrate';
import TextTime from './components/TextTime';
import PomodoroScreen from './src/screens/';
import timeConvert from './src/utils/convertTime';

const DEFAULT_WORK_TIME = 25;
const DEFAULT_BREAK_TIME = 5;

const strings = {
  workTime: 'Work Time',
  breakTime: 'Break time',
  start: 'Start',
  pause: 'Pause'
};

const minToSec = mins => mins * 60;

export default class App extends React.Component {
  render() {
    return <PomodoroScreen />;
  }
}
