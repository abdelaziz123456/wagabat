import React from 'react';
import {CustomInput} from '@SharedComponents/index';
type Props = {
  enteredData: {};
  setEnteredData: Function;
};
export default function Login({enteredData, setEnteredData}: Props) {
  return (
    <>
      <CustomInput
        labelText="Email Address"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, email: value}),
          secureTextEntry: false,
          placeholder: 'Enter Your Email',
        }}
      />
      <CustomInput
        labelText="Password"
        inputConfig={{
          onChangeText: (value: string) =>
            setEnteredData({...enteredData, password: value}),
          secureTextEntry: true,
          placeholder: 'Enter Your Password',
        }}
      />
    </>
  );
}
