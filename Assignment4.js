var names= ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0;i<names.length;i++){
if(names[i][0]==="j"){
	name=name[i];

(function(name){
	console.log("goodBye "+names[i]);
})();
}else if(names[i][0]==="J"){

(function(name){
	console.log("goodBye "+names[i]);
})();
}
else{

(function(name){
	console.log("Hello "+names[i]);
})();

}
}