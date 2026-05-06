# Glimts Alternative
Nettsiden til **Glimts Alternative** – en alternativ supporterklubb for fotballklubben Bodø/Glimt.
Live: <https://glimtsalternative.no>
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
1. Push commit til `main` minst én gang (workflowen laster opp Pages-artefakten).
2. Gå til **Settings → Pages** i repoet.
3. Under **Build and deployment → Source**, velg **GitHub Actions**.
4. Under **Custom domain**, skriv inn `glimtsalternative.no` og lagre.
5. Vent til **DNS check** blir grnn (kan ta noen minutter etter at DNS er satt opp).
6. Kryss av **Enforce HTTPS** når sertifikatet er klart.
### DNS hos Webhuset
Filen `CNAME` i repo-roten er satt til `glimtsalternative.no` (apex/uten www).
Sett opp følgende DNS-records hos Webhuset. `Oppføring` lar du **stå blank** for apex-domenet (`@`):
| #   | Type    | Oppføring | Mål                              |
| --- | ------- | --------- | --------------------------------- |
| 1   | `A`     | *(blank)* | `185.199.108.153`                 |
| 2   | `A`     | *(blank)* | `185.199.109.153`                 |
| 3   | `A`     | *(blank)* | `185.199.110.153`                 |
| 4   | `A`     | *(blank)* | `185.199.111.153`                 |
| 5   | `AAAA`  | *(blank)* | `2606:50c0:8000::153`             |
| 6   | `AAAA`  | *(blank)* | `2606:50c0:8001::153`             |
| 7   | `AAAA`  | *(blank)* | `2606:50c0:8002::153`             |
| 8   | `AAAA`  | *(blank)* | `2606:50c0:8003::153`             |
| 9   | `CNAME` | `www`     | `<din-github-bruker>.github.io.`  |
Record #9 er valgfri, men anbefalt: GitHub Pages vil da automatisk redirecte `www.glimtsalternative.no` til apex-domenet `glimtsalternative.no`.
DNS-propagering tar typisk 5-30 minutter, men kan ta opptil et døgn.
## TODO / innhold som mangler
- Bytt ut placeholder-rutene i galleriet med ekte bilder (legg dem i `assets/` og oppdater `<figure class="gallery-item">` i `index.html`).
- Fyll inn ekte e-post i `index.html` (søk på `post@glimtsalternative.no`).
- Lenke ekte sosiale medier under `#kontakt`.
- Legg inn ekte produkter under `#butikk` eller koble mot en ekstern butikk.
## Lisens
Innholdet (tekst, logo) tilhører Glimts Alternative. Koden er fri å gjenbruke.
