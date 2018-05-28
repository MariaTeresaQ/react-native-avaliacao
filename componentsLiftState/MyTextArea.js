import React from 'react'
import {Text} from 'react-native'

class MyTextArea extends React.Component {
    render () {
        return (
        <Text>{this.props.text}</Text>
        ) // no return se o que quiseres retornar for escrito na mesma linha que "render" nao tens de abrir (), se mudares e linha, tens!
    }
}

export default MyTextArea