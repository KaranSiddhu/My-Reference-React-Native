import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const HungryCatScreen = () => {
    const [isHungry, setIsHungry] = useState(true);
    
    return (
        <View style= {styles.container}>

            <Text   
                style= {styles.textStyle}
            > 
                I am cat and, I am {isHungry ? 'hungry Meow' : 'not so hungry now meow' }

            </Text>

            <TouchableOpacity
                style= {styles.opacity}
                onPress= {() => {
                        if(isHungry === true)    
                            return setIsHungry(false);

                        return setIsHungry(true);
                    }}                
            >
                
                <Text>{isHungry ? 'Pour me some milk, please!' : 'Thank You!'}</Text>

            </TouchableOpacity>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },

    textStyle: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    },

    opacity:{
        borderColor: 'red',
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#add8e6',
        padding:7
    }

});
export default HungryCatScreen;