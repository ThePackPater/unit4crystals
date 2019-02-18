
$(document).ready(function() {

	var magicNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;

	function newNumbers() {

		magicNumber = Math.floor(Math.random() * 110) + 20;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);

	}

	function newGame() {

		newNumbers();

		totalScore = 0;

		$("#magicNumber").text(magicNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Num);
		$("#crystal2").attr("data-crystalvalue", crystal2Num);
		$("#crystal3").attr("data-crystalvalue", crystal3Num);
		$("#crystal4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);

	}

	function youWin() {

		$("#winOrLose").text("YOU WIN!");

		wins++;

		$("#wins").text(wins);

	}

	if (wins > 5) {

		location.replace("congrats.html")
	
	}

	function youLose() {

		$("#winOrLose").text("YOU LOSE, DISSAPOINTING...");

		losses++;

		$("#losses").text(losses);

  }
  
  if (losses > 5) {

    location.replace("gameover.html")

}

	newGame();

	$(".crystalimg").on("click", function() {

		if (totalScore >= magicNumber) {

			return;

		}

		var crystalValue = $(this).attr("data-crystalvalue");

		crystalValue = parseInt(crystalValue);

		totalScore += crystalValue;

		$("#totalScore").text(totalScore);

		if (totalScore === magicNumber) {

			youWin();

		} else if (totalScore > magicNumber) {

			youLose();

		}

	});


	$(".btn").on("click", function() {

		newGame();

	});

});