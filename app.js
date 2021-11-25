console.log("ola isso é um teste");

var intorduction = document.getElementById("introduction")

var project0 = document.getElementById("project0_description")
var project1 = document.getElementById("project1_description")
var project2 = document.getElementById("project2_description")
var project3 = document.getElementById("project3_description")
var project4 = document.getElementById("project4_description")
var project5 = document.getElementById("project5_description")



var introduction_text = `Hello my name is <b>Giovani Sant'Ana Pedroso</b>  I am graduated in electrical engineering 
by the University Nove de Julho, while I was improving my abilities I discovered the field of embedded systems which 
awaken my curiosity to explore the universe of the microcontrollers. Down below, you can see the projects that 
I developed in the platforms Arduino and Blue pill (STM32f103C8)
`

var indrocuçao_texto = `Ola meu nome é <b>Giovani Sant'Ana Pedroso</b> sou formado em engelharia elerica pela Universidade
 Nove de Julho, enquanto eu estava melhorando meus conhecimentos descobri o mundo dos sistemas embracados que despertou minha  
pelo universo dos microcontroladores. Abaixo você poder ver os projetos que eu desenvolvi nas plataformas Arduino e Blue pill (STM32f103C8)
`
var project0_description = `This was one of my first projects with the Arduino, a couple of servo motors
who move a laser in random directions for entertain of my cats, frequently I revisit this project to
make it works in other microcontrollers

` 
var dedescricao_projeto0=`Esse foi um dos meus primeiros projetos com a plataforma Arduido, dois servo motores que movem
um laser em direções aleatorias para o entreterimento dos meus gatos, eu frequentemente revisito esse projeto para portalo
para outros microcontroladores
`


var project1_description = `
` 

var dedescricao_projeto1=`
`

var project2_description = `
`

var dedescricao_projeto2=`
`

var project3_description= `
` 

var dedescricao_projeto3=`
`


var project4_description= `
` 

var dedescricao_projeto4=`
`

var project5_description= `
` 

var dedescricao_projeto5=`
`

function ptBr(){

    intorduction.innerHTML = indrocuçao_texto;
    project0.innerHTML = dedescricao_projeto0;
    project1.innerHTML = dedescricao_projeto1;  
    project2.innerHTML = dedescricao_projeto2;  
    project3.innerHTML = dedescricao_projeto3;  
    project4.innerHTML = dedescricao_projeto4;  
    project5.innerHTML = dedescricao_projeto5;
}

function enUs(){
    
    intorduction.innerHTML = introduction_text;
    project0.innerHTML = project0_description;
    project1.innerHTML = project1_description;  
    project2.innerHTML = project2_description;  
    project3.innerHTML = project3_description;  
    project4.innerHTML = project4_description;  
    project5.innerHTML = project5_description;
}




