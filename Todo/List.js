import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import TaskItem from './task';


class List extends Component{
    constructor(props){
        super(props)
    }

    renderItem(item, index){
        return <TaskItem
        key={"item" + index}
        data={item}
        />
    }

    render(){
        return <View>
                <FlatList
                    data={this.props.list}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item, index}) => this.renderItem(item, index) }
                    >
                </FlatList>
            </View>
    }

    }

export default List;