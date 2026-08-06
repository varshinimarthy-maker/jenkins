document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    document.getElementById("message").innerHTML =
    "Registration Successful! Thank you for participating in the Walkathon.";

    document.getElementById("message").style.fontWeight = "bold";

    this.reset();

});