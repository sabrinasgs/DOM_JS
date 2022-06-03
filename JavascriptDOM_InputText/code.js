 const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

function clickButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();
   
    try {
    fr.readAsText(arquivo.files[0]); //Essa função é capaz de detectar todas as informações do arquivo
    fr.onload=function(){
      info = fr.result;
      console.log(info);
      document.getElementById('output').textContent=fr.result;
    }
    if (info == ""){
      throw 'Não foi possivel ler o arquivo selecionado.'; //Lança uma excessão para o Try
      }
}
    catch(erro) {
    console.log(erro);
    alert(erro);
}
    finally { //Sempre vai acontecer, independente do Try ou do Catch ser realizado
    alert("Obrigado pela visita!");
}      
}


