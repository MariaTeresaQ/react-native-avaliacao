import React from 'react';
import {ScrollView, Text, Button} from 'react-native';
import styles from './styles/styles';
import UserNameForm from './Todo/UserName';
import TaskList from './Todo/List';
import TaskForm from './Todo/Form';
/*import TaskItem from './Todo/task';*/



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:[
        {
          key: "o",
          task: "cenas",
          date: []
        },
        {
          key: "oo",
          task: "ola", 
          date:[]
        },
        {
          key: "ooo",
          task: "olaaa", 
          date:[]
        }
      ],
      }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(data){
    /*console.log(data)*/
    let list = this.state.list.slice()
    list.push(data)
    this.setState({
      list
    })
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
        <TaskForm onSubmit={this.handleSubmit}/>
        <TaskList list={this.state.list} log={console.log(this.state.list)}/>
        <Button title="cenas" onPress={() => console.log(this.state.list)}></Button>
      </ScrollView>
    );
  }
}

