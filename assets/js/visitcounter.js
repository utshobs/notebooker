if (typeof Storage !== "undefined") {
  if (localStorage.visitcount) {
    document.getElementById("cresult").innerHTML =
      "👤 " +
      localStorage.visitcount +
      " times. ";
    localStorage.visitcount = Number(localStorage.visitcount) + 1;
  } else {
    localStorage.visitcount = 1;
    document.getElementById("cresult").innerHTML =
      "This is your first time here! Welcome.";
  }
  // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
   alert("Sorry, your browser does not support web storage.  Changes will not be saved");
  document.getElementById("cresult").innerHTML =
    "Sorry, your browser does not support web storage...";
}

console.log("localstorage visit count now: " + localStorage.visitcount);