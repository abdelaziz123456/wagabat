import {Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {CardBase} from '@SharedComponents/index';
import styles from './SizeCard.styles';
import RadioGroup, {
  RadioButton,
  RadioButtonProps,
} from 'react-native-radio-buttons-group';

export default function SizeCard() {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
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
