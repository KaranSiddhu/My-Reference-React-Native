import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';



const StateScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => navigation.navigate('Count') }
            >

                <Text style={styles.buttonText}>Go to Counter State Screen</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.opacityStyle}
                onPress= {() => navigation.navigate('Cat')}
            >   

                <Text style={styles.buttonText}>Click to know if cat is hungry or not</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => navigation.navigate('ChangeColor')}
            >

                <Text style={styles.buttonText}>Inside here is a button that can add colors</Text>

            </TouchableOpacity>
        
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => navigation.navigate('Square')}
            >

             <Text style={styles.buttonText}>Click to see RGB Pro max</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    
    opacityStyle:{
        borderColor: 'red',
        borderWidth: 1,
        padding:10,
        backgroundColor: '#add8e6',
        borderRadius: 10,
        width:'70%',
        margin: 10,
        
    },
    buttonText: {
        textAlign: 'center'
    }
});

export default StateScreen;