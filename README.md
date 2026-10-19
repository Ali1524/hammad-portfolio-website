# Writer Portfolio (Next.js)

## Run it
```
npm install
npm run dev
```
Open http://localhost:3000

## Where to edit
- data/content.js : all text (intro, stats, services, works, experience, skills, contact)
- app/globals.css : colors (the :root block), fonts, spacing, animations
- app/layout.js : page title, description and the Google font
- components/ : one file per section (Hero, Services, Works, Resume, Skills, Contact...)
- public/ : put your photo here, for example public/me.jpg, then use it in components/Hero.js

## Contact form
The contact form opens the visitor's email app with the message addressed to the email in `data/content.js`.
To submit messages directly from the site instead, connect a form service or API in `components/Contact.js`.

## Deploy
Push to GitHub and import the repo on Vercel, or run `npm run build` then `npm start`.
