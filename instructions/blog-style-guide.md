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

## Format par défaut : Lite

**À partir de maintenant, tous les articles sont écrits en format Lite.** Le format Full (dense, jargon assumé) n'est plus le standard.

**Ce qui distingue le format Lite :**
- Chaque terme financier est **expliqué la première fois qu'il apparaît**, entre parenthèses ou dans la phrase suivante. Ex : "EV/EBIT (ce que le marché paie pour chaque euro de bénéfice opérationnel)" — jamais utilisé à froid.
- Pas de literacy financière assumée : le lecteur n'a pas besoin de connaître ROIC, EBIT, sum-of-parts, phase III avant de lire l'article.
- Ton narratif : on raconte une situation avant d'en faire l'arithmétique.
- Phrases plus longues que le format Full, mais jamais de jargon non défini.

**Ce que Lite n'est pas :**
- Simplifié à outrance — les chiffres restent précis, les sources restent citées.
- Plus court — il est souvent plus long car les définitions prennent de la place.
- Moins rigoureux — la rigueur analytique est identique, seule la forme change.

---

## Ponctuation — règle absolue

**Jamais de tiret long (em dash —).** Interdit dans tous les articles sans exception. Remplacer par :
- Aparté ou précision : parenthèses ( )
- Élaboration ou définition : deux-points :
- Continuation de liste ou liaison : virgule ,
- Nouvelle idée : nouvelle phrase

---

## Contenu interdit — règles absolues

**Jamais de conseil financier, même indirect.**
Ces articles présentent une thèse et des catalyseurs observables. Ils ne disent jamais au lecteur quoi faire avec son argent. Sont interdits : toute recommandation d'achat ou de vente ("entrer avant les résultats", "pas de raison de sortir"), tout conseil de timing ("4–6 semaines avant"), tout conseil de sizing ("X% du portefeuille", "seuil de renforcement"). Le lecteur lit, réfléchit, décide seul.

**Jamais mentionner les options ou les dérivés.**
Aucune référence à : call options, put options, strike price, expiry, premium, options sur actions, warrants, ou tout instrument dérivé. Ces articles parlent d'equity uniquement.

---

## Structure canonique (7 blocs)

### 0. Data Snapshot (obligatoire — avant le hook)

Tableau à deux panneaux inséré **après la Key Takeaway box, avant les paragraphes d'ouverture**. Donne au lecteur analytique les chiffres-clés sans qu'il ait à lire tout l'article.

**Panneau gauche — Business Snapshot · FY[année]**

| Ligne | Contenu |
|---|---|
| Revenue | CNY/HKD/USD Xb (+Y% YoY) |
| Net Profit | CNY Xb (+Y%) |
| Free Cash Flow | CNY Xb |
| Gross Margin | X% (référence historique si compression notable) |
| ROIC | X% |
| Net Cash / Net Debt | CNY Xb |
| Active Buyback | CNY Xb (si actif) |
| Dividend Yield | X% (date de paiement) |
| 52W High / Current | HKD X.XX / **X.XX** |

Lignes optionnelles selon le dossier : Interest Coverage, Payout Ratio, D/E Ratio.

**Panneau droit — Valuation vs Peers · EV/EBIT**

Pairs triés du plus élevé au plus bas. La ligne Haier/société analysée toujours en bas, en gras, avec un badge `-XX%` montrant le discount vs la moyenne des pairs.

Sourcer en dessous en 11px : `Source: [filing] [date] · Peer multiples [date]`

**CSS de référence :** `6690-haier-lite.html` — classes `.data-snapshot`, `.data-snapshot__panel`, `.snapshot-table`, `.snapshot-badge`, `.data-snapshot .snapshot-note`

> **Piège CSS :** La note source doit être ciblée par `.data-snapshot .snapshot-note` (spécificité 0,2,0), pas `.snapshot-note` seul (0,1,0). La règle `.article-body p { font-size: var(--fs-18) }` a une spécificité 0,1,1 qui l'emporterait sinon et annulerait le 0.6875rem.

**Règles :**
- Toujours deux panneaux côte à côte (flex, `gap: 1px`, fond `var(--dp-c-gray-border)`)
- Mobile : `flex-direction: column`
- Jamais plus de 9 lignes par panneau
- Le badge de discount est en noir sur blanc — visible immédiatement
- La note source est en `0.6875rem` (plus petit que `--fs-12`)

---

### 0b. Subtitle vs Key Takeaway — règle absolue de séparation

Le subtitle et la Key Takeaway ne peuvent jamais contenir la même information clé.

- **Subtitle** : pose la tension, nomme la situation, donne envie de lire. Pas de chiffres-clés, pas de conclusion. Le lecteur ne sait pas encore ce que le math révèle.
- **Key Takeaway** : livre l'arithmétique, les chiffres précis, la conclusion. C'est ici que les nombres atterrissent pour la première fois.

> Mauvais : subtitle dit "the market values everything else at US$507M" → Key Takeaway répète US$730M et US$507M.
> Bon : subtitle dit "one of the world's largest pharmaceutical companies paid nine figures for a single early-stage molecule. The math that follows is worth reading carefully." → Key Takeaway livre les chiffres.

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

**Cas particulier : entreprise pré-bénéfice (biotech, early-stage)**

Pour les sociétés sans profit opérationnel (EBIT négatif), EV/EBIT ne s'applique pas. Utiliser une valorisation par somme des parties (sum-of-parts) :

| Composante | Méthode de valorisation |
|---|---|
| Trésorerie nette | Valeur de marché directe (bilan) |
| Actif de pipeline (molécule, licence) | Coût d'acquisition par un tiers, deal de licence comparable, ou multiple de M&A sectoriel |
| Activité opérationnelle résiduelle | Multiple conservateur sur le chiffre d'affaires, ou valeur résiduelle |

Le Data Snapshot remplace EV/EBIT par les métriques pertinentes pour l'étape de développement : cash runway (combien de mois l'entreprise peut opérer sans lever des fonds), coût historique par patient, taux de succès phase-par-phase. Expliquer chaque métrique en clair — le lecteur Lite ne connaît pas "cash runway" par défaut.

### 6. Risques
- Section dédiée, intitulée clairement : "Les risques qu'on ne minore pas"
- **Trois risques maximum, nommés en gras**
- Chaque risque a : (1) le mécanisme concret, (2) l'historique qui le nuance, (3) pourquoi c'est le vrai risque et pas un détail
- Risques opérationnels ajoutés en dernier, en un seul paragraphe, sans header propre
- Les risques présentés dans un bloc `.risk-callout` (CSS de référence : `1167-jacobio.html`)

### 7. Décision
- **Première ligne obligatoire :** `<p><em>Written at [PRIX] on [DATE]. The price level is part of the thesis.</em></p>` — c'est la ligne de timing implicite. Trading852 publie quand le cours est jugé intéressant sur la base du chart + fondamentaux. Cette ligne le signale au lecteur sans jamais donner de conseil.
- Rappelle la nature de la thèse et les deux ou trois catalyseurs qui la font tenir
- Asymétrie exprimée en chiffres concrets : upside vs downside dans chaque scénario
- Tableau de scénarios (3 lignes max) : Scénario | Signal observable | Implication cours
- Critères d'invalidation de la thèse (2–3 triggers de sortie concrets et vérifiables)
- Dernière phrase : courte, factuelle, presque lapidaire

**INTERDIT dans cette section — conseil financier déguisé :**
Jamais de recommandation sur quand acheter, quand vendre, combien investir, ou comment structurer une position. Aucune phrase du type "pour un nouvel entrant, entrer X semaines avant les résultats", "pas de raison de sortir avant telle date", "position sizing à X% du portefeuille". L'article présente la thèse et les catalyseurs — le lecteur décide seul ce qu'il en fait.

---

## Règles de style sentence par sentence

### Longueur des phrases
- **Phrase d'emphase** : 5-10 mots, seule sur une ligne ou après un long développement
  - "Nous l'avons fait." / "Face à un cours de HKD 6,10."
- **Phrase analytique** : 20-35 mots maximum, une seule idée par phrase
- **Jamais** de phrase qui enchaîne deux raisonnements avec "et" ou "mais" sans que chacun mérite sa propre phrase
- **Jamais** le même mot (ou sa racine) dans deux phrases consécutives. Remplacer par un pronom ou reformuler.

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
- Colonne "Implication cours" = fourchette de prix + état de la thèse ("thesis intact", "thesis invalidated") — jamais une action ("hold", "exit", "add", "reduce", "X% du portefeuille")

---

## Voix Howard Marks — 4 techniques à imiter

Ces techniques ont été validées sur [[1913-prada]] (avril 2026). Les appliquer systématiquement aux sections "Pourquoi la décote existe" et "Décision".

### 1. Nommer ce que le marché a pricé — pas juste ce qu'il a vu
Ne pas dire : "Most participants have processed one of these."
Dire : "The market has priced one. The other two are not in the current price."
→ Identifier explicitement le gap entre consensus et réalité. C'est la phrase qui fait que le lecteur réalise qu'il y a une opportunité.

### 2. Le pendule en une phrase
Après avoir décrit le risque, ajouter une phrase courte qui nomme où est le sentiment.
→ Ne jamais développer en paragraphe. Une phrase suffit. Elle dit : le balancier a trop oscillé.

**RÈGLE ABSOLUE : chaque phrase-pendule est à usage unique.**
Une formule utilisée dans un article ne peut jamais réapparaître dans un autre, même avec des adjectifs différents. Si la structure est reconnaissable, elle est interdite.

**Pourquoi tenir cette liste :** chaque phrase-pendule perd sa force au moment où elle devient reconnaissable. Un lecteur qui a lu plusieurs articles Trading852 et retrouve la même structure arrête d'être surpris. C'est exactement le moment où la prose cesse d'être de la prose et devient du template. La liste est le mécanisme d'application.

**Phrases-pendule déjà utilisées — bannies de tous les articles futurs :**
- "Pessimism this acute against fundamentals this durable is not a stable state." → 1913-prada
- "Pessimism this acute against a recovery this documented is not a stable state." → 1585-yadea
- "Three forces compressed the price. None of them changed the cash flow." → 6690-haier

**Comment écrire une nouvelle phrase-pendule :**
Ne pas partir d'un template. Partir du fait concret le plus frappant de l'article en cours.
Exemples de directions valides (non utilisées) :
- Nommer le gap entre le multiple actuel et le cash flow : "Three forces compressed the price. None of them changed the cash flow."
- Nommer l'acheteur silencieux : "The company is buying its own shares at HKD 20.76. The market is selling them."
- Nommer le temps : "The filing is public. The price implies no one has read it."

Ajouter chaque nouvelle phrase utilisée à la liste ci-dessus après publication.

### 3. Clore sur le gap entre ce qui est pricé et ce qui est réel
Jamais finir sur une formule de prudence ("the arithmetic tolerates patience").
Finir sur l'asymétrie nue :
"The market has priced the worst. The business has not delivered it."
→ Deux phrases courtes. La première nomme le consensus. La deuxième nomme la réalité. L'écart est l'investissement.

### 4. Pronoms financiers — toujours redonner le nom
Jamais utiliser "one" ou "it" pour un concept financier clé apparu 5 mots plus tôt.
Ne pas dire : "a balance sheet that can absorb a two-year one without stress"
Dire : "a balance sheet with capacity for two"
→ Le lecteur ne doit jamais faire de lookup mental pour comprendre ce que "one" représente.

---

## Checklist avant publication — contrôle inter-articles

Avant de soumettre un article, vérifier ces 4 points contre les articles déjà publiés :

- [ ] **Pendule** : la phrase-pendule de cet article n'est pas dans la liste des phrases bannies (§ Voix Howard Marks)
- [ ] **Ouverture** : la structure de l'ouverture n'a pas été utilisée dans un article précédent ("This is not...", "The filing is public...", "The math is worth reading...")
- [ ] **Subtitle** : la structure du subtitle est unique à cet article (pas la même formule qu'un subtitle existant)
- [ ] **Clôture de la section Décision** : la dernière phrase est spécifique à cette entreprise, pas une variante d'une clôture déjà publiée

Si un point échoue : réécrire à partir du fait le plus concret et spécifique à l'entreprise. Jamais partir d'un template existant.

---

## Ce qu'on ne fait jamais

- Jamais d'article sans Data Snapshot (bloc §0) — c'est obligatoire, même pour un article court
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

## Title Writer — Règles opérationnelles (Trading852)

> Référence : conversation avril 2026 — révision des titres Dickson, Prada, Why HK

### Le principe fondamental

Un titre Trading852 doit créer une **tension arithmétique** que le lecteur ne peut pas résoudre sans lire l'article. Pas un teaser. Pas une promesse. Un paradoxe factuellement vrai.

### Les 4 structures qui fonctionnent

**1. La contradiction nue** *(le plus fort)*
Deux chiffres vrais qui se contredisent en apparence. Le lecteur doit lire pour comprendre pourquoi les deux sont exacts.
> "EPS Down 74%. Revenue Up 9%. One of These Numbers Is a Distraction."
> Formule : `[Métrique A] [direction]. [Métrique B] [direction opposée]. [Résolution en suspens].`

**2. Le prix inversé**
L'arithmétique dit que le marché paie dans la mauvaise direction.
> "The Market Is Paying You HKD 375 Million to Buy This Company"
> Formule : `[Qui paie qui] + [montant exact] + [ce qu'on obtient en échange].`

**3. La séquence factuellement vraie**
Trois faits courts, chacun un mot de plus que nécessaire ne devrait être. Crée un rythme qui force la lecture.
> "Six Tests. Five Bounces. One Entry."
> Formule : `[Fait 1]. [Fait 2]. [Conclusion implicite].`

**4. La validation externe vs le prix actuel**
Un tiers a payé X pour un actif. Le marché valorise l'ensemble à Y < X.
> "AstraZeneca Paid $100M for One Molecule. The Market Forgot to Price the Rest."
> Formule : `[Tiers crédible] payé [montant] pour [partie]. [Ce que le marché a raté].`

---

### Règles de rédaction

| Règle | Exemple à éviter | Exemple Trading852 |
|---|---|---|
| Toujours un chiffre dans le titre | "Prada Trades at a Discount" | "EPS Down 74%. Revenue Up 9%." |
| Jamais de superlatif | "The Most Undervalued Stock" | "6.8× EV/EBIT. Peers at 11–24×." |
| Jamais de formule clickbait | "You Won't Believe This Trade" | "The Market Is Paying You HKD 375M" |
| Le paradoxe doit être résolvable | *(contradiction sans explication dans l'article)* | Le titre pose la tension, l'article la résout |
| Un chiffre = une date ou un document | "Revenue grew" | "Revenue +31% FY2025" |

---

### Homepage card vs article title

La card homepage et le H1 article peuvent diverger — la card est plus courte.

- **Card** : 5–10 mots max, tension ou chiffre-clé
- **H1** : peut aller jusqu'à 20 mots, plus de contexte

> Card : "Six Tests. Five Bounces. One Entry."
> H1 : "Five Times the Hang Seng Touched This Line and Bounced. At 25 893, the Sixth Test Has Begun"

La card doit teaser l'article, pas le résumer. Si la card et le H1 sont identiques, la card est probablement trop longue.

---

### Self-check avant de publier

- [ ] Le titre contient au moins un chiffre précis
- [ ] Il y a une tension ou un paradoxe (deux faits apparemment incompatibles, ou un prix qui semble impossible)
- [ ] Le titre ne donne pas la réponse — il force la lecture
- [ ] Aucun superlatif, aucun adjectif d'enthousiasme
- [ ] La card homepage est distincte du H1 (si longueur > 10 mots)

---

## Longueur cible

| Section | Mots |
|---|---|
| Data Snapshot (tableau) | — (aucun mot de prose) |
| Hook ouverture | 80-120 |
| Ce que fait l'entreprise | 120-180 |
| Pourquoi la décote existe | 100-150 |
| Catalyseur/signal principal | 200-280 |
| Valorisation | 150-200 |
| Risques | 180-250 |
| Décision | 180-250 |
| **Total prose** | **1 000-1 400** |

L'article modèle fait ~1 200 mots. En dessous de 900, la thèse n'est pas développée. Au-delà de 1 600, il y a de la répétition.

---

## Section Sources (obligatoire en bas de chaque article)

Chaque article se termine par une section Sources, après la Décision. Ce n'est pas une formalité — c'est la preuve que chaque chiffre est traçable.

**Format :**
```
## Sources
- Résultats annuels FY2025 : HKEX filing [numéro], [date], p. [X]
- Données de valorisation pairs : [Bloomberg / Refinitiv / FactSet], consensus au [date]
- [Données spécifiques] : [document], [date], [section]
```

**Règles :**
- Chaque chiffre cité dans le corps de l'article doit être traçable à une ligne de cette section.
- Jamais "Bloomberg" seul — toujours avec la date du consensus et, si possible, le code de la série.
- Les multiples de pairs doivent citer leur source et leur date. Un multiple sans date est une estimation non vérifiable.
- Si un chiffre vient d'un calcul propre (ex : EV = capitalisation boursière + dette nette), l'indiquer explicitement : "calcul propre sur base du bilan au [date]".
- Les filings HKEX sont la source primaire. Bloomberg est acceptable pour les données de marché et les multiples de pairs, pas pour les données fondamentales de la société analysée.
