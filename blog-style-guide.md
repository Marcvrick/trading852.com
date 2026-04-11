---
title: "Style Guide — Blog Article Conviction (modèle 0113 Dickson)"
tags:
  - style-guide
  - blog
  - conviction
  - writing
category: Trading/Blog
type: style-guide
created: 2026-04-11
source: "[[0113-blog-article]]"
---

> **Référence :** [[0113-blog-article]] — modèle canonique du format blog conviction HK stocks

---

## Principe directeur

Ce style est **journalistique-analytique** : il parle à un lecteur intelligent qui n'est pas forcément financier. Il ne vend pas — il raisonne à voix haute. Le lecteur doit sentir que l'auteur a fait le travail à sa place et lui présente une conclusion honnête, pas une pitch deck.

**Ce que ce style n'est jamais :**
- Newsletter enthousiaste ("opportunité incroyable")
- Rapport institutionnel aride (tableaux sans contexte)
- Article de blog généraliste (10 conseils pour investir)

---

## Structure canonique (7 blocs)

### 1. Hook d'ouverture (sans titre)
- Premier paragraphe sans `##` — va directement au fait surprenant
- Chiffre concret dans les deux premières phrases
- Crée l'intrigue avant d'expliquer : "les chiffres sont tellement clairs qu'on se frotte les yeux"
- Termine sur le mot-clé de la thèse : "ça mérite qu'on s'y arrête"

### 2. Ce que fait l'entreprise
- Pas d'enthousiasme : "Ce n'est pas une startup, pas un pari sur une technologie"
- Décrit le business model en langage concret (franchises, durées, clients)
- Une ou deux phrases sur les résultats récents avec % précis
- Ancre le lecteur dans la réalité opérationnelle avant de parler de valorisation

### 3. Pourquoi la décote existe
- Section cruciale — explique l'inefficience avant d'en tirer parti
- "Résultat : la décote existe, elle est documentable, et elle persiste parce que..."
- Termine par une phrase courte, presque arrogante, qui pose l'autorité de l'auteur

### 4. Le catalyseur/signal principal
- Un événement réel passé utilisé comme preuve (offre de privatisation, annonce, filing HKEX)
- Décomposé en points numérotés : **Un. Deux. Trois.**
- Chaque point est une implication logique, pas une opinion

### 5. Valorisation
- Deux colonnes : actif(s) séparé(s) + activité opérationnelle
- Tableau Markdown obligatoire avec le cours actuel en bas pour le contraste visuel
- Multiple conservateur justifié par rapport aux pairs ("7x — conservateur par rapport aux pairs qui se traitent entre 8x et 15x")
- Sourcer chaque chiffre à une date et un document précis ("tiré directement du bilan au 30 septembre 2025")

### 6. Risques
- Section dédiée, intitulée clairement : "Les risques qu'on ne minore pas"
- **Deux risques maximum, nommés en gras**
- Chaque risque a : (1) le mécanisme concret, (2) l'historique qui le nuance, (3) pourquoi c'est le vrai risque et pas un détail
- Risques opérationnels ajoutés en dernier, en un seul paragraphe, sans header propre

### 7. Décision
- Commence par rappeler la nature de la thèse ("situation spéciale, pas un investissement de croissance")
- Asymétrie exprimée en % concrets : upside vs downside
- Tableau de scénarios (3 lignes max) : Scénario | Signal | Implication cours
- Position sizing explicite (% du portefeuille, seuil de renforcement)
- Critères d'invalidation de la thèse (3 triggers de sortie)
- Dernière phrase : courte, factuelle, presque lapidaire — "Jusqu'à ce que l'un de ces signaux apparaisse, l'arithmétique plaide pour rester."

---

## Règles de style sentence par sentence

### Longueur des phrases
- **Phrase d'emphase** : 5-10 mots, seule sur une ligne ou après un long développement
  - "Nous l'avons fait." / "Face à un cours de HKD 6,10."
- **Phrase analytique** : 20-35 mots maximum, une seule idée par phrase
- **Jamais** de phrase qui enchaîne deux raisonnements avec "et" ou "mais" sans que chacun mérite sa propre phrase

### Chiffres
- Toujours précis — jamais "environ 2 milliards" sans donner le chiffre exact d'abord
- Format : HKD 2 354 millions (espace comme séparateur des milliers, pas de virgule)
- Les % incluent le signe : +14 %, -43,5 %, pas "14%" ou "moins 43%"
- Toujours contextualisés : "soit HKD 7,08 par action"

### Ton
- **Jamais de superlatif** : pas "excellent", "remarquable", "exceptional"
- **Jamais de conditionnel mou** : pas "pourrait potentiellement", "il est possible que"
- **Assertions directes avec réserve explicite** : "La thèse ne repose pas sur X — elle repose sur Y"
- First person pluriel **rare** et **percutant** : "Nous l'avons fait." (une seule occurrence dans tout l'article)

### Transitions entre sections
- Courtes, directes, parfois une seule phrase de contexte avant le `##`
- Pas de "comme nous l'avons vu dans la section précédente"
- Les `---` (lignes de séparation) remplacent les phrases de transition lourdes

---

## Tables Markdown — Usage

**Deux types de tables dans ce format :**

**Table de valorisation** (section valorisation)
- Colonne gauche : Composante
- Colonne droite : Par action (monnaie)
- Dernière ligne : cours actuel, **en gras**, pour le contraste

**Table de scénarios** (section décision)
- 3 colonnes : Scénario | Signal observable | Implication cours
- 3 lignes maximum : bull / neutre / bear
- Scénario en **gras**, signal doit être actionnable (visible, vérifiable publiquement)

---

## Ce qu'on ne fait jamais

- Jamais de bullet points dans le corps de l'article (sauf la table de scénarios)
- Jamais de phrase comme "il convient de noter que" ou "il est important de souligner"
- Jamais de disclaimer légal ("ceci n'est pas un conseil en investissement") — le format assume un lecteur adulte
- Jamais de titre de section en forme de teaser vague ("Et maintenant ?", "La suite")
- Jamais de chiffre sans sa date source ou son document d'origine
- Jamais de risque présenté comme hypothétique quand il est documenté : "ce risque est réel et il faut l'avoir en tête"

---

## YAML frontmatter obligatoire

```yaml
---
title: "{TICKER} ({TICKER}.HK) — {Titre accrocheur avec le fait surprenant}"
tags:
  - blog
  - hk-stocks
  - {company-tag}
  - conviction (ou monitor ou avoid)
  - {secteur}
  - {thèse-clé} (ex: negative-ev, privatization, special-situation)
  - {ticker-numérique}
category: Trading/Blog
type: blog-article
ticker: "{TICKER}"
created: {YYYY-MM-DD}
source: "[[{retail-explainer}]]"
finratios: "[[{finratios-file}]]"
---
```

---

## Titre — Formule

Le titre suit une formule : **[Sujet] — [Fait arithmétique ou paradoxe en langage courant]**

Exemples de la formule :
- "Dickson Concepts (0113.HK) — Le marché vous offre HKD 375 millions pour acheter cette entreprise"
- "[TICKER] — [Chiffre concret qui choque] pour [ce qu'on obtient en échange]"

**Jamais :**
- "Analyse de [société]"
- "[Société] : une opportunité à saisir"
- Titre sans chiffre

---

## Longueur cible

| Section | Mots |
|---|---|
| Hook ouverture | 80-120 |
| Ce que fait l'entreprise | 120-180 |
| Pourquoi la décote existe | 100-150 |
| Catalyseur/signal principal | 200-280 |
| Valorisation | 150-200 |
| Risques | 180-250 |
| Décision | 180-250 |
| **Total** | **1 000-1 400** |

L'article modèle fait ~1 200 mots. En dessous de 900, la thèse n'est pas développée. Au-delà de 1 600, il y a de la répétition.
