---
heading: Kick-starting a Flash to HTML + Native Client rewrite
years: 2014,2015
---

PowerFX came to us because they were looking to rebuild their Soundation Studio from the ground up, using html and javascript. The studio was originally built using Flash and since its original release the capabilites of javascript and browsers have improved significally (while Flash was a dying platform).

Myself and two coworkers had a set timebox of roughly 100 hours to begin the web transformation. We started from a blank Angular project and implemented the basic layout of Soundation Studio. We implemented the play/pause functionality, the possibility to add multiple tracks with some individual sound settings and the ability to browse the audio/effect library as well. To be able to play, mix and transform audio we used a native-client (NaCl) bridge for javascript that communicated with the Soundation Studio backend.

After spending the initial timebox we were confident that rebuilding the studio to a pure web based solution was both possible and viable.

Check out [Soundation Studio](https://soundation.com) for yourself!
