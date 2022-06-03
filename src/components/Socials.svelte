<script>
  import Book from './icons/Book.svelte';
  import Industry from './icons/Industry.svelte';
  import GitHub from './icons/GitHub.svelte';
  import LinkedIn from './icons/LinkedIn.svelte';
  import Quote from './icons/Quote.svelte';
</script>

<span class="flex text-text-fade">
  <a
    class="mr-1"
    href="https://linkedin.com/in/alexanderczigler"
    target="_blank"
    title="Connect with me on LinkedIn"><LinkedIn /></a
  >

  <a
    class="mr-1"
    href="https://iteam.se/about/alexander-czigler"
    target="_blank"
    title="My consultancy profile"><Industry /></a
  >

  <a
    class="mr-1"
    href="https://github.com/alexanderczigler"
    target="_blank"
    title="My GitHub profile"
  >
    <GitHub /></a
  >

  <a
    class="mr-1"
    href="https://goodreads.com/alexanderczigler"
    title="My GoodReads profile"
    target="_blank"
  >
    <Book /></a
  >

  <a class="mr-1" href="https://dev.to/alexanderczigler" target="_blank" title="My DevLog">
    <Quote /></a
  >
</span>

<style>
  a {
    background-color: unset;
    color: var(--haze);
    fill: var(--haze);
  }

  a:hover {
    color: var(--accent);
    fill: var(--accent);
  }
</style>
