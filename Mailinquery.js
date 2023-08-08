src="Include a script tag to https://smtpjs.com/v3/smtp.js"
        
            function sendEmail() {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "sabarijothi2000@gmail.com",
                    Password: "Yeshanth@8090",
                    To: 'kathirstuvad434dear@gmail.com',
                    From: document.getElementById("email").value,
                    Subject: "New contact formEnquiry",
                    Body: "Nmae"+document.getElementById("name").value+"<br> EMail:"+document.getElementById("email").value
                    +"<br> Phone Number"+document.getElementById("Phone").value+"<br> Messgae"+document.getElementById("message").value
                }).then(
                    message => alert("message sent successfully")
                );
            }
        