import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Input from './Input';

const timerType = {
  minutesType: 'minutesType',
  secondsType: 'secondsType',
};


const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 22
  },
  inputLabel: {
    alignSelf: 'center'
  },
  title: { fontSize: 50 },
  timer: { fontSize: 40 },
  input: {
    margin: 4,
    padding: 4,
    width: 40,
    height: 25,
    borderColor: 'grey',
    borderWidth: 1
  },
  timerDetails: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const minToSec = mins => mins * 60;

export default class TextTime extends React.Component {
  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    time: minToSec(this.props.minutes) + this.props.seconds,
    field: this.props.text
  };

  handleMinChange = minString => {
    // console.log(minString);
    const minutes = minToSec(minString);
    const time = this.state.time + minutes;
    this.setState({ time: time, minutes: minutes });
  };

  handleSecChange = secString => {
    // console.log(secString);
    const seconds = +secString;
    const time = this.state.minutes + seconds;
    this.setState({ time: time, seconds: seconds });
  };

  onTimeSetHandler(type, val) {
    // console.log(val + ' ' + type);
    if (type === timerType.minutesType) {
      this.handleMinChange(val);
    } else {
      this.handleSecChange(val);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.time !== this.state.time) {
      this.props.onReceiveTime(this.state.time);
    }
  }

  render() {
    return (
      <View style={styles.timerDetails}>
        <Text>{this.props.text}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.inputLabel}>Mins: </Text>
          <Input
            value={this.props.minutes.toString()}
            keyboardType='numeric'
            style={styles.input}
            type={timerType.minutesType}
            onTimeSet={(type, value) => {
              this.onTimeSetHandler(type, value);
            }}
          />
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.inputLabel}>Secs: </Text>
          <Input
            value={this.props.seconds.toString()}
            keyboardType='numeric'
            style={styles.input}
            type={timerType.secondsType}
            onTimeSet={(type, value) => {
              this.onTimeSetHandler(type, value);
            }}
          />
        </View>
      </View>
    );
  }
}
