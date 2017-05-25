$("#contact-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        // formError();
        submitMSG(false, 'Did you fill in the form properly?');
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
              // formError();
              submitMSG(false, text);
            }
        }
    });
}
function formSuccess(){
    $('#contact-form')[0].reset();
    submitMSG(true, 'Message Submitted!');
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "h4 text-center text-success";
    } else {
        msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
