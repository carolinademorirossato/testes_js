// String
let carro = "Volvo";
document.getElementById("Cars").innerHTML = carro;

// Números
let numeros = 5.355;
document.getElementById("Number").innerHTML = numeros;

// Booleans
let x = true;
let y = false;
document.getElementById("Boolean").innerHTML = y;

// Imutabilidade
let empresa = "Nome da Empresa";
// substitui a aprte "Empresa" por "Sociedade"
empresa.replace("Empresa","Sociedade");
//document.write(empresa); // imprime Nome da Empresa, não mudou
empresa = empresa.replace("Empresa","Sociedade");
//document.write(empresa); // imprime Nome da Sociedade, mudou!

// Conversão
let textoInteiro = "10,";
let inteiro = parseInt(textoInteiro);
let textoFloat = "10.22,";
let float = parseFloat(textoFloat);
document.getElementById("Conversao").innerHTML = textoInteiro + textoFloat;
document.getElementById("ConversaoTrue").innerHTML = inteiro + float;


// Concatenação

// String com String
let pais = "Brasil ";
let estado = "- RS";
document.getElementById("Concat1").innerHTML = pais + estado;

// String com outro Tipo de Dado
let num1 = 2;
let num2 = 3;
let nome = "Brasil"
// Exemplo 1:
document.getElementById("Concat2").innerHTML =num1 + nome + num2;
// Exemplo 2:
document.getElementById("Concat3").innerHTML =num1 + num2 + nome;
// Exemplo 3:
document.getElementById("Concat4").innerHTML =nome + num1 + num2;
// Exemplo 4:
document.getElementById("Concat5").innerHTML =nome + (num1 + num2);
// Exemplo 5:
document.getElementById("Concat6").innerHTML =nome + num1 * num2;
// A multiplicação tem precedência

