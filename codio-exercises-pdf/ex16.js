function validatePasswordWithIfElse(password) {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}
function validatePasswordWithTernary(password) {
  return password.length > 7 ? "Strong" : "Weak";
}
function validatePasswordWithLogicalOperator(password) {
  return (password.length > 7 && "Strong") || "Weak";
}
function validateAdvancedPassword(password) {
  return password.length > 7 && /[A-Z]/.test(password)
    ? "Very Strong"
    : password.length === 7
    ? "Strong"
    : "Weak";
}
