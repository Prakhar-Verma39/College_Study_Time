function validateForm()
{
/* Answer N0.2 */
let fname = document.forms["myForm"]["fullName"].value;
let doa = document.forms["myForm"]["DateofBirth"].value;
let Add = document.forms["myForm"]["Address"].value;

if(fname.length == 0)
{
window.alert('Full Name cannot be empty.');
document.forms["myForm"]["fullName"].focus();
return false;
}
if(doa.length == 0)
{
window.alert('Date of Birth cannot be empty.');
return false;
}
if(Add.length == 0)
{
window.alert('Address cannot be empty.');
document.forms["myForm"]["Address"].focus();
return false;
}
/* Answer N0.3 */
let mobile = document.forms["myForm"]["Mobile Number"].value;
let mail = document.forms["myForm"]["EMail"].value;

if(mobile.length==0)
{
window.alert('Mobile number cannot be empty.');
document.forms["myForm"]["Mobile Number"].focus();
return false;
}
else if(!(/^\d{4,15}$/.test(mobile)))
{
window.alert('Enter a valid mobile number.');
document.forms["myForm"]["Mobile Number"].focus();
return false;
}

let regex =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(mail.length==0)
{
window.alert('eMail cannot be empty.');
document.forms["myForm"]["EMail"].focus();
return false;
}
else if(!(regex.test(mail)))
{
window.alert('Enter a valid email address.');
document.forms["myForm"]["EMail"].focus();
return false;
}
/* Answer No.4 */
let exp = document.getElementById("Experience").value;
let sug = document.getElementById('Suggestions').value;

if(exp.split(' ').length > 250)
{
window.alert('Maximum 250 words are allowed.');
document.getElementById("Experience").focus();
return false;
}
if(sug.split(' ').length > 250)
{
window.alert('Maximum 250 words are allowed.');
document.getElementById("Suggestions").focus();
return false;
}

let testEmpty = document.getElementById('photo');
if (testEmpty.files.length == 0)
{
window.alert('Photograph cannot be Empty.');
return false;
}
}

/* Answer No.5 */

function filecheckup(event)
{
let pic = document.forms["myForm"]["photograph"].value;
let fi = document.getElementById('photo');

let exx=pic.split('.').pop().toLowerCase();
if(!(exx == "jpg" || exx == "jpeg" || exx == "png"))
{
window.alert('Photo of only JPG,JPEG and PNG are allowed.');
document.getElementById("done").disabled = true;
}
else if ((fi.files.item(0).size / 1024 / 1024) > 5)
{
window.alert('File size must be less than 5 MB.');
document.getElementById("done").disabled = true;
}
else{
let chg = document.getElementById("changePhoto");
chg.src=URL.createObjectURL(event.target.files[0]);
document.getElementById("done").disabled = false;
}
}
function restart()
{
document.getElementById("done").disabled = false;
document.getElementById('changePhoto').src="upload.jpg";
}
