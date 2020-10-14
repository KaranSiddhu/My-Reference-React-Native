import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const ColorCounter = (props) => {
    return (
        <View>
            <Text>{props.color}</Text>

            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {props.onIncrease}
            >

                <Text>More {props.color}</Text>

            </TouchableOpacity>
        
            <TouchableOpacity
                style= {styles.opacityStyle} 
                onPress= {props.onDecrease}
            >
                
                <Text>Less {props.color}</Text>

            </TouchableOpacity>

        </View>
    );    
}   

const styles = StyleSheet.create({
    
    opacityStyle:{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        margin: 10,
        padding: 7,
        backgroundColor: '#add8e6'
    }

});


export default ColorCounter;