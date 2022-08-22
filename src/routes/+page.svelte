<script>
	import Trial from '$lib/Trial.svelte';
	import Signup from '$lib/Signup.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container | flow">
	<!-- * Hero section -->
	<section class="hero | flow">
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
	section {
		text-align: center;
		padding-inline: theme('padding.6');
	}

	.hero {
		color: white;
	}

	h1 {
		font-weight: 700;
		font-size: theme('fontSize.3xl');
	}

	p {
		--flow-space: 1.25rem;
	}

	.signup {
		--flow-space: 4rem;
	}
</style>
