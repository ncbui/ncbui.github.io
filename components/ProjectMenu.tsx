import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Alert, Modal, StyleSheet, Pressable} from 'react-native';
import { View, Text } from './Themed';
import { ExternalLink } from './ExternalLink';

export default function ProjectMenu() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
                <h1>portfolio pipeline</h1>
            </Text>
            <ExternalLink
                href='https://github.com/ncbui/ncbui.github.io/tree/main/.github/workflows' >
                  <Text style={styles.linkStyle}><h3>github workflows</h3></Text>
            </ExternalLink>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>back to projects</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Portfolio Pipeline</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 10,
    backgroundColor: '#ffd9da',
    borderRadius: 20,
    padding: 25,
    width: 600,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    margin: 5,
    padding: 20,
    elevation: 2,
    width: 400,
  },
  buttonOpen: {
    backgroundColor: '#ECA400',
  },
  buttonClose: {
    backgroundColor: '#ECA400',
  },
  textStyle: {
    color: '#450920',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  linkStyle: {
    color: '#B84A62',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#450920',
  },
});