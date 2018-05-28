import React from 'react'
import {Text, View} from 'react-native'
import dictionary from './../strings/strings';

const Agradecimento = ({pessoa}) => {
    return <View>
        <Text>{dictionary.en.ola} {pessoa}</Text>
        <Text></Text>
        </View>
}

export default Agradecimento