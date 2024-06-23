function generateLayout(layout, layoutTitle) {
    noty({
        text: layoutTitle,
        type: "alert",
        dismissQueue: true,
        layout: layout,
        timeout: 5000,
        theme: "flat"
    });
}

function generateType(type, text) {
    var notyObj = noty({
        text: text,
        type: type,
        dismissQueue: true,
        timeout: 5000,
        layout: "topRight",
        closeWith: ["click"],
        maxVisible: 10,
        theme: "flat"
    });
    return notyObj;
}

function generateWithButtons() {
    noty({
        text: "Do you want to continue",
        type: "alert",
        dismissQueue: true,
        layout: "center",
        theme: "flat",
        buttons: [
            {addClass: "btn btn-primary btn-round", text: "OK", onClick: function($noty) {
                    $noty.close();
                    noty({dismissQueue: true, force: true, layout: "center", theme: "flat", text: "You clicked 'OK'", type: "success"});
                }
            },
            {addClass: "btn btn-danger btn-round", text: "Cancel", onClick: function($noty) {
                    $noty.close();
                    noty({dismissQueue: true, force: true, layout: "center", theme: "flat", text: "You clicked 'Cancel'", type: "error"});
                }
            }
        ]
    });
}


$(".btn-noty").click(function() {
    layout = $(this).attr("data-layout");
    text = $(this).attr("data-text");

    generateLayout(layout, text);
});

$(".btn-noty-type").click(function() {
    type = $(this).attr("data-type");
    generateType(type, "Your custom text...");
});

$(".btn-noty-with-buttons").click(function() {
    generateWithButtons();
});
