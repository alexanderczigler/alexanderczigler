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
  <title>Alexander Czigler</title>
</svelte:head>

<div
  class="border-t-background-fade border-t border-b border-b-background-fade flex flex-col justify-center items-left font-josefinSans p-5 font-light text-text"
  role="main"
>
  <h3 class="font-firaCode my-4 text-2xl">Hello!</h3>
  <p class="my-4 mx-2">
    I am Alexander Czigler. I help companies improve their culture and ways of working with code.
    When I am not working I love spending time dancing, reading or being out in nature.
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

  <h3 class="font-firaCode my-4 text-2xl">Skills</h3>

  <p class="my-4 mx-2">
    <span class="font-bold">Code:</span> .NET, dotnet core, javascript, nodejs, shell, typescript
    (bash, zsh, powershell)
    <br />
    <span class="font-bold">Culture:</span> agile, developer experience, devops
    <br />
    <span class="font-bold">Tech:</span> docker, kubernetes, linux, no-sql, sql
    <br />
    <span class="font-bold">UX:</span> analytics, figma, interviewing, matomo, user research, user story
    mapping
  </p>

  <h3 class="font-firaCode my-4 text-2xl">Experience</h3>

  {#each experiences as experience}
    <h4 class="font-firaCode text-lg pt-10 mb-4 font-semibold">
      {experience.heading} ({experience.year})
    </h4>

    <span class="space-y-4 mx-2">
      <svelte:component this={experience.experience.default} />
    </span>
  {/each}
</div>
