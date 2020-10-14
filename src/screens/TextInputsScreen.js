import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet, View, TextInput} from 'react-native';

const TextInputs = () => {
    const [name,setName] = useState('');
    const [age, setAge] = useState('');
    const [discription, setDiscription] = useState('');
    const [pass, setPass] = useState('');
    
    return (
    <ScrollView>        
        <View style={styles.container}>

            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g John Doe'
                autoCapitalize= 'none'
                autoCorrect= {false}
                onChangeText={(value) => setName(value) }
            />

            <Text>Enter Age:</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                autoCapitalize= 'none'
                autoCorrect= {false}
                placeholder='e.g 99'
                onChangeText={(value) => setAge(value)}
            />

            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize= 'none'
                autoCorrect= {false}
                onChangeText= {(value) => setPass(value)}
            />
          
            {
                (pass.length > 5) ? null : 
                    <Text style={styles.warning}>Password must be longer than 5 characters</Text> 
            }

             

            <Text>About You:</Text>
            <TextInput
                multiline
                style={styles.discription}
                placeholder='e.g I am from............'
                onChangeText= {(value) => setDiscription(value)}
            />

            <Text>Name: {name}{'\n'}Age: {age}{'\n'}Description: {discription} </Text>

        </View>    
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    input:{
        borderWidth:1,
        width: 150,
        borderColor: 'red',
        margin:10,
        padding: 5,
        borderRadius:10,
        textAlign:'center'
    },
    discription:{
        borderWidth:1,
        width: '90%',
        borderColor: 'red',
        margin:10,
        padding: 5,
        textAlign:'center',
        borderRadius:10
    },
    warning:{
        width:200,
         textAlign: 'center',
         color:'red',
         fontWeight: 'bold'
    }
});

export default TextInputs;