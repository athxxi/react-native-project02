import { useState , useEffect } from 'react';
import { 
  StyleSheet, Text, SafeAreaView, Dimensions, FlatList,View,Image,StatusBar,TouchableNativeFeedback

} from 'react-native';
import ProjectFlatlist from './components/ProjectFlatlist';
import UserName from './components/UserName';
import SearchBar from './components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';



const {width: screenWidth , height: screenHeight} = Dimensions.get('screen');

export default function App() {

  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <View style={styles.C1}>
        <UserName />
      </View>
      <View style={styles.C2}>
        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      </View>
      <View style={styles.C3}>
        <ProjectFlatlist searchText={searchText}/>
      </View>
      <View style={styles.C4}>
        <TouchableNativeFeedback>
            <View  style={styles.C4in}>
              <Icon name="home" size={20} color="rgba(0,0,0,1)"/>
              <Text style={styles.textUserName}>Home</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  C1:{
    height: 70
  },
  C2:{
    height: 160,
  },
  C3:{
    flex: 1

  },
  C4:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  C4in:{
    height: 50,
    width:screenWidth-40,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  textUserName:{
    fontSize: 12,
    fontWeight: 'bold'
  }
});
