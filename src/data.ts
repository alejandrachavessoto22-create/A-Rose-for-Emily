import { TimelineEvent, QuizQuestion, PillarCard, EvidenceRow, DustCard, CharacterData } from "./types";

export const pillarsData: PillarCard[] = [
  {
    id: "macabre",
    title: "The Macabre and the Grotesque",
    description: "Utilizing horrific or disturbing elements to highlight deeper social or psychological truths.",
    quote: "She died in one of the downstairs rooms, in a heavy walnut bed with a curtain, her gray head propped on a pillow yellow and moldy with age and lack of sunlight.",
    citation: "(Faulkner 6)"
  },
  {
    id: "modernity",
    title: "Resistance to Modernity",
    description: "The clash between the august names of the past and the encroachment of gasoline pumps and cotton gins.",
    quote: "When the next generation, with its more modern ideas, became mayors and aldermen, this arrangement created some little dissatisfaction.",
    citation: "(Faulkner 1)"
  },
  {
    id: "decay",
    title: "Social Decay and Isolation",
    description: "The literal and metaphorical decay of the Southern aristocracy.",
    quote: "It was a big, squarish frame house that had once been white, decorated with cupolas and spires and scrolled balconies in the heavily lightsome style of the seventies...",
    citation: "(Faulkner 1)"
  }
];

export const backgroundData = {
  historical: {
    title: "Historical Context (1900–1950)",
    period: "The Modern Era",
    content: "This period represents the Modern era, marked by the tension between traditional agrarian values and the rise of mass culture and industrialization. In the story, this is seen in the transition from Colonel Sartoris’s 19th-century edict to the next generation with more modern ideas."
  },
  literary: {
    title: "Literary Context (Southern Gothic)",
    genre: "Subgenre of American Gothic",
    content: "Southern Gothic literature 'digs into the dark side of our past' and brings 'the absurd and the fantastical' to the surface. It focuses on the 'nasty underbelly of the world' and explores issues of racism, social class, and the 'eccentricities' of Southern culture."
  }
};

export const evidenceData: EvidenceRow[] = [
  {
    id: "macabre",
    characteristic: "The Macabre",
    evidence: '"The body had apparently once lain in the attitude of an embrace, but now the long sleep that outlasts love, that conquers even the grimace of love, had cuckolded him. What was left of him, rotted beneath what was left of the nightshirt, had become inextricable from the bed in which he lay; and upon him and upon the pillow beside him lay that even coating of the patient and biding dust." (Faulkner 7)',
    explanation: "Southern Gothic utilizes the absurd and fantastical (keeping a corpse) to represent the darkness within the past. The hair proves Emily's literal embrace of death."
  },
  {
    id: "modernity",
    characteristic: "Resistance to Modernity",
    evidence: 'Emily refuses the "metal numbers" for a mailbox when the town gets "free postal delivery": "When the town got free postal delivery, Miss Emily alone refused to let them fasten the metal numbers above her door and attach a mailbox to it. She would not listen to them." (Faulkner 6)',
    explanation: "Modernism often explores the disillusionment with traditional values versus new progress. Emily represents a \"stubborn\" refusal to acknowledge the passage of time."
  },
  {
    id: "decay",
    characteristic: "Social Decay",
    evidence: '"only Miss Emily\'s house was left, lifting its stubborn and coquettish decay above the cotton wagons and the gasoline pumps-an eyesore among eyesores." (Faulkner 1)',
    explanation: "Faulkner uses the house as a symbol of the Gilded Age's end. The \"cracked\" leather and \"tarnished\" furniture reflect the crumbling status of the \"high and mighty Griersons\"."
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does the 'iron-gray hair' on the pillow signify?",
    options: [
      "Emily’s natural aging.",
      "Emily’s physical presence beside the corpse long after its death.",
      "The town's neglect of her home.",
      "A clue left by the servant Tobe."
    ],
    correctAnswer: "Emily’s physical presence beside the corpse long after its death.",
    feedback: "Correct! This macabre detail confirms that Emily lived with and embraced the remains of Homer Barron for decades."
  },
  {
    id: "q2",
    question: "Which Modernist tension is represented by the 'gasoline pumps' near Emily’s house?",
    options: [
      "The Great Depression.",
      "The encroachment of industrial progress on traditional Southern life.",
      "The rise of the Jazz Age.",
      "The beginning of the Great War."
    ],
    correctAnswer: "The encroachment of industrial progress on traditional Southern life.",
    feedback: "Correct! Faulkner uses the pumps to show how 'modern ideas' and industry 'obliterated' the old world."
  },
  {
    id: "q3",
    question: "According to the course materials, what is a primary focus of 'Southern Gothic' fiction?",
    options: [
      "Celebrating the 'Sweet Tea and Plantations' myth.",
      "Digging into the 'dark side' and 'nasty underbelly' of the past.",
      "Promoting the American Dream.",
      "Chronological storytelling."
    ],
    correctAnswer: "Digging into the 'dark side' and 'nasty underbelly' of the past.",
    feedback: "Correct! The genre seeks to challenge oversimplified views of the South by exploring its 'absurd' and 'macabre' elements."
  },
  {
    id: "q4",
    question: "Why did Colonel Sartoris remit Emily’s taxes in 1894?",
    options: [
      "Because she was a pauper.",
      "Through an 'involved tale' of a loan to the town to avoid her accepting charity.",
      "Because her father was the Mayor.",
      "As a reward for her china-painting lessons."
    ],
    correctAnswer: "Through an 'involved tale' of a loan to the town to avoid her accepting charity.",
    feedback: "Correct! This 'hereditary obligation' shows the old-world chivalry that the newer generation rejects."
  },
  {
    id: "q5",
    question: "How does the town view Emily throughout the story?",
    options: [
      "As a beloved leader.",
      "As a 'fallen monument' and a 'duty'.",
      "As a dangerous criminal.",
      "As a modern 'Flapper' icon."
    ],
    correctAnswer: "As a 'fallen monument' and a 'duty'.",
    feedback: "Correct! To the town, she is 'dear, inescapable, impervious, tranquil, and perverse'."
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "evt-1",
    text: "Emily's father dies",
    narrativeOrder: 3,
    chronologicalOrder: 1,
    description: "Emily refuses to admit he is dead for three days. After his burial, she falls ill but eventually emerges to find herself impoverished and isolated."
  },
  {
    id: "evt-2",
    text: "Homer Barron arrives in town",
    narrativeOrder: 4,
    chronologicalOrder: 2,
    description: "A Northern foreman with a sidewalk paving crew, Homer quickly becomes the focus of town gossip as he courts Emily."
  },
  {
    id: "evt-3",
    text: "Emily buys arsenic",
    narrativeOrder: 5,
    chronologicalOrder: 3,
    description: "Emily visits the local druggist and purchases poison, refusing to state what she will use it for, leading locals to assume she will commit suicide."
  },
  {
    id: "evt-4",
    text: "Homer Barron disappears",
    narrativeOrder: 6,
    chronologicalOrder: 4,
    description: "Homer is last seen entering Emily's kitchen door at dusk, shortly after the cousins leave, and is never seen alive again."
  },
  {
    id: "evt-5",
    text: "The mysterious smell develops",
    narrativeOrder: 2,
    chronologicalOrder: 5,
    description: "A foul odor develops around the Grierson homestead. At night, several town aldermen sneak onto her property and sprinkle lime to neutralize the smell."
  },
  {
    id: "evt-6",
    text: "The new aldermen visit about taxes",
    narrativeOrder: 1,
    chronologicalOrder: 6,
    description: "A generation with 'more modern ideas' visits Emily to collect taxes, which she stubbornly refuses to pay, telling them to ask Colonel Sartoris (who had been dead for years)."
  },
  {
    id: "evt-7",
    text: "Emily dies and the locked room is opened",
    narrativeOrder: 7,
    chronologicalOrder: 7,
    description: "Emily dies in a moldy bed. Upon her funeral, the townspeople force open a sealed upstairs bedroom, finding Homer's skeleton and a strand of iron-gray hair."
  }
];

export const dustCards: DustCard[] = [
  {
    id: "dust-1",
    term: "Tarnished Gilt",
    preview: "Wipe away the 'dust' to reveal the symbol of fading wealth...",
    definition: "A classic representation of the Gilded Age's end and the decline of Southern aristocracy. In 'A Rose for Emily', the tarnished gilt mirrors Emily's own physical and mental decay, as well as the crumbling status of the high and mighty Griersons.",
    historicalFact: "Following the Civil War, elite Southern families faced complete economic collapse. Refusing to let go of pre-war grandeur, many let their grand mansions fall into complete ruin, physical manifestations of what Faulkner calls 'stubborn and coquettish decay'."
  },
  {
    id: "dust-2",
    term: "Hereditary Obligation",
    preview: "Wipe away the 'dust' to uncover the social duty...",
    definition: "Emily is viewed by the town not simply as an eccentric citizen, but as a 'hereditary obligation'—a tradition that the town is bound to both protect and resent.",
    historicalFact: "The patriarchal code of the Old South dictated that women of aristocratic status be shielded from harsh financial realities, like tax collections or manual labor. This chivalric structure isolated women like Emily in an ivory tower they could never escape."
  },
  {
    id: "dust-3",
    term: "Absurd and Fantastical",
    preview: "Wipe away the 'dust' to explore Southern Gothic extremes...",
    definition: "Southern Gothic digs into the dark side of our past, bringing the absurd and fantastical to the surface. Keeping a corpse for decades is the ultimate grotesque extension of Emily's extreme resistance to change.",
    historicalFact: "Faulkner uses these elements to illustrate how holding onto a dead past can drive individuals and cultures to extreme madness. The past is not dead; it is literally sleeping in the upstairs bedroom."
  },
  {
    id: "dust-4",
    term: "Gasoline Pumps",
    preview: "Wipe away the 'dust' to analyze the modern clash...",
    definition: "A visual signifier of the clash between old-world aristocratic names (like Sartoris and Grierson) and the encroachment of industrial modernization.",
    historicalFact: "In the 1910s and 20s, the American South transitioned from an agrarian landscape to a consumer-driven, mechanized society. Emily’s house, sitting stubborn amidst garages and cotton gins, became an 'eyesore' of historical transition."
  }
];

export const synthesisText = {
  title: "Conclusion: Context as Interpretation",
  subtitle: "The Burden of History",
  content: "The historical context of the interwar period (1900–1950) and the specific Southern identity deepen our interpretation of Emily Grierson not merely as a \"crazy\" woman, but as a victim of a \"hereditary obligation\". She is a \"tradition\" that the town both resents and protects, highlighting the Modernist theme of being \"acquainted with the night\" of one's own history."
};

export const sourcesList = [
  { text: 'Faulkner, William. "A Rose for Emily." Wharton County Junior College, 1930. https://facultyweb.wcjc.edu/users/jonl/documents/RoseforEmily.pdf.', ref: "" },
  { text: 'Susan Farris. “What Is Southern Fiction? What Is Southern Gothic?” YouTube, 6 Oct. 2020, www.youtube.com/watch?v=C823h7toFHw.', ref: "" },
  { text: 'Alvarado, Hector. “LM - 1221 Modernism 1900 - 1950.” Genially, 22 May 2024, view.genial.ly/61829cc9b85c7d0da809ac4c/presentation-lm-1441-modernism-1900-1950.', ref: "" },
  { text: 'Alvarado, Hector. “Poetry of the Modern Era.” Genially, 14 May 2025, view.genially.com/6824bb5b3b60f19aca13d92f.', ref: "" }
];

export const charactersData: CharacterData[] = [
  {
    id: "emily",
    name: "Emily Grierson",
    role: "The Protagonist / The 'Fallen Monument'",
    traits: ["Isolated", "Impervious", "Tragic", "Grotesque"],
    description: "The last surviving member of the aristocratic Grierson family. Following her controlling father's death, she becomes a complete recluse. Emily stubbornly resists the passage of time, the payment of taxes, and the physical modernization of Jefferson, eventually retreating entirely into her decaying home.",
    symbolism: "Represents the Old South's pathological refusal to acknowledge change or defeat, the crushing weight of hereditary traditions, and the extreme psychological decay resulting from total isolation.",
    keyQuote: "\"She looked bloated, like a body long submerged in motionless water, and of that pallid hue. Her eyes, lost in the fatty ridges of her face, looked like two small pieces of coal pressed into a lump of dough as they moved from one face to another while the visitors stated their errand.\" (Faulkner 1-2)",
    historicalContext: "Reflects the post-bellum decline of Southern plantation elites who clung desperately to pre-Civil War social status and class structures despite facing complete economic and social collapse."
  },
  {
    id: "homer",
    name: "Homer Barron",
    role: "The Northern Suitor",
    traits: ["Charismatic", "Modern", "Working-class", "Doomed"],
    description: "A boisterous, popular construction foreman from the North who arrives in Jefferson to pave the streets. His modern behavior and lower-class status scandalize the traditional townspeople. He courts Emily, becoming the tragic object of her desperate need for companionship.",
    symbolism: "Represents Northern industrial modernization, the post-Civil War Reconstruction of the South, and the entry of democratic 'new ideas' that directly challenged traditional Southern class boundaries.",
    keyQuote: "\"The construction company came with riggers and mules and machinery, and a foreman named Homer Barron, a Yankee--a big, dark, ready man, with a big voice and eyes lighter than his face. The little boys would follow in groups to hear him cuss the riggers, and the riggers singing in time to the rise and fall of picks. Pretty soon he knew everybody in town. Whenever you heard a lot of laughing anywhere about the square, Homer Barron would be in the center of the group.\" (Faulkner 4)",
    historicalContext: "Represents the late 19th and early 20th-century Northern carpetbaggers and infrastructure crews who brought modernization, paved roads, and capitalist industry to the devastated agrarian South."
  },
  {
    id: "father",
    name: "Mr. Grierson",
    role: "The Controlling Patriarch",
    traits: ["Dominating", "Severe", "Paternalistic", "Ominous"],
    description: "Emily’s deceased father, whose overbearing authority prevented her from finding a partner. Believing that no local young man was 'quite good enough' for a Grierson, he drove away all suitors, leaving Emily entirely dependent and single.",
    symbolism: "Represents the crushing, absolute authority of Southern paternalism and the toxic, restrictive protection of female 'purity' that ultimately stunted Emily's development and sanity.",
    keyQuote: "\"None of the young men were quite good enough\nfor Miss Emily and such. We had long thought of them as a tableau, Miss Emily a slender figure in white in the background, her father a spraddled silhouette in the foreground, his back to her and clutching a horsewhip, the two of them framed by the back-flung front door. So when she got to be thirty and was still single, we were not pleased exactly, but vindicated; even with insanity in the family she wouldn't have turned down all of her chances if they had really materialized.\" (Faulkner 3)",
    historicalContext: "Embodies the patriarchal hierarchy of the antebellum South, where fathers held absolute power over women, family property, and courtship, treating daughters as historical extensions of family honor."
  },
  {
    id: "tobe",
    name: "Tobe",
    role: "The Silent Witness",
    traits: ["Devoted", "Silent", "Enigmatic", "Enduring"],
    description: "Emily’s Black servant, cook, and housekeeper. For decades, he remains Emily's sole link to the outside world, doing the shopping and guarding her dark secrets. He never speaks to the townsfolk, and walks out the back door forever immediately upon Emily's death.",
    symbolism: "Represents the unacknowledged, invisible labor of the Black working class, and the silent, complex complicity required to carry the literal and figurative weight of declining white elites.",
    keyQuote: "\"We did not even know she was sick; we had long since given up trying to get any information from the Negro He talked to no one, probably not even to her, for his voice had grown harsh and rusty, as if from disuse.\" (Faulkner 6)",
    historicalContext: "Highlights the labor realities of the Jim Crow South, where post-emancipation Black servants remained tied to declining white aristocratic households in highly isolating, unequal relationships."
  },
  {
    id: "sartoris",
    name: "Colonel Sartoris",
    role: "The Traditionalist Mayor",
    traits: ["Chivalric", "Anachronistic", "Paternalistic", "Myth-maker"],
    description: "The former mayor of Jefferson who remitted Emily’s municipal taxes in 1894 under the pretext of a fictitious loan to the town. He sought to shield her from the shame of poverty, prioritizing old-world Southern honor over civic law.",
    symbolism: "Represents the romanticized myths of Southern chivalry and paternalism that prioritize aristocratic pride, male protectionism, and social class over modern administrative equality.",
    keyQuote: "\"Colonel Sartoris invented an involved tale to the effect that Miss Emily's father had loaned money to the town, which the town, as a matter of business, preferred this way of repaying. Only a man of Colonel Sartoris' generation and thought could have invented it, and only a woman could have believed it.\" (Faulkner 1)",
    historicalContext: "Embodies the 'Redeemer' politicians of the late-19th-century South who sought to restore pre-war racial hierarchies (like Jim Crow codes) and elite privileges under the banner of Southern pride."
  }
];
