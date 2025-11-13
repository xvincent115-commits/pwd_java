function validateEmail() {
  var name = document.forms["formMandiri"]["name"].value;
  var email = document.forms["formMandiri"]["email"].value;

  if (name == "" ) {
    alert("*Nama masih belum diisi\n");
    return false;
  }else if (email == "" ) {
    alert("*Email masih belum diisi\n");
    return false;
  }

  var re = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/;
  if (!re.test(email)) {
    alert("Format email tidak valid!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}