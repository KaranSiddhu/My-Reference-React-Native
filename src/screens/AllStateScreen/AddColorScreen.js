import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const AddColorScreen = () => {

    const [myColor, setMyColor] = useState([]);

    return (
        <View style={styles.container}>
            
            <TouchableOpacity
                style= {styles.opacityStyle}
                onPress= {() => {
                    setMyColor([...myColor, randomColor()]);
                }}
            >
                <Text>Add Color</Text>
            </TouchableOpacity>

      
            <FlatList
                keyExtractor={(allColor) => allColor}
                data={myColor}
                renderItem= {({item}) => {
                    return <View style= {{width: 100, height: 100, backgroundColor: item}}/>
                }}
            />
           
            
        </View>
    );
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;

}

const styles = StyleSheet.create({
   
    container: {
        alignItems: 'center'
    },
    
    opacityStyle:{
        borderWidth: 1,
        borderColor: 'red',
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#add8e6',
        padding: 7
    }

})

export default AddColorScreen;