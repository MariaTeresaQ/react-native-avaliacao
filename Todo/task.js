import React, { Component } from 'react';
import {View, Text} from 'react-native'

class Task extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.data,
            editing: false,
        }
        this.handleTaskChange = this.handleTaskChange.bind(this)
    }

    componentWillReceiveProps(newProps){
        this.setState({data: newProps.data})
    }

    handleTaskChange(dat, valor){
        let data = Object.assign({}, this.state.data)
        data[dat] = valor
        this.setState({data})
    }

    submitTask(){
        let data = Object.assign({}, this.state.data)
        data.date = new Date (data.date)
        this.setState({
            data: {
                task: "",
                date: ""
            }
        })
        !this.props.onSubmit || this.props.onSubmit(data)
    }

    render(){
        return (
            <View>
                <View>
                    <Text key={this.state.data.task.index}>{this.state.data.task} </Text>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

export default Task;