import React from 'react';
import {View, button, title} from 'react-native';
import styles, {version} from './styles/styles';
import dictionary from './strings/strings';
import MyTextArea from './componentsLiftState/MyTextArea'
import RandomizeButton from './componentsLiftState/RamdomizeButton';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text:"",
    }
    this.handleRandomization = this.handleRandomization.bind(this)
    this.handleButtonRandomClick = this.handleButtonRandomClick.bind(this)
  }

  handleRandomization(){
    console.log("handleRandomization")
  }

  handleButtonRandomClick(){
    console.log("handleButtonRandomClick")
  }

  render() {
    return (
      <View style={styles.masterContainer}>
        <MyTextArea text="cenas"/>
        <RandomizeButton onMyPress={this.handleRandomization}/>
        <RandomizeButton onMyPress={this.handleButtonRandomClick}/>
        <RandomizeButton/>
        <button
        onPress={() => {
          Alert.alert('cenas giras');
        }}
        title="mi toca para ver cenas giras"
        />
      </View>
    );
  }
}

