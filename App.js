import React from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles/styles';
import UserNameForm from './Todo/UserName';
import taskList from './Todo/List';
import TaskForm from './Todo/Form';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:[{
        task: "cenas",
        date: new Date(),
      }],
      }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(valor){
    let name = valor
    this.setState({
      name
    })
  }
  
  render() {
    return (
      <ScrollView>
        <UserNameForm/>
        <TaskForm/>
        <taskList/>
      </ScrollView>
    );
  }
}

