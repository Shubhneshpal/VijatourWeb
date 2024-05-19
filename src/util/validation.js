

//  Register form validation******/////

export const validateFormRegister = (RegformData) => {
    const errors = {};
  
    // name
    if (!RegformData?.name?.trim()) {
      errors.name = 'Name is required *';
    }
  
    //Last name
    if (!RegformData?.lname?.trim()) {
      errors.lname = 'Last Name is required *';
    }
  
    //  email
    if (!RegformData?.email?.trim()) {
      errors.email = 'Email is required *';
    } else if (!isValidEmail(RegformData.email)) {
      errors.email = 'Invalid email address *';
    }
  
    //  password
    if (!RegformData.password || !validatePassword(RegformData.password)) {
      errors.password = 'Minimum 8 characters & at least 1 letter & 1 number *';
    }  

  
    return errors;
  };
 // Validate Email 💯
 const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
// const Email = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
// export const emailValidation = email => Email.test(email);
// Validate password 💯
export const validatePassword = (password) => {
    const hasCharacter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 6 && hasCharacter && hasNumber;
  };

  //  Login form validation******/////

export const validateFormLogin = (loginData) => {
    const errors = {};
  
    // Validate email
    if (!loginData?.email?.trim()) {
      errors.email = 'Email is required *';
    } else if (!isValidEmail(loginData.email)) {
      errors.email = 'Invalid email address *';
    }
    // Validate password
    if (!loginData.password || !validatePassword(loginData.password)) {
      errors.password = 'Minimum 8 characters & at least 1 letter & 1 number *';
    }
    return errors;
  };