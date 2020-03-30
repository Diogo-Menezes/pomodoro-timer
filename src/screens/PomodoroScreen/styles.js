import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
