function myFunction() {
    // Get the checkbox
    var check1 = document.getElementById("pre");
    var check2 = document.getElementById("during");
  
    // Get the output text
    var text1 = document.getElementById("preImplementation");
    var text2 = document.getElementById("duringImplementation");
  
    // If the checkbox is checked, display the output text
    if (check1.checked == true && check2.checked == false){
      text1.style.display = "block";
      text2.style.display = "none";
    } else if (check1.checked == false && check2.checked == true) {
      text1.style.display = "none";
      text2.style.display = "block";
    } else {
      text1.style.display = "none";
      text2.style.display = "none";
    }
  }
  