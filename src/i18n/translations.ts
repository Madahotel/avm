export type LanguageCode = "fr" | "mg" | "en" | "es" | "de" | "it"

export interface TranslationDictionary {
  nav: Record<string, string>
  common: Record<string, string>
  footer: { tagline: string; legal: string; rights: string }
  home: {
    badge: string
    subtitle: string
    missionTitle: string
    missionSubtitle: string
    mission: { defend: string; defendDesc: string; promote: string; promoteDesc: string; stabilize: string; stabilizeDesc: string; improve: string; improveDesc: string }
    newsTitle: string
    newsSubtitle: string
    featuredLabel: string
    actorsTitle: string
    actorsSubtitle: string
    actorPlanteurs: string; actorPlanteursDesc: string
    actorCollecteurs: string; actorCollecteursDesc: string
    actorProducteurs: string; actorProducteursDesc: string
    actorExportateurs: string; actorExportateursDesc: string
    progTitle: string; progSubtitle: string
    progTrace: string; progTraceDesc: string
    progSocial: string; progSocialDesc: string
    progEnv: string; progEnvDesc: string
    progQuality: string; progQualityDesc: string
    impactsTitle: string; impactsSubtitle: string
    impactPlanters: string; impactTons: string; impactPrice: string; impactRegions: string
    ctaTitle: string; ctaDesc: string
    photoSectionTitle: string; photoSectionDesc: string
  }
  about: {
    title: string; subtitle: string
    historyTitle: string; historyDesc: string
    legalTitle: string; decree1: string; decree2: string
    governanceTitle: string; governanceDesc: string
    locationTitle: string; locationDesc: string
  }
  actors: {
    title: string; subtitle: string
    planteurs: string; planteursDesc: string
    collecteurs: string; collecteursDesc: string
    producteurs: string; producteursDesc: string
    exportateurs: string; exportateursDesc: string
  }
  programmes: {
    title: string; subtitle: string
    traceTitle: string; traceDesc: string; traceTag: string
    socialTitle: string; socialDesc: string; socialTag: string
    envTitle: string; envDesc: string; envTag: string
    qualityTitle: string; qualityDesc: string; qualityTag: string
  }
  campaign: {
    title: string; subtitle: string
    datesTitle: string; datesDesc: string
    rulesTitle: string
    rule1: string; rule2: string; rule3: string; rule4: string
    noticeTitle: string; noticeDesc: string
  }
  exporters: {
    title: string; subtitle: string
    standardsTitle: string; standardsDesc: string
    searchPlaceholder: string
    emptyMessage: string
  }
  impacts: {
    title: string; subtitle: string
  }
  partners: {
    title: string; subtitle: string
    bientot: string
    institution: string; collectivite: string; filiere: string
    intl: string; onu: string; ong: string
  }
  chatbot: { title: string; placeholder: string; greeting: string }
  contact: {
    title: string; subtitle: string
    coordsTitle: string
    addressLabel: string; address: string
    phoneLabel: string; phone: string
    emailLabel: string; email: string
    hoursLabel: string; hours: string
    formTitle: string
    nameLabel: string; emailFieldLabel: string
    subjectLabel: string; messageLabel: string
    sentTitle: string; sentDesc: string
  }
}

const T: Record<LanguageCode, TranslationDictionary> = {
  fr: {
    nav: { home: "Accueil", about: "\u00C0 propos", actors: "Acteurs", programmes: "Programmes", campaign: "Vanille verte", exporters: "Exportateurs", impacts: "Impacts", partners: "Partenaires", contact: "Contact" },
    common: { learnMore: "En savoir plus", contactUs: "Nous contacter", send: "Envoyer", discover: "D\u00E9couvrir", explore: "Explorer", viewAll: "Voir tout" },
    footer: { tagline: "Alliance de la Vanille Malagasy - D\u00E9fendre, promouvoir, prot\u00E9ger.", legal: "Mentions l\u00E9gales", rights: "Tous droits r\u00E9serv\u00E9s." },
    home: {
      badge: "Association Reconnue d'utilit\u00E9 publique - D\u00E9cret n\u00B02021-548",
      subtitle: "D\u00E9fendre la fili\u00E8re vanille, la promouvoir \u00E0 l'\u00E9chelle nationale et internationale, prot\u00E9ger les acteurs contre la volatilit\u00E9 des prix et am\u00E9liorer les conditions de vie des planteurs de vanille verte \u00E0 Madagascar.",
      missionTitle: "Notre Mission", missionSubtitle: "Quatre piliers fondamentaux pour une fili\u00E8re vanille durable et \u00E9quitable.",
      mission: {
        defend: "D\u00E9fendre la fili\u00E8re", defendDesc: "Protection des int\u00E9r\u00EAts des planteurs, collecteurs, producteurs et exportateurs de vanille malagasy.",
        promote: "Promouvoir", promoteDesc: "Rayonnement national et international de la vanille de Madagascar, reconnue comme la meilleure au monde.",
        stabilize: "Stabiliser les prix", stabilizeDesc: "Lutte contre la volatilit\u00E9 des cours pour garantir un revenu d\u00E9cent \u00E0 chaque maillon de la cha\u00EEne.",
        improve: "Am\u00E9liorer les conditions", improveDesc: "Am\u00E9lioration des conditions de vie des planteurs de vanille verte des r\u00E9gions Diana et Sofia.",
      },
      newsTitle: "Actualit\u00E9s", newsSubtitle: "Les derni\u00E8res nouvelles de l'Alliance de la Vanille Malagasy.", featuredLabel: "\u00C0 la une",
      actorsTitle: "Les Acteurs de la fili\u00E8re", actorsSubtitle: "De la plantation \u00E0 l'exportation, quatre maillons essentiels de la cha\u00EEne de valeur de la vanille malagasy.",
      actorPlanteurs: "Planteurs", actorPlanteursDesc: "Gardiens du savoir-faire ancestral dans les r\u00E9gions de vanille.",
      actorCollecteurs: "Collecteurs", actorCollecteursDesc: "Lien essentiel entre les planteurs et les producteurs.",
      actorProducteurs: "Producteurs", actorProducteursDesc: "Transformation de la vanille verte en vanille noire et rouge.",
      actorExportateurs: "Exportateurs", actorExportateursDesc: "Agr\u00E9\u00E9s par le Minist\u00E8re du Commerce pour l'exportation.",
      progTitle: "Nos Programmes", progSubtitle: "Quatre piliers pour une fili\u00E8re vanille responsable, durable et comp\u00E9titive.",
      progTrace: "Transparence et tra\u00E7abilit\u00E9", progTraceDesc: "Suivi complet de chaque lot de vanille de la plantation \u00E0 l'exportation.",
      progSocial: "Qualit\u00E9 de vie", progSocialDesc: "Acc\u00E8s \u00E0 l'eau, sant\u00E9, \u00E9ducation et infrastructures communautaires.",
      progEnv: "Qualit\u00E9 environnementale", progEnvDesc: "Pratiques agricoles durables et pr\u00E9servation des for\u00EAts.",
      progQuality: "Qualit\u00E9 alimentaire et aromatique", progQualityDesc: "Standards de qualit\u00E9, certification et analyse phytosanitaire.",
      impactsTitle: "Nos Impacts", impactsSubtitle: "Chiffres cl\u00E9s illustrant l'action de l'AVM au service de la fili\u00E8re vanille.",
      impactPlanters: "Planteurs repr\u00E9sent\u00E9s", impactTons: "Tonnes de vanille", impactPrice: "Prix vanille noire/kg", impactRegions: "R\u00E9gions couvertes",
      ctaTitle: "Rejoignez l'Alliance", ctaDesc: "Que vous soyez planteur, collecteur, producteur ou exportateur, l'AVM est votre alli\u00E9e pour une fili\u00E8re vanille prosp\u00E8re et \u00E9quitable.",
      photoSectionTitle: "Au c\u0153ur de la fili\u00E8re vanille", photoSectionDesc: "L'AVM travaille au quotidien avec les planteurs de vanille verte des r\u00E9gions Diana et Sofia. Notre mission est de garantir un revenu d\u00E9cent \u00E0 chaque acteur de la fili\u00E8re vanille, de la plantation \u00E0 l'exportation.",
    },
    about: {
      title: "\u00C0 propos de l'AVM", subtitle: "De la CNV \u00E0 l'AVM : l'\u00E9volution d'une institution au service de la fili\u00E8re vanille.",
      historyTitle: "Historique", historyDesc: "L'Alliance de la Vanille Malagasy (AVM) est issue de la transformation du Conseil National de la Vanille (CNV), association reconnue d'utilit\u00E9 publique. Cette \u00E9volution marque une nouvelle \u00E8re de gouvernance et de transparence pour la fili\u00E8re vanille \u00E0 Madagascar.",
      legalTitle: "Cadre l\u00E9gal", decree1: "D\u00E9cret n\u00B02021-548 du 19 mai 2021 - Cr\u00E9ation de l'institution", decree2: "D\u00E9cret n\u00B02026-836 du 8 avril 2026 - Modification et extension des attributions",
      governanceTitle: "Gouvernance", governanceDesc: "L'AVM compte 40 membres officiels, repr\u00E9sentant chaque ville productrice des r\u00E9gions DIANA et SOFIA. Les membres incluent des repr\u00E9sentants de l'\u00C9tat malagasy, garantissant ainsi une repr\u00E9sentation \u00E9quilibr\u00E9e et l\u00E9gitime de tous les acteurs de la fili\u00E8re.",
      locationTitle: "Si\u00E8ge social", locationDesc: "Le si\u00E8ge de l'AVM est situ\u00E9 \u00E0 Antalaha, dans la r\u00E9gion SAVA, au c\u0153ur de la zone de production de la vanille malagasy.",
    },
    actors: {
      title: "Les Acteurs de la fili\u00E8re", subtitle: "De la plantation \u00E0 l'exportation, d\u00E9couvrez les quatre maillons essentiels de la cha\u00EEne de valeur de la vanille malagasy.",
      planteurs: "Planteurs", planteursDesc: "\u00C0 la base de la fili\u00E8re, les planteurs cultivent et r\u00E9coltent la vanille verte. Ils sont les gardiens d'un savoir-faire ancestral transmis de g\u00E9n\u00E9ration en g\u00E9n\u00E9ration dans les r\u00E9gions de Diana et Sofia.",
      collecteurs: "Collecteurs", collecteursDesc: "Les collecteurs assurent le lien entre les planteurs et les producteurs. Ils ach\u00E8tent la vanille verte aux planteurs et la transportent vers les unit\u00E9s de pr\u00E9paration et de conditionnement.",
      producteurs: "Producteurs", producteursDesc: "Les producteurs transforment la vanille verte en vanille noire ou rouge par un processus de pr\u00E9paration m\u00E9ticuleux : \u00E9tuvage, s\u00E9chage au soleil et conditionnement pour l'exportation.",
      exportateurs: "Exportateurs", exportateursDesc: "Les exportateurs agr\u00E9\u00E9s par le Minist\u00E8re du Commerce commercialisent la vanille malagasy sur les march\u00E9s internationaux. Ils garantissent la conformit\u00E9 aux normes de qualit\u00E9 et de tra\u00E7abilit\u00E9.",
    },
    programmes: {
      title: "Nos Programmes", subtitle: "Quatre piliers pour une fili\u00E8re vanille responsable, durable et comp\u00E9titive sur le march\u00E9 mondial.",
      traceTitle: "Transparence et tra\u00E7abilit\u00E9", traceDesc: "Mise en place de syst\u00E8mes de tra\u00E7abilit\u00E9 complets permettant de suivre chaque lot de vanille depuis la plantation jusqu'\u00E0 l'exportation. Garantie d'origine et lutte contre la fraude.", traceTag: "Tra\u00E7abilit\u00E9",
      socialTitle: "Qualit\u00E9 de vie", socialDesc: "Programmes d'am\u00E9lioration des conditions de vie des planteurs : acc\u00E8s \u00E0 l'eau potable, \u00E9nergie, sant\u00E9, \u00E9ducation et infrastructures communautaires dans les r\u00E9gions productrices.", socialTag: "Social",
      envTitle: "Qualit\u00E9 environnementale", envDesc: "Promotion de pratiques agricoles durables, pr\u00E9servation des for\u00EAts, lutte contre la d\u00E9forestation et adaptation au changement climatique dans les zones de production de vanille.", envTag: "Environnement",
      qualityTitle: "Qualit\u00E9 alimentaire et aromatique", qualityDesc: "D\u00E9finition et contr\u00F4le des standards de qualit\u00E9 de la vanille malagasy. Certification, analyse phytosanitaire et garantie de l'excellence aromatique reconnue mondialement.", qualityTag: "Qualit\u00E9",
    },
    campaign: {
      title: "Vanille Verte", subtitle: "Dates, directives et r\u00E9glementations pour la campagne vanille verte.",
      datesTitle: "Dates de la campagne", datesDesc: "Les dates de la campagne vanille verte sont fix\u00E9es annuellement par l'AVM en concertation avec les autorit\u00E9s comp\u00E9tentes et les acteurs de la fili\u00E8re. L'ouverture et la cl\u00F4ture de la campagne sont communiqu\u00E9es officiellement par arr\u00EAt\u00E9.",
      rulesTitle: "Directives et r\u00E9glementations",
      rule1: "Interdiction stricte de la r\u00E9colte de vanille verte avant la date d'ouverture officielle de la campagne",
      rule2: "Obligation de respecter les normes de maturit\u00E9 minimale pour la r\u00E9colte",
      rule3: "Enregistrement obligatoire de toutes les transactions via la plateforme de tra\u00E7abilit\u00E9 AVM",
      rule4: "Respect des prix planchers fix\u00E9s par l'AVM pour prot\u00E9ger les revenus des planteurs",
      noticeTitle: "Information importante",
      noticeDesc: "Toute infraction aux directives de la campagne expose les contrevenants \u00E0 des sanctions administratives et p\u00E9nales conform\u00E9ment \u00E0 la l\u00E9gislation en vigueur. Le Minist\u00E8re du Commerce se r\u00E9serve le droit de suspendre l'agr\u00E9ment des exportateurs ne respectant pas les r\u00E8glements.",
    },
    exporters: {
      title: "Exportateurs agr\u00E9\u00E9s", subtitle: "Liste des exportateurs agr\u00E9\u00E9s par le Minist\u00E8re du Commerce. Ces entreprises respectent les standards de qualit\u00E9 et de tra\u00E7abilit\u00E9 d\u00E9finis par l'AVM.",
      standardsTitle: "Standards d'exportation AVM", standardsDesc: "Tous les exportateurs list\u00E9s sont tenus de respecter les normes strictes de l'AVM en mati\u00E8re de qualit\u00E9, tra\u00E7abilit\u00E9, conditions sociales et environnementales. L'agr\u00E9ment est soumis \u00E0 un audit annuel.",
      searchPlaceholder: "Rechercher un exportateur...", emptyMessage: "Aucun exportateur trouv\u00E9 pour cette recherche.",
    },
    impacts: { title: "Nos Impacts", subtitle: "Chiffres cl\u00E9s et statistiques illustrant l'action de l'AVM au service de la fili\u00E8re vanille." },
    chatbot: { title: "AVM Bot", placeholder: "Posez votre question...", greeting: "Bonjour ! Je suis l'assistant virtuel de l'AVM. Comment puis-je vous aider ?" },
    partners: {
      title: "Nos Partenaires", subtitle: "L'AVM collabore avec des institutions, organisations et acteurs de la fili\u00E8re vanille pour d\u00E9velopper et promouvoir la vanille malagasy.",
      bientot: "Bient\u00F4t disponible", institution: "Institution", collectivite: "Collectivit\u00E9", filiere: "Fili\u00E8re", intl: "International", onu: "ONU", ong: "ONG",
    },
    contact: {
      title: "Contact", subtitle: "Contactez l'Alliance de la Vanille Malagasy \u00E0 Antalaha.",
      coordsTitle: "Nos coordonn\u00E9n\u00E9es", addressLabel: "Adresse", address: "Antalaha, R\u00E9gion SAVA\nMadagascar",
      phoneLabel: "T\u00E9l\u00E9phone", phone: "+261 20 XX XXX XX", emailLabel: "Email", email: "contact@avm.mg",
      hoursLabel: "Horaires", hours: "Lundi - Vendredi\n8h00 - 16h30",
      formTitle: "Envoyer un message", nameLabel: "Nom complet", emailFieldLabel: "Email",
      subjectLabel: "Sujet", messageLabel: "Message", sentTitle: "Message envoy\u00E9 !", sentDesc: "Nous vous r\u00E9pondrons dans les plus brefs d\u00E9lais.",
    },
  },

  mg: {
    nav: { home: "Fandraisana", about: "Mombamomba", actors: "Mpilalao", programmes: "Fandaharam-potoana", campaign: "Vanila maintso", exporters: "Mpamoaka", impacts: "Vokany", partners: "Mpiara-miasa", contact: "Fifandraisana" },
    common: { learnMore: "Hahafantatra bebe kokoa", contactUs: "Hifandray aminay", send: "Handefa", discover: "Hijery", explore: "Hijery", viewAll: "Hijery rehetra" },
    footer: { tagline: "Fikambanan'ny Vanila Malagasy - Miaro, manomeza lazaina, miaro.", legal: "Lalana manan-kery", rights: "Zo rehetra voatokana." },
    home: {
      badge: "Fikambanana voamarina ho ilain'ny besinimaro - Didy n\u00B02021-548",
      subtitle: "Miaro ny sehatra vanila, manomeza lazaina eo amin'ny firenena sy iraisam-pirenena, miaro ny mpilalao amin'ny fiovan'ny vidiny ary manatsara ny fiainan'ny mpamboly vanila maitso eto Madagasikara.",
      missionTitle: "Ny Mission", missionSubtitle: "Naato fototra efatra ho an'ny sehatra vanila maharitra sy marina.",
      mission: {
        defend: "Miaro ny sehatra", defendDesc: "Fiarovana ny interests'ny mpamboly, mpamory, mpamokatra ary mpamoaka vanila malagasy.",
        promote: "Manomeza lazaina", promoteDesc: "Fampiroboroboana nasionaly sy iraisam-pirenena ny vanila eto Madagasikara.",
        stabilize: "Mampitsahatra ny vidiny", stabilizeDesc: "Miady amin'ny fiovana vidiny mba hanome karama marina ho an'ny rehetra.",
        improve: "Manatsara ny fomba fiaina", improveDesc: "Fanatsarana ny fomba fiainan'ny mpamboly vanila maitso any amin'ny faritra Diana sy Sofia.",
      },
      newsTitle: "Vaovao", newsSubtitle: "Ny vaovao farany avy amin'ny Fikambanan'ny Vanila Malagasy.", featuredLabel: "Vaovao lehibe",
      actorsTitle: "Ny Mpilalao", actorsSubtitle: "Efatra ny mpilalao lehibe ao amin'ny sehatra vanila malagasy.",
      actorPlanteurs: "Mpamboly", actorPlanteursDesc: "Mpiaro ny fahaizana nentin-drazana.",
      actorCollecteurs: "Mpamory", actorCollecteursDesc: "Fifandraisana eo amin'ny mpamboly sy ny mpamokatra.",
      actorProducteurs: "Mpamokatra", actorProducteursDesc: "Fiovana ny vanila maitso ho vanila mainty na mena.",
      actorExportateurs: "Mpamoaka", actorExportateursDesc: "Nahazoana alalana avy amin'ny Minisiteran'ny Varotra.",
      progTitle: "Ny Fandaharam-potoana", progSubtitle: "Fototra efatra ho an'ny sehatra vanila maharitra.",
      progTrace: "Fahadiovana sy fanaraha-maso", progTraceDesc: "Fanaraha-maso ny vanila rehetra.",
      progSocial: "Kalitao fiainana", progSocialDesc: "Fahafahana mianatsaka rano, fahasalamana, fanabeazana.",
      progEnv: "Kalitao tontolo iainana", progEnvDesc: "Fomba fambolena maharitra sy fiarovana ny ala.",
      progQuality: "Kalitao sakafo sy hanitra", progQualityDesc: "Standards kalitao, fanamarinana ary fitsirihana phytosanitaire.",
      impactsTitle: "Ny Vokany", impactsSubtitle: "Isa maneho ny asan'ny AVM.",
      impactPlanters: "Mpamboly", impactTons: "Tona vanila", impactPrice: "Vidiny vanila mainty/kg", impactRegions: "Faritra iasan'ny",
      ctaTitle: "Midira ao amin'ny Fikambanana", ctaDesc: "Na mpamboly, mpamory, mpamokatra na mpamoaka ianao, ny AVM no mpiara-miasa aminao.",
      photoSectionTitle: "Ao amin'ny fo ny sehatra vanila", photoSectionDesc: "Ny AVM dia miasa isan'andro amin'ny mpamboly vanila maitso any amin'ny faritra Diana sy Sofia.",
    },
    about: {
      title: "Mombamomba ny AVM", subtitle: "Ny tantaran'ny AVM.",
      historyTitle: "Tantara", historyDesc: "Ny AVM dia avy amin'ny fiovana ny CNV, fikambanana voamarina ho ilain'ny besinimaro.",
      legalTitle: "Lalana", decree1: "Didy n\u00B02021-548 tamin'ny 19 Mey 2021", decree2: "Didy n\u00B02026-836 tamin'ny 8 Aprily 2026",
      governanceTitle: "Fitondrana", governanceDesc: "Ny AVM dia manana mpikambana ofisialy 40.",
      locationTitle: "Toerana", locationDesc: "Ny foiben'ny AVM dia any Antalaha, faritra SAVA.",
    },
    actors: {
      title: "Ny Mpilalao", subtitle: "Efatra ny mpilalao lehibe ao amin'ny sehatra vanila malagasy.",
      planteurs: "Mpamboly", planteursDesc: "Ao amin'ny fototry ny sehatra, ny mpamboly dia mamboly sy manjifa vanila maitso.",
      collecteurs: "Mpamory", collecteursDesc: "Ny mpamory dia mampifandray ny mpamboly sy ny mpamokatra.",
      producteurs: "Mpamokatra", producteursDesc: "Ny mpamokatra dia manova ny vanila maitso ho vanila mainty na mena.",
      exportateurs: "Mpamoaka", exportateursDesc: "Ny mpamoaka dia nahazoana alalana avy amin'ny Minisiteran'ny Varotra.",
    },
    programmes: {
      title: "Ny Fandaharam-potoana", subtitle: "Fototra efatra ho an'ny sehatra vanila.",
      traceTitle: "Fahadiovana sy fanaraha-maso", traceDesc: "Fanaraha-maso ny vanila rehetra.", traceTag: "Fanaraha-maso",
      socialTitle: "Kalitao fiainana", socialDesc: "Fampandrosoana ny fomba fiainan'ny mpamboly.", socialTag: "Sosialy",
      envTitle: "Kalitao tontolo iainana", envDesc: "Fomba fambolena maharitra.", envTag: "Tontolo iainana",
      qualityTitle: "Kalitao sakafo sy hanitra", qualityDesc: "Standards kalitao sy fitsirihana phytosanitaire.", qualityTag: "Kalitao",
    },
    campaign: {
      title: "Vanila Maitso", subtitle: "Daty sy fitsipika ho an'ny vanila maitso.",
      datesTitle: "Daty", datesDesc: "Ny daty dia voafora isan-taona.",
      rulesTitle: "Fitsipika",
      rule1: "Tsy azo atao ny manjifa vanila maitso alohan'ny daty ofisialy.",
      rule2: "Tsy maintsy arahina ny fenitra fahaizana.",
      rule3: "Tsy maintsy hisy ny firaketana ny varotra rehetra.",
      rule4: "Araho ny vidiny farany.",
      noticeTitle: "Fampahalalana manan-danja",
      noticeDesc: "Ny Minisiteran'ny Varotra dia manana ny zo hanafoanana ny alalana.",
    },
    exporters: {
      title: "Mpamoaka voamarina", subtitle: "Lisitry ny mpamoaka voamarina.",
      standardsTitle: "Standards", standardsDesc: "Ny mpamoaka rehetra dia tsy maintsy manaraka ny fenitra.",
      searchPlaceholder: "Karoka mpamoaka...", emptyMessage: "Tsy misy mpamoaka hita.",
    },
    impacts: { title: "Ny Vokany", subtitle: "Isa maneho ny asan'ny AVM." },
    chatbot: { title: "AVM Bot", placeholder: "Anontanio ny fanontanianao...", greeting: "Manao ahoana ! Izaho no mpampianatra virtoaly amin'ny AVM." },
    partners: {
      title: "Ny Mpiara-miasa", subtitle: "Ny AVM dia miara-miasa amin'ny fikambanana.",
      bientot: "Havaozana ho avy", institution: "Fikambanana", collectivite: "Faritra", filiere: "Sehatra", intl: "Iraisam-pirenena", onu: "ONU", ong: "ONG",
    },
    contact: {
      title: "Fifandraisana", subtitle: "Mifandraisa amin'ny AVM any Antalaha.",
      coordsTitle: "Fifandraisana", addressLabel: "Adiresy", address: "Antalaha, Faritra SAVA\nMadagasikara",
      phoneLabel: "Telefaonina", phone: "+261 20 XX XXX XX", emailLabel: "Mailaka", email: "contact@avm.mg",
      hoursLabel: "Ora", hours: "Alatsinainy - Zoma\n8h00 - 16h30",
      formTitle: "Handefa hafatra", nameLabel: "Anarana feno", emailFieldLabel: "Mailaka",
      subjectLabel: "Loha-hevitra", messageLabel: "Hafatra", sentTitle: "Hafatra voaray !", sentDesc: "Hvalianay fa manana valiny ao anatin'ny fotoana fohy.",
    },
  },

  en: {
    nav: { home: "Home", about: "About", actors: "Actors", programmes: "Programs", campaign: "Green Vanilla", exporters: "Exporters", impacts: "Impacts", partners: "Partners", contact: "Contact" },
    common: { learnMore: "Learn more", contactUs: "Contact us", send: "Send", discover: "Discover", explore: "Explore", viewAll: "View all" },
    footer: { tagline: "Malagasy Vanilla Alliance - Defend, promote, protect.", legal: "Legal notices", rights: "All rights reserved." },
    home: {
      badge: "Association Recognized as being of public utility - Decree n\u00B02021-548",
      subtitle: "Defend the vanilla sector, promote it nationally and internationally, protect actors against price volatility and improve the living conditions of green vanilla growers in Madagascar.",
      missionTitle: "Our Mission", missionSubtitle: "Four fundamental pillars for a sustainable and fair vanilla sector.",
      mission: {
        defend: "Defend the sector", defendDesc: "Protecting the interests of vanilla growers, collectors, producers and exporters.",
        promote: "Promote", promoteDesc: "National and international promotion of Madagascar vanilla, recognized as the best in the world.",
        stabilize: "Stabilize prices", stabilizeDesc: "Fighting against price volatility to guarantee a decent income at every link in the chain.",
        improve: "Improve conditions", improveDesc: "Improving the living conditions of green vanilla growers in the Diana and Sofia regions.",
      },
      newsTitle: "News", newsSubtitle: "The latest news from the Malagasy Vanilla Alliance.", featuredLabel: "Featured",
      actorsTitle: "The Actors of the sector", actorsSubtitle: "From plantation to export, four essential links in the Malagasy vanilla value chain.",
      actorPlanteurs: "Growers", actorPlanteursDesc: "Guardians of ancestral know-how in the vanilla regions.",
      actorCollecteurs: "Collectors", actorCollecteursDesc: "Essential link between growers and producers.",
      actorProducteurs: "Producers", actorProducteursDesc: "Transforming green vanilla into black and red vanilla.",
      actorExportateurs: "Exporters", actorExportateursDesc: "Approved by the Ministry of Commerce for export.",
      progTitle: "Our Programs", progSubtitle: "Four pillars for a responsible, sustainable and competitive vanilla sector.",
      progTrace: "Transparency and traceability", progTraceDesc: "Complete tracking of each batch of vanilla from plantation to export.",
      progSocial: "Quality of life", progSocialDesc: "Access to water, health, education and community infrastructure.",
      progEnv: "Environmental quality", progEnvDesc: "Sustainable agricultural practices and forest preservation.",
      progQuality: "Food and aromatic quality", progQualityDesc: "Quality standards, certification and phytosanitary analysis.",
      impactsTitle: "Our Impacts", impactsSubtitle: "Key figures illustrating AVM's action for the vanilla sector.",
      impactPlanters: "Growers represented", impactTons: "Tonnes of vanilla", impactPrice: "Black vanilla price/kg", impactRegions: "Regions covered",
      ctaTitle: "Join the Alliance", ctaDesc: "Whether you are a grower, collector, producer or exporter, AVM is your ally for a prosperous and fair vanilla sector.",
      photoSectionTitle: "At the heart of the vanilla sector", photoSectionDesc: "AVM works daily with green vanilla growers in the Diana and Sofia regions. Our mission is to guarantee a decent income for every actor in the vanilla value chain.",
    },
    about: {
      title: "About AVM", subtitle: "From CNV to AVM: the evolution of an institution serving the vanilla sector.",
      historyTitle: "History", historyDesc: "The Malagasy Vanilla Alliance (AVM) stems from the transformation of the National Vanilla Council (CNV), an association recognized as being of public utility. This evolution marks a new era of governance and transparency for the vanilla sector in Madagascar.",
      legalTitle: "Legal framework", decree1: "Decree n\u00B02021-548 of May 19, 2021 - Creation of the institution", decree2: "Decree n\u00B02026-836 of April 8, 2026 - Modification and extension of attributions",
      governanceTitle: "Governance", governanceDesc: "AVM has 40 official members, representing each producer city in the DIANA and SOFIA regions. Members include representatives of the Malagasy State, ensuring balanced and legitimate representation of all sector actors.",
      locationTitle: "Headquarters", locationDesc: "AVM's headquarters is located in Antalaha, in the SAVA region, at the heart of Malagasy vanilla production.",
    },
    actors: {
      title: "The Actors of the sector", subtitle: "From plantation to export, discover the four essential links in the Malagasy vanilla value chain.",
      planteurs: "Growers", planteursDesc: "At the base of the sector, growers cultivate and harvest green vanilla. They are the guardians of ancestral know-how passed down from generation to generation in the Diana and Sofia regions.",
      collecteurs: "Collectors", collecteursDesc: "Collectors provide the link between growers and producers. They buy green vanilla from growers and transport it to preparation and packaging units.",
      producteurs: "Producers", producteursDesc: "Producers transform green vanilla into black or red vanilla through a meticulous preparation process: scalding, sun-drying and packaging for export.",
      exportateurs: "Exporters", exportateursDesc: "Exporters approved by the Ministry of Commerce market Malagasy vanilla on international markets. They guarantee compliance with quality and traceability standards.",
    },
    programmes: {
      title: "Our Programs", subtitle: "Four pillars for a responsible, sustainable and competitive vanilla sector on the world market.",
      traceTitle: "Transparency and traceability", traceDesc: "Implementation of complete traceability systems to track each batch of vanilla from plantation to export. Guarantee of origin and fight against fraud.", traceTag: "Traceability",
      socialTitle: "Quality of life", socialDesc: "Programs to improve growers' living conditions: access to drinking water, energy, health, education and community infrastructure in producer regions.", socialTag: "Social",
      envTitle: "Environmental quality", envDesc: "Promotion of sustainable agricultural practices, forest preservation, fight against deforestation and adaptation to climate change in vanilla production areas.", envTag: "Environment",
      qualityTitle: "Food and aromatic quality", qualityDesc: "Definition and control of Malagasy vanilla quality standards. Certification, phytosanitary analysis and guarantee of world-renowned aromatic excellence.", qualityTag: "Quality",
    },
    campaign: {
      title: "Green Vanilla", subtitle: "Dates, directives and regulations for the green vanilla campaign.",
      datesTitle: "Campaign dates", datesDesc: "The green vanilla campaign dates are set annually by AVM in consultation with competent authorities and sector actors. The opening and closing of the campaign are officially communicated by decree.",
      rulesTitle: "Directives and regulations",
      rule1: "Strict prohibition of harvesting green vanilla before the official campaign opening date",
      rule2: "Obligation to comply with minimum maturity standards for harvesting",
      rule3: "Mandatory registration of all transactions via the AVM traceability platform",
      rule4: "Compliance with floor prices set by AVM to protect growers' income",
      noticeTitle: "Important information",
      noticeDesc: "Any violation of campaign directives exposes offenders to administrative and criminal penalties in accordance with current legislation. The Ministry of Commerce reserves the right to suspend the approval of exporters who do not comply with regulations.",
    },
    exporters: {
      title: "Approved Exporters", subtitle: "List of exporters approved by the Ministry of Commerce. These companies comply with the quality and traceability standards defined by AVM.",
      standardsTitle: "AVM Export Standards", standardsDesc: "All listed exporters are required to comply with AVM's strict standards on quality, traceability, social and environmental conditions. Approval is subject to an annual audit.",
      searchPlaceholder: "Search for an exporter...", emptyMessage: "No exporter found for this search.",
    },
    impacts: { title: "Our Impacts", subtitle: "Key figures and statistics illustrating AVM's action for the vanilla sector." },
    chatbot: { title: "AVM Bot", placeholder: "Ask your question...", greeting: "Hello! I am the AVM virtual assistant. How can I help you?" },
    partners: {
      title: "Our Partners", subtitle: "AVM collaborates with institutions, organizations and actors in the vanilla sector to develop and promote Malagasy vanilla.",
      bientot: "Coming soon", institution: "Institution", collectivite: "Local Authority", filiere: "Sector", intl: "International", onu: "UN", ong: "NGO",
    },
    contact: {
      title: "Contact", subtitle: "Contact the Malagasy Vanilla Alliance in Antalaha.",
      coordsTitle: "Our contact details", addressLabel: "Address", address: "Antalaha, SAVA Region\nMadagascar",
      phoneLabel: "Phone", phone: "+261 20 XX XXX XX", emailLabel: "Email", email: "contact@avm.mg",
      hoursLabel: "Hours", hours: "Monday - Friday\n8:00 AM - 4:30 PM",
      formTitle: "Send a message", nameLabel: "Full name", emailFieldLabel: "Email",
      subjectLabel: "Subject", messageLabel: "Message", sentTitle: "Message sent!", sentDesc: "We will get back to you as soon as possible.",
    },
  },

  // ─── Español ───
  es: {
    nav: { home: "Inicio", about: "Acerca de", actors: "Actores", programmes: "Programas", campaign: "Vainilla Verde", exporters: "Exportadores", impacts: "Impactos", partners: "Socios", contact: "Contacto" },
    common: { learnMore: "Saber más", contactUs: "Contáctenos", send: "Enviar", discover: "Descubrir", explore: "Explorar", viewAll: "Ver todo" },
    footer: { tagline: "Alianza de Vainilla Malgache - Defender, promover, proteger.", legal: "Avisos legales", rights: "Todos los derechos reservados." },
    home: {
      badge: "Asociación Reconocida de utilidad pública - Decreto n.º 2021-548",
      subtitle: "Defender el sector de la vainilla, promoverlo a escala nacional e internacional, proteger a los actores contra la volatilidad de los precios y mejorar las condiciones de vida de los cultivadores de vainilla verde en Madagascar.",
      missionTitle: "Nuestra Misión", missionSubtitle: "Cuatro pilares fundamentales para un sector de vainilla sostenible y equitativo.",
      mission: { defend: "Defender el sector", defendDesc: "Protección de los intereses de los cultivadores, colectores, productores y exportadores.", promote: "Promover", promoteDesc: "Promoción nacional e internacional de la vainilla de Madagascar.", stabilize: "Estabilizar precios", stabilizeDesc: "Lucha contra la volatilidad de los precios.", improve: "Mejorar condiciones", improveDesc: "Mejora de las condiciones de vida de los cultivadores de vainilla verde." },
      newsTitle: "Noticias", newsSubtitle: "Últimas noticias de la Alianza de Vainilla Malgache.", featuredLabel: "Destacado",
      actorsTitle: "Los Actores", actorsSubtitle: "Cuatro eslabones esenciales de la cadena de valor de la vainilla malgache.",
      actorPlanteurs: "Cultivadores", actorPlanteursDesc: "Guardianes del saber ancestral.", actorCollecteurs: "Colectores", actorCollecteursDesc: "Enlace entre cultivadores y productores.", actorProducteurs: "Productores", actorProducteursDesc: "Transformación de vainilla verde en negra y roja.", actorExportateurs: "Exportadores", actorExportateursDesc: "Aprobados por el Ministerio de Comercio.",
      progTitle: "Nuestros Programas", progSubtitle: "Cuatro pilares para un sector responsable.",
      progTrace: "Transparencia y trazabilidad", progTraceDesc: "Seguimiento completo de cada lote.", progSocial: "Calidad de vida", progSocialDesc: "Acceso al agua, salud, educación.", progEnv: "Calidad ambiental", progEnvDesc: "Prácticas agrícolas sostenibles.", progQuality: "Calidad alimentaria y aromática", progQualityDesc: "Estándares, certificación y análisis fitosanitario.",
      impactsTitle: "Nuestros Impactos", impactsSubtitle: "Cifras clave de la acción de AVM.", impactPlanters: "Cultivadores", impactTons: "Toneladas", impactPrice: "Precio/kg", impactRegions: "Regiones",
      ctaTitle: "Únase a la Alianza", ctaDesc: "AVM es su aliada para un sector próspero y equitativo.", photoSectionTitle: "En el corazón del sector", photoSectionDesc: "AVM trabaja diariamente con los cultivadores.",
    },
    about: {
      title: "Acerca de AVM", subtitle: "De CNV a AVM: la evolución.", historyTitle: "Historia", historyDesc: "AVM proviene de la transformación del CNV.", legalTitle: "Marco legal", decree1: "Decreto n.º 2021-548", decree2: "Decreto n.º 2026-836", governanceTitle: "Gobernanza", governanceDesc: "AVM cuenta con 40 miembros oficiales.", locationTitle: "Sede", locationDesc: "La sede de AVM está en Antalaha, región SAVA.",
    },
    actors: {
      title: "Los Actores", subtitle: "Cuatro eslabones esenciales.", planteurs: "Cultivadores", planteursDesc: "Cultivan y cosechan vainilla verde.", collecteurs: "Colectores", collecteursDesc: "Compran vainilla verde a los cultivadores.", producteurs: "Productores", producteursDesc: "Transforman vainilla verde en negra o roja.", exportateurs: "Exportadores", exportateursDesc: "Aprobados por el Ministerio de Comercio.",
    },
    programmes: {
      title: "Programas", subtitle: "Cuatro pilares.", traceTitle: "Transparencia", traceDesc: "Seguimiento completo.", traceTag: "Trazabilidad", socialTitle: "Calidad de vida", socialDesc: "Mejora de condiciones.", socialTag: "Social", envTitle: "Calidad ambiental", envDesc: "Prácticas sostenibles.", envTag: "Medio ambiente", qualityTitle: "Calidad alimentaria", qualityDesc: "Estándares y certificación.", qualityTag: "Calidad",
    },
    campaign: {
      title: "Vainilla Verde", subtitle: "Fechas y directrices.", datesTitle: "Fechas", datesDesc: "Las fechas se fijan anualmente.", rulesTitle: "Directrices", rule1: "Prohibición de cosechar antes de la fecha.", rule2: "Respetar normas de madurez.", rule3: "Registro obligatorio.", rule4: "Respetar precios mínimos.", noticeTitle: "Información importante", noticeDesc: "El Ministerio de Comercio se reserva el derecho.",
    },
    exporters: {
      title: "Exportadores aprobados", subtitle: "Lista de exportadores.", standardsTitle: "Estándares", standardsDesc: "Normas estrictas de calidad.", searchPlaceholder: "Buscar exportador...", emptyMessage: "No se encontraron resultados.",
    },
    impacts: { title: "Impactos", subtitle: "Cifras clave." },
    chatbot: { title: "AVM Bot", placeholder: "Haga su pregunta...", greeting: "Hola! Soy el asistente virtual de AVM. Como puedo ayudarle?" },
    partners: { title: "Socios", subtitle: "Colaboraciones.", bientot: "Próximamente", institution: "Institución", collectivite: "Colectividad", filiere: "Sector", intl: "Internacional", onu: "ONU", ong: "ONG" },
    contact: {
      title: "Contacto", subtitle: "Contacte AVM.", coordsTitle: "Contacto", addressLabel: "Dirección", address: "Antalaha, Región SAVA\nMadagascar", phoneLabel: "Teléfono", phone: "+261 20 XX XXX XX", emailLabel: "Email", email: "contact@avm.mg", hoursLabel: "Horario", hours: "Lunes - Viernes\n8h00 - 16h30",
      formTitle: "Enviar mensaje", nameLabel: "Nombre completo", emailFieldLabel: "Email", subjectLabel: "Asunto", messageLabel: "Mensaje", sentTitle: "¡Mensaje enviado!", sentDesc: "Responderemos pronto.",
    },
  },

  // ─── Deutsch ───
  de: {
    nav: { home: "Startseite", about: "Über uns", actors: "Akteure", programmes: "Programme", campaign: "Grüne Vanille", exporters: "Exporteure", impacts: "Auswirkungen", partners: "Partner", contact: "Kontakt" },
    common: { learnMore: "Mehr erfahren", contactUs: "Kontaktieren Sie uns", send: "Senden", discover: "Entdecken", explore: "Erkunden", viewAll: "Alle ansehen" },
    footer: { tagline: "Madagassische Vanille-Allianz - Verteidigen, fördern, schützen.", legal: "Rechtliche Hinweise", rights: "Alle Rechte vorbehalten." },
    home: {
      badge: "Verein anerkannt als gemeinnützig - Dekret Nr. 2021-548",
      subtitle: "Verteidigung der Vanillebranche, nationale und internationale Förderung, Schutz der Akteure vor Preisvolatilität und Verbesserung der Lebensbedingungen.",
      missionTitle: "Unsere Mission", missionSubtitle: "Vier fundamentale Säulen für eine nachhaltige Vanillebranche.",
      mission: { defend: "Branche verteidigen", defendDesc: "Schutz der Interessen.", promote: "Fördern", promoteDesc: "Nationale und internationale Förderung.", stabilize: "Preise stabilisieren", stabilizeDesc: "Kampf gegen Preisvolatilität.", improve: "Bedingungen verbessern", improveDesc: "Verbesserung der Lebensbedingungen." },
      newsTitle: "Neuigkeiten", newsSubtitle: "Neueste Nachrichten.", featuredLabel: "Hervorgehoben",
      actorsTitle: "Die Akteure", actorsSubtitle: "Vier wesentliche Glieder der Wertschöpfungskette.", actorPlanteurs: "Anbauer", actorPlanteursDesc: "Hüter des uralten Wissens.", actorCollecteurs: "Sammler", actorCollecteursDesc: "Wesentliche Verbindung.", actorProducteurs: "Produzenten", actorProducteursDesc: "Umwandlung in schwarze Vanille.", actorExportateurs: "Exporteure", actorExportateursDesc: "Vom Handelsministerium genehmigt.",
      progTitle: "Unsere Programme", progSubtitle: "Vier Säulen.", progTrace: "Transparenz", progTraceDesc: "Vollständige Rückverfolgbarkeit.", progSocial: "Lebensqualität", progSocialDesc: "Zugang zu Wasser, Gesundheit.", progEnv: "Umweltqualität", progEnvDesc: "Nachhaltige Landwirtschaft.", progQuality: "Qualität", progQualityDesc: "Standards und Zertifizierung.",
      impactsTitle: "Unsere Wirkung", impactsSubtitle: "Schlüsselzahlen.", impactPlanters: "Anbauer", impactTons: "Tonnen", impactPrice: "Preis/kg", impactRegions: "Regionen",
      ctaTitle: "Treten Sie der Allianz bei", ctaDesc: "AVM ist Ihr Partner.", photoSectionTitle: "Im Herzen", photoSectionDesc: "AVM arbeitet täglich mit Anbauern.",
    },
    about: { title: "Über AVM", subtitle: "Von CNV zu AVM.", historyTitle: "Geschichte", historyDesc: "AVM entstand aus der CNV.", legalTitle: "Rechtlicher Rahmen", decree1: "Dekret Nr. 2021-548", decree2: "Dekret Nr. 2026-836", governanceTitle: "Governance", governanceDesc: "40 offizielle Mitglieder.", locationTitle: "Hauptsitz", locationDesc: "Antalaha, Region SAVA." },
    actors: { title: "Akteure", subtitle: "Vier Glieder.", planteurs: "Anbauer", planteursDesc: "Kultivieren grüne Vanille.", collecteurs: "Sammler", collecteursDesc: "Kaufen grüne Vanille.", producteurs: "Produzenten", producteursDesc: "Verarbeiten zu schwarzer Vanille.", exportateurs: "Exporteure", exportateursDesc: "Vom Ministerium genehmigt." },
    programmes: { title: "Programme", subtitle: "Vier Säulen.", traceTitle: "Transparenz", traceDesc: "Vollständige Rückverfolgbarkeit.", traceTag: "Rückverfolgbarkeit", socialTitle: "Lebensqualität", socialDesc: "Verbesserung der Bedingungen.", socialTag: "Sozial", envTitle: "Umweltqualität", envDesc: "Nachhaltige Praktiken.", envTag: "Umwelt", qualityTitle: "Lebensmittelqualität", qualityDesc: "Standards und Analyse.", qualityTag: "Qualität" },
    campaign: { title: "Grüne Vanille", subtitle: "Termine und Richtlinien.", datesTitle: "Termine", datesDesc: "Jährlich festgelegt.", rulesTitle: "Richtlinien", rule1: "Strikt vor dem Datum ernteverboten.", rule2: "Mindestreife beachten.", rule3: "Registrierungspflicht.", rule4: "Mindestpreise einhalten.", noticeTitle: "Wichtige Information", noticeDesc: "Das Handelsministerium behält sich das Recht vor." },
    exporters: { title: "Genehmigte Exporteure", subtitle: "Liste der Exporteure.", standardsTitle: "Standards", standardsDesc: "Strenge Qualitätsstandards.", searchPlaceholder: "Exporteur suchen...", emptyMessage: "Keine Ergebnisse." },
    impacts: { title: "Wirkung", subtitle: "Schlüsselzahlen." },
    chatbot: { title: "AVM Bot", placeholder: "Stellen Sie Ihre Frage...", greeting: "Hallo! Ich bin der virtuelle Assistent des AVM. Wie kann ich Ihnen helfen?" },
    partners: { title: "Partner", subtitle: "Zusammenarbeit.", bientot: "Demnächst", institution: "Institution", collectivite: "Gemeinde", filiere: "Branche", intl: "International", onu: "UNO", ong: "NGO" },
    contact: { title: "Kontakt", subtitle: "Kontaktieren Sie AVM.", coordsTitle: "Kontakt", addressLabel: "Adresse", address: "Antalaha, Region SAVA\nMadagaskar", phoneLabel: "Telefon", phone: "+261 20 XX XXX XX", emailLabel: "E-Mail", email: "contact@avm.mg", hoursLabel: "Öffnungszeiten", hours: "Montag - Freitag\n8:00 - 16:30", formTitle: "Nachricht senden", nameLabel: "Vollständiger Name", emailFieldLabel: "E-Mail", subjectLabel: "Betreff", messageLabel: "Nachricht", sentTitle: "Nachricht gesendet!", sentDesc: "Wir antworten umgehend." },
  },

  // ─── Italiano ───
  it: {
    nav: { home: "Home", about: "Chi siamo", actors: "Attori", programmes: "Programmi", campaign: "Vaniglia Verde", exporters: "Esportatori", impacts: "Impatto", partners: "Partner", contact: "Contatto" },
    common: { learnMore: "Scopri di più", contactUs: "Contattaci", send: "Invia", discover: "Scopri", explore: "Esplora", viewAll: "Vedi tutto" },
    footer: { tagline: "Alleanza del Vaniglia Malgascia - Difendere, promuovere, proteggere.", legal: "Note legali", rights: "Tutti i diritti riservati." },
    home: {
      badge: "Associazione Riconosciuta di utilità pubblica - Decreto n. 2021-548",
      subtitle: "Difendere il settore della vaniglia, promuoverlo a livello nazionale e internazionale, proteggere gli attori dalla volatilità dei prezzi e migliorare le condizioni di vita.",
      missionTitle: "La Nostra Missione", missionSubtitle: "Quattro pilastri fondamentali per un settore sostenibile.",
      mission: { defend: "Difendere il settore", defendDesc: "Protezione degli interessi.", promote: "Promuovere", promoteDesc: "Promozione nazionale e internazionale.", stabilize: "Stabilizzare prezzi", stabilizeDesc: "Lotta contro la volatilità.", improve: "Migliorare condizioni", improveDesc: "Miglioramento delle condizioni di vita." },
      newsTitle: "Notizie", newsSubtitle: "Ultime notizie.", featuredLabel: "In evidenza",
      actorsTitle: "Gli Attori", actorsSubtitle: "Quattro anelli essenziali.", actorPlanteurs: "Coltivatori", actorPlanteursDesc: "Guardiani del sapere ancestrale.", actorCollecteurs: "Raccoglitori", actorCollecteursDesc: "Collegamento essenziale.", actorProducteurs: "Produttori", actorProducteursDesc: "Trasformazione in vaniglia nera.", actorExportateurs: "Esportatori", actorExportateursDesc: "Approvati dal Ministero del Commercio.",
      progTitle: "I Nostri Programmi", progSubtitle: "Quattro pilastri.", progTrace: "Trasparenza", progTraceDesc: "Tracciabilità completa.", progSocial: "Qualità della vita", progSocialDesc: "Accesso ad acqua, salute.", progEnv: "Qualità ambientale", progEnvDesc: "Pratiche agricole sostenibili.", progQuality: "Qualità alimentare", progQualityDesc: "Standard e certificazione.",
      impactsTitle: "I Nostri Impatti", impactsSubtitle: "Cifre chiave.", impactPlanters: "Coltivatori", impactTons: "Tonnellate", impactPrice: "Prezzo/kg", impactRegions: "Regioni",
      ctaTitle: "Unisciti all'Alleanza", ctaDesc: "AVM è la tua alleata.", photoSectionTitle: "Nel cuore del settore", photoSectionDesc: "AVM lavora quotidianamente con i coltivatori.",
    },
    about: { title: "Chi siamo", subtitle: "Dalla CNV all'AVM.", historyTitle: "Storia", historyDesc: "AVM deriva dalla CNV.", legalTitle: "Quadro legale", decree1: "Decreto n. 2021-548", decree2: "Decreto n. 2026-836", governanceTitle: "Governance", governanceDesc: "40 membri ufficiali.", locationTitle: "Sede", locationDesc: "Antalaha, Regione SAVA." },
    actors: { title: "Gli Attori", subtitle: "Quattro anelli essenziali.", planteurs: "Coltivatori", planteursDesc: "Coltivano vaniglia verde.", collecteurs: "Raccoglitori", collecteursDesc: "Acquistano vaniglia verde.", producteurs: "Produttori", producteursDesc: "Trasformano in vaniglia nera.", exportateurs: "Esportatori", exportateursDesc: "Approvati dal Ministero." },
    programmes: { title: "Programmi", subtitle: "Quattro pilastri.", traceTitle: "Trasparenza", traceDesc: "Tracciabilità completa.", traceTag: "Tracciabilità", socialTitle: "Qualità vita", socialDesc: "Miglioramento condizioni.", socialTag: "Sociale", envTitle: "Qualità ambientale", envDesc: "Pratiche sostenibili.", envTag: "Ambiente", qualityTitle: "Qualità alimentare", qualityDesc: "Standard e analisi.", qualityTag: "Qualità" },
    campaign: { title: "Vaniglia Verde", subtitle: "Date e direttive.", datesTitle: "Date", datesDesc: "Fissate annualmente.", rulesTitle: "Direttive", rule1: "Divieto di raccolta prima della data.", rule2: "Rispettare maturità minima.", rule3: "Registrazione obbligatoria.", rule4: "Rispettare prezzi minimi.", noticeTitle: "Informazione importante", noticeDesc: "Il Ministero del Commercio si riserva il diritto." },
    exporters: { title: "Esportatori approvati", subtitle: "Lista esportatori.", standardsTitle: "Standard", standardsDesc: "Norme rigorose.", searchPlaceholder: "Cerca esportatore...", emptyMessage: "Nessun risultato." },
    impacts: { title: "Impatto", subtitle: "Cifre chiave." },
    chatbot: { title: "AVM Bot", placeholder: "Fai la tua domanda...", greeting: "Ciao! Sono l'assistente virtuale dell'AVM. Come posso aiutarti?" },
    partners: { title: "Partner", subtitle: "Collaborazioni.", bientot: "Prossimamente", institution: "Istituzione", collectivite: "Ente locale", filiere: "Settore", intl: "Internazionale", onu: "ONU", ong: "ONG" },
    contact: { title: "Contatto", subtitle: "Contatta AVM.", coordsTitle: "Contatti", addressLabel: "Indirizzo", address: "Antalaha, Regione SAVA\nMadagascar", phoneLabel: "Telefono", phone: "+261 20 XX XXX XX", emailLabel: "Email", email: "contact@avm.mg", hoursLabel: "Orari", hours: "Lunedì - Venerdì\n8:00 - 16:30", formTitle: "Invia messaggio", nameLabel: "Nome completo", emailFieldLabel: "Email", subjectLabel: "Oggetto", messageLabel: "Messaggio", sentTitle: "Messaggio inviato!", sentDesc: "Risponderemo al più presto." },
  },
}

export default T
