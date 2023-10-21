import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
// import Sound from "react-native-sound";
import { Audio } from 'expo-av';

const Box = ({ color, index }) => {
    // const [uri , setUri] = useState('../assets/audios/note1.mp3')
  const playAudio = async (index) => {
    console.log(index);

    if(index === 1){
      let uri = '../assets/audios/note1.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 2){
      let uri = '../assets/audios/note2.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 3){
      let uri = '../assets/audios/note3.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 4){
      let uri = '../assets/audios/note4.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 5){
      let uri = '../assets/audios/note5.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 6){
      let uri = '../assets/audios/note6.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }else if(index === 7){
      let uri = '../assets/audios/note7.mp3';
      const { sound } = await Audio.Sound.createAsync( require(uri));
      await sound.playAsync();
    }

    
    
  };

  return (
    <Pressable
      onHoverIn={()=> playAudio(index)}
      onPress={() => playAudio(index)}
      style={{ ...styles.Box, backgroundColor: color }}>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Box: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Box;
