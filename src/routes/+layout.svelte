<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		background-image: url('/bg-intro-mobile.png');
		background-color: theme('colors.p-red');
		font-family: theme('fontFamily.poppins');
		font-size: theme('fontSize.base');
		min-height: 100vh;
		padding-block: theme('padding.20');
		display: grid;
		place-content: center;
		max-width: 90rem;
	}

	@media (min-width: theme('screens.xl')) {
		:global(body) {
			background-image: url('/bg-intro-desktop.png');
		}
	}
</style>
