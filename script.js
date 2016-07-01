function funct()
		{
			
			var password=document.getElementById("password").value;
					if(password.length<8)
						document.getElementById("password").style.borderColor='red';
						


			var cnfrmpass=document.getElementById("cnfrmpass").value;
					if(password!=cnfrmpass || cnfrmpass=="")
						document.getElementById("cnfrmpass").style.borderColor='red';


			var currency=document.getElementById("currency").value;
					if(currency=="Make a Selection")
						document.getElementById("currency").style.borderColor='red';


			var phone=document.getElementById("phone").value;	
					if(phone==null || phone=="" || isNaN(phone) || phone.length!=11 )
						document.getElementById("phone").style.borderColor='red';


			var mobile=document.getElementById("mobile").value;
					if(mobile==null || mobile=="" || isNaN(mobile) || mobile.length!=10 )
						document.getElementById("mobile").style.borderColor='red';


			var fname=document.getElementById("fname").value;
					if(fname==null || fname=="")
						document.getElementById("fname").style.borderColor='red';


			var lname=document.getElementById("lname").value;
					if(lname==null || lname=="")
						document.getElementById("lname").style.borderColor='red';


			var dob=document.getElementById("dob").value;
					if(dob==null || dob=="")
						document.getElementById("dob").style.borderColor="red";


			var email=document.getElementById("email").value;
					if(email==null || email=="")
						document.getElementById("email").style.borderColor="red";


			var radio=document.getElementById("radio").value;
					for(var i=0;i<radio.length;i++)
							if(!radio[i].checked)
								document.getElementById("error").innerHTML="Select any of the fields";


		}
