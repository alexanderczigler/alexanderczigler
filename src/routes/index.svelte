<script context="module">
  const resumeMarkdown = import.meta.globEager(`../experience/*.md`);

  let resume = [];
  for (let path in resumeMarkdown) {
    const experience = resumeMarkdown[path];

    let from, to, year;
    if (experience.metadata.year) {
      year = experience.metadata.year;
      from = year;
      to = year;
    }

    if (experience.metadata.years) {
      from = experience.metadata.years.split(',')[0];
      to = experience.metadata.years.split(',')[1];
      year = `${from}—${to}`;
    }

    resume.push({
      experience: experience,
      heading: experience.metadata.heading,
      year,
      from,
      to,
    });
  }

  export function load() {
    return {
      props: {
        experiences: resume,
      },
    };
  }
</script>

<script>
  import Socials from '../components/Socials.svelte';

  export let experiences;

  /*
   * Sort experiences according to their end year and length.
   */
  const sortDelegate = (a, b) => {
    const ongoing = new Date().getFullYear() + 1;

    let weightA = a.from;
    weightA += (a.to ? a.to : ongoing) - a.from;

    let weightB = b.from;
    weightB += (b.to ? b.to : ongoing) - b.from;

    if (weightA > weightB) {
      return -1;
    }
    if (weightA < weightB) {
      return 1;
    }
    return 0;
  };

  experiences = experiences.sort((a, b) => sortDelegate(a, b));
</script>

<svelte:head>
  <title>Alexander Czigler - Curriculum Vitae</title>
</svelte:head>

<div
  class="border-t-background-fade border-t border-b border-b-background-fade flex flex-col justify-center items-left font-josefin-sans p-5 font-light text-text"
  role="main"
>
  <h3 class="font-fira-code my-4 text-3xl">Hello!</h3>
  <p class="my-4 mx-2">
    I am Alexander Czigler. I help companies improve their culture and ways of working with code.
    When I am not at my keyboard I love dancing, reading and being out in nature.
  </p>

  <p class="my-4 mx-2">
    My story began around 1997 when I got my first PC with dialup internet. I quickly became
    enchanted by the web and it did not take long until I wanted to build my own homepage so that I
    could become a part of the web myself. Dialup was expensive I was only allowed to go online for
    a few hours every week. I spent that precious time online learning about HTML (and playing
    Flight Simulator 98!) and finding free hosts where I could publish my creations.
  </p>

  <p class="my-4 mx-2">
    In 2003 my journey took a giant leap as I got DSL at home. This was a huge thing for me as I was
    suddenly able to go online as much as I wanted; I was no longer restricted by the cost or speed
    of dialup. Having 24/7 access to the internet meant I could spend more time on the social
    aspects of the internet. I eventually found a bunch of like-minded people on IRC and I started
    making friends online. Some of the people I got to know taught me about things like linux and
    running my own servers. They inspired me to build my own computer for the first time, a computer
    that became my first home server where I installed linux for the first time in my life and I
    learned how to setup my own web server among other things.
  </p>

  <div class="flex flex-col items-left pt-4 pb-4 mx-2">
    <Socials />
  </div>

  <h3 class="font-fira-code mb-4 mt-12 text-3xl">Skills</h3>

  <p class="my-4 mx-2 font-fira-code">
    <span class="font-bold uppercase text-sm">Code:</span> .NET, dotnet core, javascript, nodejs,
    shell scripting (bash, zsh, powershell), typescript
    <br /><span class="font-bold uppercase text-sm">Culture:</span> agile, developer experience,
    devops
    <br /><span class="font-bold uppercase text-sm">Tech:</span> databases (sql, no-sql, queues),
    docker, kubernetes, linux
    <br /><span class="font-bold uppercase text-sm">UX:</span> analytics, figma, interviewing, matomo,
    user research, user story mapping
  </p>

  <h3 class="font-fira-code mb-0 mt-12 text-3xl">Experience</h3>

  {#each experiences as experience}
    <h4 class="font-fira-code text-lg pt-10 mb-4 font-semibold">
      {experience.heading} ({experience.year})
    </h4>

    <span class="space-y-4 mx-2">
      <svelte:component this={experience.experience.default} />
    </span>
  {/each}
</div>
