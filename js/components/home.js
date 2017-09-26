import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image, Container,
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

    changeView(){
        this.props.dispatch('SWITCH_VIEW',{
            viewNumber: 2
        })
    }
    
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
               
                <Text style={styles.text}>emerge<Image source={require('../../assets/images/emergeologo.png')} style={{height: 100,
                    width: 41,marginTop:39, marginLeft:-4, }}>
                   </Image>

                   </Text>
                   
                <TouchableHighlight
                    style={styles.btn}
                    onPress={() => navigate('Sign')}>

                    <Text style={styles.btnText}>Get Started!</Text>
                </TouchableHighlight>
                <Text style={styles.text2}>Have an account?</Text>
                <Text style={styles.text3}>Login here.</Text>
            </BackgroundImage>     
      </View>

      </Drawer>
        )
    }
}


const styles = StyleSheet.create({
    drawer:{
        width: 320,
        backgroundColor: 'rgba(0,0,0,0)',
        color:'white',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    
    btn:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius: 5,
        backgroundColor:'#2D5669',
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
        backgroundColor:'rgba(0,0,0,0.6)',
        fontSize: 45,
        fontWeight: 'bold',
        borderWidth: 1, 
        borderColor:'#fff',
        borderRadius: 5,
        padding:5,
        paddingBottom:25,
        paddingRight:30,
        paddingLeft:20,
        marginRight: -15,
       

    },
    text2: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        fontSize: 17,
    },
    text3: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    btnText:{
        color:'white',
        fontWeight: 'bold',
    },
    logo: {

    },
    menu:{
        marginLeft: 25,
        marginTop: 25,
    }
});
