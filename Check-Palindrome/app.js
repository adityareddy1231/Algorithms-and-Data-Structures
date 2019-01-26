var s = "ABCCBA";

function checkPalindrome(randomString){
  var chars = randomString.split("");
  console.log(chars);
  var newString = "";
  for (var i = chars.length - 1; i >= 0 ; i--) {
    newString = newString + chars[i];
  }
  if (newString == s) {
    console.log("Palindrome");
  }
  else {
    console.log("Not");
  }
}

checkPalindrome(s);
