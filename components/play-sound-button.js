import React from 'react';
import {Button} from 'react-native';
import Sound from 'react-native-sound';

class PlaySoundButton extends React.Component {
    constructor(props) {
        super(props);
        Sound.setCategory('Playback');

        this.sound = new Sound(`${props.sound}.mp3`, Sound.MAIN_BUNDLE);
        this.sound
            .setVolume(1)
            .setPan(0.5)
    }

    componentWillUnmount() {
        this.sound.release();
    }

    render() {
        return (
            <Button 
                title='test'
                onPress={() => {
                    if (this.sound) {
                        this.sound.play();
                    }
                }}
            />
        );
    }
}

export default PlaySoundButton;