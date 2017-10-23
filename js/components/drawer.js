import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Drawer, Icon, Button} from 'native-base';
import SideBar from './sidebar';
export default class DrawerExample extends Component {

  closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
       };

  render() {
   
   
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator}{...this.props}/>}
        onClose={() => this.closeDrawer()} >

        <TouchableHighlight style={styles.drawerbtn}  onPress={()=> this.openDrawer()}>
          <Icon name= "home"/>
          </TouchableHighlight>
     
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  drawerbtn: {
    marginTop: 50,
    marginLeft:50,
  },
});
