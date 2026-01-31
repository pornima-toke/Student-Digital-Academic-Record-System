function sendOTP() {
    let aadhaar = document.getElementById("aadhaar").value;

    if (aadhaar.length !== 12) {
        alert("Please enter valid 12-digit Aadhaar number");
        return;
    }

    document.getElementById("otpSection").style.display = "block";
    document.getElementById("msg").innerText =
        "OTP sent to Aadhaar-linked mobile number (Demo OTP: 123456)";
}
