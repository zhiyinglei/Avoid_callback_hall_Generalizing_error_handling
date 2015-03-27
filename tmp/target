var fs = require("fs");
var path = require("path");


var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");

//  version one
// fs.mkdir(dir, function(err){
// 	if(err){
// 		handleError(err);
// 	}
// 	else{
// 		fs.readFile(source, function(err, data){
// 			if(err){
// 				handleError(err);
// 			}
// 			else{
// 				fs.writeFile(target, data, function(err){
// 					if (err) {
// 						handleError(err);
// 					}
// 					else{
// 						console.log("all done");
// 					}
// 				});
// 			}
// 		});
// 	}

// });


///////////////////////////// version two
// fs.mkdir(dir, mkdirCB);

// function mkdirCB(err){
// 	if(err){
// 		handleError(err);
// 	}
// 	else{
// 		fs.readFile(source, readFileCB);
// 	}
// }

// function readFileCB(err, data){
// 	if(err){
// 		handleError(err);
// 	}
// 	else{
// 		fs.writeFile(target, data, writeFileCB);
// 	}
// }

// function writeFileCB(err){
// 	if (err) {
// 		handleError(err);
// 	}
// 	else{
// 		console.log("all done");
// 	}
// }


fs.mkdir(dir, handlingError(mkdirCB));

function mkdirCB(){
	fs.readFile(source, handlingError(readFileCB));
}

function readFileCB(data){
	fs.writeFile(target, data, handlingError(writeFileCB));
}

function writeFileCB(){
	console.log("all done");
}

function handlingError(cb){
	return function(err, result){
		if(err){
			handleError(err);
		}
		else{
			cb(result);
		}
	}
}


function handleError(err){
	console.error(err);
}
