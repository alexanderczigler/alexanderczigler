<script>
  import '../app.css';

  import Header from '../sections/Header.svelte';
  import Footer from '../sections/Footer.svelte';
</script>

<div class="bg-slate-100">
  <Header />
  <slot />
</div>

<Footer />
