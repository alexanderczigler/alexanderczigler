<script>
  import '../app.css';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';
</script>

<div class="max-w-4xl flex flex-col justify-center items-center">
  <Header />

  <slot />

  <Footer />
</div>
