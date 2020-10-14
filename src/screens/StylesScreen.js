import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const StylesScreen = () => {
    return (
    
        <ScrollView >
            <View style={styles.container}>

                <Text style={styles.heading}>Box Object Model</Text>
                
                <Text style={styles.BoxObjectModel}>CONTENT</Text>
                
            </View>
            
            <Text style={styles.heading}>FlexBox</Text>

            <View style={styles.flexParent}>

                <Text style={styles.flexChild}>Child #1</Text>
                <Text style={styles.flexChild}>Child #2</Text>
                <Text style={styles.flexChild}>Child #3</Text>

            </View>
               
            <Text style={styles.heading}>Position</Text>

            <View style={styles.positionParent}>

                <Text style={styles.positionChild1}>Child #1</Text>
                <Text style={styles.positionChild2}>Child #2</Text>
                <Text style={styles.positionChild3}>Child #3</Text>

            </View>
               

        </ScrollView>

    );
}

const styles = StyleSheet.create({

   
    container:{
        alignItems:'center'
    },

    heading:{
        fontWeight: 'bold',
        fontSize:25,
        textDecorationLine: 'underline',
    
    },

    BoxObjectModel:{
        borderColor:'red',
        borderWidth: 1,
        marginVertical: 50,
        paddingHorizontal:40
    },

    flexParent:{
        flex:1,
        borderWidth: 3,
        borderColor: 'red',
        padding: 2,
    },

    flexChild: {
        borderWidth: 2,
        borderColor: 'red',
        marginBottom:2
    },

    positionParent: {
        borderWidth: 2,
        borderColor: 'red',
        margin: 2,
    },

    positionChild1: {
        borderWidth: 2,
        borderColor: 'red',
        margin:2,
        top:15
    },
    
    positionChild2: {
        borderWidth: 2,
        borderColor: 'red',
        margin:2,
    },
    
    positionChild3: {
        borderWidth: 2,
        borderColor: 'red',
        margin:2,
        left: 20
    }
    
});

export default StylesScreen;