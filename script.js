const names = ['Kyra', 'Bonie', 'Cara', 'Selena', 'Adam', 'Grace', 'Helen', 'Xavier', 
'Harry', 'Hanna', 'Sam', 'Kimmy', 'Evan', 'Kevin', 'Abdullah', 'Kai', 'Christian'];

let runOdd;

//we need to know if there will be one last group of 3 (in the even we have odd numebrs)
if (names.length % 2 !== 0){
	runOdd = true;
}
 else {
 	runOdd = false;
 }


//here's a function that will help us choose a random name, then remove it from the list
function selectRandom(){
    var n1 = Math.floor (Math.random() * names.length);
    var name = names[n1];
    names.splice(n1,1);
    return name;
}

//pair up function
function pairUp(){

    //first do we have an odd number of students?
        // YES
            // check if there are more than 3 remaining in the list
                //select 2 at random
                //add them to our partnerlist div
            // check if there are only 3
                // add them, they are index 0,1,2
        // NO
            // check to see that we have names remaining
                // add them to our parterlist div
        
 	if (runOdd = true) {
 		if (names.length > 3) {
 			var student1 = selectRandom();
 			var student2 = selectRandom();

 			document.getElementById("partnerlist").innerHTML +=student1 + " & " + student2 + '</br>';
 		}
 		else if(names.length == 3){
 			document.getElementById("partnerlist").innerHTML += names[0] + " & " + names[1] + " & " + names[2];
 			names.splice(0,3);
 		}

 		else {
 			if(names.length > 0){
 				var student1 = selectRandom();
 				var student2 = selectRandom();
 				document.getElementById("partnerlist").innerHTML += student1 + " & " + student2 + '</br>';
 			}
 		}
 	}
}