import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const Agradecimento = ({pessoa}) => {
  return <View>
    <Text>{pessoa}</Text>
    </View>
}


export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={{uri:'https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg'}}
                style={{width: 500, height:500}}/>
        <Agradecimento pessoa="Zé Manel"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    textStyle:{
      fontSize:16,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

