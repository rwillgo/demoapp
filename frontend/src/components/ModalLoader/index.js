import React from 'react';
import {View, Modal} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import styles from './styles';

const ModalLoader = () => {
  return (
    <Modal style={styles.container} animationType="fade" transparent visible>
      <View style={styles.dotContainer}>
        <View style={styles.content}>
          <BallIndicator color="white" size={30} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalLoader;
