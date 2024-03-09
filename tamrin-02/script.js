$("#form").submit((e) => {
  e.preventDefault();
  console.log(`First name: ${fName.value}`);
  console.log(`Last name: ${lName.value}`);
  console.log(`Full name: ${fName.value} ${lName.value}`);
});
