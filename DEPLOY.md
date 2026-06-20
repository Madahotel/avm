# AVM - Alliance de la Vanille Malagasy

## Instructions de deploiement

### Option 1 : Vercel (gratuit, recommande)

1. Allez sur https://vercel.com et creez un compte
2. Importez ce dossier (drag & drop ou via Git)
3. Vercel detecte automatiquement Vite + React
4. Votre URL : `https://votre-nom.vercel.app`

### Option 2 : Netlify (gratuit)

1. Allez sur https://app.netlify.com/drop
2. Glissez-deposez le dossier `dist/` directement
3. Votre URL : `https://xxx.netlify.app`

### Option 3 : Build local

```bash
npm install
npm run build
```
Le dossier `dist/` contient les fichiers statiques prets a deployer.

### Routes SPA
Ce site utilise React Router (HashRouter). Toutes les routes sont geree par le frontend.
Pour un deploiement sur serveur Apache/Nginx, redirigez toutes les requetes vers `index.html`.

## Stack technique
- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router (HashRouter)
- Dark/Light mode
- i18n (6 langues : FR, MG, EN, ES, DE, IT)
