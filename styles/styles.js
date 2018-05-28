import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    textStyle:{
        margin:10,
        fontSize:16,
        textAlign:'center',
    },
    textRed:{
        color: 'red',
    },
    image:{
        borderRadius:50,
    },
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    masterContainer:{
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 30,
    },
});

export default styles
export const version=1