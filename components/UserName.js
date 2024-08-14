import React from "react";
import {
    Text ,View,FlatList,TouchableOpacity,StyleSheet,Dimensions,Image
}from 'react-native';

const {width: screenWidth , height: screenHeight} = Dimensions.get('screen');


const UserName = () => {

    return(
        <View style={styles.View1}>
            <Text style={styles.textUserName}>Hey, <Text style={{fontWeight: 'bold'}}>Athul</Text></Text>
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}} style={styles.UserImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textUserName:{
        fontSize: 20,
        alignSelf:'center',
        flex: 1,
        margin: 10,
        marginStart: 25,
        
        
    },
    View1:{
        flexDirection: 'row',
        height: 80,
        width: screenWidth,
        backgroundColor: '#fff',
    },
    UserImage: {
        width: 40,
        height: 40,
        margin: 10,
        marginEnd: 25,
        /*borderColor: 'black',
        borderWidth: 0.5,*/
        borderRadius: 45,
        alignSelf: 'center'
    }
    
  });

export default UserName;