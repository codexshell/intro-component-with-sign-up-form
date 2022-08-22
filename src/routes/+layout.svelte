<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		min-height: 100vh;
		background-image: url('/bg-intro-mobile.png');
		background-color: theme('colors.p-red');
		display: grid;
		place-content: center;
		font-family: theme('fontFamily.poppins');
		font-size: theme('fontSize.base');
	}
</style>
