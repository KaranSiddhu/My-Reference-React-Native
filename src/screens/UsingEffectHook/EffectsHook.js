import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const EffectsHook = ({ navigation }) => {
    return (
        <View style= {styles.container}>
            
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => navigation.navigate('Ex1Screen')}
            >

                <Text>Example 1: Count with Effect</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => navigation.navigate('Ex2Screen')}
            >

                <Text>Example 2:</Text>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    opacityStyle:{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        padding: 10,
        width:'70%',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: '#add8e6',
    }
});

export default EffectsHook;