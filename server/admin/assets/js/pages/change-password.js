$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.input-group').addClass('has-error').removeClass("has-success");
    },
    unhighlight: function(element) {
        $(element).closest('.input-group').removeClass('has-error').addClass("has-success");
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$( "#form" ).validate( {
    rules: {
        old_password: {
            required: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        }
    },
} );