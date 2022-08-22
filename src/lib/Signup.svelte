<script>
	import Button from '$lib/Button.svelte';
</script>

<form novalidate class="flow">
	<!-- * First Name -->
	<div>
		<label>
			<input type="text" required placeholder="First Name" />
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Last Name -->
	<div>
		<label>
			<input type="text" required placeholder="Last Name" />
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Email Address -->
	<div>
		<label>
			<input type="email" required placeholder="Email Address" />
		</label>
		<span aria-live="polite" class="error" />
	</div>

	<!-- * Password -->
	<div>
		<label>
			<input type="password" required placeholder="Password" />
		</label>
		<span class="error" />
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

	div {
		--flow-space: 1rem;
		position: relative;
	}

	div > * {
		display: block;
	}

	input {
		font-size: theme('fontSize.sm');
		color: theme('colors.n-dark-blue');
		font-weight: 500;
		border: solid 0.0625rem rgba(0, 0, 0, 0.2);
		width: 85%;
		padding: theme('padding.4');
		border-radius: theme('borderRadius.md');
		padding-right: theme('padding.14');
	}

	input::placeholder {
		color: hsl(249, 10%, 55%);
	}

	div::after {
		content: url('/icon-error.svg');
		position: absolute;
		top: 1rem;
		right: 3rem;
		display: none;
	}

	.error {
		--flow-space: 0.25rem;
		font-size: theme('fontSize.xs');
		font-style: italic;
		color: theme('colors.p-red');
		text-align: end;
		padding-right: theme('padding.7');
		font-weight: 500;
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
