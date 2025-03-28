


// Sign-up 
function signUp() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
  

    
    if (!email || !password) {      //
      alert("Please fill in all fields.");

      return false;
    }
  
    let obj = { Email: email, Password: password };
    
    localStorage.setItem("SignUp", JSON.stringify(obj)); // Store user data
  
    alert("Signup Successful! Now login.");
    return true; // Allow form submission (redirect to login.html)
  }
  

  // Login 
  function login() {
    let email_login = document.querySelector("#email-login").value;
    let password_login = document.querySelector("#password-login").value;
    let result = document.querySelector(".result");
  
    if (!email_login || !password_login) {
      result.innerText = "Please fill in all fields.";
      return false;
    }
  
    let storedData = localStorage.getItem("SignUp");
  
    if (!storedData) {
      result.innerText = "User not found. Please sign up.";
      return false;
    }
  
    let obj = JSON.parse(storedData); // Convert back to an object
  
    if (obj.Email === email_login && obj.Password === password_login) {
      result.innerText = "Login Successful!";
      alert("Login Successful! Redirecting...");
    
      return false;
    } else {
      result.innerText = "Invalid email or password";
      return false;
    }
  }
  
