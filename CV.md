# Alexander Czigler
> Curriculum vitae

I was born in 1985 and grew up in Umeå, Sweden. At the age of 22 I dropped out of college and
moved to Stockholm to work as a consultant in the tech industry. By then I had realised that I
learn best by doing and I knew I had a passion for working with tech. Working in the complex
domain is where I feel most at home because that is where the potential of learning is highest.

### Professional background

It all began in the 90’s when I first came in contact with the internet. My dad would sometimes take me with him to the university where he worked and let me use one of their computers. I vividly remember the low humming sound of 20 Solaris machines in an otherwise empty computer hall and learning to type the command that opened Netscape. From the moment I first went online I was enchanted; the internet had so many interesting websites and
chatrooms filled with friendly people. Every time I sat in front on a computer the hours just
flew by.

Around 1997 I got my own PC and dialup at home. Dialup was expensive and I was only allowed to go online for a few hours every week. I spent that precious time online balancing between learning HTML and playing Flight Simulator 98. I started making my own website and finding a free host where I could publish it. In the years that followed I kept learning new things; programming with ASP and PHP, using MySQL databases and running my own web server. In a small irc server I met a bunch of people who inspired me to learn how to build my own computer and using linux. Since then I have kept on learning by doing and to this date I keep on refining my methods and my work.

### Skills
- Cloud/OS: AWS, DO, GCP, Linux, macOS, Windows Server
- Culture: Agile, DevOps, Lean, UX
- DevOps: Automation, CI/CD, Docker, GitHub Actions, Kubernetes
- Programming: .NET, C#, Node.js, Shell, Typescript

### About
- Born: 1985
- Citizenship: Swedish
- Languages: Swedish (native), English (fluent), Italian (beginner)

## Employment

| Period | Company | Role |
|--------|---------|------|
| 2023–present | SEB | Solution Developer |
| 2013–2023 | Iteam Solutions | Backend Developer & Partner |
| 2010–2013 | Mogul | System Developer |
| 2008–2010 | Hitone/PDB | System Developer |
| 2004–2008 | freelance | Web Designer/Developer |

## Projects

### Solution Developer
> 2023–present | SEB

I am working on a green-field project, building backends and infrastructure in TypeScript on GCP. The system integrates with a large number of internal and external APIs, and sits in the middle of a landscape filled with old, complex legacy systems and decades worth of accumulated business rules. It is exactly the kind of domain I enjoy — there is always something new to untangle and learn.

### Developer, DevOps Engineer
> 2022-2023 | centrum för näringslivshistoria

I built a microservice ecosystem for traversing data in Comprima/Documaster and doing OCR scanning of attachments. The metadata and OCR text was indexed in ElasticSearch and I built a RESTful API with a website that provides a fast search functionality that covered both metadata and full text search in attachment OCR text.

I also setup and maintained the Kubernetes cluster for running the solution. The cluster was comprised of a number of virtual servers and orchestrated with K3S, using FluxCD and GitHub for GitOps and automating deployments.

The result is available at [arkivet.naringslivshistoria.se](https://arkivet.naringslivshistoria.se/) (Swedish).

### Technology Specialist
> 2020–2023 | VINNOVA, LTU, HELSINGBORG STAD

Predictive Movement (PM) and RörLa are research projects that aim to study transport systems in Sweden. I have taken on the role of a versatile team member doing different things at different phases to move these projects forward.

During the first year of PM I focused on planning and coordinating our real-life tests in both Ljusdal and Pajala, while the rest of the team were building a platform for coordinating last mile transports. During each of these tests the team travelled to the location and had a chance to meet people working for the municipality as well as the local transport companies. I planned and performed interviews, user tests and summarised what we learned afterwards.

Later on in the project I switched my focus to working on the code behind the system as well as the new digital twin that we built at the end of PM and that we are also using in RörLa. In RörLa we are using the digital twin to simulate cars, buses, taxis and trucks that transport people and goods. The simulator is built using RxJs and integrates with OSRM, MapBox, Vroom and Pelias. It also uses real-world data from Lantmäteriet as well as data that companies and municipalities have provided us to make our simulations and predictions as life-like as possible.

I have also done a lot of work on the hosting platform of these systems, setting up and configuring servers and Kubernetes clusters for hosting all of the different components and micro services that make up the PM and Digital Twin ecosystem.

The solutions were built using Node.Js, elixir, typescript and RxJS. Other technologies used: Open Street Map, Mapbox, Figma, Telegram.

### Technical Advisor
> 2022 | UNDISCLOSED

The client is a SaaS company that offers a white label product used in the medical field. The product lets patients come in contact with medical staff such as nurses, doctors and psychiatrists via chat and video. It is used in several countries, Sweden being one of them.

In this particular project I helped the client perform a case study on how to implement true end-to-end encryption (ETEE) in the chat feature of their product. ETEE would ensure that only patients and specific members of medical staff would be able to access the keys necesarry to decrypt each chat session. During the project I built a simple proof-of-concept where I implemented ETEE between two chat clients. I used the PoC to demonstrate how the technical solution could work. The end result of the project was a report detailing how ETEE works, different approaches and various pitfalls and UX impacts of implementing ETEE.

### Developer
> 2020–2022 | UNDISCLOSED

The client is a co-operative organisation that unites a number of municipalities in Sweden. The project I worked on is a web based portal where school staff and teachers can purchase physical and digital material used in education. I worked on adding functionality that allows users to purchase digital licenses and assigning them directly to teachers and students. The tech stack consists of a number of web applications and REST-ful API:s built with Microsoft .NET
and .NET Core.

### UX Researcher
> 2019–2020 | TRR TRYGGHETSRÅDET

TRR offers assistance to employees, employers, and trade union representatives in the private sector, affected by redundancy. The goal with this project was to help TRR understand their role on the Swedish job market and how they can make sure that time between jobs is as effective and meaningful as possible.

At this assignment I worked closely with an experienced UX Researcher and Designer who mentored me. She taught me a lot of valuable things about interviewing people, building prototypes, facilitating workshops and of course customer focus in itself. Together with our team we did a number of workshops in Effect Mapping as well as a Design Sprint. These led to the development of a new prototype for matching unemployed people and their skills with available jobs among companies connected to TRR. During the development of the prototype and later the web application itself I performed a number of interviews with people working with HR and/or recruitment at different companies all over Sweden. I continuously summarised what I learned from these interviews and presented them to the team so that the team gained a better understanding of their end users and so the product owner could make decisions on what to prioritise. In addition to the qualitative research I also setup heat maps and event tracking in Matomo.

### Architect & DevOps Engineer
> 2019–2020 | V3VO

The client is a small consultancy firm that offers leadership training. They came to us with an idea to build a mobile app that uses gamification to offer training and insights to individuals with regard to personality profiles and leadership. I designed and built the backend code for this project, a Node.js Express API with a PostgreSQL database. I also setup a Kubernetes cluster and automated tests, builds and deployments using GitHub Workflows.

### Developer & DevOps Engineer
> 2018–2020 | MOTORBRANSCHENS RIKSFÖRBUND

MRF (Motorbranschens Riksförbund) is the Swedish Association for Motor Retail Trades and Repairs. One of their offerings is a product used by paint workshops that handle car repairs that are wholly or partly covered by insurance. The product has functionality for estimating repair costs, invoicing, time tracking and much more. It relies on data from CABAS, a software that calculates time and cost for repairing cars.

In this project we took over a legacy Microsoft WPF application that we maintained while we started building a new version using a modern micro service architecture. The new version consisted of a number of micro services built with Node.js (Typescript) using a PostgreSQL database. My role in the project was both adding features and fixing bugs in the WPS application as well as writing code for the new parts. I also setup and maintained the Kubernetes cluster inside AWS EKS and CI/CD pipelines in GitLab.

### DevOps Engineer
> 2019 | JOBTECH DEVELOPMENT

JobTech Development is an innovation branch of the Swedish Public Employment Service. They experiment with new tech, tools and ways of working.

I helped JobTech adapt some of their solutions to run inside docker. I also helped them setup and configure automated builds and deployments in their OpenShift environment. All of these things helped their developers spend more time on actually writing code and building features and it made their release procedures safer.

### Advisor & Agile Mentor
> 2017–2019 | SEB

I mentored the developers and product owner of a team at SEB who were aiming to use new tech and methodologies to develop a new micro service architecture for one of SEB’s business areas. By joining all of their stand-ups, planning sessions as well as pair-programming together with their developers I was able to nudge them in new directions. With time and the help of me and two other coworkers from Iteam the team had gained invaluable insights about their work and the challenges they were facing. They had gained a clear vision of what their MVP release would be like, they had a solid CI/CD pipeline and automated testing in place and they were exploring ways of building feedback loops into their products to be able to learn as much as possible once their MVP would be deployed.

Because of my previous experience using Docker and Docker Swarm, I was also invited to a cross functional team that were rolling out Docker Enterprise at SEB. I joined their weekly meetings as an advisor to help them explore the product and establish the necessary policies to rollout the product and make it possible for different teams all over SEB to be able to use it.

During my time at SEB I had identified a number of pain points in their common ways of working, especially in a developer experience sense. During the last weeks of my assignment I joined yet another team that worked with internal support systems and services. We had a couple of meetings where we discussed (corporate-)cultural and technical difficulties. We produced an interview guide and over the course of a couple of weeks we interviewed a number of developers in different teams. The results from the interviews were used to gain an understanding of how to make developers thrive and ultimately increase the quality and output of all tech teams.

### Developer & DevOps Engineer
> 2014–2018 | VIMLA

Vimla is the fighter brand of Telenor. They began as a startup from within the Telenor organisation and we were part of their journey from the very start. I built the backend & API that made up the CMS and the bridge between the customer self-service pages and Telenor’s back-office system CDRator. I also built and maintained integrations with payment providers (DIBS, Klarna) as well as the community software Lithium.

During my time at Vimla we moved between technology stacks and payment providers. In the beginning our API and CMS was entirely .NET based and we hosted everything in a Microsoft environment. After a couple of years we saw the need to build up a public API. The API would serve the coming mobile app and function as a platform for third-party developers as well.

The public API was built using Node.js and I setup a docker-based hosting environment for it. Later on we also began migrating the .NET-based website, order workflow, knowledge base and self-service pages to modern html+js applications that all utilised the public API.

As we moved towards a docker and linux based hosting environment we also moved from TFS to using Git and running automated builds and testing in TeamCity.

### Developer
> 2016–2017 | REFUGEE TECH

Starting at a hackathon that Refugee Tech held me and a few coworkers created “Competency”. The idea of the project is to map the competencies of refugees on their way to or already living in Sweden.

The data is meant to show media, politicians and the Swedish population that refugees have a lot of competence and talent that Sweden should utilise. In conjunction with a job search engine it can also be used to match individuals with available jobs and employers looking for talent.

Competency was later taken over by the Swedish Public Employment Service (Arbetsförmedlingen) and evolved into
[JobSkills](https://jobskills.arbetsformedlingen.se).

### BI Developer & DevOps Engineer
> 2015–2017 | TAXI STOCKHOLM

During this assignment I helped Taxi Stockholm develop their data mining and market automation applications. I built custom code that aggregated and anonymised customer data from MySQL and Oracle DB into no-sql databases (RethinkDB and ElasticSearch) for analysis. I also worked on setting up a new hosting platform based on Docker Cloud.

### DevOps Consultant
> 2015–2016 | UNDISCLOSED

The client is a SaaS company based in Stockholm. I helped their developers as an advisor when they were containerising their software.

### Developer
> 2014–2015 | POWERFX

Soundation Studio is an online studio for producing music and was originally built using Flash. In the year 2014 Flash was reaching its end-of-life and PowerFX, the owner of Soundation Studio, wanted to rebuild the product using HTML and Javascript.

Me and two coworkers had a set time-box of roughly 100 hours to start with. We started from a blank Angular project and implemented the basic layout of Soundation Studio. We implemented the play/pause functionality, the possibility to add multiple tracks with some individual sound settings and the ability to browse the audio/effect library as well. To be able to play, mix and transform audio we used a native-client (NaCl) bridge for javascript that communicated with the Soundation Studio backend.

After spending the initial time-box we were confident that rebuilding the studio to a pure web based solution was both possible and viable.

### Developer
> 2013–2015 | TRR/STARTKRAFT

TRR/Startkraft offers assistance to employees, employers, and trade union representatives in the private sector, affected by redundancy. The goal with this project was to build a platform for matching skills and availability of unemployed candidates to companies looking to hire. I worked on the application used by TRR/Startkraft staff for searching and filtering among available candidates.

### Developer
> 2010–2013 | TV4

The client is one of Sweden’s major TV networks and my assignment was to work on their sales support system. The system was a web application built on Microsoft .NET using SQL Server as its primary data storage as well as a number of integrations for sending and retrieving data.

Working on the code was a challenge because it had been undergoing development since around 2001 and different parts of the codebase followed different styles and design patterns. There was also a lot of unused code as well as code that resided both in C# and inside stored procedures inside SQL Server.

During my time in the project I helped maintain the application, adding a changing features as the customer’s needs changed over time. I also spent a lot of time refactoring parts of the application to make the codebase more consistent and writing scripts to automate building, packaging and deploying changes.

### BI Consultant
> 2008–2010 | GETINGE GROUP

As a Business Intelligence consultant I built a number of small applications that provided data
and insights to decision makers in different parts of their organisation. I setup automated jobs
that transferred data from Lawson/M3 into data warehouses in SQL Server. I also built a web
based application called Price Manager that was used for managing aftermarket prices.

### System Developer
> 2009 | ELECTROLUX GROUP TREASURY

The client is a division of Electrolux and they needed help with their IT Change Management. Me and a coworker built a web application built using .NET MVC. A ticketing system used by Electrolux Group Treasury to track and manage all of their IT changes.

### Embedded System Developer
> 2008 | DOVADO

Dovado is a product company that were among the first to offer a router that supported 3G USB modems.

During my time at Dovado I helped them study how different 3G USB modems behaved when connected to their router. I wrote and optimised the scripts that detects specific dongles and make them switch to modem mode and connect to the internet.
