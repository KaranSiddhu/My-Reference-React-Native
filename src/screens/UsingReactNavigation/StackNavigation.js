import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ReactNavigation = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.textStyle}>NOTE: We are Already using stack navigation. This is just for reference</Text>
            
            {/* Going to naxt screen with a parameter */}
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.navigate('DetailsScreen', {
                    text: 'This Text is from Previous Screen.'
                })}
            >
                
                <Text>Go To Details Screen</Text>

            </TouchableOpacity>

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
    },
    textStyle: {
        fontWeight:'bold',
        textAlign:'center',
        color:'red',
        margin: 10
    }
});

export default ReactNavigation;