import React from 'react';
import { ImageBackground } from 'react-native';

class Background extends React.Component {
    render() {
        return (
            <ImageBackground style={this.props.style}
                source={require("../ressources/img/background.jpeg")}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default Background;