$('.has-datepicker').datepicker({
    defaultDate: new Date(1985, 00, 01),
    changeMonth: true,
    changeYear: true,
    dateFormat: 'yy-mm-dd',
    yearRange: '-70:-1'
});

$(".has-datepicker-now").each(function() {    
    $(this).datepicker({dateFormat: 'yy-mm-dd'});
});
        