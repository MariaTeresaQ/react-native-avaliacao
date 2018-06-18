import React, { Component } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker'



class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[{
                task: "",
                date: "",
          }],
            /*add: "false"*/
        }
        this.handleTaskChange = this.handleTaskChange.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    handleTaskChange(valor){
        /*let task = Object.assign({}, this.state.task)*/
        task = valor;
        this.setState({task})
    }

    submitTask(){
        let data = Object.assign({}, this.state.data)
        this.setState({
            data: {
                task: "",
                date: ""
            },
            /*add: false*/
        })
        !this.props.onSubmit || this.props.onSubmit(data)
    }

    render(){
        return (
            <View>
                <View>
                    <Text>Task</Text>
                    <TextInput placeholder="What do you have to do?"
                    value={this.state.data.task}
                    onChangeText={this.handleTaskChange}/>
                </View>
                <View>
                    <Text>Date</Text>
                    <DatePicker
                    style={{width: 200}}
                    date={this.state.data.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1900-05-01"
                    maxDate="3000-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>
                <View>
                    <Button
                    title="Add Task"
                    onPress={this.submitTask}/>

                </View>
            </View>
        )
    }
}

export default Form;