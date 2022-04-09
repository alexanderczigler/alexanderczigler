<script>
  import config from '../lib/config';
  import { url } from 'gravatar';
  let gravatarUrl = url(config.email, { s: 256 });
</script>

<div id="header" class="flex flex-col justify-center items-center pt-12 font-josefinSans">
  <img src={gravatarUrl} alt="Alexander" class="h-20 rounded-lg border border-slate-600 mb-4" />

  <h1 class="block text-5xl text-center font-extralight mt-4 pt-0 leading-10">Alexander Czigler</h1>
  <h2 class="block text-lg text-center font-thin mt-0 lg:mt-0 mb-5">
    Backend Engineer & Partner, Iteam Solutions
  </h2>
</div>
