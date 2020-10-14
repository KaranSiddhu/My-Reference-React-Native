import React, {useReducer} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const render = (state, action) => {
    switch(action.changeCountType){
        case 'increase':
            return {...state, count: state.count + action.amount};

        case 'decrease':
            return {...state, count: state.count - action.amount};
        
        default:
            return state;
    }
}

const CounterScreen = () => {
   const [state, runMyRender] = useReducer(render, {count: 0})
    return(
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.opacityStyle} 
                onPress={() => runMyRender({changeCountType: 'increase', amount: 1})}
            >
                
                <Text>Increase</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style= {styles.opacityStyle}
                onPress= {() => runMyRender({changeCountType: 'decrease', amount: 1})}
            >

                <Text>Decrease</Text>

            </TouchableOpacity>

        <Text>Current Count: {state.count}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex: 1,
        alignItems: 'center'
    },
    
    opacityStyle:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        margin: 10,
        backgroundColor: '#add8e6',
        borderRadius: 10,
        alignItems: 'center',
        width: '50%'
    }
});


export default CounterScreen;
