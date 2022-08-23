export function showError(event) {
	// Each time the user types something we check if the form fields are valid
	const element = event.target || event;

	if (element.type === 'text') {
		if (element.validity.valid) {
			// In case there is an error message visible,
			// and the field is valid, remove the error message
			removeError(element);
		} else {
			// If there is still and error, show the correct error
			textValidate(element);
		}
	} else if (element.type === 'email') {
		if (element.validity.valid) {
			// In case there is an error message visible,
			// and the field is valid, remove the error message
			removeError(element);
		} else {
			// If there is still and error, show the correct error
			emailValidate(element);
		}
	} else if (element.type === 'password') {
		if (element.validity.valid) {
			// In case there is an error message visible,
			// and the fields is valid, remove the error message
			removeError(element);
		} else {
			// If there is still and error show the correct error
			passwordValidate(element);
		}
	} else {
		// do nothing
	}
}

// function to check if all elements provided in an array validate
export function allValid(elements) {
	let result = elements.every((element) => element.checkValidity());

	if (result) {
		return true;
	} else {
		return false;
	}
}

export function showErrorArray(element) {
	// call the showError function
	// this time passing in element as the argument
	//! Note that the showError function is not called
	//! in the context of an event listener.
	//! the event parameter no longer references an HTML DOM Event Object,
	//! but an HTMLInputElement
	showError(element);
}

export function textValidate(element) {
	const span = element.parentNode.nextElementSibling;
	const name = element.placeholder;

	// set styling appropriately
	element.style.outline = 'solid hsl(0, 100%, 74%) 0.125rem';
	// show error icon
	element.parentNode.children[0].style.display = 'block';

	if (element.validity.valueMissing) {
		span.innerText = `${name} cannot be empty`;
	}
}

export function emailValidate(element) {
	const span = element.parentNode.nextElementSibling;
	const name = element.placeholder.split(' ')[0];

	// set styling appropriately
	element.style.outline = 'solid hsl(0, 100%, 74%) 0.125rem';
	// show error icon
	element.parentNode.children[0].style.display = 'block';

	if (element.validity.valueMissing) {
		span.innerText = `${name} cannot be empty`;
	} else if (element.validity.typeMismatch) {
		span.innerText = `Looks like this is not an ${name.toLowerCase()}`;
	}
}

export function passwordValidate(element) {
	const span = element.parentNode.nextElementSibling;
	const name = element.placeholder;

	// set styling appropriately
	element.style.outline = 'solid hsl(0, 100%, 74%) 0.125rem';
	// show error icon
	element.parentNode.children[0].style.display = 'block';

	if (element.validity.valueMissing) {
		span.innerText = `${name} cannot be empty`;
	} else if (element.validity.tooShort) {
		span.innerText = `${name} should be at least 8 characters`;
	}
}

// function to remove error message
export function removeError(element) {
	const span = element.parentNode.nextElementSibling;
	span.innerText = '';
	// remove styling
	element.style.outline = 'unset';
	// remove error icon
	element.parentNode.children[0].style.display = 'none';
}
