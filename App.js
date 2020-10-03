import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SoundButton from './components/sound-button';
import Background from './components/background';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.sounds = [
			"sound1",
			"sound2",
			"sound3",
			"sound4",
			"sound5",
			"sound6",
			"sound7",
			"sound8",
			"sound9",
			"sound10",
		]
	}

  	render() {
    	return (
			<Background style={styles.background}>
      			<View style={styles.container}>
					{shuffle(this.sounds).map((sound, idx) =>
						<SoundButton key={idx} sound={sound} />
					)}
      			</View>
			</Background>
    	);
  	}
}

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		flex: 1,
		width: '100%',
		height: '100%'
	}
});

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}