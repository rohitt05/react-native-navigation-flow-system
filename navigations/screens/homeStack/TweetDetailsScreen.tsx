import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import TweetContent from '../../components/TweetContent';

function TweetDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const {params} = route;

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        })
    },[])

  return (
    <View style={{flex: 1}}>
      <TweetContent tweet={params.tweet}/>
    </View>
  );
}

export default TweetDetailsScreen;
