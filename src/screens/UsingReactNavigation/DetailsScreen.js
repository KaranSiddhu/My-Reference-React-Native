import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    //Getting the parameter from previous Screen
    const text = navigation.getParam('text');   
    return (
        <View style={styles.container}>
 
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.push('DetailsScreen')}
            >
                
                <Text>Go To Details Screen Again!!!!</Text>

            </TouchableOpacity>

            <Text>{text}</Text>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    opacityStyle:{
        height:42,
        borderWidth: 1,
        width:'70%',
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#add8e6',
    }
});

export default DetailsScreen;