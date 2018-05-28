import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, Alert, TouchableOpacity, TouchableNativeFeedback, Platform, FlatList, SectionList} from 'react-native';
import styles, {version} from './styles/styles';
import dictionary from './strings/strings';
import Agradecimento from './components/Agradecimento.js'



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text:"",
    }
  }
  render() {
    return (
      <View style={styles.masterContainer}>
        <View style={{flex:5}}>
        <SectionList
          sections={[
            {
            title: 'D', 
            data: ['Devin']
            },
            {
            title: 'F',
            data: ['Fernando',
            'Fernanda',
            'Ferdinanado',
            'Ferodo',
            'Francisco']
            },
            {
            title: 'J', 
            data: ['Jackson', 
            'James', 
            'Jillian', 
            'Jimmy', 
            'Joel', 
            'John', 
            'Julie'
          ]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
        <View style={{flex:5}}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}> {item.key}</Text>}
            />
          </View>
      <View style={{flex:1}}>
        <TextInput style={{height:40}} placeholder="escreve aqui" onChangeText={(text)=> this.setState({text})}>
        </TextInput>
        <Text style={{padding:10, fontSize:42}}>{this.state.text.split(' ').map((word)=> word && '').join('')}
        </Text>
        <View style={{width:200}}>
          <Button onPress={() => {
            Alert.alert('cenas');
          }}
          title='Toca aqui, bitch' >
          </Button>
        </View>
        <TouchableOpacity onPres={() => {
          Alert.alert('cenas');
        }} >
          <Text> CENAS </Text>
        </TouchableOpacity>
      </View>

      <TouchableNativeFeedback onPress={() => {}} >
        <View style={styles.button}>
          <Text style={styles.buttonText}> {Platform.OS === 'android' ? 'é sim, cenoura' : 'nope'}
          </Text>
          <Text style={styles.buttonText}> {Platform.OS === 'ios' ? 'é sim, cenoura' : 'nope'}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <View style={{flex: 1, backgroundColor: '#eee'}}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textStyle}> {version} Open up App.js to start working on app!</Text>
            <Text style={[styles.TextRed, styles.textStyle]}>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Image source={{uri:'https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg'}}
                style={{width: 300, height:300}}/>
        <Agradecimento pessoa="Zé Manel"/>
        </View>
      </ScrollView>
      </View>
      </View>
    );
  }
}

