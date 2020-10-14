import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import ImageDetails from '../ReuseableComponents/ImageDetails'

const styles = StyleSheet.create({
    tinyLogoStyle:{
        width:50,
        height:50
    },
    secondContainer:{
        alignItems: 'center'
    },
    secondHeadingStyle:{
        fontSize: 20, 
        fontWeight:'bold'
    }
});

const ImageScreen = ()=>{
    return (
        <ScrollView>

            <ImageDetails 
                title= 'Forest'
                image= {require('../../assets/forest.jpg')}
                imageScore= '9/10'
             />
            
            <ImageDetails 
                title='Beach'
                image= {require('../../assets/beach.jpg')}
                imageScore= '2/10'
            />
            
            <ImageDetails
                title='Mountain'
                image= {require('../../assets/mountain.jpg')}
                imageScore= '10/10'
            />

            <View style= {styles.secondContainer}>
                
                <Text style= {styles.secondHeadingStyle}>Different Types of images</Text>
    
                <Text>First From local storage</Text>

                <Image
                    style={styles.tinyLogoStyle}
                    source={require('../../assets/mountain.jpg')}
                />

                <Text>Second From URI</Text>

                <Image
                    style= {styles.tinyLogoStyle}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />

                <Text>Third From URI but from data: uri scheme</Text>

                <Image
                    style= {styles.tinyLogoStyle}
                    source= {{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='   
                    }}   
                />

            </View>
        </ScrollView>
    );
}





export default ImageScreen;