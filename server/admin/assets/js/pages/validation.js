$.validator.setDefaults({
    highlight: function (element) {
        $(element).closest('.form-group').addClass('has-error').removeClass("has-success");
    },
    unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass("has-success");
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function (error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#simple-form").validate();
$("#validate-form").validate();


$("#advanced-form").validate({
    rules: {
        firstname: "required",
        lastname: "required",
        username: {
            required: true,
            minlength: 2
        },
        password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        email: {
            required: true,
            email: true
        },
        agree: "required"
    },
    messages: {
        firstname: "Enter first name.",
        lastname: "Enter last name.",
        username: {
            required: "Username is required.",
            minlength: "Username must be at least 2 characters."
        },
        password: {
            required: "Enter password",
            minlength: "Password must be at least 2 characters."
        },
        confirm_password: {
            required: "Enter password confirm.",
            minlength: "Password must be at least 5 characters.",
            equalTo: "Passwords doesn't match"
        },
        email: "Enter an valid email",
        agree: "Check rules checkbox"
    },
    errorElement: "em",
    errorPlacement: function (error, element) {
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
            error.insertAfter(element.parents(".custom-checkbox"));
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element, errorClass, validClass) {
        $(element).parents(".col-12").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".col-12").addClass("has-success").removeClass("has-error");
    }
});
