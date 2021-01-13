
function consultacep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#titulocep").html("CEP " + response.cep);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //$("#bairro").html(response.bairro);
            //alert(response.logradouro);
        }
    })
}