function darkModeFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function validateForm() {
   let x = document.forms["contact-form"]["email"].value;
   let y = document.forms["contact-form"]["name"].value;
   let z = document.forms["contact-form"]["message"].value;
   let valid = true;
   if (x == "") {
      alert("This is not a valid email address!");
      valid = false;
   }
   else if (x.indexOf("@") == -1 || x.indexOf(".") == -1) {
      alert("This is not a valid email address!");
      valid = false;
   }
   else if (x.indexOf("@") > x.lastIndexOf(".")) {
      alert("This is not a valid email address!");
      valid = false;
   } 

   if (y == "") {
     alert("Name must be filled out");
     valid = false;
   }

   if (z == "") {
     alert("Message must be filled out");
     valid = false;
   }
   else if (z.length > 500) {
     alert("Message must be less than 500 characters");
     valid = false;
   }
   else if (z.length < 10) {
     alert("Message must be at least 10 characters");
     valid = false;
   }


   if (valid) {
     alert("Thank you for your message! I will get back to you as soon as possible.");
   }
   else {
      return false;
   }
}