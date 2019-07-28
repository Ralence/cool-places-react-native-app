import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: '',
    })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder="A cool place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler} 
          />
          <Button 
            style={styles.placeBtn} 
            title="Add" 
            onPress={this.placeSubmitHandler} 
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  placeInput: {
    width: "70%",
    padding: 8
  },
  placeBtn: {
    width: "30%"
  },
})

export default PlaceInput;