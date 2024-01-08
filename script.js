let button = document.getElementById('incrementBtn');
button.addEventListener('click', function() {
			let counter = document.getElementById("counter");
            let count = parseInt(counter.innerText);
            alert(count);
            counter.innerText = count + 1;
});