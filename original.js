  <script type="text/javascript">
    function sendEmail() {
	var subject = document.getElementById("subject").value;
	var name = document.getElementById("full-name").value; 
	var email = document.getElementById("email-address").value; 
	var type = document.getElementById("type").value;
	var detail = document.getElementById("message").value;
      Email.send({
        Host: "smtp.gmail.com",
        Username: "donotreply.schoolarchive@gmail.com",
        Password: "%harviv%",
        To: 'vivekkadre7@gmail.com, hachureddy@gmail.com',
        From: "VIVEK@Archive",
        Subject: subject,
        Body: "<h1>VIVEK Archive</h1><HR><br><P>Someone submitted an error form on VIVEK Archive.</P><BR><FIELDSET><BR><TABLE><TR><TD>Subject: <TD> </TD><TD>" + subject + "</TD></TR><TD>Name: </TD><TD> </TD><TD>" + name + "</TD></TR><TR><TD>Email: </TD> <TD> </TD><TD>" + email + "</TD></TR><TR><TD>Error Type: </TD><TD> </TD><TD>" + type + "</TD></TR><TR><TD>Details: </TD><TD> </TD><TD>" + detail + "</TD></TR><BR></FIELDSET><BR><HR><BR><P>For use by VIVEK Archive only. <BR>This email was sent to you because someone submitted an error form on VIVEK Archive.",
      })
        .then(function (message) {
          window.location.replace("./thankyou/3.htm");
        });
    }
  </script>