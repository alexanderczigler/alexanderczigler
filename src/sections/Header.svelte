<script>
  import { url } from 'gravatar';
  let gravatarUrl = url('dev@ilix.se', { s: 384 });
</script>

<div id="header" class="flex flex-col justify-center items-center pt-12 font-josefin-sans">
  <img src={gravatarUrl} alt="Alexander" class="h-40 rounded-full border border-gray-300" />

  <h1
    class="color-zinc-100 block text-5xl text-center font-extralight mt-4 pt-0 leading-10 text-text"
  >
    Alexander Czigler
  </h1>
  <h2 class="block text-lg text-center font-thin mt-0 lg:mt-0 mb-5 text-text-fade">
    Backend Engineer & Partner, Iteam Solutions
  </h2>
</div>
