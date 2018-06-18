import React, { Component } from 'react';
import {} from 'react-native';
import TaskItem from './task'


class List extends Component{
    constructor(props){
        super(props)
        this.state={}
    }


    render(){
        return (
            <TaskItem/>
        )
    }

}

export default List;