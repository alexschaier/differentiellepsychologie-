/* ==========================================================================
   DIFFPSY LERNAPP – Inhaltsdaten
   Differentielle Psychologie & Persönlichkeitspsychologie
   Prof. Dr. Stephan Bulheller, FOM Düsseldorf, WS 2026/2027
   Alle Inhalte gegen das Original-Vorlesungsskript (1038 S.) seitengenau verifiziert.
   Stand: 26.10.2026 – abgedeckt: Kapitel 1–4, 5.1/5.2, Methodenskript II.
   ========================================================================== */

window.APP_DATA = {
  meta: {
    title: "DiffPsy Lernapp",
    subtitle: "Differentielle Psychologie & Persönlichkeitspsychologie",
    professor: "Prof. Dr. Stephan Bulheller · FOM Düsseldorf",
    lastUpdate: "26.10.2026",
    coverage: "Kapitel 1–4, 5.1–5.3 (Intelligenz: Definitionen, Forschungsgeschichte & Intelligenzmodelle), Methodenskript II",
    notCovered: "Kapitel 6–13 folgen in einem Update, sobald gegen das Skript verifiziert. LK8 fehlt noch (laut Alexander in Arbeit)."
  },

  chapters: [
    {
      id: "k1",
      nr: "1",
      title: "Psychologie als Wissenschaft & Forschungsparadigmen",
      pages: "S. 41–56",
      color: "#e63950",
      terms: [
        { term: "Psychologie (Definition)", def: "Die Wissenschaft vom Erleben und Verhalten des Menschen über die Lebenszeitspanne – empirisch, naturwissenschaftlich nah. (griech. psyché = Seele, Gemüt)" },
        { term: "7 Kriterien empirisch-wissenschaftlicher Persönlichkeitsforschung", def: "1 Expliziertheit (Eindeutigkeit der Begriffe) · 2 Widerspruchsfreiheit · 3 Vollständigkeit · 4 Produktivität (neue Fragestellungen) · 5 Anwendbarkeit (praktische Nützlichkeit) · 6 Empirische Verankerung (Beobachtbarkeit) · 7 Empirische Überprüfbarkeit (Validierung)." },
        { term: "Paradigma (Definition)", def: "Bestimmte wissenschaftliche Denkweise/Sichtweise: theoretische Annahmen, Modellvorstellungen bzw. Leitgedanken, daraus resultierende Fragestellungen und Art ihrer empirischen Evaluation." },
        { term: "6 Paradigmen der Persönlichkeitspsychologie (Asendorpf & Neyer, 2012)", def: "Eigenschaftsparadigma · Informationsverarbeitungsparadigma · dynamisch-interaktionistisches Paradigma · neurowissenschaftliches Paradigma · molekulargenetisches Paradigma · evolutionspsychologisches Paradigma." },
        { term: "Eigenschaftsparadigma", def: "Personen zeigen Regelmäßigkeiten (z. B. körperliche Merkmale, Erleben/Verhalten); Beschreibung über Unterschiede zu anderen – individuelle Facetten werden nur im Vergleich zu einer Vergleichsgruppe deutlich." },
        { term: "Evolutionspsychologisches Paradigma – 8 Klärungsgebiete (Buss, 2004)", def: "Überleben, Partnerwahl, Sexualität, Elternschaft, Unterstützung von Verwandten, Kooperation, Aggression, sexuelle Rivalität, soziale Dominanz." }
      ],
      kernmodell: {
        typ: "tabelle",
        titel: "Die 6 Paradigmen im Überblick",
        spalten: ["Paradigma", "Kernaussage", "Beispiel-Forschungsgebiete"],
        zeilen: [
          ["Eigenschaft", "Regelmäßigkeiten im Vergleich zu anderen", "Trait-Forschung"],
          ["Informationsverarbeitung", "Verhalten entsteht durch Infoverarbeitung (Reize, Kapazität)", "Temperament, Motivation, Intelligenz, Einstellungen"],
          ["dynamisch-interaktionistisch", "Person-Umwelt-Wechselwirkung über die Zeit", "Freud, Lerntheorien, Beobachtungslernen"],
          ["neurowissenschaftlich", "Nervensystem, Herz-Kreislauf, Hormone, Immunsystem", "Temperamentsforschung, biologische Systeme"],
          ["molekulargenetisch", "Gene, Vererbung", "Persönlichkeit, Intelligenz, Gen-Umwelt-Interaktion"],
          ["evolutionspsychologisch", "Ergebnis der Evolution, genetische Anpassung", "8 adaptive Klärungsgebiete (Buss 2004)"]
        ]
      },
      leitfragen: [
        "Nenne alle 7 Kriterien empirisch-wissenschaftlicher Persönlichkeitsforschung – was unterscheidet sie von bloßer Alltagsbeobachtung?",
        "Ordne ein konkretes Praxisbeispiel (z. B. 'Hormonspiegel und Stressresistenz im Job') einem der 6 Paradigmen zu und begründe."
      ]
    },

    {
      id: "k2",
      nr: "2",
      title: "Grundbegriffe, Hauptaufgaben & Methoden nach Stern",
      pages: "S. 57–104",
      color: "#e8762c",
      terms: [
        { term: "6 Hauptaufgaben der Psychologie", def: "1 Beschreiben · 2 Messen von Eigenschaften · 3 Untersuchung von Merkmalsunterschieden · 4 Verstehen & Erklären · 5 Vorhersage · 6 Änderung menschlichen Erlebens und Verhaltens." },
        { term: "Typen – Traits – Habits – States (Hierarchie)", def: "Typen/Supertraits (übergeordnete Dimensionen, dimensional nicht kategorial) → Traits (stabile Eigenschaften) → Habits (Gewohnheiten, Verhaltenseigenschaften als Trait-Dimensionen) → States (Zustandseigenschaften, situativ)." },
        { term: "Trait", def: "Überdauernde persönliche Eigenschaft/Attribut, das Verhalten über verschiedene Situationen hinweg beeinflusst (Permanentdisposition). Beispiel: Ängstlichkeit, Geselligkeit." },
        { term: "State", def: "Aktueller, nicht stabiler Zustand einer Person (Augenblicksdisposition). Beispiel: Flugangst in einer konkreten Situation." },
        { term: "Nomothetik vs. Ideographie", def: "Ideographie = Beschreibung einer Person; Nomothetik = Rückführung auf Bedingungszusammenhänge + Aufstellung allgemeingültiger Gesetze für viele Personen." },
        { term: "4 Methoden nach W. Stern (1911)", def: "Kreuzung der Dimensionen Individuen (einer/mehrere) × Merkmale (eines/mehrere): Variationsforschung (nomothetisch, 1 Merkmal/mehrere Personen) · Korrelationsforschung (nomothetisch, 2+ Merkmale/mehrere Personen) · Psychographie (idiografisch, 1 Person/mehrere Merkmale) · Komparationsforschung (idiografisch, 2+ Personen/mehrere Merkmale)." },
        { term: "Cattell-Datenquader (1957)", def: "Erweitert Sterns 2D-Ansatz (Individuen × Merkmale) um die dritte Dimension Situationen/Zeitpunkte → Kovariationswürfel." },
        { term: "Korrelation r_xy", def: "Maß des linearen Zusammenhangs zweier Variablen: r_xy = cov_xy / (σx × σy). Wertebereich −1 ≤ r ≤ +1." }
      ],
      kernmodell: {
        typ: "tabelle",
        titel: "4 Methoden nach Stern (1911)",
        spalten: ["Methode", "Individuen", "Merkmale", "Logik", "Beispiel"],
        zeilen: [
          ["Variationsforschung", "mehrere", "1", "nomothetisch", "Intelligenzstreuung in einer Studierendengruppe"],
          ["Korrelationsforschung", "mehrere", "2+", "nomothetisch", "Chemie- & Mathenoten"],
          ["Psychographie", "1", "2+", "idiografisch", "Puls/Atem/Lidschlag bei einer Person"],
          ["Komparationsforschung", "2+", "2+", "idiografisch", "Big Five, IQ, Aufmerksamkeit zweier Fachrichtungen"]
        ]
      },
      leitfragen: [
        "Erkläre die vier Methoden nach Stern anhand der Kreuzung 'Individuen × Merkmale' und ordne ein eigenes Beispiel zu.",
        "Wie erweitert Cattells Datenquader das Stern-Modell – und welchen praktischen Vorteil bringt die dritte Dimension?"
      ]
    },

    {
      id: "k3",
      nr: "3",
      title: "Persönlichkeit & Persönlichkeitsmodelle",
      pages: "S. 105–211",
      color: "#c99a1f",
      terms: [
        { term: "Konstitutionstypologien (Kretschmer/Sheldon)", def: "Grundannahme: 'Alle Persönlichkeitseigenschaften haben ihre Grundlage im Körperbau.' Leptosom/schizothym = ungesellig, feinfühlig · Athletiker/viskös = Beharrungstendenz, stereotype Handlungen · Pykniker/zyklotym = gesellig, gutherzig, heiter. Heute: keine Bedeutung für aktuelle Forschung, hohes Problempotenzial." },
        { term: "Freud – psychodynamisches Modell", def: "Prüfungsrelevant ist NUR die Metaaussage: Bedeutung für empirische Forschung eher gering, als Therapie anerkannt. Instanzenmodell/Phasen/Abwehrmechanismen sind freiwillige Vertiefung." },
        { term: "Guilford – Spezifikationsgleichung", def: "R_j = s_ja·A + s_jt·T + s_je·E + s_jm·M + s_jr·R + s_js·S (Verhaltensreaktion als gewichtete Summe der Persönlichkeitskomponenten)." },
        { term: "Cattell – 16PF & lexikalischer Ansatz", def: "Grundgedanke: 'Die Gesamtheit der Persönlichkeit ist in der Sprache zu finden.' Reduktion: Allport & Odbert (1936) 17.953 Wörter → 171 Gegensatzpaare → 32 bipolare Cluster → 12 faktorenanalytische Faktoren (Basis 16PF). 5 bipolare Superfaktoren: Extraversion, Cortertia, Unabhängigkeit der Meinungsbildung, Anxiety, Character Strength. Datenbasis: L-, Q-, T-Daten." },
        { term: "Eysenck – PEN-System", def: "3 bipolare Superfaktoren: Psychotizismus, Extraversion, Neurotizismus. Hypothetico-deduktiver Ansatz, Datenbasis Q-/T-Daten." },
        { term: "Eysenck – 4-Ebenen-Hierarchie", def: "Type Level (Typus, z. B. Introversion) → Trait Level (z. B. Persistence, Rigidity) → Habitual Response Level → Specific Response Level. Die gängige '3-Ebenen'-Vereinfachung fasst die beiden untersten Ebenen zur 'Verhaltensebene' zusammen." },
        { term: "Big Five / OCEAN (Costa & McCrae)", def: "5 bipolare Superfaktoren: Offenheit für Erfahrungen, Gewissenhaftigkeit, Extraversion, Verträglichkeit, Neurotizismus." },
        { term: "ARAS & Yerkes-Dodson (Eysenck-Fundierung)", def: "Extravertierte: niedrige Grunderregung, unter-empfindliches ARAS → brauchen mehr Stimulation. Introvertierte: höhere Grunderregung, über-empfindliches ARAS → vermeiden starke Stimulation. Yerkes-Dodson (1908): kognitive Leistung hängt umgekehrt-u-förmig vom Erregungsniveau ab." }
      ],
      kernmodell: {
        typ: "hierarchie",
        titel: "Hierarchie-Modell (Beispiel Eysenck, 1947, S.160)",
        ebenen: [
          "Type Level – Typus (z. B. Introversion)",
          "Trait Level – Eigenschaften (z. B. Persistence, Rigidity, Irritability)",
          "Habitual Response Level – habituelle Reaktionen",
          "Specific Response Level – konkrete Einzelreaktion/Item"
        ],
        hinweis: "Guilford, Cattell und Eysenck zeigen alle 4 Hierarchieebenen – die populäre 3-Ebenen-Vereinfachung fasst Habitual + Specific Response zur 'Verhaltensebene' zusammen."
      },
      leitfragen: [
        "Vergleiche die Superfaktoren-Systeme von Eysenck (PEN), Cattell (5 Superfaktoren) und Costa & McCrae (OCEAN) – was ist gleich, was unterscheidet sich?",
        "Erkläre die ARAS-Hypothese zu Introversion/Extraversion und wie Yerkes-Dodson diese ergänzt."
      ]
    },

    {
      id: "k4",
      nr: "4",
      title: "Messen & Vergleichen: Testtheorie und Gütekriterien",
      pages: "S. 215–355",
      color: "#2c8f5c",
      terms: [
        { term: "Itemschwierigkeit [P]", def: "Lösungswahrscheinlichkeit eines Items in %. Je häufiger richtig gelöst, desto leichter (hoher P = leichtes Item)." },
        { term: "Trennschärfe [r_it]", def: "Part-whole-korrigierte Korrelation Item vs. Restsumme. Wertebereich −1 bis +1, nützlich ab r_it > .27. Beziehung zu P: umgekehrt-u-förmig, höchste Trennschärfe bei P ≈ 50 %." },
        { term: "KTT-Axiome (Gulliksen, 1950)", def: "1 X = t + e (beobachtet = wahr + Fehler) · 2 M_e = 0 (Fehler im Mittel null) · 3 r_ee = 0 (Fehler unabhängig voneinander) · 4 r_et = 0 (Fehler unabhängig vom wahren Wert)." },
        { term: "Objektivität", def: "Grad der Unabhängigkeit der Ergebnisse vom Untersucher. 3 Teile: Durchführungs-, Auswertungs-, Interpretationsobjektivität – alle drei müssen erfüllt sein." },
        { term: "Reliabilität", def: "Grad der Messgenauigkeit. Methoden der inneren Konsistenz: Split-Half (odd-even + Spearman-Brown-Korrektur) und Cronbachs α. Bewertung r_tt: .6–.7 ausreichend, >.7–.8 befriedigend, >.8–.9 gut, >.9–1.0 sehr gut." },
        { term: "Validität", def: "Test misst, was er zu messen vorgibt. 3 Arten: inhaltliche, kriteriumsorientierte (innere vs. äußere/prädiktive), Konstruktvalidität. 7 Methoden der Konstruktvalidität (Cronbach & Meehl, 1955): Korrelation mit Außenkriterien, konvergente Validität, divergente Validität, Faktorenanalyse, interindividuelle Unterschiede, intraindividuelle Unterschiede, inhaltlich-logische Analyse." },
        { term: "Standardmessfehler s_e", def: "s_e = s × √(1 − r_tt) – Grundlage für Konfidenzintervall und Kritische Differenz." },
        { term: "Konfidenzintervall", def: "CL95% = Messwert ± 1,96 × s_e · CL99% = Messwert ± 2,58 × s_e. Macht Aussage über den Bereich, in dem der wahre Wert einer Person mit definierter Sicherheit liegt." },
        { term: "Kritische Differenz", def: "D_krit = z × s × √(2 × (1 − r_tt)). Prüft, ob der Unterschied zwischen zwei Messwerten (Personen oder Messzeitpunkten) über Messfehler-Rauschen hinausgeht." },
        { term: "Spearman-Brown-Formel", def: "r_neu = (n × r_alt) / (1 + (n−1) × r_alt) – schätzt Reliabilität bei Testverlängerung/-verkürzung um Faktor n." },
        { term: "Messen (Definition, Asendorpf 2015, S.45)", def: "„Messen bedeutet, Objekten Zahlen zuzuordnen, sodass Beziehungen zwischen den Zahlen den Beziehungen zwischen den Objekten entsprechen.“" },
        { term: "Testdefinition nach Warren (1934)", def: "„Ein Test ist ein wissenschaftliches Routineverfahren zur Untersuchung eines oder mehrerer empirisch abgrenzbarer Persönlichkeitsmerkmale mit dem Ziel einer möglichst quantitativen Aussage über den relativen Grad der individuellen Merkmalsausprägung.“" },
        { term: "Normierung, Normmaßstab, Normwert (Abgrenzung)", def: "Normierung = vergleichende Positionierung einer Eigenschaftsausprägung (inter- und intraindividuell). Normmaßstab = die gewählte Normskala (z. B. z-/T-/IQ-/Stanine-Skala oder PR-Skala). Normwert = der konkrete, aus der Normtabelle abgelesene Wert einer Person auf diesem Maßstab." },
        { term: "Lineare Normen vs. Flächennormen", def: "Lineare Normen (z, Z, T, IQ, Stanine) sind intervallskaliert, Interpretation als Abweichung vom Mittelwert. Flächennormen (Prozentrang) sind ordinalskaliert, Interpretation als prozentualer Flächenanteil. Prozess: Test durchführen → Rohwert bestimmen → Vergleichsgruppe festlegen → Normwert ablesen → interpretieren." }
      ],
      kernmodell: {
        typ: "kette",
        titel: "Voraussetzungskette der Gütekriterien",
        schritte: ["Objektivität", "Reliabilität", "Validität"],
        hinweis: "Reliabilität ist notwendige, aber nicht hinreichende Voraussetzung für Validität. Ohne Objektivität keine verlässliche Reliabilitätsschätzung."
      },
      leitfragen: [
        "Leite Standardmessfehler, Konfidenzintervall und Kritische Differenz aus r_tt her – wann braucht man welche Formel?",
        "Warum ist Reliabilität notwendig, aber nicht hinreichend für Validität? Nenne ein Gegenbeispiel (reliabel, aber nicht valide)."
      ]
    },

    {
      id: "k5",
      nr: "5.1–5.2",
      title: "Intelligenz: Definitionen & 100 Jahre Forschungsgeschichte",
      pages: "S. 356–380",
      color: "#2f6fb0",
      terms: [
        { term: "Binet & Simon (1905)", def: "„Die Art der Bewältigung konkreter Situationen … gut urteilen, gut verstehen und gut denken.“" },
        { term: "Wechsler (1964)", def: "„Intelligenz ist die zusammengesetzte oder globale Fähigkeit eines Individuums, zweckvoll zu handeln, vernünftig zu denken und sich mit seiner Umgebung wirkungsvoll auseinanderzusetzen.“" },
        { term: "Intelligenz als Informationsverarbeitung", def: "Intelligenz ist eine Eigenschaft des zentralen Nervensystems, Informationen schnell und fehlerfrei zu bearbeiten." },
        { term: "Boring (operationale Definition)", def: "„Intelligenz ist das, was der Intelligenztest misst.“ – Definitionen müssen aus Intelligenzmodellen/-theorien hergeleitet werden." },
        { term: "Intelligenzalter [IA] (Binet)", def: "Grundalter (alle Aufgaben einer Altersgruppe gelöst) + monatsanteilig addierte zusätzlich gelöste Aufgaben höherer Altersstufen (12 Aufgaben/Lebensjahr = 1 Aufgabe/Monat)." },
        { term: "Intelligenzquotient [IQ] (Stern)", def: "IQ = (IA / LA) × 100 — löst das Erwachsenenmessungs-Problem von Binets Äquivalenznorm." },
        { term: "Intelligenz als Abweichungswert [IQa] (Wechsler)", def: "IQa = 100 + 15z = 100 + 15 × ((X − M)/SD) — verteilungsbezogen statt altersbezogen." }
      ],
      kernmodell: {
        typ: "timeline",
        titel: "Meilensteine der Intelligenzforschung (Auswahl)",
        events: [
          ["1884", "Galton", "Begründer der Intelligenzforschung (anthropometrisches Labor)"],
          ["1904", "Spearman", "2-Faktorenmodell (g-Faktor)"],
          ["1905", "Binet & Simon", "Stufenleitermodell, Intelligenzalter"],
          ["1912", "Stern", "Definition des IQ"],
          ["1931", "Thurstone", "Primary Mental Abilities"],
          ["1939/1955", "Wechsler", "IQ als Abweichungswert; Verbal-/Handlungsintelligenz"],
          ["1941", "Cattell", "fluide/kristallisierte Intelligenz"],
          ["1959", "Guilford", "Structure of Intellect"],
          ["1979/1982", "Jensen / Nettelbeck", "Mental Speed (Reaktions-/Inspektionszeit)"],
          ["1984", "Jäger", "Berliner Intelligenzstrukturmodell"],
          ["1983/99 / 1985/99", "Gardner / Sternberg", "multiple Intelligenzen / triarchische Theorie"],
          ["1990", "Carroll", "Metaanalyse → g-Faktor bestätigt"],
          ["1992/2006", "Haier / Grabner", "Neuronale Effizienz, kortikale Verortung"],
          ["1993/2005", "Carroll", "CHC-Modell (Cattell-Horn-Carroll)"]
        ]
      },
      leitfragen: [
        "Vergleiche die Definitionen von Binet & Simon und Wechsler – was ist der inhaltliche Unterschied?",
        "Erkläre an einem Rechenbeispiel, wie sich IA, IQ und IQa jeweils unterscheiden und berechnen."
      ]
    },

    {
      id: "k53",
      nr: "5.3",
      title: "Intelligenzmodelle & Intelligenztheorien",
      pages: "S. 381–475",
      color: "#1fa8a0",
      terms: [
        { term: "Spearman – g-Faktor-Modell (1904)", def: "2-Faktorentheorie: ein genereller Faktor g (sichtbar in logischem Schlussfolgern & Fähigkeit zur Reproduktion) + spezifische Faktoren Sx je Einzelaufgabe. Abgeleitet aus der hohen Interkorrelation schulischer Leistungen." },
        { term: "Thurstone – Primary Mental Abilities (PMA, 1938)", def: "Kritisierte Spearmans g-Faktor; Modell mit 7 unabhängigen Primärfaktoren: P (perceptual speed), N (number), W (word fluency), V (verbal comprehension), S (space), M (memory), R (reasoning)." },
        { term: "Zwischenfazit Spearman/Thurstone", def: "Die Modelle widersprechen sich nicht, sondern ergänzen sich: Spearman = „genetische Intelligenz“, Thurstone = „edukative Intelligenz“. Sichtbar vereint im Modell von Cattell." },
        { term: "Cattell – fluide/kristallisierte Intelligenz (Gf-Gc, 1963)", def: "Kombiniert Spearman und Thurstone. Gf = fluide allgemeine Intelligenz (vererbter Anteil geistiger Leistungsfähigkeit). Gc = kristallisierte allgemeine Intelligenz (umweltabhängig, durch Lebenserfahrung). Se = schulische Erfahrung/familiäre Sozialisation. Tests: CFT-Reihe, KAIT/K-TIM." },
        { term: "Wechsler – Verbal- und Handlungsintelligenz", def: "Kombiniert ebenfalls Spearman & Thurstone. IQ als Abweichungsquotient (1932): IQ = 100 ± 15z. Handlungsintelligenz = praktische Intelligenz (z. B. Puzzle, Mosaik). Tests: HAWIK, HAWIE, WIE." },
        { term: "Guilford – Structure of Intellect (Würfelmodell)", def: "120 unabhängige Intelligenzdimensionen = 4 Inhalte × 5 Operationen × 6 Produkte. Inhalte: figural, symbolisch, semantisch, Verhalten. Operationen: Kognition, Gedächtnis, divergente Produktion, konvergente Produktion, Evaluation. Produkte: Einheiten, Klassen, Beziehungen, Systeme, Transformationen, Implikationen." },
        { term: "Jäger – Berliner Intelligenzstrukturmodell (BIS)", def: "Vereint die Konzeptionen von Spearman, Thurstone und Guilford in einem Modell. Zugehöriges Testverfahren: BIS." },
        { term: "Sternberg – Triarchisches Intelligenzmodell (1985)", def: "3 Basisbereiche: analytische, praktische, kreative Intelligenz. Fazit laut Skript: nicht empirisch bewiesen, kein Testverfahren, praktische Nützlichkeit: keine." },
        { term: "Gardner – Modell multipler Intelligenzen (1983/1999)", def: "5 Begabungsbereiche: musikalisch, linguistisch, logisch-mathematisch, körperbezogen (kinästhetisch), intra-/interpersonell. Fazit laut Skript: nicht empirisch bewiesen, kein Testverfahren, praktische Nützlichkeit: keine." },
        { term: "Carroll – CHC-Modell (Cattell-Horn-Carroll)", def: "Metaanalyse über 400 Studien zu messbaren kognitiven Leistungsbereichen, bestätigt Spearmans g-Faktor empirisch. 3 Ebenen: G-Factor → Facetten → Grundfähigkeiten." },
        { term: "Mental Speed (Jensen, 1979)", def: "Intelligenz als Geschwindigkeit der Informationsverarbeitung (Reaktions-/Inspektionszeit). Korrelation Intelligenz–Mental-Speed: r=−.30 (eingeschränkte Stichprobe) bis r=−.50 (breite Leistungsvarianz, Neubauer & Bucik 1996). Verarbeitungsgeschwindigkeit erklärt ca. die Hälfte der Varianz von Intelligenz (Schweizer & Koch, 2002)." },
        { term: "Neuronale Effizienz (Haier, 1992)", def: "„Intelligence is not a function of how hard the brain works but rather how efficiently it works.“ Intelligentere Menschen benötigen geringere Hirnaktivität und aktivieren gezielter die aufgabenrelevanten Hirnregionen. Haier et al. (1998, PET-Studie): r=−.48 bis −.84 zwischen IQ und regionaler Hirnaktivität." },
        { term: "Kortikale Verortung (Grabner, Stern & Neubauer, 2003/2006)", def: "Taxifahrer- und Schachspieler-Studien: Expertise kann geringere Intelligenz auf Verhaltens- UND kortikaler Ebene ausgleichen. Experten nutzen primär parietale Hirnregionen (domänenspezifisch, automatisiert), Novizen primär frontale Regionen (kontrolliert, fokussiert)." },
        { term: "Graue & weiße Hirnsubstanz", def: "Graue Substanz = informationsverarbeitende Zentren. Weiße Substanz = Verbindungen zwischen diesen Zentren. Menge und Verteilung korrelieren mit Intelligenzhöhe und einzelnen Begabungsbereichen (Haier et al., 2005)." },
        { term: "Parameter individueller Unterschiede (Sternberg & Pretz, 2005)", def: "Verarbeitungsgeschwindigkeit (Mental Speed), Kapazität des Arbeitsgedächtnisses, physiologische Hirnprozesse, spezifische kognitive Prozesse, bereichsspezifisches Wissen (Neuheit vs. Expertise), plus weitere Einflussgrößen wie Gesundheit und Motivation." }
      ],
      kernmodell: {
        typ: "tabelle",
        titel: "Intelligenzmodelle im Vergleich",
        spalten: ["Forscher", "Kernidee", "Empirische Absicherung"],
        zeilen: [
          ["Spearman", "g-Faktor + spezifische Faktoren", "Basis aller weiteren Modelle, später von Carroll bestätigt"],
          ["Thurstone", "7 Primary Mental Abilities", "durch Cattell/Carroll relativiert, nicht widerlegt"],
          ["Cattell", "fluide (Gf) & kristallisierte (Gc) Intelligenz", "vereint Spearman & Thurstone, breit anerkannt"],
          ["Wechsler", "Verbal- & Handlungsintelligenz", "Grundlage der IQ-Testpraxis (HAWIK/HAWIE)"],
          ["Guilford", "120 Dimensionen (4×5×6-Würfel)", "kaum testbar, geringe praktische Verbreitung"],
          ["Jäger (BIS)", "vereint Spearman, Thurstone, Guilford", "eigenes Testverfahren (BIS)"],
          ["Sternberg", "analytisch/praktisch/kreativ", "laut Skript NICHT empirisch bewiesen, kein Test"],
          ["Gardner", "5 multiple Intelligenzen", "laut Skript NICHT empirisch bewiesen, kein Test"],
          ["Carroll (CHC)", "3-Ebenen-Modell, g-Faktor bestätigt", "Metaanalyse von 400+ Studien"]
        ]
      },
      leitfragen: [
        "Erkläre, wie Cattells Gf-Gc-Modell die scheinbar widersprüchlichen Theorien von Spearman und Thurstone vereint.",
        "Vergleiche Guilford, Sternberg und Gardner hinsichtlich ihrer empirischen Absicherung und praktischen Testbarkeit – was unterscheidet sie von Cattell und Carroll?"
      ]
    },

    {
      id: "k4t",
      nr: "Tr",
      title: "Methodenskript II – Anwendung: Konfidenzintervall & Kritische Differenz",
      pages: "Methodenskript II, Übung 1 & 3",
      color: "#8b3fa8",
      terms: [
        { term: "Kurzgutachten-Aufbau (Konfidenzintervall)", def: "1 s_e berechnen → 2 z-Wert wählen (95%: 1,96 / 99%: 2,58) → 3 CI = X ± z×s_e berechnen → 4 Fazit: liegt das CI über/unter/um den Vergleichswert?" },
        { term: "Kurzgutachten-Aufbau (Kritische Differenz)", def: "1 s_e berechnen → 2 D_krit = z×s×√(2(1−r_tt)) → 3 beobachtete Differenz der beiden Werte bilden → 4 Vergleich: |Differenz| > D_krit → statistisch bedeutsamer Unterschied." },
        { term: "Typische Praxisanwendung Personalauswahl", def: "Konfidenzintervall: Einzelergebnis realistisch einordnen (Scheingenauigkeit vermeiden). Kritische Differenz: zwei Bewerbende oder Prä-/Post-Werte vergleichen, bevor eine Auswahl-/Entwicklungsentscheidung getroffen wird." }
      ],
      kernmodell: {
        typ: "formeln",
        titel: "Formelkarte",
        formeln: [
          ["Standardmessfehler", "s_e = s × √(1 − r_tt)"],
          ["Konfidenzintervall 95%", "CI = X ± 1,96 × s_e"],
          ["Konfidenzintervall 99%", "CI = X ± 2,58 × s_e"],
          ["Kritische Differenz", "D_krit = z × s × √(2 × (1 − r_tt))"]
        ]
      },
      leitfragen: [
        "Rechne ein Kurzgutachten: Z-Wert 90 (M=100, s=10, r_tt=.93) bei 99% Sicherheit – wie lautet das CI und was bedeutet es?",
        "Rechne eine Kritische Differenz: T-Werte 42 vs. 35 (s=10, r_tt=.97, 95% Sicherheit) – ist der Unterschied bedeutsam?"
      ]
    }
  ],

  /* ===================== PROBEKLAUSUR / KARTEIKARTEN FRAGEN ===================== */
  questions: [
    { id: "q1", chapter: "k1", level: "Wissen", q: "Nennen Sie die 7 Kriterien empirisch-wissenschaftlicher Persönlichkeitsforschung.", a: "Expliziertheit, Widerspruchsfreiheit, Vollständigkeit, Produktivität, Anwendbarkeit, Empirische Verankerung, Empirische Überprüfbarkeit." },
    { id: "q2", chapter: "k1", level: "Wissen", q: "Zählen Sie die 6 Paradigmen der Persönlichkeitspsychologie nach Asendorpf & Neyer (2012) auf.", a: "Eigenschaftsparadigma, Informationsverarbeitungsparadigma, dynamisch-interaktionistisches Paradigma, neurowissenschaftliches Paradigma, molekulargenetisches Paradigma, evolutionspsychologisches Paradigma." },
    { id: "q3", chapter: "k1", level: "Verstehen", q: "Beschreiben Sie, was das Eigenschaftsparadigma inhaltlich aussagt.", a: "Personen zeigen Regelmäßigkeiten in Merkmalen/Verhalten; diese werden durch Vergleich mit anderen Personen (einer Vergleichsgruppe) beschrieben – individuelle Facetten werden erst im Vergleich deutlich." },
    { id: "q4", chapter: "k1", level: "Transfer", q: "Ein Unternehmen untersucht, wie der Cortisolspiegel von Mitarbeitenden mit deren Stressresistenz zusammenhängt. Welchem Paradigma ordnen Sie das zu und warum?", a: "Neurowissenschaftliches Paradigma – Verhalten/Erleben (hier: Stressresistenz) wird über biologische Systeme (hormonelles System) erklärt." },
    { id: "q5", chapter: "k2", level: "Wissen", q: "Benennen Sie die 6 Hauptaufgaben der Psychologie.", a: "Beschreiben, Messen von Eigenschaften, Untersuchung von Merkmalsunterschieden, Verstehen & Erklären, Vorhersage, Änderung menschlichen Erlebens und Verhaltens." },
    { id: "q6", chapter: "k2", level: "Wissen", q: "Beschreiben Sie die Hierarchie Typen – Traits – Habits – States.", a: "Typen/Supertraits (übergeordnet, dimensional) → Traits (stabile Eigenschaften) → Habits (Gewohnheiten als Trait-Dimensionen) → States (situative Zustandseigenschaften)." },
    { id: "q7", chapter: "k2", level: "Verstehen", q: "Erläutern Sie die vier Methoden nach Stern (1911) anhand der Dimensionen Individuen und Merkmale.", a: "Variationsforschung (mehrere Individuen, 1 Merkmal, nomothetisch), Korrelationsforschung (mehrere Individuen, 2+ Merkmale, nomothetisch), Psychographie (1 Individuum, 2+ Merkmale, idiografisch), Komparationsforschung (2+ Individuen, 2+ Merkmale, idiografisch)." },
    { id: "q8", chapter: "k2", level: "Transfer", q: "Ein Personalreferent vergleicht die Big-Five-Profile zweier Abteilungen (Vertrieb vs. IT). Welche Stern-Methode liegt vor?", a: "Komparationsforschung – mehrere Personen(-gruppen) werden in mehreren Merkmalen (Big Five) verglichen." },
    { id: "q9", chapter: "k2", level: "Verstehen", q: "Wie erweitert Cattell (1957) das Stern-Modell?", a: "Durch die zusätzliche Dimension Situationen/Zeitpunkte zum Datenquader (Kovariationswürfel: Individuen × Merkmale × Situationen)." },
    { id: "q10", chapter: "k3", level: "Wissen", q: "Benennen Sie die drei Konstitutionstypen nach Kretschmer/Sheldon mit je einer Eigenschaft.", a: "Leptosom/schizothym: ungesellig, feinfühlig. Athletiker/viskös: Beharrungstendenz. Pykniker/zyklotym: gesellig, heiter." },
    { id: "q11", chapter: "k3", level: "Wissen", q: "Welche drei bipolaren Superfaktoren bilden Eysencks PEN-System?", a: "Psychotizismus, Extraversion, Neurotizismus." },
    { id: "q12", chapter: "k3", level: "Verstehen", q: "Beschreiben Sie die vier Hierarchieebenen in Eysencks Modell (1947).", a: "Type Level (Typus) → Trait Level (Eigenschaften) → Habitual Response Level → Specific Response Level." },
    { id: "q13", chapter: "k3", level: "Verstehen", q: "Erläutern Sie die ARAS-Hypothese zur Introversion/Extraversion.", a: "Introvertierte haben ein über-empfindliches ARAS (höhere Grunderregung) und vermeiden starke Stimulation; Extravertierte haben ein unter-empfindliches ARAS (niedrige Grunderregung) und suchen mehr Stimulation, um ein angenehmes mittleres Erregungsniveau zu erreichen." },
    { id: "q14", chapter: "k3", level: "Wissen", q: "Nennen Sie die fünf Faktoren der Big Five (OCEAN).", a: "Offenheit für Erfahrungen, Gewissenhaftigkeit, Extraversion, Verträglichkeit, Neurotizismus." },
    { id: "q15", chapter: "k3", level: "Transfer", q: "In einem Assessment-Center wird ein Bewerber als 'ruhig, zurückhaltend, reagiert empfindlich auf Lärm' beschrieben. Mit welchem eysenckschen Konzept lässt sich das erklären?", a: "Introversion/hohe ARAS-Empfindlichkeit – die Person vermeidet starke Stimulation, um ihr bereits hohes kortikales Erregungsniveau nicht weiter zu steigern." },
    { id: "q16", chapter: "k3", level: "Wissen", q: "Wie viele persönlichkeitsbeschreibende Wörter identifizierten Allport & Odbert (1936) als Ausgangspunkt für Cattells lexikalischen Ansatz, und auf wie viele wurden sie am Ende faktorenanalytisch reduziert?", a: "17.953 Wörter, reduziert auf 171 Gegensatzpaare → 32 bipolare Cluster → 12 faktorenanalytische Faktoren (Basis des 16PF)." },
    { id: "q17", chapter: "k4", level: "Wissen", q: "Nennen Sie die vier Axiome der Klassischen Testtheorie nach Gulliksen (1950).", a: "1) X = t + e, 2) M_e = 0, 3) r_ee = 0, 4) r_et = 0." },
    { id: "q18", chapter: "k4", level: "Verstehen", q: "Was bedeutet Itemschwierigkeit [P] und wie hängt sie mit der Trennschärfe [r_it] zusammen?", a: "P ist die Lösungswahrscheinlichkeit eines Items in %. Die Beziehung zu r_it ist umgekehrt-u-förmig: höchste Trennschärfe bei mittlerer Schwierigkeit (P≈50%), bei sehr leichten/schweren Items sinkt r_it gegen 0." },
    { id: "q19", chapter: "k4", level: "Wissen", q: "Nennen Sie die drei Teil-Objektivitäten.", a: "Durchführungsobjektivität, Auswertungsobjektivität, Interpretationsobjektivität." },
    { id: "q20", chapter: "k4", level: "Wissen", q: "Welche zwei Methoden der inneren Konsistenz zur Reliabilitätsbestimmung kennen Sie?", a: "Split-Half (odd-even, mit Spearman-Brown-Korrektur) und Cronbachs Alpha." },
    { id: "q21", chapter: "k4", level: "Verstehen", q: "Nennen und erläutern Sie kurz die drei Arten der Validität.", a: "Inhaltliche Validität (Aufgabe selbst lässt Schluss auf Fertigkeit zu), kriteriumsorientierte Validität (Korrelation mit einem Kriterium, innere vs. äußere/prädiktive), Konstruktvalidität (Beziehung zu nicht direkt beobachtbaren Eigenschaften)." },
    { id: "q22", chapter: "k4", level: "Wissen", q: "Zählen Sie die sieben Methoden zur Bestimmung der Konstruktvalidität nach Cronbach & Meehl (1955) auf.", a: "Korrelation mit mehreren Außenkriterien, konvergente Validität, divergente/diskriminante Validität, faktorenanalytische Betrachtung, Analyse interindividueller Unterschiede, Analyse intraindividueller Unterschiede, inhaltlich-logische Analyse." },
    { id: "q23", chapter: "k4", level: "Transfer", q: "Herr Müller erzielt einen Z-Wert von 90 (M=100, s=10). Die Reliabilität des Tests beträgt r_tt=.93. Berechnen Sie das 99%-Konfidenzintervall und formulieren Sie ein Kurzfazit.", a: "s_e = 10×√(1−.93) = 10×√.07 ≈ 2,65. CI99% = 90 ± 2,58×2,65 ≈ 90 ± 6,83 → [83,2; 96,8]. Da das komplette CI unter 100 liegt, ist die unterdurchschnittliche Leistung mit 99% Sicherheit statistisch gesichert." },
    { id: "q24", chapter: "k4", level: "Transfer", q: "Zwei Bewerbende erzielen T-Werte von 42 und 35 (s=10, r_tt=.97). Ist der Unterschied bei 95% Sicherheit bedeutsam?", a: "s_e=10×√(1−.97)≈1,73. D_krit=1,96×10×√(2×.03)≈4,80. Beobachtete Differenz=7. Da 7>4,80, ist der Unterschied statistisch bedeutsam." },
    { id: "q25", chapter: "k4", level: "Verstehen", q: "Warum wird der Messfehler bei der Kritischen Differenz gegenüber dem Konfidenzintervall 'verdoppelt'?", a: "Weil beim Vergleich zweier unabhängiger Messungen sich die Fehlervarianzen BEIDER Messungen addieren (Var(X_A−X_B)=2×s_e²) – das erscheint in der Formel als Faktor √2, nicht als einfache Verdopplung von s_e." },
    { id: "q26", chapter: "k5", level: "Wissen", q: "Zitieren Sie die Intelligenzdefinition nach Wechsler (1964).", a: "„Intelligenz ist die zusammengesetzte oder globale Fähigkeit eines Individuums, zweckvoll zu handeln, vernünftig zu denken und sich mit seiner Umgebung wirkungsvoll auseinanderzusetzen.“" },
    { id: "q27", chapter: "k5", level: "Wissen", q: "Was besagt die operationale Definition 'Intelligenz ist das, was der Intelligenztest misst'?", a: "Definitionen von Intelligenz müssen aus den jeweiligen Intelligenzmodellen und -theorien hergeleitet werden – es gibt keine theorieunabhängige Definition." },
    { id: "q28", chapter: "k5", level: "Verstehen", q: "Erläutern Sie die Unterschiede zwischen IA (Binet), IQ (Stern) und IQa (Wechsler).", a: "IA: Intelligenzalter, abhängig von Anzahl gelöster altersgruppenspezifischer Aufgaben. IQ=(IA/LA)×100, löst das Erwachsenenmessungsproblem. IQa=100+15z ist verteilungsbezogen (Abweichung vom Mittelwert der Normstichprobe), nicht altersbezogen." },
    { id: "q29", chapter: "k5", level: "Wissen", q: "Wer entwickelte das 2-Faktorenmodell der Intelligenz (g-Faktor) und in welchem Jahr?", a: "Spearman, 1904." },
    { id: "q30", chapter: "k5", level: "Wissen", q: "Welches Jahr und welcher Forscher stehen für das Modell der fluiden/kristallisierten Intelligenz?", a: "Cattell, 1941." },
    { id: "q31", chapter: "k5", level: "Transfer", q: "Ein Kind (9 Jahre) löst alle Aufgaben bis Altersgruppe 3 komplett, zusätzlich 7 Aufgaben aus Gruppe 4 und 4 Aufgaben aus Gruppe 5. Berechnen Sie das Intelligenzalter nach Binet.", a: "Grundalter 3 Jahre + 7 Monate (Gruppe 4) + 4 Monate (Gruppe 5) = Intelligenzalter 3 Jahre und 11 Monate." },
    { id: "q32", chapter: "k4t", level: "Transfer", q: "Welche vier Schritte umfasst ein Kurzgutachten zum Konfidenzintervall?", a: "1) Standardmessfehler s_e berechnen, 2) passenden z-Wert wählen (1,96 für 95% / 2,58 für 99%), 3) CI = X ± z×s_e berechnen, 4) Fazit zur Lage des CI relativ zum Vergleichswert formulieren." },
    { id: "q33", chapter: "k4t", level: "Wissen", q: "Welcher z-Wert gehört zu 95% bzw. 99% Sicherheit?", a: "95% → z = 1,96; 99% → z = 2,58." },
    { id: "q34", chapter: "k1", level: "Verstehen", q: "Was unterscheidet das dynamisch-interaktionistische Paradigma vom Eigenschaftsparadigma?", a: "Das dynamisch-interaktionistische Paradigma betont die Entwicklung/Veränderung von Eigenschaften über die Zeit durch Person-Umwelt-Wechselwirkung; das Eigenschaftsparadigma betont stabile Regelmäßigkeiten im Vergleich zu anderen Personen." },
    { id: "q35", chapter: "k2", level: "Wissen", q: "Was ist der Unterschied zwischen Ideographie und Nomothetik?", a: "Ideographie beschreibt eine einzelne Person; Nomothetik führt Persönlichkeit auf Bedingungszusammenhänge zurück und stellt allgemeingültige Gesetze für viele Personen auf." },
    { id: "q36", chapter: "k4", level: "Wissen", q: "Was ist, ganz einfach betrachtet, messen? (Definition nach Asendorpf, 2015)", a: "Objekten Zahlen so zuzuordnen, dass Beziehungen zwischen den Zahlen den Beziehungen zwischen den Objekten entsprechen." },
    { id: "q37", chapter: "k4", level: "Wissen", q: "Zitieren Sie die Testdefinition nach Warren (1934).", a: "„Ein Test ist ein wissenschaftliches Routineverfahren zur Untersuchung eines oder mehrerer empirisch abgrenzbarer Persönlichkeitsmerkmale mit dem Ziel einer möglichst quantitativen Aussage über den relativen Grad der individuellen Merkmalsausprägung.“" },
    { id: "q38", chapter: "k4", level: "Verstehen", q: "Grenzen Sie Normierung, Normmaßstab und Normwert voneinander ab.", a: "Normierung = der Prozess der vergleichenden Positionierung einer Eigenschaftsausprägung. Normmaßstab = die gewählte Normskala (z. B. T-Skala, IQ-Skala, PR-Skala). Normwert = der konkrete abgelesene Einzelwert einer Person auf diesem Maßstab." },
    { id: "q39", chapter: "k4", level: "Wissen", q: "Definieren Sie Standardabweichung und geben Sie die Formel an.", a: "Mittlere Streuung der Werte einer Messvariable um den Mittelwert herum. s = √(Σ(X−M)²/N)." },
    { id: "q40", chapter: "k4", level: "Transfer", q: "Zwei Rohwertskalen korrelieren mit r=.729 bei N=20823. Ist das plausibel, und was sagt der Wert über den Zusammenhang aus?", a: "Ja, plausibel bei einer so großen Stichprobe und zwei inhaltlich verwandten Persönlichkeitsmaßen. r=.729 zeigt einen starken positiven linearen Zusammenhang: hohe Werte auf der einen Skala gehen im Mittel mit hohen Werten auf der anderen einher." },
    { id: "q41", chapter: "k53", level: "Wissen", q: "Beschreiben Sie Spearmans g-Faktor-Modell (1904).", a: "2-Faktorentheorie: ein genereller Faktor g (sichtbar in logischem Schlussfolgern und Fähigkeit zur Reproduktion) plus spezifische Faktoren Sx für jede Einzelaufgabe. Abgeleitet aus der hohen Interkorrelation schulischer Leistungen." },
    { id: "q42", chapter: "k53", level: "Wissen", q: "Nennen Sie die 7 Primary Mental Abilities nach Thurstone (1938).", a: "Perceptual speed (P), number (N), word fluency (W), verbal comprehension (V), space (S), memory (M), reasoning (R)." },
    { id: "q43", chapter: "k53", level: "Verstehen", q: "Wie vereint Cattells Modell die Theorien von Spearman und Thurstone?", a: "Spearman steht für 'genetische Intelligenz' (g-Faktor), Thurstone für 'edukative Intelligenz' (mehrere Primärfaktoren). Cattell verbindet beides im Gf-Gc-Modell: Gf (fluide, vererbte Intelligenz) entspricht eher Spearmans Grundgedanken, Gc (kristallisierte, umweltgeprägte Intelligenz) entsteht aus schulischer/lebensweltlicher Erfahrung (Se) und spiegelt Thurstones Mehrfaktoren-Gedanken." },
    { id: "q44", chapter: "k53", level: "Wissen", q: "Was bedeutet 'IQ als Abweichungsquotient' nach Wechsler (1932)?", a: "IQ = 100 ± 15z: der IQ wird als Abweichung vom Mittelwert (100) der Normstichprobe in Einheiten der Standardabweichung (15 Punkte je SD) ausgedrückt, statt wie bei Binet/Stern altersbezogen berechnet." },
    { id: "q45", chapter: "k53", level: "Wissen", q: "Aus wie vielen Dimensionen besteht Guilfords Structure-of-Intellect-Würfelmodell und wie setzen sie sich zusammen?", a: "120 unabhängige Intelligenzdimensionen = 4 Inhalte × 5 Operationen × 6 Produkte." },
    { id: "q46", chapter: "k53", level: "Verstehen", q: "Welche drei bestehenden Modelle vereint das Berliner Intelligenzstrukturmodell nach Jäger?", a: "Spearman, Thurstone und Guilford." },
    { id: "q47", chapter: "k53", level: "Verstehen", q: "Was ist das zentrale Fazit des Skripts zu Sternbergs triarchischem Modell und Gardners Modell multipler Intelligenzen?", a: "Beide Modelle sind laut Skript nicht empirisch bewiesen, es existiert kein zugehöriges Testverfahren – die praktische Nützlichkeit wird als 'keine' bewertet." },
    { id: "q48", chapter: "k53", level: "Wissen", q: "Was zeigt Carrolls Metaanalyse (CHC-Modell) in Bezug auf Spearmans g-Faktor?", a: "Die Metaanalyse von über 400 Studien liefert empirische Evidenz für Spearmans g-Faktor und ordnet ihn als oberste von drei Ebenen (G-Factor, Facetten, Grundfähigkeiten) ein." },
    { id: "q49", chapter: "k53", level: "Verstehen", q: "Erläutern Sie die Kernannahme der Mental-Speed-Theorie nach Jensen.", a: "Intelligenz ist eine Eigenschaft des zentralen Nervensystems, Informationen schnell und fehlerfrei zu verarbeiten. Unterschiede in elementaren Prozessen (Reaktions-/Inspektionszeit) erklären einen Teil der Intelligenzunterschiede – die Verarbeitungsgeschwindigkeit erklärt laut Schweizer & Koch (2002) etwa die Hälfte der Varianz von Intelligenz." },
    { id: "q50", chapter: "k53", level: "Wissen", q: "Zitieren Sie sinngemäß Haiers (1992) Kernaussage zur Neuronalen Effizienz.", a: "Intelligenz ist keine Funktion davon, wie hart das Gehirn arbeitet, sondern wie effizient es arbeitet – u. a. durch gezielten Einsatz aufgabenrelevanter Hirnregionen und Nicht-Nutzung irrelevanter Bereiche." },
    { id: "q51", chapter: "k53", level: "Transfer", q: "Was zeigte die Taxifahrer-Studie von Grabner, Stern & Neubauer (2003) zur Wechselwirkung von Expertise und Intelligenz?", a: "Bei der Expertenaufgabe (bekannte Routen) gab es keine %-ERD-Unterschiede zwischen niedrig- und hochintelligenten Taxifahrern; bei der reinen Intelligenzaufgabe (künstliche Karte) zeigten Niedrigbegabte mehr %-ERD. Fazit: Erfahrung/Expertise kann geringere Intelligenz auf Verhaltens- und kortikaler Ebene ausgleichen." },
    { id: "q52", chapter: "k53", level: "Transfer", q: "Ein Unternehmen möchte in der Potenzialanalyse zwischen 'reiner Begabung' und 'Erfahrungswissen' unterscheiden. Welches Intelligenzmodell liefert dafür die passende theoretische Grundlage, und warum?", a: "Cattells Gf-Gc-Modell: Gf (fluide Intelligenz) bildet die angeborene, erfahrungsunabhängige Problemlösefähigkeit ab, Gc (kristallisierte Intelligenz) das erworbene, erfahrungs-/bildungsabhängige Wissen – genau die Unterscheidung, die für 'reine Begabung' vs. 'Erfahrungswissen' gebraucht wird." },
    { id: "q53", chapter: "k53", level: "Wissen", q: "Welche fünf Parameter individueller Unterschiede nennen Sternberg & Pretz (2005)?", a: "Verarbeitungsgeschwindigkeit (Mental Speed), Kapazität des Arbeitsgedächtnisses, physiologische Prozesse im Gehirn, spezifische kognitive Prozesse, bereichsspezifisches Wissen (Neuheit vs. Expertise)." },
    { id: "q54", chapter: "k53", level: "Verstehen", q: "Was unterscheidet graue von weißer Hirnsubstanz im Kontext der Intelligenzforschung?", a: "Graue Substanz = informationsverarbeitende Zentren; weiße Substanz = die Verbindungen zwischen diesen Zentren. Menge und Verteilung beider korrelieren mit der Höhe der Intelligenz und einzelnen Begabungsbereichen (Haier et al., 2005)." }
  ]
};
