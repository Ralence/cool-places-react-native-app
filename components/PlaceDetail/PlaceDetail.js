import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImg} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="fade"
      onRequestClose={props.onModalClosed} >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <View style={styles.deleteBtn}>
            <TouchableOpacity onPress={props.onItemDeleted}>
              <Ionicons name="md-trash" size={30} color="red" />
            </TouchableOpacity>
          </View>
          <Button title="CLOSE" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImg: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteBtn: {
    alignItems: "center"
  }
})

export default PlaceDetail;