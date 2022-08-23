<script>
	import Trial from '$lib/Trial.svelte';
	import Signup from '$lib/Signup.svelte';
</script>

<svelte:head>
	<title>Intro component with sign-up form</title>
	<meta name="description" content="Svelte sign-up form component" />
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
	@media (min-width: theme('screens.xl')) {
		.container {
			display: flex;
			padding-inline: theme('padding.24');
			gap: theme('gap.6');
		}
	}

	section {
		text-align: center;
		padding-inline: theme('padding.6');
	}

	@media (min-width: theme('screens.sm')) {
		section {
			padding-inline: theme('padding.28');
		}
	}

	@media (min-width: theme('screens.md')) {
		section {
			padding-inline: theme('padding.36');
		}
	}

	@media (min-width: theme('screens.lg')) {
		section {
			padding-inline: theme('padding.48');
		}
	}

	@media (min-width: theme('screens.xl')) {
		section {
			padding: 0;
		}
	}

	.hero {
		color: white;
	}

	@media (min-width: theme('screens.xl')) {
		.hero {
			flex: 1 1 50%;
			text-align: start;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	h1 {
		font-weight: 700;
		font-size: theme('fontSize.3xl');
	}

	@media (min-width: theme('screens.sm')) {
		h1 {
			font-size: theme('fontSize.4xl');
		}
	}

	@media (min-width: theme('screens.md')) {
		h1 {
			font-size: theme('fontSize.5xl');
		}
	}

	p {
		--flow-space: 1.25rem;
	}

	@media (min-width: theme('screens.lg')) {
		p {
			padding-inline: theme('padding.16');
		}
	}

	@media (min-width: theme('screens.xl')) {
		p {
			padding: 0;
		}
	}

	.signup {
		--flow-space: 4rem;
	}

	@media (min-width: theme('screens.xl')) {
		.signup {
			flex: 1 1 50%;
			--flow-space: ;
		}
	}
</style>
