var fs = require("fs");

fs.readFile(__filename, {encoding:"utf8"}, read_print);

function read_print(err, data){
	if(err){
		console.error(err);
	}
	else{
		console.log(data);
	}

}
