# Niuxverse landing page

The design follows the supplied `public/NEW WEBSITE` references: a near-black backdrop, blue planetary horizon, widely spaced NIUXVERSE lettering, and centered community introduction. Existing show episodes, academy tracks, talks and founder content continue below in an editorial layout.

## Run

```sh
npm ci
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

On Windows PowerShell, the direct command `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173` also works.

Vite 6.4.3 rejects Windows development-server paths containing `~`, including this machine's username. Use the production preview above here, or run development from a checkout whose absolute path contains no tilde. No filesystem security settings have been disabled.

## Hero animation

- Source: 51 frames in `public/INTRO ANIMATION/FIRST VIDEO` and 38 in `SECOND VIDEO`.
- Optimized derivatives: `public/animation/first` and `second` (about 3.2 MB total). Original source images are untouched. The portrait footage is rotated into a landscape horizon composition and cropped responsively without stretching.
- Initial view shows the supplied horizon. Scrolling scrubs the first clip from start to end, then crossfades into clip two. The second sequence plays forward and backward in a continuous loop to avoid a visible cut between its unmatched endpoints.
- Scrolling back reverses the first sequence and resets the second loop. Scroll remains native; there is no wheel/touch interception.
- A pause/resume control freezes animation. Reduced-motion preference skips the extended scroll sequence and uses the still horizon.
- Bitmap decoding is limited to 18 cached frames, with smaller decoded images on phones. Work pauses when offscreen or when the tab is hidden. Failed frame requests leave the last frame/still visible.

`src/hooks/useHeroSequence.ts` owns timing, loading and cleanup; `Hero.tsx` owns accessible copy and controls. `LandingSections.tsx` renders the remaining page from existing project data. Theme selection was removed from this landing page to match the supplied dark references.

## Content actions

Community and event update actions open the existing WhatsApp group. Course enquiry links prefill a WhatsApp message to the existing contact number. These links do not simulate registrations or claim to send confirmation emails. Episode search, topic filtering, expandable course details, mobile navigation and the founder portrait switch work locally.

The source and required assets are versioned in GitHub.

## Brand and soundtrack

The uploaded white SVG mark is used in the header and footer, with the coloured SVG as the favicon. `MusicControl.tsx` plays `public/SONG/Vector Pulse.mp3` at 30% volume and loops it. It attempts playback on load unless the visitor previously stopped it. Browsers may deny audible autoplay; in that case the header shows a Play music button. Stop pauses immediately and saves the preference locally; Play resumes playback. The control remains accessible in the fixed header on mobile and desktop.
