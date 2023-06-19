import {Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {CardBase} from '@SharedComponents/index';
import styles from './SizeCard.styles';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {CustomColors} from '@Utiles/constants';

export default function SizeCard() {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Small',
        value: 'option1',
        borderColor: CustomColors.blue100,
        color: CustomColors.blue100,
        labelStyle: {
          color: 'black',
        },
      },
      {
        id: '2',
        label: 'Large',
        value: 'option2',
        borderColor: CustomColors.blue100,
        color: CustomColors.blue100,
        labelStyle: {
          color: 'black',
        },
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  return (
    <CardBase customStyle={styles.mainContainer}>
      <Text style={styles.title}>Size</Text>
      <View style={{alignItems: 'flex-start'}}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={{borderColor: 'red'}}
        />
      </View>
    </CardBase>
  );
}
