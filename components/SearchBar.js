import React from "react";
import {
    Text ,View,FlatList,TouchableOpacity,StyleSheet,Dimensions,Image,TextInput, ScrollView
}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const {width: screenWidth , height: screenHeight} = Dimensions.get('screen');



const SearchBar = ({ searchText, setSearchText }) => {
    

    return(
        <View style={styles.View1}>
            <Text style={styles.textSearchBar}>Find Projects</Text>
            <View style={styles.View2} >
                <View style={styles.icon1}>
                    <Icon name="search" size={25} color="#000" />
                </View>
                    <TextInput 
                        style={styles.textBox} 
                        placeholder="Search Projects..."
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                    />
                <TouchableOpacity style={styles.icon2}>
                    <Icon name="funnel" size={25} color="#000"/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.View3}>
                <Text style={styles.text1}>Popular searches: </Text>
                <ScrollView horizontal={true} style={styles.View4}>
                    <TouchableOpacity style={styles.searchTags} onPress={() => setSearchText('Development')}>
                        <Text style={styles.tagText}>Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchTags} onPress={() => setSearchText('Mobile App')}>
                        <Text style={styles.tagText}>Mobile App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchTags} onPress={() => setSearchText('Web')}>
                        <Text style={styles.tagText}>Web</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchTags} onPress={() => setSearchText('Design')}>
                    <    Text style={styles.tagText}>Design</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textSearchBar:{
        fontWeight:'bold',
        fontSize: 25,
        alignSelf:'flex-start',
        height: 40,
        margin: 10,
        marginStart: 25
        
    },
    View2:{
        height: 60,
        flexDirection: 'row',
        width: screenWidth-40,
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1.5,
        
    },
    View3:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0
    },
    View4:{
        flexDirection: 'row',
        margin: 10,
        marginEnd: 20,
    },
    searchTags:{
        height: 20,

        backgroundColor: 'rgba(70, 80, 255,1)',
        marginHorizontal: 3 ,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagText:{
        fontSize: 12,
        color: '#fff',
        marginHorizontal: 10,
        marginBottom: 1
        
    },
    text1:{
        alignSelf: 'center',
        marginLeft: 20
    }, 
    View1:{
        flexDirection: 'column',
        flex: 1,
        width: screenWidth,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    icon1:{
        height: 40,
        width: 40,
        marginStart: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon2:{
        height: 40,
        width: 40,
        marginEnd: 10,
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox:{
        flex: 1,
        paddingHorizontal: 10
    }

    
  });

export default SearchBar;