var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;


if (nome == "admin" && senha == 123){

window.open('first-page.html');
}
else{
	alert("Por favor digite um usuário válido");
}

function menudropdown() {
document.getElementById("tipos-descritivos").classList.toggle("show");

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
	openDropdown.classList.remove('show');
  }
}
}
} 
}
function entradadosdados(){
var splitados = new Array();
var i;
var repetidos = [];
var cont = new Array();
var dados = prompt("Digite os dados");
var j;
var contador = new Array();
contador = 0;
var controle;
var totalrep = 0;
  var fperc = new Array();

if (dados != ""){
	var splitados = dados.split(";");
}
if (isNaN(splitados[0]) == true){
	splitados.sort();
}
	else {
		splitados.sort((a, b) =>  a - b);
		
}

for (i = 0; i<splitados.length; i ++) {
	cont[i] = 0;
	for (j = 0; j<splitados.length; j++){
		if (splitados[i] == splitados[j]){
			cont[i] ++;
		}
		
	} 	
	totalrep = cont[i] + totalrep;
}





console.log(totalrep);
html += '</table>';
document.getElementById('tabela').innerHTML = html;
console.log(html);
}

function entrarnosite(){
var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;


if (nome == "admin" && senha == 123){

window.open('first-page.html');
}
else{
	alert("Por favor digite um usuário válido");
}
}
function menudropdown() {
document.getElementById("tipos-descritivos").classList.toggle("show");

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
	openDropdown.classList.remove('show');
  }
}
}
} 
}
function entradadosdados(){
var splitados = new Array();
var i;
var repetidos = [];
var cont = new Array();
var dados = prompt("Digite os dados");
var j;
var contador = new Array();
contador = 0;
var controle;
var totalrep = 0;
var fac = new Array();

  var fperc = new Array();

if (dados != ""){
	var splitados = dados.split(";");
}
if (isNaN(splitados[0]) == true){
	splitados.sort();
}
	else {
		splitados.sort((a, b) =>  a - b);
		
}

for (i = 0; i<splitados.length; i ++) {
	cont[i] = 0;
	for (j = 0; j<splitados.length; j++){
		if (splitados[i] == splitados[j]){
			cont[i] ++;
		}
		
	} 	
	totalrep = cont[i] + totalrep;
}

for (i = 0; i<splitados.length; i ++) {
     if ( splitados[i] >= splitados[1]){
		 fac += splitados[j] 
	    }
	else{
		 fac = splitados[j]

	}
}

var html = '<table id="tabela">  <tr> <th></th> <th>Fi</th> <th>F%</th> <th>FAC</th> <th>FAC%</th> </tr>'; 
	for(i=0; i <cont.length; i ++) {
		fperc[i] = Math.round(((cont[i] / totalrep) * 100));
			controle = 0;
			for(j = 0; j < splitados.length; j++){
				if (repetidos[j] == splitados[i]){
					controle = 1;
					
				}
			}
			if (controle == 0) {
				html += "<tr><td> " + splitados[i] + "<t/d><td> " + cont[i] + "<t/d><td>"  + fperc[i] + "<t/d><td>" + fac[i] + "<t/d><td>" + "<t/d><t/r>";
				repetidos[i] = splitados[i];

			}
			else{
				repetidos[i] = -1;

			}
		}

	
	
	console.log(totalrep);
	html += '</table>';
	document.getElementById('tabela').innerHTML = html;
	console.log(html);
}

