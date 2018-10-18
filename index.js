var d = new Date('10/10/2018');
var a = new Date();

var resta = a.getTime() -  d.getTime();
var result = resta / 1000 / 60 / 60 / 24;


console.log(result.toFixed(0));

function delta(){
    if(result > 3){
        return "late"
    }else{
        return "on-time"
    }
}
delta()