import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {ReserveItemType} from '@Utiles/types';
import styles from './styles';
import StatusBill from './StatusBill';
import {CustomButton, Divider} from '..';
import {Images} from '@assets/index';
import {CustomColors} from '@Utiles/constants';
import {SupportModal} from '@Components/index';
type Props = {
  item: ReserveItemType;
};

const ReseveItem = ({item}: Props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <StatusBill status={item.status} />
      <View style={styles.itemWrapper}>
        <Image source={Images.icons.storeItem} style={styles.icon} />
        <Text style={styles.textItem}>{item.address}</Text>
      </View>

      <Divider />
      <View style={styles.itemWrapper}>
        <Image source={Images.icons.avatar} style={styles.icon} />
        <Text style={styles.textItem}>Table for {item.no}</Text>
      </View>

      <Divider />
      <View style={styles.itemWrapper}>
        <Image source={Images.icons.clock} style={styles.icon} />
        <Text style={styles.textItem}>{item.time}</Text>
      </View>

      {item.status == 'Reserved' && (
        <View style={styles.btnWrapper}>
          <CustomButton btnTheme="outlined" pressHandler={() => {}}>
            <Text style={styles.btnText}>Cancel</Text>
          </CustomButton>
          <CustomButton btnTheme="blue" pressHandler={() => setVisible(true)}>
            <Text style={{color: CustomColors.white}}>Contact support</Text>
          </CustomButton>
        </View>
      )}
      <SupportModal
        setVisible={setVisible}
        isVisible={isVisible}
        address={item.address}
      />
    </View>
  );
};

export default ReseveItem;
