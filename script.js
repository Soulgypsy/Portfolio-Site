function darkModeFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function validateForm() {
  let x = document.forms["contact-form"]["email"].value;
  if (x == "") {
    alert("This is not a valid email address!");
    return false;
  }
  if (x.indexOf("@") == -1 || x.indexOf(".") == -1) {
    alert("This is not a valid email address!");
    return false;
  }
  if (x.indexOf("@") > x.lastIndexOf(".")) {
      alert("This is not a valid email address!");
      return false;
   } 

   let y = document.forms["contact-form"]["Name"].value;
   if (y == "") {
     alert("Name must be filled out");
     return false;
   }

   let z = document.forms["contact-form"]["Message"].value;
   if (z == "") {
     alert("Message must be filled out");
     return false;
   }
   if (z.length > 500) {
     alert("Message must be less than 500 characters");
     return false;
   }
   if (z.length < 10) {
     alert("Message must be at least 10 characters");
     return false;
   }
}