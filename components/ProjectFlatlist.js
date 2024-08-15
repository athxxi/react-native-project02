import React  from "react";
import {
    Text ,View,FlatList,TouchableOpacity,StyleSheet,Dimensions,
    TouchableNativeFeedback
}from 'react-native';

import ProjectData from './projectdata.json'

import { formatDistanceToNow,parseISO } from "date-fns";

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth , height: screenHeight} = Dimensions.get('screen');


const ProjectFlatlist = ({searchText}) => {

  


  const filteredData = ProjectData.filter(item =>
    item.project_name.toLowerCase().includes(searchText.toLowerCase()) || item.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))
  );

    const renderNull = () => (
      <View  style={{width: screenWidth-40,}}>
        <Text style={{fontSize: 20,alignSelf: 'center'}}>No Project Found.</Text>
    </View>
    );
    const renderItem = ({ item }) => (
        <TouchableNativeFeedback style={styles.touchableFlatList}>
                <View style={styles.viewInsideFlatList}>
                  <View style={styles.viewLocation}>
                    <View style={styles.viewInsideLocation}>
                      <Icon name="map-pin" size={12} color="rgba(0,0,0,0.5)" style={styles.iconLocation} />
                      <Text style={styles.textLocation}>{item.location}</Text>
                    </View>
                  </View>
                  <View style={styles.viewName}>
                    <Text style={styles.textName}>{item.project_name}</Text>
                    <View style={styles.viewInsideName}>
                      <Text style={styles.textPayment}>Posted {formatDistanceToNow(item.posted_time)} ago</Text>
                      <Text style={styles.textPayment}>{item.verified_payment ? '  |  Payment Verified ' : '  |  Payment Unverified '}</Text>
                      {item.verified_payment ? <Icon1 name="verified" size={13} color="#0000ff"/> : <Icon1 name="highlight-off" size={13} color="#ff0000"/>}
                    </View>
                  </View>
                  <View style={styles.view3details}>
                    <View style={styles.viewdetails}>
                      <Text style={styles.textDetails}>INR. {item.price}</Text>
                      <Text style={styles.textDetailsName}>Price</Text>
                    </View>
                    <View style={styles.viewdetails}>
                      <Text style={styles.textDetails}>{item.duration}</Text>
                      <Text style={styles.textDetailsName}>Duration</Text>
                    </View>
                    <View style={styles.viewdetails}>
                      <Text style={styles.textDetails}>{item.proposals}</Text>
                      <Text style={styles.textDetailsName}>Proposals</Text>
                    </View>
                  </View>
                  <View style={styles.viewDescTags}>
                      <Text style={styles.textDesc} numberOfLines={2}>{item.description}</Text>
                      <Text style={styles.textTagsHeading}>Tags</Text>
                      <View horizontal={true} style={styles.View4}>
                        <View style={styles.searchTags}>
                            <Text style={styles.tagText}>{item.tags[0]}</Text>
                        </View>
                        <View style={styles.searchTags}>
                            <Text style={styles.tagText}>{item.tags[1]}</Text>
                        </View>
                        <View style={styles.searchTags}>
                            <Text style={styles.tagText}>{item.tags[2]}</Text>
                        </View>
                      </View>
                  </View>
                  
                </View>
        </TouchableNativeFeedback>
      );

    return(
        <View>
            <View >
            <Text style={styles.text1}>Popular Projects</Text>
            </View>
            <FlatList 
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={renderNull}
            style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  View4:{
    flexDirection: 'row',
    marginHorizontal: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'flex-start', 
},
searchTags:{
  height: 25,
  marginHorizontal: 2 ,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  backgroundColor: 'rgba(0,0,0,0.1)',
},
tagText:{
  fontSize: 12,
  color: 'rgba(0,0,0,0.65)',
  marginHorizontal: 10,
  marginBottom: 1,
  alignSelf: 'center'
  
},




    view3details:{
      flex: 1,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 5,
      marginBottom: 5,
    },
    textDetails: {
    fontSize: 15,
    fontWeight: "bold", 
    color: '#070f2b',
    marginTop: 10
    },
    textDetailsName: {
      fontSize: 12, 
      color: 'rgba(0,0,0,0.5)',
      marginBottom: 10
      },
    viewdetails:{
      flexDirection: 'column',
      borderColor: 'rgba(0,0,0,0.2)',
      borderRadius: 10,
      borderWidth: 1,
      marginHorizontal: 5,
      height: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    textTagsHeading:{
    marginTop: 5,
    marginHorizontal: 20,
    color: 'rgba(0,0,0,0.65)',
    },
    textDesc:{
    marginHorizontal: 20,
    color: 'rgba(0,0,0,0.65)',
    },
    textName:{
      alignSelf: 'flex-start',
      fontWeight:'bold',
      fontSize: 18,
    },
    textPayment:{
      alignSelf: 'flex-start',
      fontSize: 12,
      color: 'rgba(0,0,0,0.65)',
    },
    textLocation:{
      alignSelf: 'center',
      margin: 5,
      marginRight: 10,
      fontSize: 12,
      fontWeight:'bold',
      color: 'rgba(0,0,0,0.5)'
    },
    iconLocation:{
      alignSelf: 'center',
      margin: 5,
      marginLeft: 10,
    },
    viewLocation:{
      height: 25,
      backgroundColor: 'rgba(0,0,0,0.1)',
      alignSelf: 'flex-start',
      margin: 10,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewName:{
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      alignSelf: 'flex-start',
      marginHorizontal: 10
    },
    viewInsideName:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    viewDescTags:{
      height: 100,
      width: screenWidth,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      paddingHorizontal: 10
    },
    viewInsideLocation:{
      flexDirection: 'row',
      alignSelf: 'flex-start'
    },
    text1:{
      fontWeight:'bold',
        fontSize: 20,
        marginVertical: 10,
    },  
    touchableFlatList:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewInsideFlatList:{ 
      flexDirection: 'column',
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      borderRadius: 10,
      backgroundColor: '#fff',
      width: screenWidth-40,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
  //text
  textNameTop: {
    alignSelf: 'center' ,
    fontWeight: "bold", 
    fontStyle: 'italic',
    fontSize: 20,
    color: '#070f2b',
  },
  textNameFlatList: {
    //alignSelf: 'flex-end' ,
    fontWeight: "bold", 
    fontStyle: 'italic',
    fontSize: 20,
    color: '#070f2b',
  },
  textCompanyFlatList: {
    //alignSelf: 'flex-end' ,
    fontWeight: "bold", 
    fontSize: 16,
    color: '#070f2b',
  }

  });

export default ProjectFlatlist;