function generate(){

  
  // var complexity = document.getElementById("slider").value;

  var complexity = document.getElementById("slider").value;
  //console.log(complexity);
  var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  var password = "";

  
  for(var i = 0; i <= complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  
  document.getElementById("display").value = password;

  // copyBtn.removeAttribute("disabled");
  
  copyBtn.focus();

}


function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");

}

document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 1";
  }

}