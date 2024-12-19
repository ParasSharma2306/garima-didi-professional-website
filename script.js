let sendBtn = document.querySelector("#send-btn");

sendBtn.addEventListener("click", function() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "paras.127.0.0.1@gmail.com",
        Password : "DFECE68188BFCE0487AC9E1BFC6972C05FFF",
        To : "paras.127.0.0.1@gmail.com",
        From : "paras.127.0.0.1@gmail.com",
        Subject : "Enquiry",
        Body : "Name: " + document.querySelector("input.name").value
            + "<br/> " + "Email Address: " + document.querySelector("input.mail").value
            + "<br/> " + "Message: " + document.querySelector("textarea.area").value
    }).then(
      message => alert("Enquiry Sent!")
    );
})
