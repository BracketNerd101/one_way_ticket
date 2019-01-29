function passWord() {
var testV = 1;
var pass1 = prompt('Portfolio is Private, Enter password',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "greenbutterfly") {
alert('Correct Click ok to see portfolio!');
window.open('fb_billing.html');
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}

// THis is for the different passWord

function passWord2() {
var testV = 1;
var pass1 = prompt('Portfolio is Private, Enter password',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "fiddle") {
alert('Correct Click ok to see portfolio!');
window.open('motion.html');
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}
