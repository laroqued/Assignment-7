/*eslint-env browser*/

//STEP 1
var myElement = window.document.getElementById("step1");
myElement.onclick = function () {
  "use strict";
  window.alert("I have been clicked");
};
//STEP 2

step2.addEventListener("click", writeMessage);
function writeMessage() {
  "use strict";
  window.alert("I have been clicked");
}
//STEP 3
window.document.addEventListener("DOMContentLoaded", init);  	
function init() {
    "use strict";	
    step3.addEventListener("click", function () {
        alert("I have been clicked");
    });	}


//STEP 4
function init2() {
  "use strict";

  var step4 = document.getElementById("step4");
  step4.addEventListener("click", function () {
    alert("I have been clicked");
  });
}

window.addEventListener("load", init2);



//STEP 5
window.document.addEventListener("DOMContentLoaded", init5, false);
function init5() {
  "use strict";
  step5.addEventListener(
    "click",
    function () {
      alert("I have been clicked");
    },
    false
  );
}