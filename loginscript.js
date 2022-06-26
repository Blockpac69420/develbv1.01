// this function will be called to validate the user's login details. If valid, brings you to the home page.
function validateForm() {

	// list of valid login names
	const login_list = ["Marco","James","Bond"];

	// subroutine which returns true if obj is contained in a
	function contains(a, obj) {
		for (var i = 0; i < a.length; i++) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	}
	
	// gets the login name and password values entered	  
	let x = document.forms["myForm"]["fname"].value;
	let y = document.forms["myForm"]["password"].value;
		  
	var userFound = false;
		  
	if (contains(login_list, x) == false) {
		alert("User not found!");
		return false;
	}
		  
	if (x == "") {
		alert("Name must be filled out!");
		return false;
	}
	
	if (y == "") {
		alert("Password can't be empty!");
		return false;
	}

	// for now the password is 123 only
	if (y != "123") {
		alert("Username/Password combination incorrect!");
		return false;
	}

	// for now, this is the only combination for login
	if (x == "Marco" && y == "123") {
		return true;
	}

		  
}



