function checkInput () {
	var getTree = { 
		height: document.getElementById("heightInput").value,
		character: document.getElementById("charInput").value
		};
	
	 if (heightInput && charInput){
		beautifulTree(getTree);
	 } else {	
		alert("Please enter a height & character.");
	 }
}


function beautifulTree (getTree) {
	for (i = 0; i < (getTree.height * 2); i++) {	
		var prettyTree = "";
		var prettySpaces = " ";		
		prettyTree = getTree.character.repeat(i += 1);
		prettySpaces = prettySpaces.repeat(getTree.height - i/2);
		console.log(prettySpaces, prettyTree);
	}
}

submit.addEventListener("click", checkInput);

document.getElementById("heightInput").addEventListener("keyup", function(e) {
 	if (e.keyCode == 13) {
	 checkInput();
	}
})

document.getElementById("charInput").addEventListener("keyup", function(e) {
 	if (e.keyCode == 13) {
	 checkInput();
	}
})
