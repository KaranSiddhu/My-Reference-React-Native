import React from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const DisplayName = (prop) => {
return <Text style={styles.HeadingStyle}>My name is {prop.name}</Text>
}

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            
            <Text style={styles.HeadingStyle}>
            
                Hello World!{'\n'}Getting started with react native!
            
            </Text>
          
            <DisplayName name='karan siddhu' />
       
            <Text style={styles.thirdHeadingStyle}>This is the things that i have created</Text>
  
            <View 
                style={styles.buttonsStyle}
            >

                <TouchableOpacity
                    onPress= {() => navigation.navigate('AllComponents')}
                    style= {styles.opacityStyle}
                >
                    
                    <Text>Go to Different Components Screen</Text>
                
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress= {() => navigation.navigate('List')}
                    style= {styles.opacityStyle}
                >

                    <Text>Go to List Screen</Text>

                  </TouchableOpacity>
                
                <TouchableOpacity
                    onPress= {() => navigation.navigate('Image')}
                    style= {styles.opacityStyle}
                >
                    
                    <Text>Go to Image Screen</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress= {() => navigation.navigate('MultiCompo')}
                    style= {styles.opacityStyle}
                >
                    <Text>Go to Multiple Component Screen</Text>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => navigation.navigate('AllState')}
                    style= {styles.opacityStyle}
                >

                    <Text>Go to state screen</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={() => navigation.navigate('TextInputs')}
                >
                    
                    <Text>Handling TextInput</Text>
                
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress= {() => navigation.navigate('AllStyle')}
                >

                    <Text>Styles in React native</Text>    

                </TouchableOpacity>

                <TouchableOpacity
                    style= {styles.opacityStyle}
                    onPress= {() => navigation.navigate('effectsScreen')}
                >

                    <Text>useEffect</Text>

                </TouchableOpacity>

               

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    HeadingStyle:{
        fontSize: 20,
        textAlign: 'center',
    },
    
    buttonsStyle:{
      alignItems: 'center'
    },

    thirdHeadingStyle:{
        marginTop: 35,
        marginBottom: 15,
        fontSize:20,
        fontWeight: 'bold'
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

export default HomeScreen;