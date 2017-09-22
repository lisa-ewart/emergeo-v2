import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image,
    // BackgroundImage
} from 'react-native';
import {Drawer, Icon, Button,} from 'native-base';
import { StackNavigator } from 'react-navigation';
import SideBar from './sidebar';
import Auth from '../firebase/auth';



class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../../assets/images/chicago.jpg')}
                style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}
export default class Home extends Component{

static navigationOptions = {
    title: 'Emergeo',
  };


  closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
       };

    render(){
       
        return(
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator}{...this.props}/>}
        onClose={() => this.closeDrawer()} >

        <TouchableHighlight style={styles.menu}  onPress={()=> this.openDrawer()}>
         <Icon name= "menu"/>
          </TouchableHighlight>
        <View style={styles.container}>
            <BackgroundImage>
                <Text style={styles.text}>Emergeo</Text>
                   <Image source={require('../../assets/images/emergeologo.png')} style={{height: 100,
                    width: 100, backgroundColor: 'rgba(0,0,0,0.5)', }}>
                   </Image>
                <Text style={styles.text2}>Have an account? Login here.</Text>
                <TouchableHighlight
                    style={styles.btn}
                    
                    onPress={() => navigate('Sign')}>
                    <Text style={styles.btnText}>Get Started!</Text>
                </TouchableHighlight>
            </BackgroundImage>     
      </View>
      </Drawer>
        )
    }
}










const styles = StyleSheet.create({
    
    btn:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius: 10,
        backgroundColor:'#9DBFC8',
    },
    container: {
        flex: 1,
        paddingTop: 20,
    },
    heading: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 25,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 35,
        fontWeight: 'bold',
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
    },
    btnText:{
        color:'white',
    },
    logo: {

    },
    menu:{
        marginLeft: 25,
        marginTop: 25,
    }
});
