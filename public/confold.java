<!--THIS FILE CONTAINS OLD JAVASCRIPT CODE FOR THE LOGIN FORM--!>

let password = new Array("password");
let username = new Array("username");
let button = document.getElementById("button");
let input = document.getElementById("input1");
let input2 = document.getElementById("input2");

button.addEventListener("click", function()
{
    if (password.includes(input.value) && username.includes(input2.value))
	
        window.location = "request.html";
    else
        window.location = "403.html";
});
