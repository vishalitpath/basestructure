import React, {Component} from 'react';
import {TouchableOpacity,View, Text,Image} from 'react-native';
// import Label from '../label';
import styles from './styles';

export default class SocialButton extends Component {
  render() {
    return (
     
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Image source={this.props.source} style={styles.image}/>
        <Text style={styles.text}>{this.props.btntext}</Text>
      </TouchableOpacity>
    );
  }
}
