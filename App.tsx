import React from 'react';

import {Text, View} from 'react-native';
import CustomButton from './src/SharedComponents/CustomButton/CustomButton';

function App() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>Hello</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CustomButton
          pressHandler={() => console.log('hello')}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'white'}>
          <Text>hello</Text>
        </CustomButton>
        <CustomButton
          pressHandler={() => console.log('hello')}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'black'}>
          <Text style={{color: 'white', fontSize: 18}}>hello</Text>
        </CustomButton>
      </View>
    </View>
  );
}

export default App;
