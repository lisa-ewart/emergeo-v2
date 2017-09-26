import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image,
    ScrollView,

    // BackgroundImage
} from 'react-native';
import {Drawer, Icon, Button, ListItem, CheckBox,Container, Header, Content, Card, CardItem, Left, Thumbnail, Body,Right,} from 'native-base';
import { StackNavigator } from 'react-navigation';
import SideBar from './sidebar';
import Auth from '../firebase/auth';
import { serviceProviders } from './data';




export default class Profile extends Component{

    state = {
    // Show only service providers based on button 
   
    services:'',
    menuheading:'Choose Service',

  
  }

    render(){
        return(
         <Container>
        <Header />
        <Content style={styles.flex1}>
          <Card>
            <CardItem>
              <Left>
               
                <Body>
                  
                  <Text note>Lisa Nicole</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.image}>
              <Image source={require('../../assets/images/chicago.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        
        <Text style={styles.textList}>Choose services you provide</Text>
       
        <Content style={styles.flex1}>

        <ScrollView>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Electrician</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Plumber</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>HVAC</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Dog Walker</Text>
            </Body>
          </ListItem>
          
          
           </ScrollView>
        </Content>
        
      </Container>
      

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
     textList: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 12,
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
    },
    image: {
        width: 200,
        height:170,
        paddingLeft:15,
    },
    flex1:{
        flex:1,
    },
});
