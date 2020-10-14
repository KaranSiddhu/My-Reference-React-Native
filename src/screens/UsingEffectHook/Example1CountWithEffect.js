import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Example1CountWithEffect = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('I will change when count is 4');    
    useEffect(() => {
        if(count === 4)
            setData('I know that count is 4');
    })

    return (
        <View style= {styles.container}>

            <Text>{count}</Text>
            
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => setCount(count + 1)}
            >                

                <Text>Increase</Text>

            </TouchableOpacity>

            <Text>{data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityStyle:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#add8e6',
        marginVertical: 10
    }
});

export default Example1CountWithEffect;