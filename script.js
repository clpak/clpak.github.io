document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("regEx").addEventListener("submit", validate);

}

function validate(e){
	
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

function formHasErrors() {
    let errorFlag = false;

    let requiredFields = ["name", "email", "phone"]; 
    
    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField)) {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";
            document.getElementById(requiredFields[i] + "_error").style.visibility = "visible";
            if (!errorFlag) {
                textField.focus();
                textField.select();
            }

            errorFlag = true;
        }
    }

    let regexEmail = /^\S+@\S+\.\S+$/;
    let emailValue = document.getElementById("email").value;

    if (!regexEmail.test(emailValue)) {
        document.getElementById("email_error").style.visibility = "visible";
        document.getElementById("email_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }

    let regexPhone = /^\d{10}$/;
    let phoneValue = document.getElementById("phone").value;

    if (!regexPhone.test(phoneValue)) {
        document.getElementById("phone_error").style.visibility = "visible";

        if (!errorFlag) {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        errorFlag = true;
    }

    return errorFlag;
}

function trim(str){
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement){
	// Check if the text field has a value
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		// Invalid entry
		return false;
	}
	
	// Valid entry
	return true;
}

function hideAllErrors()
{
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}
