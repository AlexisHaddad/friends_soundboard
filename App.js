import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Background from './components/background';
import PlaySoundButton from './components/play-sound-button';

export default function App() {
    return (
        <Swiper>
            <View style={styles.container}>
                <Background style={styles.background} image='serge'>
                    <Text>SERGE</Text>
                    <PlaySoundButton sound='serge_laugh' />
                    <StatusBar style="auto" />
                </Background>
            </View>
            <View style={styles.container}>
                <Background style={styles.background} image='haribou'>
                    <Text>HARIBOU</Text>
                    <PlaySoundButton sound='haribou_huh' />
                    <StatusBar style="auto" />
                </Background>
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    text: {
        
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
