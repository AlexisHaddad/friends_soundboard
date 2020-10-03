import React from 'react';
import Sound from 'react-native-sound';
import { Button } from 'react-native';

Sound.setCategory('Playback');

class SoundButton extends React.Component {
    constructor(props) {
        super(props);

        this.sound = new Sound(props.sound +'.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.error()
                return;
            }

            console.log('test sound' + this.sound.getDuration());
        });
    }

    render() {
        return (
            <Button
                style={this.props.style}
                onPress={() => {
                    this.sound.play();
                }}
                title={this.props.sound}
            />
        );
    }
}

export default SoundButton;