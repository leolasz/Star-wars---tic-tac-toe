/////step 1  - create function for TURN VADER FIRST!
var turn = 'o';
///// step 2 - create function for RESULT 
function updateResult() {
	if(turn == 'o') {
		$('.result img').attr('src', 'o.png');
	} else {
		$('.result img').attr('src', 'x.png');
	}
}

/// step 4 = create a function for verify winner
function verifyWinnwer() {
	var a1 = $('.a1').attr('data-marked');
	var a2 = $('.a2').attr('data-marked');
	var a3 = $('.a3').attr('data-marked');

	var b1 = $('.b1').attr('data-marked');
	var b2 = $('.b2').attr('data-marked');
	var b3 = $('.b3').attr('data-marked');

	var c1 = $('.c1').attr('data-marked');
	var c2 = $('.c2').attr('data-marked');
	var c3 = $('.c3').attr('data-marked');
///step 5 - create standards for win ( I created 8 standards of possibilities to win the game )
	var winner = '';

	for(var i = 0; i <= 1; i++) {
		if(i == 0) {
			var op = 'o';
		} else {
			var op = 'x';
		}

		if(a1 == op && b1 == op && c1 == op) {
			winner = op;
		}
		else if(a2 == op && b2 == op && c2 == op) {
			winner = op;
		}
		else if(a3 == op && b3 == op && c3 == op) {
			winner = op;
		}
		else if(a1 == op && a2 == op && a3 == op) {
			winner = op;
		}
		else if(b1 == op && b2 == op && b3 == op) {
			winner = op;
		}
		else if(c1 == op && c2 == op && c3 == op) {
			winner = op;
		}
		else if(a1 == op && b2 == op && c3 == op) {
			winner = op;
		}
		else if(c1 == op && b2 == op && a3 == op) {
			winner = op;
		}
	}
/// step 6 create alert for the winner using tag alert or in DRAW CASES
	if(winner != '') {
		if(winner == 'o') {
			alert("THE DARK SIDE WINS");
		} else {
			alert("MASTER YODA WINS");
		}

		$('.area').html('');
		$('.area').attr('data-marked', '');
	}
	/// step 7 - create func in DRAW CASES
	else if(a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '') {
		alert("OWW DRAW!");
		$('.area').html('');
		$('.area').attr('data-marked', '');
	}

}
/// step 3  -  create functions with area(s) for click  base area in html
$(function(){

	updateResult();

	$('.area').bind('click', function(){

		if( $(this).find('img').length == 0 ) {

			if(turn == 'o') {
				$(this).html('<img src="o.png" border="0" height="60" />');
				$(this).attr('data-marked', 'o');
				turn = 'x';
			} else {
				$(this).html('<img src="x.png" border="0" height="60" />');
				$(this).attr('data-marked', 'x');
				turn = 'o';
			}

			$('#saber')[0].play();
			

			updateResult();

			verifyWinnwer();
		}

	});

});