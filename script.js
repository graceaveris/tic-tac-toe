

// first player is declared
let player = "X";
let turnCounter = 0;

// attach event handler each box, returns all boxes / WORKING
let boxes = document.querySelectorAll("td");



// event function to place x / o, and to switch the player
boxes.forEach(function(box) {
	box.onclick = function(event) {

   // replace the default text, and switch player turns / WORKING
	if (event.target.innerHTML == "pick me!") {
	        (event.target.innerHTML = player);
             // I moved ++ up here, so it only adds to the counter if the tile hasnt been played yet.
		     turnCounter++;  {
		
                if (player == "X") {
		           player = "O";
		           header.innerHTML = ('Next Turn: ' + player);
					
	            } else if (player = "X") {
		           player = "X";
			 	   header.innerHTML = ('Next Turn: ' + player);
		        }	
	        }		
        }
	   // call chekwin to check the outcome
       checkWin();
    }
})



// Function to reset the game
function resetGame() {
   	location.reload();
}



// CheckWin
function checkWin () {
   const tableSpace = document.getElementById("tablespace");

        if (boxes[0].innerHTML !== "pick me!" && boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML) {
	       header.innerHTML = ('Player ' + player + ' is a loser!');
	       tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
        } else if (boxes[3].innerHTML !== "pick me!" && boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML) {
	       header.innerHTML = ('Player ' + player + ' is a loser!');
	       tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
        } else if (boxes[6].innerHTML !== "pick me!" && boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML) {
	       header.innerHTML = ('Player ' + player + ' is a loser!');
	       tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
	    } else if (boxes[0].innerHTML !== "pick me!" && boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML) {
	       header.innerHTML = ('Player ' + player + ' is a loser!');
	       tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
	    } else if (boxes[1].innerHTML !== "pick me!" && boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML) {
	       header.innerHTML = ('Player ' + player + ' is a loser!');
	       tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
	    } else if (boxes[2].innerHTML !== "pick me!" && boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML) {
    	    header.innerHTML = ('Player ' + player + ' is a loser!');
	        tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
        } else if (boxes[2].innerHTML !== "pick me!" && boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML) {
	        header.innerHTML = ('Player ' + player + ' is a loser!');
	        tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
        } else if (boxes[0].innerHTML !== "pick me!" && boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML) {
	        header.innerHTML = ('Player ' + player + ' is a loser!');
	        tablespace.innerHTML = '<img src=./images/man-crying.jpg>';
	    } else if (turnCounter >= 9) {
	        header.innerHTML = "TIED GAME";		
        } else {
	  	console.log("what?")
	  }
    }

