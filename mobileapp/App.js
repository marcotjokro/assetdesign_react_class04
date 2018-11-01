import React from 'react';
import { StyleSheet, Text, View, Button, Slider, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import Main from './comps/Main';

export default class App extends React.Component {
  
	state={
		camType: Camera.Constants.Type.front,
		sliderValue: 200,
		imgsrc: null
	}

	handleBut=()=>{
		if(this.state.camType === Camera.Constants.Type.front){
			this.setState({
				camType: Camera.Constants.Type.back
			})
		} else {
			this.setState({
				camType: Camera.Constants.Type.front 
			})
		}
	}

//	picTaken=()=>{
//		Camera.takePictureAsync({quality: 50}).then((data)=>{
//			data: data.uri
//		})
//	}

	handleSnap=async()=>{
		this.camera.takePictureAsync();
		if(this.camera){
			let photo = await this.camera.takePictureAsync();
			this.setState({
				imgsrc: photo.uri
			})  
		}
	}
	
	handleSlider=(value)=>{
		this.setState({
			sliderValue: value
		})
	}
	
	async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
	
	render() {
    return (
      <View style={styles.container}>
        <Text>Camera Testing</Text>
				<Camera 
					style={{width:this.state.sliderValue, height:this.state.sliderValue, margin: 10}}
					type={this.state.camType}
					ref={ref => {this.camera = ref}}
					/>
				<Slider
					onValueChange={this.handleSlider}
					minimumValue={200}
					maximumValue={500}
					style={{width: 200, margin: 20}}
					/>
				<Button
					onPress={this.handleBut}
					title="Flip Camera"
					/>
				<Button
					onPress={this.handleSnap}
					title="Take a Pic"
					/>
				<Image
					source={{uri: this.state.imgsrc}}
					style={{width: 200, height: 200, margin: 20}}
					resizeMode="cover"
					/>
				
				<Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
