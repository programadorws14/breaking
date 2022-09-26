import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    containerLoading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxPersonal:{
        flex: 1,
        borderRadius: 8,
        width: width - 40,
        maxHeight: height - 40,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
    },

    boxDescription: {
        backgroundColor:'rgba(0, 0, 0, 0.5 )',
        width: '100%',
        padding:20,
        borderRadius:5,
    },

    personalTitle: {
        textAlign: 'left',
        width: '100%',
        fontSize:30,
        color:'#FFF',
        fontWeight:'bold',
    },

    descriptionPersonal:{
        textAlign: 'left',
        width: '100%',
        fontSize:13,
        color:'#FFF',
        fontWeight:'normal',
        marginBottom: 5,
    }
});

export default styles ;