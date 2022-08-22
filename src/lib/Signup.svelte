<script>
	import Button from '$lib/Button.svelte';
</script>

<form novalidate>
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
