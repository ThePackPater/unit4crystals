
$(document).ready(function () {

	var targetNumber;
	var totalScore = "";
	var wins = "";
	var losses = "";
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;

	function newNumbers() {

		targetNumber = Math.floor(Math.random() * 110) + 13;
		crystal1Num = Math.ceil(Math.random() * 13);
		crystal2Num = Math.ceil(Math.random() * 13);
		crystal3Num = Math.ceil(Math.random() * 13);
		crystal4Num = Math.ceil(Math.random() * 13);

	}




	function newGame() {

		newNumbers();

		totalScore = 0;

		$("#targetNumber").text(targetNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Num);
		$("#crystal2").attr("data-crystalvalue", crystal2Num);
		$("#crystal3").attr("data-crystalvalue", crystal3Num);
		$("#crystal4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

	}

	function Win() {

		$("#winOrLose").text("YOU WON, BECASUE I LET YOU WIN!");

		wins++;

		if (wins === 3) {

			location.replace("congrats.html");

		}

		$("#wins").text(wins);

	}

	function lose() {

		$("#winOrLose").text("YOU LOST... DISSAPOINTING...");

		losses++;

		if (losses === 3) {

			location.replace("gameover.html");

		}

		$("#losses").text(losses);

	}

	newGame();


	$(".crystalimg").on("click", function () {



		if (totalScore >= targetNumber) {

			return;

		}

		var crystalValue = $(this).attr("data-crystalvalue");

		crystalValue = parseInt(crystalValue);

		totalScore += crystalValue;

		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {

			Win();

		} else if (totalScore > targetNumber) {

			lose();

		}

	});



	$("#btn").on("click", function () {

		newGame();

	});




});
