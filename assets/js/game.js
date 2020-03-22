$('document').ready(function () {

  // generate random number between 19 and 120 and assign it to a variable
  var randomNumber = Math.floor(Math.random() * 101 + 19);
  // show the random number on screen
  $('#random_number').text(randomNumber);

  // generate random number for each crystal and assign it to a variable
  var rubyRandomNumber = Math.floor(Math.random() * 11 + 1);
  var diamonRandomNumber = Math.floor(Math.random() * 11 + 1);
  var amberRandomNumber = Math.floor(Math.random() * 11 + 1)
  var jadeRandomNumber = Math.floor(Math.random() * 11 + 1);

  // initial counter values
  var totalScore = 0;
  $('#total_score').text(totalScore);

  var wins = 0;
  $('#wins').text(wins);

  var losses = 0;
  $('#losses').text(losses);

  // ====================== functions ======================
  // reset function 
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

  // winner function
  function winner() {
    wins++;
    $('#wins').text(wins);
    reset();
  }

  // loser function
  function loser() {
    losses++;
    $('#losses').text(losses);
    reset();
  }

  //===========================================================
  // click function for ruby crystal
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

  // click function for diamond crystal
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

  // click function for amber crystal
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

  // click function for jade crystal
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

