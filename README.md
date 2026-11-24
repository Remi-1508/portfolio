# Portfolio — Rémi Monier

Site one-page en **React + Vite**, palette rose poudré & chocolat, responsive, animations douces au scroll.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère le dossier dist/
```

## À compléter

Tout le contenu est dans **`src/data.js`** (cherche les `TODO`) :

1. Ton e-mail (`email`)
2. Tes compétences et ton niveau d'anglais
3. Le lien de la démo RunToDraw (`project.demo`), si elle existe
4. Ton CV : dépose-le dans **`public/cv.pdf`**

Les couleurs se changent en haut de `src/styles.css` (variables `--rose`, `--ink`, `--brown`…).

## Déploiement

Chaque `git push` sur `main` redéploie automatiquement le site sur **GitHub Pages**
via `.github/workflows/deploy.yml`. Le build utilise `base: './'`, donc le site marche
aussi sur Vercel ou Netlify (commande `npm run build`, dossier `dist`).

## Structure

```
src/
  data.js            contenu (textes, liens, compétences)
  styles.css         design (couleurs, responsive)
  App.jsx            assemble les sections
  components/        Nav, Hero, About, Future, Skills, Project, CV, Contact, Reveal
public/
  cv.pdf             ton CV (à ajouter)
```
