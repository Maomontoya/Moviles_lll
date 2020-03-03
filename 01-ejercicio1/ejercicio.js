let numberstudents=0;
let contmensystems=0;
let contmenfinance=0;
let contwomensystems=0;
let contwomenfinance=0;
let averagefinance=0;
let averagesystems=0;

function average(){
    let acumAverage=0;
    for(let i=0; i<5; i++){
        let note=prompt("Ingrese nota");
        acumAverage += note;
    }
    return acumAverage/5;
}

numberstudents=prompt("Número de estudiantes");
 for(let i=0; i<numberstudents; i++){
     let program = prompt("Ingrese programa");
     if(program=="Sistemas"){
         let sex = prompt("Ingrese su sexo");
         if(sex=="man"){
             contmensystems++;             
         }
     }
        else if(sex=="woman"){
         contwomensystems++;
     }
     averagesystems+=average();
     if(program=="finance"){
        let sex = prompt("Ingrese su sexo");
        if(sex=="man"){
            contmenfinance++;             
        }
    }
       else if(sex=="woman"){
        contwomenfinance++;
    }
    averagefinance+=average();     
 }