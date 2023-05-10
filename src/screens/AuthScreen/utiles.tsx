export function validationHandler(
  enteredData: {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
    phone: string;
  },
  activeTab: boolean,
  setIsValid: Function,
) {
  //validate login data
  if (activeTab) {
    if (
      enteredData.email &&
      enteredData.email.includes('@') &&
      enteredData.password
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  } else {
    //validate sign up data
    if (
      enteredData.name &&
      enteredData.phone &&
      enteredData.password &&
      enteredData.passwordConfirm &&
      enteredData.password == enteredData.passwordConfirm
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
}
