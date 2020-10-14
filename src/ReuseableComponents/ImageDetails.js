import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

const ImageDetails = (props) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator= {false}
            style= {styles.mainStyle}
        >
            
            <Image
                source= {props.image}
            />

            <View style={styles.viewStyle}>

                <Text>{props.title}</Text>

                <Text>Image Score - {props.imageScore}</Text>
                
            </View>
            
        </ScrollView>    
    );
}

const styles = StyleSheet.create({
    mainStyle:{
        margin:10
    },
    viewStyle:{
        margin: 10,
        alignItems:'center',
        justifyContent: 'center'
    } 
});

export default ImageDetails;