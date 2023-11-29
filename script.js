const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

incrementButton.addEventListener('click', () => {
	const currentValue = parseInt(counterElement.innerText, 10);
	
	alert(`Un-incremented Value: ${currentValue}`);
	
	counterElement.innerText = currentValue + 1;
    });