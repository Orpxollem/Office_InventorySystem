$(document).ready(function() {
    $('form[name=signin_form]').submit(function(e) {
        e.preventDefault();

        var formData = {
            staffId: $("input[name='staffId']").val(),
            password: $("input[name='password']").val()
        };

        $.ajax({
            url: "http://localhost:5000/signin",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function(resp) {
                console.log(resp);
            },
            error: function(resp) {
                console.log(resp);
            }
        });
    });
});