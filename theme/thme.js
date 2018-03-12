import {StyleSheet} from "react-native";

const Color = {
  textColor: '#fff',
  defaultColor: '#333',
  primaryColor: '#286090',
  successColor: '#5cb85c',
  waringColor: '#eea236',
  dangerColor: '#d9534f',
  borderColor: '#ccc',
}

const Theme = StyleSheet.create({
  btnDefault:{
    color: Color.defaultColor,
    backgroundColor: Color.defaultColor,
    borderColor: Color.borderColor
  },
  btnPrimary:{
    color: Color.textColor,
    backgroundColor: Color.primaryColor,
    borderColor: Color.primaryColor
  },
  btnSuccess:{
    color: Color.textColor,
    backgroundColor: Color.successColor,
    borderColor: Color.successColor
  },
  btnWaring:{
    color: Color.textColor,
    backgroundColor: Color.waringColor,
    borderColor: Color.waringColor
  },
  btnDanger:{
    color: Color.textColor,
    backgroundColor: Color.dangerColor,
    borderColor: Color.dangerColor
  },
  btnDefaultText: {
    fontSize: 18,
    color: Color.defaultColor
  },
  btnText: {
    fontSize: 18,
    color: Color.textColor
  }
})

module.exports = {
  Theme,
  Color
}