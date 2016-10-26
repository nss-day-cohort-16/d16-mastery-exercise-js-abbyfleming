


/*---- GET / TEST THE INPUT ------ */

// function testInput(heightInput, charInput) {
// 	console.log("It's working! ", heightInput, charInput);
// 	console.log(input.height, input.character)
// }

function checkInput () {
	var heightInput = document.getElementById("heightInput").value;
	var charInput = document.getElementById("charInput").value;
	
	 if (heightInput && charInput){

		beautifulTree(heightInput, charInput);
	
	 } else {
			
			alert("Please enter a height & character.")
	 }
}

submit.addEventListener("click", checkInput, charInput);

/*------------------------*/



function beautifulTree (heightInput, charInput) {

for (var i = 0; i < (heightInput * 2); i++) {
	
	var prettyTree = "";
	prettyTree = charInput.repeat(i += 1);
	
	// var prettySpaces = "s";
	// prettySpaces = prettySpaces.repeat(heightInput - i);

	console.log(prettyTree);

};

}


/*

i : index number
h : height
s : space
* : character

i: 0 | h: 3 | s: 2 | *: 1
i: 1 | h: 3 | s: 1 | *: 3
i: 2 | h: 3 | s: 0 | *: 5


ss*    
s***   
*****  


*/


//console.log(theloop());




