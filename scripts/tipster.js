function calculateTip() {

// Determine if check is a number

  var check = +document.getElementById("check").value;

  if (isNaN(check)) {
    $("#error").show();
    return;
  } else {
    $("#error").hide();
  };

// Mood switch statement

  var mood = document.getElementById("mood").value;
  var percentage;

  switch (mood) {
  case "hostile":
    percentage = .1;
  break;
  case "cranky":
    percentage = .125;
  break;
  case "default":
    percentage = .15;
  break;
  case "chipper":
    percentage = .175;
  break;
  case "generous":
    percentage = .2;
  break;
  };

// Tip base conditional statement

  var bases = document.forms["main-form"].tipbase;

  for (var i = 0; i < bases.length; i++)
    if (bases[i].checked) {
      percentage += (i * .025);
    };

// Cute server coniditional statement

  if (document.getElementById("cute").checked) {
    percentage += .1;
  };

// Calculate tip and total

  var tip = check * percentage;
  var total = check + tip;

// Display results

  document.getElementById("tip").value = "$" + tip.toFixed(2);
  document.getElementById("total").value = "$" + total.toFixed(2);

}; // end of calculateTip

//Show and hide settings menu

$(document).ready(function() {

  $("#error").hide();

  $("#open-settings").click(function() {
    $("#settings-menu").fadeIn(100);
  });

  $("#close-settings").click(function() {
    $("#settings-menu").fadeOut(100);
  });

});