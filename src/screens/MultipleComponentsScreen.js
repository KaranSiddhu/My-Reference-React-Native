import React from 'react';
import {Text, View} from 'react-native';

const Cat = (props) =>{
return <Text>Hello i am {props.name} </Text>;


} 

const Dog = () => {
    
    return (
        <View>
            <Text>Hello i am dog!!</Text>
            <Cat name = {['cat1', 'cat3']}/>
            <Cat name = 'cat2' />
        </View>
    );
}

export default Dog;