import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import SignIn from './js/components/signin'
import Profile from './js/components/profile'
import MyScene from './js/components/MyScene'

export default class App extends React.Component {
  render() {
    return (   
      <View style={styles.container}>
        <BackgroundImage>
              <Text style={styles.text}>Emergeo</Text>
              <Image source={require('./assets/images/emergeologo.png')} style={{height: 100,
                 width: 100, }}></Image>
              <SignIn />
              <Text style={styles.text2}>Find Service Providers nearby based on their realtime geolocation.</Text>

            </BackgroundImage>
        
      </View>
    );
  }
}

class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('./assets/images/chicago.jpg')}
                  style={styles.backgroundImage}>
                  {this.props.children}
            </Image>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,   
    paddingTop: 20,
  },
  heading:{
    color:'#ccc',
    fontWeight: 'bold',
    fontSize:25,
  },
  backgroundImage:{
    flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        justifyContent:'center',
    alignItems:'center',
  },
  text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 25
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft:10,
        marginRight:10,
        fontSize: 17,
    },
    logo:{
      
    },
});
