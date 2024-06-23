$("#btn-success").click(function () {
    Swal.fire(
        "Congratulation",
        "Your order has been saved.",
        "success"
    );
});

$("#btn-error").click(function () {
    Swal.fire(
        "Unsuccessfull",
        "There is an error, please try again",
        "error"
    );
});

$("#btn-warning").click(function () {
    Swal.fire(
        "Warning",
        "You cann't undo this action!",
        "warning"
    );
});

$("#btn-info").click(function () {
    Swal.fire(
        "",
        "Please be patient",
        "info"
    );
});

$("#btn-question").click(function () {
    Swal.fire({
        title: "Are you sure?",
        text: "You cann't undo this action",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#f44336",
        cancelButtonColor: "#777",
        confirmButtonText: "Yse, remove it"
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                "Cancelled",
                "Your imaginary file is safe :)",
                "error"
            );
        }
    });
});

$("#btn-timer").click(function () {
    Swal.fire({
        title: "Automatic Close",
        text: "It'll close after 2 seconds",
        timer: 2000
    });
});

$("#btn-simple").click(function () {
    Swal.fire("Reference Code Is: 1024");
});