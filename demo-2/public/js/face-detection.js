// @ts-nocheck
function processImage() {
  // ==> Aqui você deverá alterar a chave criada no Portal Azure.
  const subscriptionKey = '';

  // ==> Aqui você deverá alterar o endpoint criado no Portal Azure
  const uriBase = "";

  // ==> Aqui estamos fazendo a requisão dos parâmetros
  const params = {
    returnFaceId: "true",
    returnFaceLandmarks: "false",
    returnFaceAttributes:
      "age,gender,headPose,smile,facialHair,glasses,emotion," +
      "hair,makeup,occlusion,accessories,blur,exposure,noise"
  };

  // ==> Aqui iremos exibir a imagem no browser
  const sourceImageUrl = document.getElementById("inputImage").value;
  document.querySelector("#sourceImage").src = sourceImageUrl;

  // ==> Requisições do Face API via Ajax 
  $.ajax({
    url: uriBase + "?" + $.param(params),

    beforeSend: function(xhrObj) {
      xhrObj.setRequestHeader("Content-Type", "application/json");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    },

    type: "POST",

    data: '{"url": ' + '"' + sourceImageUrl + '"}'
  })

    .done((data) => {
      // ==> Saída da informação via Json no 'TextArea'
      $("#responseTextArea").val(JSON.stringify(data, null, 2));
    })

    .fail((jqXHR, textStatus, errorThrown) => {
      const errorString =
        errorThrown === ""
          ? "Error. "
          : errorThrown + " (" + jqXHR.status + "): ";
      errorString +=
        jqXHR.responseText === ""
          ? ""
          : jQuery.parseJSON(jqXHR.responseText).message
          ? jQuery.parseJSON(jqXHR.responseText).message
          : jQuery.parseJSON(jqXHR.responseText).error.message;
      alert(errorString);
    });
}
