<script>
	import Trial from '$lib/Trial.svelte';
	import Signup from '$lib/Signup.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
	<!-- * Hero section -->
	<section class="hero">
		<h1>Learn to code by watching others</h1>
		<p>
			See how experienced developers solve problems in real-time. Watching scripted tutorials is
			great, but understanding how developers think is invaluable.
		</p>
	</section>

	<!-- * Signup section -->
	<section class="signup">
		<Trial />
		<Signup />
	</section>
</div>

<style>
</style>
