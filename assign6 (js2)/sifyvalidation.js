function validateName(name) {
  var nameexpr = /^[a-zA-Z]{3,15}$/;
  return nameexpr.test(name);
}

function required(str) {
  if (str.trim().length > 0)
    return true;
  else
    return false;
}

function validateEmail(email) {
  var emailexpr = /^[a-zA-Z0-9]+[@][a-z]+(.com|.co.in)$/;
  return emailexpr.test(email);
}

function validateNumber(age) {
  if (isNaN(age))
    return false;
  else
    return true;
}

function validateAge(age) {
  if (age < 20 || age > 50)
    return false;
  else
    return true;
}