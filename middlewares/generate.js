exports.gen_id = () => {
  const acc_no = Math.floor(100000 + Math.random() * 900000);
  return "HEIS" + acc_no;
};

exports.gen_pin = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

exports.gen_username = (fname, lname) => {
  // Ensure both first name and last name are provided
  if (!fname || !lname) {
    return "Invalid Input";
  }

  // Extract the first letter of the last name (converted to lowercase)
  const lastInitial = lname.charAt(0).toLowerCase();

  // Combine the last initial and the first name (converted to lowercase)
  const username = lastInitial + fname.toLowerCase();

  return username;
};
