import React from 'react';
import { ImageBackground } from 'react-native';

class Background extends React.Component {
    constructor(props) {
        super(props);

        this.images = {
            serge: require(`../resources/img/serge_background.jpeg`),
            haribou: require(`../resources/img/haribou_background.jpeg`)
        }
    }

    render() {
        return (
            <ImageBackground style={this.props.style}
                source={this.images[this.props.image]}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default Background;