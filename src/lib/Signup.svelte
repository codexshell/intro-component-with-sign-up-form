<script>
	import Button from '$lib/Button.svelte';
	import { showError, showErrorArray, allValid } from '$lib/form.js';

	let firstName;
	let lastName;
	let email;
	let password;
	let form;

	$: form &&
		form.addEventListener('submit', (event) => {
			let form = event.target;
			let inputElements = form.elements;
			inputElements = Array.from(inputElements);

			if (allValid(inputElements)) {
				// if all input fields are valid we let the form submit
			} else {
				event.preventDefault();
				inputElements.forEach((element) => showErrorArray(element));
			}
		});
</script>

<form novalidate bind:this={form} class="flow">
	<!-- * First Name -->
	<div>
		<label>
			<span />
			<input
				bind:value={firstName}
				on:input={showError}
				type="text"
				required
				placeholder="First Name"
			/>
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Last Name -->
	<div>
		<label>
			<span />
			<input
				bind:value={lastName}
				on:input={showError}
				type="text"
				required
				placeholder="Last Name"
			/>
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Email Address -->
	<div>
		<label>
			<span />
			<input
				bind:value={email}
				on:input={showError}
				type="email"
				required
				placeholder="Email Address"
			/>
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Password -->
	<div>
		<label>
			<span />
			<input
				bind:value={password}
				on:input={showError}
				type="password"
				required
				placeholder="Password"
				minlength="8"
			/>
		</label><span class="error" />
	</div>
	<Button />
	<p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
</form>

<style>
	form {
		--flow-space: 1.5rem;
		background-color: white;
		padding-block: theme('padding.6');
		border-radius: theme('borderRadius.xl');
		box-shadow: 0 0.5rem 0 0 rgba(0, 0, 0, 0.2);
	}

	@media (min-width: theme('screens.sm')) {
		form {
			padding-block: theme('padding.8');
		}
	}

	@media (min-width: theme('screens.md')) {
		form {
			padding-block: theme('padding.11');
		}
	}

	div {
		--flow-space: 1rem;
		position: relative;
	}

	div > * {
		display: block;
	}

	input {
		--flow-space: ;
		font-size: theme('fontSize.sm');
		color: theme('colors.n-dark-blue');
		font-weight: 500;
		border: solid 0.0625rem rgba(0, 0, 0, 0.2);
		width: 85%;
		padding: theme('padding.4');
		border-radius: theme('borderRadius.md');
		padding-right: theme('padding.10');
	}

	input::placeholder {
		color: hsl(249, 10%, 55%);
	}

	label span {
		content: url('/icon-error.svg');
		position: absolute;
		right: 2rem;
		top: 2rem;
		display: none;
	}

	.error {
		--flow-space: 0.25rem;
		font-size: theme('fontSize.xs');
		font-style: italic;
		color: theme('colors.p-red');
		text-align: end;
		padding-right: theme('padding.7');
		font-weight: 600;
	}

	@media (min-width: theme('screens.sm')) {
		.error {
			padding-right: theme('padding.10');
		}
	}

	@media (min-width: theme('screens.lg')) {
		.error {
			padding-right: theme('padding.14');
		}
	}

	p {
		--flow-space: 0.75rem;
		font-size: theme('fontSize.xs');
		padding-inline: theme('padding.8');
		color: theme('colors.n-grayish-blue');
	}

	p span {
		color: theme('colors.p-red');
		font-weight: 700;
	}
</style>
