
function consultaCep() {

    var cep = document.getElementById("cep").value;
    var url = ("http://viacep.com.br/ws/" + cep + "/json/");

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ddd").html(response.ddd);
            $("#tituloCep").html("CEP " + response.cep);
            // $(".cep").show();
        }
    })
}

/*
$(function () {
    $(".cep").hide();
})
*/
