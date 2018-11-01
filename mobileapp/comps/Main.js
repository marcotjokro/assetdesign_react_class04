import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
  
	state={
		bgColor: "white"
	}

	handleChangeBG=()=>{
		if(this.state.bgColor === "white"){
			this.setState({
				bgColor: "green"
			})
		} else if(this.state.bgColor === "red"){
			this.setState({
				bgColor:"white"
			})				
		} else {
			this.setState({
				bgColor: "red"
			})
		}
	}
	

	render() {
    return (
      <View style={{width: 300, height: 300, backgroundColor: this.state.bgColor}}>
        <Button
					onPress={this.handleChangeBG}
					title="Change to Black BG"
					/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		width: 300,
		height: 300
  },
});
