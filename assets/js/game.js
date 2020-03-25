$('document').ready(function () {
  var randomNumber = Math.floor(Math.random() * 101 + 19);
  $('#random_number').text(randomNumber);

  var rubyRandomNumber = Math.floor(Math.random() * 11 + 1);
  var diamonRandomNumber = Math.floor(Math.random() * 11 + 1);
  var amberRandomNumber = Math.floor(Math.random() * 11 + 1)
  var jadeRandomNumber = Math.floor(Math.random() * 11 + 1);

  var totalScore = 0;
  $('#total_score').text(totalScore);

  var wins = 0;
  $('#wins').text(wins);

  var losses = 0;
  $('#losses').text(losses);

  function reset() {
    randomNumber = Math.floor(Math.random() * 101 + 19);
    $('#random_number').text(randomNumber);
    rubyRandomNumber = Math.floor(Math.random() * 11 + 1);
    diamonRandomNumber = Math.floor(Math.random() * 11 + 1);
    amberRandomNumber = Math.floor(Math.random() * 11 + 1)
    jadeRandomNumber = Math.floor(Math.random() * 11 + 1);
    totalScore = 0;
    $('#total_score').text(totalScore);
  }

  function winner() {
    wins++;
    $('#wins').text(wins);
    reset();
  }

  function loser() {
    losses++;
    $('#losses').text(losses);
    reset();
  }


  $('.ruby').on('click', function () {
    totalScore += rubyRandomNumber;
    $('#total_score').text(totalScore);
    if (totalScore == randomNumber) {
      winner();
    }
    else if (totalScore > randomNumber) {
      loser();
    }
  });


  $('.diamond').on('click', function () {
    totalScore += diamonRandomNumber;
    $('#total_score').text(totalScore);
    if (totalScore == randomNumber) {
      winner();
    }
    else if (totalScore > randomNumber) {
      loser();
    }
  });

  $('.amber').click(function () {
    totalScore += amberRandomNumber;
    $('#total_score').text(totalScore);
    if (totalScore == randomNumber) {
      winner();
    }
    else if (totalScore > randomNumber) {
      loser();
    }
  });

  $('.jade').on('click', function () {
    totalScore += jadeRandomNumber;
    $('#total_score').text(totalScore);
    if (totalScore == randomNumber) {
      winner();
    }
    else if (totalScore > randomNumber) {
      loser();
    }
  });

});

