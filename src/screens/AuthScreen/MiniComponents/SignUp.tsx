import React from 'react';
import {CustomInput} from '@SharedComponents/index';

type Props = {
  enteredData: {};
  setEnteredData: Function;
};
export default function SignUp({enteredData, setEnteredData}: Props) {
  return (
    <>
      <CustomInput
        labelText="Full Name"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, name: value}),
          secureTextEntry: false,
          placeholder: 'Enter Your Name',
        }}
      />
      <CustomInput
        labelText="Phone Number"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, phone: value}),
          keyboardType: 'numeric',
          placeholder: '000 000 000',
        }}
      />
      <CustomInput
        labelText="Create Password"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, password: value}),
          secureTextEntry: true,
          placeholder: 'Enter Your Password',
        }}
      />
      <CustomInput
        labelText="Confirm Password"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, passwordConfirm: value}),
          secureTextEntry: true,
          placeholder: 'Confirm Password',
        }}
      />
    </>
  );
}
