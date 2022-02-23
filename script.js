function pegarDados(){
   document.querySelector(".esconder").style.display = "block";

   let row = document.querySelector("hr"); 
    row.classList.add("show"); 

   let camText = document.getElementById("texto").value;
   document.getElementById("campotexto").innerHTML = ("Seu nome é: " + camText);
   let camSenha = document.getElementById("senha").value;
   document.getElementById("camposenha").innerHTML = ("A senha digitada foi: " +camSenha);
   let camTel = document.getElementById("fone").value;
   document.getElementById("campofone").innerHTML = ("Número de Telefone: " + camTel);
   let camEmail = document.getElementById("e-mail").value;
   document.getElementById("campoemail").innerHTML = ("E-mail: " + camEmail);
   
   
   if(document.getElementById("pw").checked){
	   document.getElementById("campoinfo").innerHTML = ("Curso Básico: Programação Web");
	 }if(document.getElementById("poo").checked){
	 	  document.getElementById("campoadm").innerHTML = ("Curso Básico: Programação Orientada a Objetos");
     }if(document.getElementById("nr").checked){
     document.getElementById("campoenf").innerHTML = ("Curso Básico: Noções de Robótica");
    }
   
   
   if(document.getElementById("info2").checked){
	   document.getElementById("camporadio").innerHTML = ("Curso Avançado: Informática");
	 }else if(document.getElementById("adm2").checked){
	 	       document.getElementById("camporadio1").innerHTML = ("Curso Avançado: Administração");
     }else if(document.getElementById("enf2").checked){
             document.getElementById("camporadio2").innerHTML = ("Curso Avançado: Enfermagem");
     }

   let camNum = document.getElementById("num").value;
   document.getElementById("camponum").innerHTML = ("Número preferido: " + camNum);
   let camData = document.getElementById("data").value;
   document.getElementById("campodata").innerHTML = ("Data: " + camData);
   let camHora = document.getElementById("hora").value;
   document.getElementById("campohora").innerHTML = ("Hora: " + camHora);
   let pFaixa = document.getElementById("priFaixa").value;
   document.getElementById("campofaixa").innerHTML = ("Cor preferida: " + pFaixa);
   let camRange = document.getElementById("range").value;
   document.getElementById("camporange").innerHTML = ("Sua avaliação: " + camRange);
   

}