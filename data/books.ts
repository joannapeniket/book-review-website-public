// Centralized book data for Joanna's Book Reviews

export interface Book {
  title: string;
  author: string;
  slug: string;
  rating: number;
  cover: string;
  genre: 'Fiction' | 'Non-Fiction';
  pages: number;
  publishYear: number;
  readDate: string;
  summary: string;
  themes: string[];
  review: string;
  perfectFor: string[];
  notFor: string[];
}

export const fictionBooks: Book[] = [
  {
    title: "Martyr",
    author: "Kaveh Akbar",
    slug: "martyr",
    rating: 5,
    cover: "/martyrcover.jpg",
    genre: "Fiction",
    pages: 240,
    publishYear: 2024,
    readDate: "June 2025",
    summary: "Cyrus Shams is a young Iranian-American poet grappling with addiction, the death of his mother, and questions of faith and identity. When he learns that his mother may have been killed in the downing of Iran Air Flight 655, he embarks on a journey to understand martyrdom, meaning, and what it means to live a life worth remembering.",
    themes: ["Addiction & Recovery", "Identity & Belonging", "Faith & Spirituality", "Grief & Loss", "Art & Purpose", "Family Legacy"],
    review: "Akbar has crafted something truly extraordinary here. The way he weaves together addiction, identity, and the search for meaning is both deeply personal and universally resonant. The prose is beautiful—poetic without being pretentious—and Cyrus feels so real and lived-in. This is one of those books that stays with you long after you close it.",
    perfectFor: ["Literary fiction with depth", "Stories about identity and belonging", "Beautiful, poetic prose", "Character-driven narratives"],
    notFor: ["You prefer fast-paced plots", "Heavy themes make you uncomfortable", "You don't enjoy introspective stories", "You want a light, easy read"]
  },
  {
    title: "Brooklyn",
    author: "Colm Tóibín",
    slug: "brooklyn",
    rating: 5,
    cover: "/brooklyncover.jpg",
    genre: "Fiction",
    pages: 262,
    publishYear: 2009,
    readDate: "August 2025",
    summary: "Eilis Lacey is a young Irish woman in the 1950s who emigrates from her small hometown in County Wexford to Brooklyn, New York. As she navigates life in a new country, she struggles with homesickness, cultural adjustment, and finding her place between two worlds. When a family tragedy calls her back to Ireland, she must choose between the life she's built in America and the familiar comfort of home.",
    themes: ["Immigration & Belonging", "Coming of Age", "Love & Sacrifice", "Cultural Identity", "Family Duty", "Personal Growth"],
    review: "Tóibín's writing is simply masterful—quiet yet profound, capturing the immigrant experience with such authenticity and emotional depth. Eilis is a wonderfully complex protagonist whose internal struggles feel so real and relatable. The way the novel explores belonging, choice, and the courage it takes to build a new life is both heartbreaking and hopeful. This is literary fiction at its finest.",
    perfectFor: ["Quiet, character-driven stories", "Historical fiction with depth", "Stories about identity and belonging", "Beautiful, understated prose"],
    notFor: ["You prefer fast-paced plots", "You need constant action", "You don't enjoy introspective narratives", "You want complex plot twists"]
  },
  {
    title: "The Selfless Act of Breathing",
    author: "JJ Bola",
    slug: "the-selfless-act-of-breathing",
    rating: 5,
    cover: "/theselflessactofbreathingcover.jpg",
    genre: "Fiction",
    pages: 288,
    publishYear: 2021,
    readDate: "May 2025",
    summary: "Michael is a young Black man struggling with depression and suicidal thoughts in London. After a painful breakup and facing various personal challenges, he decides to take a trip to Amsterdam with a plan to end his life. This raw and honest novel follows his emotional journey as he grapples with mental health, masculinity, love, and the complexities of being a Black man in contemporary society.",
    themes: ["Mental Health", "Masculinity & Vulnerability", "Race & Identity", "Love & Heartbreak", "Survival & Hope", "Self-Discovery"],
    review: "Bola has written something incredibly brave and necessary. This book tackles mental health and Black masculinity with such honesty and nuance. Michael's voice is authentic and compelling, and the way Bola explores the intersection of race, gender, and mental health is both educational and deeply moving. It's a difficult but ultimately hopeful read that sheds light on important conversations we need to be having.",
    perfectFor: ["Raw, honest storytelling", "Mental health representation", "Discussions of masculinity and vulnerability", "Contemporary social issues"],
    notFor: ["You're sensitive to suicide ideation themes", "You prefer lighter reads", "You don't enjoy introspective narratives", "You want escapist fiction"]
  },
  {
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    slug: "before-the-coffee-gets-cold",
    rating: 4,
    cover: "/whenthecoffeegetscoldcover.jpg",
    genre: "Fiction",
    pages: 213,
    publishYear: 2015,
    readDate: "March 2025",
    summary: "Set in a small Tokyo café, this magical realism novel follows four customers who discover they can travel back in time—with strict rules and limitations. Each person has someone they want to reconnect with: a man who wants to receive a letter from his wife, a nurse who wants to say goodbye to her husband, a sister who wants to see her sister one more time, and a mother who wants to meet her daughter.",
    themes: ["Time Travel", "Love & Loss", "Family Relationships", "Regret & Acceptance", "Second Chances", "Japanese Culture"],
    review: "This is a beautifully melancholic and heartwarming story. Kawaguchi's writing is gentle and contemplative, and the magical realism elements are handled with such care. While the time travel rules are restrictive, that's exactly the point—it's about finding closure and acceptance rather than changing the past. The interconnected stories are touching and the overall message about cherishing the present moment is powerful.",
    perfectFor: ["Magical realism fans", "Quiet, contemplative stories", "Japanese literature", "Stories about love and loss"],
    notFor: ["You want action-packed plots", "You dislike time travel stories", "You prefer Western writing styles", "You need high-stakes drama"]
  },
  {
    title: "Long Island",
    author: "Colm Tóibín",
    slug: "long-island",
    rating: 4,
    cover: "/longislandcover.jpg.webp",
    genre: "Fiction",
    pages: 280,
    publishYear: 2024,
    readDate: "September 2025",
    summary: "Twenty years after Brooklyn, Eilis Fiorello is living in suburban Long Island with her husband Tony and their children. When a young Irish woman arrives claiming to be pregnant with Tony's child, Eilis must confront the life she's built and the choices that brought her here. This sequel explores themes of marriage, motherhood, and what happens when the past refuses to stay buried.",
    themes: ["Marriage & Commitment", "Identity & Change", "Secrets & Truth", "Family Dynamics", "Past vs Present", "Choice & Consequence"],
    review: "Tóibín returns to Eilis with the same masterful prose and psychological insight that made Brooklyn so compelling. This sequel feels necessary rather than opportunistic, exploring how time changes us and how we navigate the complexities of long-term relationships. While perhaps not quite as transcendent as Brooklyn, it's still a beautifully crafted examination of marriage, family, and the weight of secrets.",
    perfectFor: ["Brooklyn fans", "Character-driven literary fiction", "Stories about marriage and family", "Nuanced psychological drama"],
    notFor: ["You haven't read Brooklyn", "You prefer standalone novels", "You want more plot-driven stories", "You need clear resolutions"]
  },
  {
    title: "I Who Have Never Known Men",
    author: "Jacqueline Harpman",
    slug: "i-who-have-never-known-men",
    rating: 4,
    cover: "/iwhohaveneverknownmencover.webp",
    genre: "Fiction",
    pages: 202,
    publishYear: 1995,
    readDate: "April 2025",
    summary: "A haunting dystopian novel about a woman who has lived her entire life in an underground bunker with thirty-nine other women, guarded by men in a post-apocalyptic world. When an opportunity for escape arises, she must venture into an unknown world above ground. This philosophical novel explores themes of freedom, identity, and what it means to be human.",
    themes: ["Dystopian Society", "Freedom & Captivity", "Female Experience", "Survival", "Existential Questions", "Humanity & Isolation"],
    review: "This is a haunting and philosophical work that stays with you long after reading. Harpman's prose is spare but powerful, and the unnamed narrator's voice is both innocent and profound. The novel raises deep questions about freedom, identity, and human nature without providing easy answers. It's a unique and thought-provoking read that deserves more recognition.",
    perfectFor: ["Dystopian fiction fans", "Philosophical novels", "Feminist literature", "Unique narrative voices"],
    notFor: ["You want clear explanations", "You prefer action-driven plots", "You dislike ambiguous endings", "You need hopeful stories"]
  },
  {
    title: "Kala",
    author: "Colin Walsh",
    slug: "kala",
    rating: 4,
    cover: "/kalacover.jpg",
    genre: "Fiction",
    pages: 432,
    publishYear: 2023,
    readDate: "July 2025",
    summary: "Fifteen years after their friend Kala disappeared, three childhood friends reunite in their Irish hometown for a wedding. As old tensions resurface and new secrets emerge, they must confront what really happened the night Kala vanished and how it shaped their lives. This atmospheric thriller explores friendship, guilt, and the weight of the past.",
    themes: ["Friendship & Betrayal", "Small Town Secrets", "Coming of Age", "Guilt & Shame", "Memory & Truth", "Irish Identity"],
    review: "Walsh has crafted a gripping and atmospheric novel that expertly weaves together past and present. The characterization is superb—each of the three protagonists feels fully realized and flawed. The Irish setting is beautifully rendered, and the mystery unfolds at just the right pace. It's both a compelling thriller and a thoughtful exploration of how the past shapes us.",
    perfectFor: ["Mystery and thriller fans", "Irish literature", "Stories about friendship", "Atmospheric literary fiction"],
    notFor: ["You dislike multiple POV narratives", "You prefer straightforward plots", "You want fast-paced action", "You need likeable characters"]
  },
  {
    title: "An American Marriage",
    author: "Tayari Jones",
    slug: "an-american-marriage",
    rating: 4,
    cover: "/anamericanmarriagecover.jpg",
    genre: "Fiction",
    pages: 308,
    publishYear: 2018,
    readDate: "February 2025",
    summary: "Celestial and Roy are newlyweds living the American Dream when Roy is wrongfully convicted of a crime and sentenced to twelve years in prison. As their marriage is tested by separation, injustice, and time, both must navigate love, loyalty, and survival. This powerful novel explores the impact of the criminal justice system on Black families and communities.",
    themes: ["Racial Justice", "Marriage & Commitment", "Love & Loyalty", "Forgiveness & Resentment", "Resilience & Survival", "Dreams Deferred"],
    review: "Jones has written a powerful and heartbreaking novel that tackles difficult themes with grace and nuance. The characters are beautifully developed, and the exploration of how injustice affects not just individuals but entire families is profound. The writing is elegant and the emotional impact is devastating. This is an important book that illuminates critical issues in American society.",
    perfectFor: ["Social justice themes", "Complex relationship dynamics", "Contemporary African American literature", "Emotionally powerful stories"],
    notFor: ["You avoid heavy social themes", "You prefer lighter relationship stories", "You dislike morally complex characters", "You want happy endings"]
  },
  {
    title: "Tokyo Express",
    author: "Seichō Matsumoto",
    slug: "tokyo-express",
    rating: 4,
    cover: "/tokyoexpresscover.jpg",
    genre: "Fiction",
    pages: 176,
    publishYear: 1958,
    readDate: "January 2025",
    summary: "A classic Japanese mystery novel about two detectives investigating an apparent double suicide involving a government official and a waitress. As they dig deeper, they uncover a complex web of corruption and alibis centered around Japan's railway system. This pioneering work of Japanese crime fiction combines social criticism with intricate plotting.",
    themes: ["Crime & Investigation", "Social Corruption", "Post-War Japan", "Class Differences", "Truth & Deception", "Modern Society"],
    review: "This classic Japanese mystery is a masterclass in plotting and social observation. Matsumoto's methodical approach to unraveling the crime is fascinating, and his critique of post-war Japanese society adds depth beyond the mystery elements. The railway-focused alibis are ingenious, and the exploration of class and corruption feels surprisingly contemporary.",
    perfectFor: ["Classic mystery fans", "Japanese literature", "Social crime fiction", "Methodical detective work"],
    notFor: ["You prefer fast-paced thrillers", "You dislike procedural elements", "You want complex character development", "You need modern writing styles"]
  },
  {
    title: "My Sister, the Serial Killer",
    author: "Oyinkan Braithwaite",
    slug: "my-sister-the-serial-killer",
    rating: 4,
    cover: "/mysistertheserialkillercover.webp",
    genre: "Fiction",
    pages: 226,
    publishYear: 2018,
    readDate: "October 2024",
    summary: "Korede is a nurse who has been cleaning up after her sister Ayoola's 'mistakes'—namely, the boyfriends who keep ending up dead. When Ayoola sets her sights on a doctor Korede has feelings for, she must decide how far she'll go to protect both her sister and the man she loves. This darkly comic thriller explores family loyalty and moral boundaries.",
    themes: ["Family Loyalty", "Moral Ambiguity", "Dark Humor", "Nigerian Culture", "Sisterhood", "Complicity"],
    review: "Braithwaite has created a darkly funny and brilliantly crafted thriller that's unlike anything else. The voice is distinctive and engaging, the dark humor perfectly balances the sinister elements, and the exploration of family loyalty versus moral obligation is compelling. It's a quick read that packs a powerful punch and showcases a unique new voice in fiction.",
    perfectFor: ["Dark humor fans", "Unique narrative voices", "African literature", "Short, punchy novels"],
    notFor: ["You're squeamish about violence", "You dislike morally gray characters", "You prefer realistic fiction", "You want lengthy character development"]
  },
  {
    title: "Lullaby",
    author: "Leïla Slimani",
    slug: "lullaby",
    rating: 3,
    cover: "/lullabycover.jpeg",
    genre: "Fiction",
    pages: 228,
    publishYear: 2016,
    readDate: "November 2024",
    summary: "When Myriam returns to work after having children, she and her husband hire Louise as a nanny. Louise seems perfect—the children love her, and she transforms their home. But as her obsession with the family grows, the arrangement takes a dark and tragic turn. This psychological thriller explores themes of class, motherhood, and domestic relationships.",
    themes: ["Motherhood & Guilt", "Social Classes", "Psychological Thriller", "Obsession", "French Society", "Trust & Betrayal"],
    review: "Slimani writes with precision and psychological insight, creating an atmosphere of mounting dread. The exploration of class dynamics and maternal guilt is sharp and observant. While the premise is compelling and the writing is skilled, the pacing felt uneven to me, and some character motivations could have been more fully developed. Still, it's a disturbing and thought-provoking read and I will definitely be picking up more of her books soon.",
    perfectFor: ["Psychological thriller fans", "French literature", "Suspense", "Social commentary"],
    notFor: ["You're sensitive to child endangerment themes", "You prefer faster-paced thrillers", "You want likeable characters"]
  },
  {
    title: "Seven Days in June",
    author: "Tia Williams",
    slug: "seven-days-in-june",
    rating: 3,
    cover: "/sevendaysinjunecover.jpg",
    genre: "Fiction",
    pages: 352,
    publishYear: 2021,
    readDate: "December 2024",
    summary: "Eva and Shane had a whirlwind teenage romance fifteen years ago that ended abruptly. Now successful authors, they unexpectedly reunite at a literary event in New York. Over several meetings they revisit their past, confront their present circumstances, and navigate the possibility of a future together while dealing with family, career pressures, and old wounds.",
    themes: ["Second Chance Romance", "Literary World", "Past & Present", "Family Drama", "Creative Life", "Healing & Growth"],
    review: "Williams crafts a romance with real emotional depth and complexity. The literary world setting is well-done, and the exploration of how past trauma affects present relationships feels authentic. However, the pacing dragged in places, and some plot elements felt overly convenient. The chemistry between Eva and Shane is strong and I felt truly connected to these characters by the end. A fun, gripping and moving story for any romance lover.",
    perfectFor: ["Contemporary romance readers", "Book world settings", "Second chance love stories", "Complex family dynamics"],
    notFor: ["You prefer lighter romance", "You dislike back-and-forth relationships", "You want faster pacing", "You avoid trauma themes"]
  },
  {
    title: "Sorrow and Bliss",
    author: "Meg Mason",
    slug: "sorrow-and-bliss",
    rating: 3,
    cover: "/sorrowandbliss.jpg",
    genre: "Fiction",
    pages: 320,
    publishYear: 2020,
    readDate: "January 2025",
    summary: "Martha is in her forties, recently separated from her husband, and struggling with a mental health condition that goes unnamed throughout the novel. Through dark humor and raw honesty, she navigates family relationships, her failing marriage, and the challenge of living with mental illness. The story moves between past and present to reveal how her condition has shaped her life.",
    themes: ["Mental Health", "Marriage & Divorce", "Family Dynamics", "Self-Discovery", "Humor & Tragedy", "Love & Loss"],
    review: "Mason's debut is ambitious in its portrayal of mental illness and family dysfunction. The dark humor works well, and Martha's voice is distinctive and often very funny. I found the ambiguous approach to Martha's mental illness intriguing. I guess that it was the intention that I as a reader am left with questions but also open to discussion/consideration. I enjoyed the non-linear structure but despite enjoying thoughtful and slower reads did feel the plot dragged at times. There are brilliant moments, but the execution is uneven.",
    perfectFor: ["Dark humour", "Mental health representation", "Dysfunctional family stories", "British humor"],
    notFor: ["You want clear explanations", "You prefer linear narratives", "You avoid mental health themes"]
  },
  {
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    slug: "beautiful-world-where-are-you",
    rating: 3,
    cover: "/beautifulworldcover.jpg",
    genre: "Fiction",
    pages: 368,
    publishYear: 2021,
    readDate: "March 2024",
    summary: "Alice, a successful novelist, and Eileen, her best friend, navigate love, friendship, and their place in the world as they approach thirty. Through a series of emails and intimate encounters, the novel explores modern relationships, capitalism, art, and what it means to live a meaningful life in contemporary society.",
    themes: ["Modern Relationships", "Friendship", "Art & Fame", "Millennial Anxiety", "Capitalism & Society", "Love & Sex"],
    review: "Rooney's third novel showcases her talent for capturing the minutiae of modern relationships and the anxieties of educated millennials. The email exchanges between Alice and Eileen are thoughtful and engaging. However, the characters can feel overly self-aware and the philosophical discussions sometimes overshadow the story. While beautifully written, it didn't quite reach the emotional heights of her previous work for me.",
    perfectFor: ["Sally Rooney fans", "Literary fiction", "Modern relationship dynamics", "Philosophical discussions"],
    notFor: ["You prefer plot-driven stories", "You dislike privileged characters", "You want more traditional romance", "You avoid explicit content"]
  },
  {
    title: "Really Good, Actually",
    author: "Monica Heisey",
    slug: "really-good-actually",
    rating: 2,
    cover: "/reallygoodactuallycover.jpg",
    genre: "Fiction",
    pages: 352,
    publishYear: 2023,
    readDate: "August 2024",
    summary: "Maggie is 28 and newly divorced, trying to figure out how to be single again while finishing her PhD. The novel follows her messy journey through modern dating, friendship, and self-discovery as she navigates life after marriage. Set in Toronto, it's a humorous take on millennial life and the pressure to have everything figured out.",
    themes: ["Divorce & Dating", "Millennial Life", "Self-Discovery", "Modern Romance", "Friendship", "Academic Life"],
    review: "While Heisey captures some truths about modern dating and millennial anxiety, the execution feels uneven. Maggie is often frustrating rather than relatable, making poor decisions that feel contrived rather than authentic. The humour hits sometimes. The premise had potential, but the character development and pacing didn't quite work for me. It reads more like a collection of dating mishaps than a cohesive story.",
    perfectFor: ["Millennial humor", "Dating disasters", "Academic settings", "Light contemporary fiction"],
    notFor: ["You want character growth", "You prefer sophisticated humor", "You dislike frustrating protagonists", "You want meaningful relationships"]
  }
];

export const nonFictionBooks: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    slug: "atomic-habits",
    rating: 5,
    cover: "/atomichabitscover.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2018,
    readDate: "January 2024",
    summary: "Clear presents a comprehensive system for building good habits and breaking bad ones through small, incremental changes. He introduces the concept of 'atomic habits'—tiny changes that compound over time to create remarkable results. The book provides practical frameworks like the Four Laws of Behavior Change and explores the science behind habit formation, offering actionable strategies for anyone looking to improve their life through better habits.",
    themes: ["Behavior Change", "Personal Development", "Systems Thinking", "Consistency & Discipline", "Goal Achievement", "Identity Change"],
    review: "This book is rightfully a bible for the self-help enthusiasts. I have seen it referenced multiple times within other books of a similar nature. Clear's approach is refreshingly practical and backed by solid research. What I love most is how he focuses on systems rather than goals, and the emphasis on identity-based habits. The writing is clear, engaging, and full of actionable advice that you can implement immediately. It's not just theory—it's a manual for real change that actually works. Essential reading for anyone looking to improve their life, this is the first book I would recommend to anyone wanting to get their life together and explore self-help themes.",
    perfectFor: ["Evidence-based self-improvement", "Practical, actionable advice", "Psychology and behavior science", "Building lasting positive changes"],
    notFor: ["You want quick fixes and shortcuts", "You dislike structured approaches", "You prefer philosophical over practical", "You're not ready to put in the work"]
  },
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    slug: "creative-act",
    rating: 5,
    cover: "/thecreativeactcover.jpg",
    genre: "Non-Fiction",
    pages: 432,
    publishYear: 2023,
    readDate: "February 2024",
    summary: "Legendary music producer Rick Rubin shares his insights on creativity, drawing from decades of working with artists across all genres. The book explores the creative process as a spiritual practice, offering wisdom on how to access and nurture creativity. Rubin presents creativity not as a talent but as a way of being, accessible to everyone regardless of their chosen medium.",
    themes: ["Creative Process", "Artistic Intuition", "Mindfulness in Art", "Overcoming Blocks", "Inspiration & Flow", "Authentic Expression"],
    review: "Rubin has created something truly special here—a meditation on creativity that feels both profound and practical. I highly recommend the audiobook, it is narrated by Rubin himself and is a soothing, mind-opening and fascinating listen. His approach to creativity as a spiritual practice resonates deeply, and the short, contemplative chapters make complex ideas accessible. While some concepts are abstract, they're meant to be felt rather than analyzed. This book changed how I think about the creative process and, along with The Practice by Seth Godin, changed my relationship with motivation and inspiration.",
    perfectFor: ["Artists and creators", "Spiritual approaches to creativity", "Overcoming creative blocks", "Mindfulness and presence"],
    notFor: ["You want step-by-step creative techniques", "You prefer scientific approaches", "You dislike abstract concepts", "You want quick creative fixes"]
  },
  {
    title: "Why Has Nobody Told Me This Before",
    author: "Julie Smith",
    slug: "why-has-nobody-told-me-this-before",
    rating: 5,
    cover: "/whyhasnobodycover.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2022,
    readDate: "March 2024",
    summary: "Clinical psychologist Dr. Julie Smith shares practical mental health tools and psychological insights that she wishes everyone knew. Drawing from her clinical practice and social media experience, she covers topics like anxiety, depression, confidence, motivation, and relationships. The book presents evidence-based strategies in an accessible, non-clinical way.",
    themes: ["Mental Health Tools", "Practical Psychology", "Emotional Regulation", "Self-Care", "Anxiety & Depression", "Personal Empowerment"],
    review: "Dr. Smith has created an invaluable resource that makes psychological insights accessible to everyone. Her explanations are clear and compassionate, and the practical tools are genuinely helpful. What I appreciate most is how she provides concrete strategies for improvement. The updated version in particular includes a practical guide for dealing with anxiety and panic attacks. This feels like having a wise therapist/mentor/friend in your pocket—essential reading for anyone interested in mental wellness or in my opinion - just anyone. After reading this I went on to buy her latest book 'Open When' which I have already dipped into several times.",
    perfectFor: ["Mental health education", "Practical psychology", "Self-help with scientific backing", "Accessible wellness tools"],
    notFor: ["You prefer deep theoretical approaches", "You want quick fixes", "You're uncomfortable with mental health topics", "You dislike self-help formats"]
  },
  {
    title: "Make It Ours",
    author: "Robin Givhan",
    slug: "make-it-ours",
    rating: 5,
    cover: "/makeitourscover.webp",
    genre: "Non-Fiction",
    pages: 272,
    publishYear: 2023,
    readDate: "April 2024",
    summary: "Fashion critic Robin Givhan explores how Black Americans have used fashion and style as forms of resistance, self-expression, and cultural identity throughout history. From enslaved people creating beauty from scraps to contemporary designers revolutionizing fashion, the book examines how clothing becomes a powerful tool for asserting dignity, creativity, and belonging in American society.",
    themes: ["Cultural Identity", "Fashion as Resistance", "American History", "Social Justice", "Self-Expression", "Cultural Reclamation"],
    review: "Givhan has written a brilliant and necessary book that illuminates an often-overlooked aspect of American history. Her analysis of fashion as resistance and cultural expression is sophisticated and moving. The way she connects historical and contemporary examples shows the enduring power of style as a form of communication and resistance. I counted down to the release of this book for months and it did not disappoint. The physical hardback has a section in the middle with pictures which is a lovely addition and I enjoyed putting faces to the names I was reading about",
    perfectFor: ["Fashion and style history", "Cultural studies", "African-American history", "Social justice themes"],
    notFor: ["You're not interested in fashion", "You prefer lighter historical topics", "You avoid discussions of racism", "You want practical style advice"]
  },
  {
    title: "Educated",
    author: "Tara Westover",
    slug: "educated",
    rating: 5,
    cover: "/educatedcover.jpg",
    genre: "Non-Fiction",
    pages: 334,
    publishYear: 2018,
    readDate: "July 2025",
    summary: "Tara Westover's powerful memoir chronicles her journey from growing up in a survivalist Mormon family in rural Idaho to earning a PhD from Cambridge University. Never having set foot in a classroom until age 17, Westover's pursuit of education becomes both a personal transformation and a painful separation from her family. The book explores the tension between loyalty to family and the pursuit of knowledge and self-determination. This book gripped me in a way I didn't anticipate. It triggered deep gratitude for the opportunities and education that I have as a woman",
    themes: ["Education & Knowledge", "Family Loyalty vs. Independence", "Self-Discovery", "Trauma & Abuse", "Religious Extremism", "Resilience & Transformation"],
    review: "This memoir is absolutely extraordinary. Westover's writing is beautiful and haunting, her story both horrifying and inspiring. The way she captures the internal conflict between love for family and the need for truth is masterful. It's a testament to the transformative power of education and the courage it takes to forge your own path. Unforgettable and life-affirming despite its difficult subject matter.",
    perfectFor: ["Powerful memoirs and life stories", "Stories of overcoming adversity", "Beautiful, literary prose", "Themes of education and self-determination"],
    notFor: ["You're sensitive to descriptions of abuse/graphic injury", "You prefer light, uplifting reads", "You don't enjoy memoir/autobiography", "You want fast-paced, plot-driven books"]
  },
  {
    title: "Quit Like a Woman",
    author: "Holly Whitaker",
    slug: "quit-like-a-woman",
    rating: 4,
    cover: "/quitlikeawomancover.jpg",
    genre: "Non-Fiction",
    pages: 352,
    publishYear: 2019,
    readDate: "May 2024",
    summary: "Holly Whitaker challenges traditional approaches to addiction recovery, particularly as they apply to women. Drawing from her own experience and research, she explores how societal pressures, trauma, and gender-specific issues contribute to women's relationships with alcohol. The book offers a feminist perspective on recovery and sobriety, advocating for a more holistic and women-centered approach.",
    themes: ["Addiction & Recovery", "Feminist Perspective", "Trauma & Healing", "Societal Pressures", "Self-Empowerment", "Holistic Wellness"],
    review: "Whitaker brings a much-needed feminist lens to addiction recovery. Her insights into how women's experiences with alcohol differ from men's are eye-opening, and her critique of traditional recovery methods is compelling. The book is both personal and political, offering practical advice while challenging systemic issues. When I bought this book I was in the market for a readable and relatable narrative on sober curiousity and choosing a life without alcohol but 'Quit Like a Woman' went so much deeper. It thoroughly changed the way I feel about and view alcohol, and taught me so much about the way old-fashioned male-centric attitudes and practices are forced onto people from all parts of society. It is one of those books that opens up a whole new area of interest and conversation in your brain",
    perfectFor: ["Feminist perspectives", "Alternative recovery approaches", "Women's health issues", "Personal transformation stories"],
    notFor: ["You prefer traditional recovery methods", "You're uncomfortable with feminist analysis", "You avoid addiction-related content"]
  },
  {
    title: "13 Things Mentally Strong Women Don't Do",
    author: "Amy Morin",
    slug: "13-things-mentally-strong-women-dont-do",
    rating: 4,
    cover: "/13thingsmentallystrongwomendontdocover.jpg",
    genre: "Non-Fiction",
    pages: 304,
    publishYear: 2018,
    readDate: "June 2024",
    summary: "Psychotherapist Amy Morin identifies thirteen destructive habits that prevent women from reaching their full potential. Based on her clinical experience and research, she addresses gender-specific challenges like people-pleasing, perfectionism, and fear of speaking up. The book provides practical strategies for building mental strength and resilience specifically tailored to women's experiences.",
    themes: ["Mental Resilience", "Women's Empowerment", "Overcoming Self-Doubt", "Healthy Boundaries", "Confidence Building", "Personal Growth"],
    review: "Morin addresses real issues that many women face with practical, evidence-based solutions. Her background as a therapist shows in the thoughtful way she handles complex topics like perfectionism and people-pleasing. While some advice feels familiar, her focus on what not to do rather than what to do is a useful framework. The book is accessible and encouraging, though occasionally feels repetitive.",
    perfectFor: ["Women's empowerment", "Practical mental health advice", "Overcoming perfectionism", "Building confidence"],
    notFor: ["You prefer male authors", "You want in-depth psychological theory", "You're not interested in gender-specific advice", "You dislike list-based formats"]
  },
  {
    title: "Feel Good Productivity",
    author: "Ali Abdaal",
    slug: "feel-good-productivity",
    rating: 4,
    cover: "/feelgoodproductivitycover.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2023,
    readDate: "September 2024",
    summary: "Doctor-turned-YouTuber Ali Abdaal challenges the traditional hustle culture approach to productivity. Drawing from positive psychology research and his own experience, he presents a system for being productive while maintaining well-being and enjoyment. The book focuses on sustainable productivity methods that make work feel good rather than stressful.",
    themes: ["Sustainable Productivity", "Work-Life Balance", "Motivation & Enjoyment", "Anti-Hustle Culture", "Well-being & Success", "Scientific Approach"],
    review: "Abdaal offers a refreshing take on productivity that prioritizes well-being alongside achievement. His scientific background shows in the research-backed approach, and his YouTube experience makes the content engaging and accessible. The emphasis on feeling good while being productive is much needed in our hustle-obsessed culture. Some concepts aren't entirely new, but his synthesis and presentation are valuable.",
    perfectFor: ["Sustainable productivity methods", "Science-based self-improvement", "Work-life balance", "Anti-burnout strategies"],
    notFor: ["You prefer traditional productivity advice", "You want quick productivity hacks", "You dislike YouTube-style content", "You're skeptical of positive psychology"]
  },
  {
    title: "The Artist's Way",
    author: "Julia Cameron",
    slug: "the-artists-way",
    rating: 4,
    cover: "/artist'swaycover.jpg",
    genre: "Non-Fiction",
    pages: 272,
    publishYear: 1992,
    readDate: "November 2024",
    summary: "Julia Cameron presents a twelve-week program for recovering creativity through spiritual practices and exercises. The book introduces tools like Morning Pages (daily stream-of-consciousness writing) and Artist Dates (solo creative outings) to help blocked artists reconnect with their creativity. Cameron views creativity as a spiritual path and offers methods for overcoming creative blocks and self-doubt.",
    themes: ["Creative Recovery", "Overcoming Blocks", "Spiritual Practice", "Self-Discovery", "Inner Critic Healing", "Artistic Confidence"],
    review: "Cameron's approach to creativity as a spiritual practice is both unique and powerful. The Morning Pages exercise alone has been transformative for many people, including myself. While some of the spiritual language might not resonate with everyone, the practical exercises are valuable regardless of your beliefs. The twelve-week structure provides good momentum, though the results depend on your commitment to the practices.",
    perfectFor: ["Blocked creatives", "Spiritual approaches to art", "Structured creative programs", "Self-discovery through creativity"],
    notFor: ["You're uncomfortable with spiritual language", "You prefer scientific approaches", "You want quick creative fixes", "You dislike daily practice requirements"]
  },
  {
    title: "The Let Them Theory",
    author: "Mel Robbins",
    slug: "the-let-them-theory",
    rating: 4,
    cover: "/theletthemtheorycover.jpg",
    genre: "Non-Fiction",
    pages: 240,
    publishYear: 2024,
    readDate: "October 2024",
    summary: "Motivational speaker Mel Robbins introduces a simple but powerful concept: 'Let them.' The book explores how trying to control others' actions and opinions creates unnecessary stress and how releasing that control can lead to greater peace and authentic relationships. Robbins provides practical strategies for implementing this mindset in various areas of life.",
    themes: ["Letting Go", "Healthy Boundaries", "Personal Empowerment", "Acceptance", "Relationship Dynamics", "Stress Reduction"],
    review: "Robbins has taken a simple concept and shown how profoundly it can impact our lives. The 'Let Them' theory is easy to understand but challenging to implement—which she acknowledges honestly. Her writing is accessible and motivating, with good practical examples. While the concept isn't groundbreaking, her presentation makes it actionable and memorable. A solid addition to the boundary-setting and personal empowerment genre.",
    perfectFor: ["People-pleasers", "Boundary setting", "Stress reduction", "Relationship advice"],
    notFor: ["You prefer complex psychological theories", "You dislike motivational speaking styles", "You want academic approaches", "You're skeptical of simple solutions"]
  },
  {
    title: "Invisible Women",
    author: "Caroline Criado Perez",
    slug: "invisible-women",
    rating: 4,
    cover: "/invisiblewomencover.jpg",
    genre: "Non-Fiction",
    pages: 432,
    publishYear: 2019,
    readDate: "December 2024",
    summary: "Caroline Criado Perez exposes the gender data gap that leaves women invisible in a world designed for men. Through extensive research, she shows how the failure to collect sex-disaggregated data and consider women's experiences leads to products, policies, and systems that discriminate against women—from car safety to medical research to urban planning.",
    themes: ["Gender Data Gap", "Systemic Discrimination", "Women's Rights", "Design & Policy", "Research Bias", "Social Justice"],
    review: "This is an eye-opening and infuriating book that reveals how deeply embedded gender bias is in seemingly neutral systems. Criado Perez's research is thorough and her examples are compelling—from smartphone sizes to medical testing. While the content can be overwhelming and depressing, it's crucial information that everyone should know. The writing is clear and accessible despite the heavy subject matter.",
    perfectFor: ["Feminist literature", "Data and research analysis", "Social justice issues", "Policy and design critique"],
    notFor: ["You're uncomfortable with feminist perspectives", "You prefer uplifting reads", "You avoid statistics-heavy books", "You're not interested in systemic issues"]
  },
  {
    title: "Manifest",
    author: "Roxie Nafousi",
    slug: "manifest",
    rating: 4,
    cover: "/manifestcover.jpg",
    genre: "Non-Fiction",
    pages: 224,
    publishYear: 2022,
    readDate: "August 2024",
    summary: "Roxie Nafousi presents a seven-step guide to manifestation, combining spiritual practices with practical action. She draws from her own transformation story and various spiritual traditions to explain how to align thoughts, feelings, and actions to create desired outcomes. The book aims to make manifestation accessible and practical for modern readers.",
    themes: ["Manifestation & Visualization", "Mindset Transformation", "Goal Achievement", "Self-Belief", "Aligned Action", "Spiritual Practice"],
    review: "Nafousi brings a balanced approach to manifestation that includes both mindset work and practical action. Her seven-step method is clear and actionable, and she acknowledges both the power and limitations of manifestation practices. While some concepts aren't new, her presentation is accessible and inspiring. The book works well for those new to manifestation concepts, though experienced practitioners might find it basic.",
    perfectFor: ["Manifestation beginners", "Goal setting with spiritual elements", "Mindset transformation", "Practical spirituality"],
    notFor: ["You're skeptical of manifestation", "You prefer purely practical approaches", "You want scientific backing", "You dislike spiritual concepts"]
  },
  {
    title: "Notes on Heartbreak",
    author: "Annie Lord",
    slug: "notes-on-heartbreak",
    rating: 4,
    cover: "/notesonheartbreakcover.jpg",
    genre: "Non-Fiction",
    pages: 240,
    publishYear: 2022,
    readDate: "January 2025",
    summary: "Annie Lord explores the universal experience of heartbreak through personal narrative, cultural analysis, and conversations with friends. She examines how we're taught to handle romantic disappointment, the pressure to 'get over it' quickly, and what heartbreak reveals about love, self-worth, and resilience. The book combines memoir with social commentary on modern dating and relationships.",
    themes: ["Heartbreak & Loss", "Healing & Recovery", "Self-Discovery", "Modern Relationships", "Resilience", "Emotional Honesty"],
    review: "Lord writes about heartbreak with refreshing honesty and insight. She captures the messiness of recovery and the pressure to perform 'healing' for others. Her analysis of how society treats women's emotional pain is particularly sharp. While the memoir format means it's quite personal, her observations about modern dating culture will resonate with many readers. It's validating and thoughtful.",
    perfectFor: ["Relationship and dating insights", "Emotional healing", "Contemporary women's experiences", "Honest memoirs"],
    notFor: ["You prefer scientific approaches to healing", "You're not interested in dating culture", "You avoid emotional content", "You want practical breakup advice"]
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    slug: "deep-work",
    rating: 3,
    cover: "/deepworkcover.jpg",
    genre: "Non-Fiction",
    pages: 304,
    publishYear: 2016,
    readDate: "April 2024",
    summary: "Cal Newport argues that the ability to focus without distraction on cognitively demanding tasks—what he calls 'deep work'—is becoming increasingly rare and valuable. He provides strategies for cultivating this skill, including minimizing distractions, creating rituals, and embracing boredom. The book critiques our hyperconnected culture and offers practical advice for reclaiming sustained focus.",
    themes: ["Focus & Concentration", "Digital Minimalism", "Productivity Systems", "Attention Management", "Professional Excellence", "Cognitive Performance"],
    review: "Newport makes a compelling case for the importance of deep work in our distracted age. His strategies are practical and his critique of constant connectivity is well-reasoned. However, many of his suggestions feel more suited to academics or knowledge workers with significant autonomy. The writing can be dry, and some concepts are repeated more than necessary. Useful ideas, but the execution could be more engaging.",
    perfectFor: ["Knowledge workers", "Productivity optimization", "Digital minimalism", "Academic and research work"],
    notFor: ["You have limited work autonomy", "You prefer engaging writing styles", "You want quick productivity tips", "You work in collaborative environments"]
  },
  {
    title: "The Practice",
    author: "Seth Godin",
    slug: "the-practice",
    rating: 3,
    cover: "/thepracticecover.jpg",
    genre: "Non-Fiction",
    pages: 240,
    publishYear: 2020,
    readDate: "July 2024",
    summary: "Seth Godin explores creativity as a practice rather than a talent, arguing that creative work is about showing up consistently rather than waiting for inspiration. He addresses creative resistance, the fear of shipping work, and the importance of serving an audience. The book is structured as a series of short chapters offering insights on professional creativity and artistic courage.",
    themes: ["Creative Consistency", "Process Over Outcome", "Professional Creativity", "Overcoming Resistance", "Artistic Discipline", "Creative Courage"],
    review: "Godin's insights on treating creativity as a practice are valuable, and his encouragement to ship work despite imperfection is important. The short chapter format makes it digestible, and his experience with creators shows. However, the content feels scattered and repetitive at times. Some concepts from his previous books are rehashed here. While there are good insights, it lacks the focused impact of his best work.",
    perfectFor: ["Professional creatives", "Overcoming creative resistance", "Entrepreneurial creativity", "Consistent creative practice"],
    notFor: ["You want step-by-step creative methods", "You prefer in-depth analysis", "You're new to creative work", "You dislike repetitive content"]
  },
  {
    title: "The Dose Effect",
    author: "TJ Power",
    slug: "the-dose-effect",
    rating: 3,
    cover: "/thedoseeffectcover.jpg",
    genre: "Non-Fiction",
    pages: 256,
    publishYear: 2022,
    readDate: "September 2024",
    summary: "Clinical psychologist TJ Power introduces the concept of 'dose-dependent' change—the idea that small, consistent actions can create significant improvements in mental health and well-being. Drawing from therapeutic practices and research, he explains how micro-interventions can be more effective than dramatic changes for sustainable personal growth.",
    themes: ["Gradual Change", "Mental Health", "Sustainable Habits", "Psychological Interventions", "Behavioral Science", "Well-being Optimization"],
    review: "Power's concept of dose-dependent change is sensible and backed by good research. The emphasis on small, sustainable changes over dramatic transformations is refreshing and realistic. However, the book sometimes feels like it's stretching a simple concept to fill page space. The writing is clear but not particularly engaging, and some examples feel repetitive. The core ideas are solid but could have been more concisely presented.",
    perfectFor: ["Gradual self-improvement", "Mental health approaches", "Sustainable behavior change", "Evidence-based wellness"],
    notFor: ["You want dramatic transformation methods", "You prefer engaging writing styles", "You dislike academic approaches", "You want quick results"]
  },
  {
    title: "Confidence",
    author: "Roxie Nafousi",
    slug: "confidence",
    rating: 3,
    cover: "/confidencecover.jpg",
    genre: "Non-Fiction",
    pages: 208,
    publishYear: 2022,
    readDate: "November 2024",
    summary: "Following up on her manifestation book, Roxie Nafousi focuses specifically on building confidence through mindset shifts and practical exercises. She explores the relationship between confidence and self-worth, addressing common confidence blocks and providing tools for developing genuine self-assurance. The book combines personal development techniques with spiritual practices.",
    themes: ["Confidence Building", "Self-Worth", "Mindset Transformation", "Personal Empowerment", "Overcoming Self-Doubt", "Inner Work"],
    review: "Nafousi addresses confidence with the same accessible approach as her previous work. The combination of practical exercises and mindset work is useful, and she acknowledges that confidence building is an ongoing process. However, the content feels somewhat familiar and the advice doesn't always go deep enough. While encouraging and well-intentioned, it lacks the depth needed for lasting transformation.",
    perfectFor: ["Confidence building beginners", "Self-help with spiritual elements", "Accessible personal development", "Overcoming self-doubt"],
    notFor: ["You want deep psychological analysis", "You prefer research-based approaches", "You've read many confidence books", "You're skeptical of affirmation-based methods"]
  },
  {
    title: "Bad Drunk",
    author: "Millie Mackintosh",
    slug: "bad-drunk",
    rating: 2,
    cover: "/baddrunkcover.jpg",
    genre: "Non-Fiction",
    pages: 256,
    publishYear: 2023,
    readDate: "December 2024",
    summary: "Reality TV personality Millie Mackintosh shares her experience with alcohol and journey to sobriety. She discusses how drinking affected her relationships, career, and self-esteem, and explores the pressures of drinking culture, particularly for women in the public eye. The memoir combines personal storytelling with reflections on alcohol's role in modern society.",
    themes: ["Alcohol & Sobriety", "Celebrity Culture", "Personal Transformation", "Social Pressures", "Mental Health", "Recovery Journey"],
    review: "Mackintosh deserves credit for sharing her story openly, and her insights into the pressures of celebrity culture and social drinking are interesting. However, the writing lacks depth and the narrative often feels superficial. The book reads more like an extended magazine article than a substantial memoir. While her honesty is commendable, the execution doesn't match the importance of the topic.",
    perfectFor: ["Celebrity memoirs", "Sobriety stories", "Light personal development", "Quick reads about drinking culture"],
    notFor: ["You want literary memoirs", "You prefer in-depth analysis", "You're not interested in celebrity culture", "You want comprehensive addiction resources"]
  }
];

export const allBooks: Book[] = [...fictionBooks, ...nonFictionBooks];

export function getBookBySlug(slug: string): Book | undefined {
  return allBooks.find(book => book.slug === slug);
}

export function getBooksByGenre(genre: 'Fiction' | 'Non-Fiction'): Book[] {
  return allBooks.filter(book => book.genre === genre);
}

export function getBooksByRating(rating: number): Book[] {
  return allBooks.filter(book => book.rating === rating);
}

export function searchBooks(query: string): Book[] {
  const searchTerm = query.toLowerCase();
  return allBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.themes.some(theme => theme.toLowerCase().includes(searchTerm))
  );
}