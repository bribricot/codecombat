function debug(params) {

if (params.typeof === "number")
	console.log("number");
else if (params.typeof === "string")
	console.log("string");
else if (params.typeof === "boolean")
	console.log("boolean");
else if (params.typeof === "undefined")
	console.log("undefined");
else if (params.typeof === "none")
	console.log("none");
}

if (hero.findNearestEnemy() != None)