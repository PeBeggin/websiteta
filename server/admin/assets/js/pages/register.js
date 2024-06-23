$( "#advanced-form" ).validate( {
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
    errorElement: "em",
    errorPlacement: function(error, element) {
        error.addClass( "help-block" );
        
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        }else if( element.prop( "type" ) === "checkbox" ){
            error.insertAfter( element.parent( "label" ) );
        }else {
            error.insertAfter(element);
        }
    },

    highlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
    }
} );