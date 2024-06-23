var tableMain = $('#data-table').DataTable({
    "columnDefs": [{
      "targets": 4,
      "orderable": false,
      "width": "auto" // or set a specific percentage value, e.g., "width": "80%"
    }],
    "pageLength": 25
  });