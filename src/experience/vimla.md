---
heading: Building Telenor's fighter brand Vimla
years: 2014,2018
---

I built the backend & API that made up the CMS and the bridge between the customer self-service pages and Telenor's backoffice system CDRator. I also built and maintained integrations with payment providers (DIBS, Klarna) as well as the community software Lithium.

During my time at Vimla we moved between technology stacks and payment providers. In the beginning our API and CMS was entirely .NET based and we hosted everything in a Microsoft environment. After a couple of years we saw the need to build up a public API. The API would serve the coming mobile app and function as a platform for third-party developers as well.

The public API was built using nodejs and I setup a docker-based hosting environment for it. Later on we also began migrating the .NET-based website, order workflow, knowledge base and self-service pages to modern html+js applications that all utilised the public API.

As we moved towards a docker and linux based hosting environment we also moved from TFS to using Git and running automated builds and testing in TeamCity.
