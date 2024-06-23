$(".select2").select2({
    rtl: ($("html").attr("dir") == "rtl") ? true : false
});
$(".select2.round").select2({
    rtl: ($("html").attr("dir") == "rtl") ? true : false,
    containerCssClass: "round"
});
$(".select2.curve").select2({
    rtl: ($("html").attr("dir") == "rtl") ? true : false,
    containerCssClass: "curve"
});

$(".allow-cancel").select2({
    rtl: ($("html").attr("dir") == "rtl") ? true : false,
    allowClear: true,
    placeholder: {
        id: "",
        placeholder: "..."
    }
});
        