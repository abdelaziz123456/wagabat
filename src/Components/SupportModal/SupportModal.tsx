import {View, Text, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {Images} from '@assets/index';
import {CustomButton, Divider} from '@SharedComponents/index';
type Props = {
  isVisible: boolean;
  setVisible: Function;
  address?: string;
};
const SupportModal = ({isVisible, setVisible, address}: Props) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
      <View style={styles.mainContainer}>
        <Image source={Images.contactCover} style={{width: '100%'}} />
        <Text style={styles.title}>SB Han Thuyen</Text>
        <Text style={styles.subTitle}>Store contact informations</Text>
        <View style={styles.detailsWrapper}>
          <View style={{flexDirection: 'row', paddingVertical: 24}}>
            <Image source={Images.icons.phoneIcon} style={{marginRight: 8}} />
            <View>
              <Text style={styles.primaryText}>Phone number</Text>
              <Text
                style={{
                  fontWeight: '700',
                  marginTop: 4,
                  ...styles.primaryText,
                }}>
                0909090909
              </Text>
            </View>
          </View>
          <Divider />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              marginBottom: 16,
            }}>
            <Image source={Images.icons.addressIcon} style={{marginRight: 8}} />
            <View>
              <Text style={styles.primaryText}>Address</Text>
              <Text
                style={{
                  fontWeight: '700',
                  marginTop: 4,
                  ...styles.primaryText,
                }}>
                {address || '13 Han Thuyen, D.1, HCM city'}
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 16}}>
            <CustomButton
              pressHandler={() => {
                setVisible(false);
              }}
              btnTheme="outlined">
              <Text style={styles.btnText}>Close</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SupportModal;
