$(document).ready(function () {
    var $campoCpf = $("#loginCpf");
    $campoCpf.mask('000.000.000-00', { reverse: true });
});

$(document).ready(function () {
    var $campoCnpj = $("#loginCnpj");
    $campoCnpj.mask('00.000.000/0000-00', { reverse: true });
});

