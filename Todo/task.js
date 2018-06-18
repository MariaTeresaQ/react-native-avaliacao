import React, { Component } from 'react';
import {View, Text} from 'react-native'

class Task extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.data
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({data: newProps.data})
    }

    render(){
        return (
            <View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

export default Task;