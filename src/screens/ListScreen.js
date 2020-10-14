import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const firendsList = [
        {name: 'FRIEND #1', age:1},
        {name: 'FRIEND #2', age:2},
        {name: 'FRIEND #3', age:3},
        {name: 'FRIEND #4', age:4},
        {name: 'FRIEND #5', age:5},
        {name: 'FRIEND #6', age:6},
        {name: 'FRIEND #7', age:7},
        {name: 'FRIEND #8', age:8},
        {name: 'FRIEND #9', age:9},
        {name: 'FRIEND #10', age:10},
        {name: 'FRIEND #11', age:11}
    ];

    return (
        <FlatList       
            keyExtractor= {(friends) => friends.name} 
            data= {firendsList}
            renderItem= { ({item}) => {
            return <Text style={styles.textStyle}> {"Name ="+item.name +" - Age ="+item.age} </Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 40,
        borderColor: 'red',
        borderWidth: 1,
    }
});

export default ListScreen;