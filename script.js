var counterElement = document.getElementById("counter");
var incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function() {
	var currentValue = parseInt(counterElement.innerText);

    alert("Un-incremented value: " + currentValue);

    counterElement.innerText = currentValue + 1;
});

