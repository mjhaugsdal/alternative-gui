# Glimts alternative
Nettsiden til **Glimts alternative** – en alternativ supporterklubb for fotballklubben Bodø/Glimt.
Live: <https://www.glimtsalternative.no>
## Om prosjektet
Dette er en enkel, statisk nettside (HTML / CSS / vanilla JS) – ingen byggesteg, ingen rammeverk. Siden serveres via **GitHub Pages** og deployes automatisk gjennom **GitHub Actions** ved push til `main`.
Sidene/seksjonene er:
- **Hjem** – hero med logo og kortfattet intro
- **Info** – hvem vi er / hva vi gjør / bli medlem
- **Bilder** – galleri (foreløpig placeholders)
- **Butikk** – effekter (kommer)
- **Kontakt** – e-post, sosiale medier og kontaktskjema
Designet er svart/gult, responsivt, og har sticky toppmeny med smooth scroll.
## Filstruktur
```
.
├── index.html           # Hele siden (en-sides layout med ankrede seksjoner)
├── styles.css           # Stiler (svart/gul tema)
├── script.js            # Mobilmeny, aktiv-lenke, fade-in
├── assets/
│   └── ga.jpg           # Klubblogo
├── CNAME                # Custom domain for GitHub Pages
└── .github/workflows/
    └── deploy.yml       # GitHub Actions -> GitHub Pages
```
## Kjør lokalt
Du trenger kun en filserver – f.eks.:
```bash
# Python 3
python -m http.server 8000
```
```bash
# Node
npx serve .
```
Åpne deretter <http://localhost:8000>.
## Deploy
Pushes til `main` trigger workflowen i `.github/workflows/deploy.yml`, som laster opp hele repoet som en Pages-artefakt og publiserer.
### Engangsoppsett i GitHub
1. Gå til **Settings → Pages** i repoet.
2. Under **Build and deployment → Source**, velg **GitHub Actions**.
3. Første push til `main` (eller manuell kjøring av workflowen) publiserer siden.
### Custom domain (`glimtsalternative.no`)
Filen `CNAME` i repo-roten er satt til `www.glimtsalternative.no`. Hos Webhuset må du i tillegg sette opp DNS:
| Type    | Navn  | Verdi                              |
| ------- | ----- | ---------------------------------- |
| `CNAME` | `www` | `<din-github-bruker>.github.io.`   |
| `A`     | `@`   | `185.199.108.153`                  |
| `A`     | `@`   | `185.199.109.153`                  |
| `A`     | `@`   | `185.199.110.153`                  |
| `A`     | `@`   | `185.199.111.153`                  |
| `AAAA`  | `@`   | `2606:50c0:8000::153`              |
| `AAAA`  | `@`   | `2606:50c0:8001::153`              |
| `AAAA`  | `@`   | `2606:50c0:8002::153`              |
| `AAAA`  | `@`   | `2606:50c0:8003::153`              |
A/AAAA-recordene på apex (`@`) sørger for at `glimtsalternative.no` videresendes til `www.glimtsalternative.no` – GitHub Pages håndterer redirecten automatisk så lenge custom domain er satt til `www`-varianten.
Etter at DNS har propagert, gå til **Settings → Pages** og kryss av **Enforce HTTPS**.
## TODO / innhold som mangler
- Bytt ut placeholder-rutene i galleriet med ekte bilder (legg dem i `assets/` og oppdater `<figure class="gallery-item">` i `index.html`).
- Fyll inn ekte e-post i `index.html` (søk på `post@glimtsalternative.no`).
- Lenke ekte sosiale medier under `#kontakt`.
- Legg inn ekte produkter under `#butikk` eller koble mot en ekstern butikk.
## Lisens
Innholdet (tekst, logo) tilhører Glimts alternative. Koden er fri å gjenbruke.
