/*jshint multistr:true */

var text = "This is a Javascript exercise that requires put\
Grey is my name, I'm practicing some kind Grey of thing with javascript. Till now I think Grey is normal";
var myName = "Grey";
var hits = [];
for(var i = 0; i< text.length;i++){
    if(text[i] === myName[0]){
        for(var j=i;j<i+myName.length;j++){
            hits.push(text[j]);
            }
        }
    
    }
if(hits.length === 0){
     console.log("Your name wasn't found!");
     
    }else{
        console.log(hits);
        }