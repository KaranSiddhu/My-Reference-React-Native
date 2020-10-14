import React, {useReducer} from 'react';
import {Text, View, Alert, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ColorCounter from '../../ReuseableComponents/ColorCounter'

const COLOR_CHANGE = 5;

const reducer = (state, action) => {
    // state => {red: 0, green: 0, blue: 0}
    // action will increment or decrement this state objects value.
/* 
action === { colorToChange: 'red' || 'green' || 'blue' , amount
 +5 || -5 }     
*/
    switch(action.colorToChange){
        case 'red':
            if(state.red + action.amount > 255 || state.red + action.amount < 0)
                return state;
            return { ...state, red: state.red + action.amount }; // Overwritting red
        
        case 'green':
            if(state.green + action.amount > 255 || state.green + action.amount < 0)
                return state;
            return { ...state, green: state.green + action.amount }; // OverWritting green
        
        case 'blue':
            if(state.blue + action.amount > 255 || state.blue + action.amount < 0)
                return state;
            return { ...state, blue: state.blue + action.amount }; //Overwritting blue 
        
        case 'check':
            return {...state, red: action.amount, green: action.amount, blue: action.amount};
            
        default:
            return;
    }
}

const SquareScreen = () => {
const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0});
console.log(state); //{ red: 0, green: 0, blue: 0 }
    
    return (
        <ScrollView>

            <ColorCounter 
                color='Red' 
                onIncrease= {() => runMyReducer({
                        colorToChange: 'red', 
                        amount: COLOR_CHANGE
                    })}
                onDecrease= {() => runMyReducer({
                        colorToChange: 'red', 
                        amount: -1 * COLOR_CHANGE
                    })}
            />

            <ColorCounter
                color= 'Green'
                onIncrease= {() => runMyReducer({
                        colorToChange: 'green',
                        amount: COLOR_CHANGE
                    })}
                onDecrease= {() => runMyReducer({
                        colorToChange: 'green',
                        amount: -1 * COLOR_CHANGE
                    })}
            />

            <ColorCounter
                color= 'Blue'
                onIncrease= {() => runMyReducer({
                        colorToChange: 'blue',
                        amount: COLOR_CHANGE
                    })}
                onDecrease= {() => runMyReducer({
                        colorToChange: 'blue',
                        amount: -1 * COLOR_CHANGE
                    })}  
            />

            <View style={{width: 100, height: 100, marginLeft:125, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}
            />

            <Text style= {{marginLeft: 70}}>Current RGB value is { `rgb(${state.red},${state.green},${state.blue})`}</Text>
        
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => {               
                        runMyReducer({colorToChange: 'check', amount: 0})
                }}
            >

                <Text>Reset the value of RGB</Text>

            </TouchableOpacity>    

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    opacityStyle: {
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#add8e6'
    }

});

export default SquareScreen;