import React, { Component } from 'react';
import {View, Text, Title, TextInput} from 'react-native';
import styles from './../styles/styles';

class UserName extends Component {
    constructor(props){
        super(props)
        this.state={
        name: "Your name",
        esse: "'s",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submitEsse = this.submitEsse.bind(this);
    }

    handleNameChange(valor){
        let name = valor
        this.setState({
        name: name
        })
      }
      submitEsse(){
        let nameFinal = this.state.name + this.state.esse;
        this.setState({
            nameFinal:nameFinal,
            estadonome: true,
        })
    }

    render(){
        return (
        <View>
            <View style={styles.UserName}>
                <TextInput placeholder="Your name"
                onChangeText={this.handleNameChange}
                onSubmitEditing={this.submitEsse} value={this.state.nameFinal}/>
            <Text>task list</Text>
            </View>
        <Text></Text>
      </View>
        )
    }
}

export default UserName;