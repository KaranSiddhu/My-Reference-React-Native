import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const DifferentComponent = () => {

    return (
        <ScrollView>
            <Text>Hello Ji</Text>
            <View>
                <Text>Image here</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
                    }}
                    style={{width: 200, height: 200}}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue = 'Write something here'
            />
        </ScrollView>
    );
}


export default DifferentComponent;
