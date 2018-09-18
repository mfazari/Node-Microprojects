process.on('exit', function(code) {

	// Following Code will never execute
	setTimeout(function(){

		console.log("This will not run");
	}, 0);

	console.log('About to exit with code:', code);

});

console.log("Program Ended");