import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ReactNavigation = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.navigate('StackScreen')}
            >
                
                <Text>Stack Navigation</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.navigate('BottomScreen')}

            >
                
                <Text>Bottom Tab Navigation</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.navigate('DrawerScreen')}
            >
                
                <Text>Drawer Navigation</Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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

export default ReactNavigation;