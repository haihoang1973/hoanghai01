

// Bạn có thể lấy giá trị của form theo cách hiện tại hoặc cách đang được comment
function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
    // var fname = document.getElementById("fname").value;
    var sname = document.forms["contactForm"]["sname"].value;
    // var sname = document.getElementById("sname").value;
    var validate = document.forms["contactForm"]["validate"].value;
    // var validate = document.getElementById("validate").value;
 
    if (fname == null || fname == "") {
        alert("First name must be filled out");
        return false;
    } else if (sname == null || sname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (isNaN(validate) || validate != 6) {
        alert("You're either a spammer or can't add");
      return false;
    }
  alert('ok, redirect to https://nguyenvanhieu.vn');
  window.location.href = "https://nguyenvanhieu.vn";
}