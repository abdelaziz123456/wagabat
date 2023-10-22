import {View, Text, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {Images} from '@assets/index';
import {Divider} from '@SharedComponents/index';
type Props = {
  isVisible: boolean;
  setVisible: Function;
};
const SupportModal = ({isVisible, setVisible}: Props) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
      <View style={styles.mainContainer}>
        <Image source={Images.contactCover} style={{width: '100%'}} />
        <Text style={styles.title}>SB Han Thuyen</Text>
        <Text style={styles.subTitle}>Store contact informations</Text>
        <View style={styles.detailsWrapper}>
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <Image source={Images.icons.phoneIcon} style={{marginRight: 8}} />
            <View>
              <Text>Phone number</Text>
              <Text style={{fontWeight: '700', marginTop: 4}}>0909090909</Text>
            </View>
          </View>
          <Divider />
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <Image source={Images.icons.phoneIcon} style={{marginRight: 8}} />
            <View>
              <Text>Phone number</Text>
              <Text style={{fontWeight: '700', marginTop: 4}}>0909090909</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SupportModal;
