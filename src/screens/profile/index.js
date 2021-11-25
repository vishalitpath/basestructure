import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from '../../components/ui/carousel';
import Label from '../../components/ui/label';
import Routes from '../../router/routes';

const Profile = ({navigation}) => {
  let tempArray = [
    {name: 'virat'},
    {name: 'dhoni'},
    {name: 'jadeja'},
    {name: 'bumrah'},
    {name: 'parthiv'},
  ];
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
        <Text>Home</Text>
      </TouchableOpacity>
      <View style={{marginVertical: 50}}>
        <Carousel testimonialDetails={tempArray} />
      </View>
    </View>
  );
};

export default Profile;
