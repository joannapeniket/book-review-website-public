export interface Book {
  title: string;
  author: string;
  slug: string;
  rating: number;
  cover: string;
  genre: "Fiction" | "Non-Fiction";
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
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1695745035l/123208985.jpg",
    genre: "Fiction",
    pages: 304,
    publishYear: 2024,
    readDate: "June 2025",
    summary: "A powerful exploration of addiction, spirituality, and the search for meaning through the story of Cyrus Shams, a young Iranian-American struggling with his mother's death and his own place in the world.",
    themes: ["Identity & Heritage", "Addiction & Recovery", "Spirituality & Faith", "Family & Loss", "Art & Poetry", "Mental Health"],
    review: "Akbar's debut novel is a stunning meditation on grief, addiction, and the search for transcendence. The prose is both beautiful and brutal, weaving together poetry and narrative in a way that feels entirely natural. Cyrus is a compelling protagonist whose journey through pain toward understanding is deeply moving. This book tackles heavy themes with grace and intelligence.",
    perfectFor: ["Literary fiction enthusiasts", "Readers interested in addiction narratives", "Poetry lovers", "Those exploring themes of identity and heritage"],
    notFor: ["Readers seeking light entertainment", "Those avoiding heavy emotional content", "People uninterested in experimental narrative structures", "Readers preferring straightforward plotlines"]
  },
  {
    title: "Brooklyn",
    author: "Colm Tóibín",
    slug: "brooklyn",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320523424l/8634596.jpg",
    genre: "Fiction",
    pages: 262,
    publishYear: 2009,
    readDate: "August 2025",
    summary: "The story of Eilis Lacey, a young Irish woman who emigrates to Brooklyn in the 1950s, navigating love, belonging, and the difficult choice between two countries and two very different lives.",
    themes: ["Immigration & Identity", "Love & Relationships", "Home & Belonging", "Coming of Age", "Family Duty", "Cultural Adaptation"],
    review: "Tóibín crafts a beautifully understated story about the immigrant experience that feels both specific to its time and universally relevant. Eilis is a wonderfully realized character whose internal struggles feel authentic and heartbreaking. The writing is elegant and precise, capturing the emotional complexity of leaving home and building a new life.",
    perfectFor: ["Historical fiction lovers", "Readers interested in immigration stories", "Those who appreciate character-driven narratives", "Fans of subtle, literary writing"],
    notFor: ["Readers seeking fast-paced plots", "Those wanting dramatic, high-stakes stories", "People preferring contemporary settings", "Readers looking for action or adventure"]
  },
  {
    title: "The Selfless Act of Breathing",
    author: "JJ Bola",
    slug: "the-selfless-act-of-breathing",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609784749l/52915426.jpg",
    genre: "Fiction",
    pages: 336,
    publishYear: 2021,
    readDate: "November 2022",
    summary: "A powerful novel about Michael, a young Black man in London dealing with depression and suicidal thoughts, exploring themes of mental health, masculinity, and the importance of community and connection.",
    themes: ["Mental Health", "Masculinity & Vulnerability", "Community & Connection", "Identity & Race", "Healing & Recovery", "Urban Life"],
    review: "This is an incredibly important and beautifully written book that tackles mental health with sensitivity and honesty. Bola creates a protagonist whose struggles feel real and immediate, while also offering hope and showing the power of human connection. The writing is both lyrical and accessible, making this a book that can reach many different readers.",
    perfectFor: ["Readers interested in mental health representation", "Those seeking diverse contemporary fiction", "People who appreciate honest emotional narratives", "Fans of character-driven stories"],
    notFor: ["Readers avoiding heavy mental health content", "Those seeking lighter entertainment", "People uncomfortable with discussions of suicide", "Readers preferring plot-driven narratives"]
  },
  {
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    slug: "before-the-coffee-gets-cold",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588759352l/44421460.jpg",
    genre: "Fiction",
    pages: 213,
    publishYear: 2015,
    readDate: "April 2023",
    summary: "Set in a small Tokyo café where customers can travel back in time, this novel follows four different people who visit the café to confront their past, with the catch that they can't change the present.",
    themes: ["Time & Memory", "Regret & Acceptance", "Family Relationships", "Love & Loss", "Japanese Culture", "Second Chances"],
    review: "A gentle, philosophical novel that uses the concept of time travel to explore very human emotions. While the premise is fantastical, the stories are grounded in real feelings of regret, love, and loss. The writing is simple but effective, and the interconnected stories create a satisfying whole.",
    perfectFor: ["Fans of magical realism", "Readers who enjoy philosophical fiction", "Those interested in Japanese literature", "People who like interconnected short stories"],
    notFor: ["Readers seeking complex sci-fi", "Those wanting fast-paced narratives", "People preferring realistic fiction", "Readers looking for action or adventure"]
  },
  {
    title: "Long Island",
    author: "Colm Tóibín",
    slug: "long-island",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697046845l/185150813.jpg",
    genre: "Fiction",
    pages: 288,
    publishYear: 2024,
    readDate: "August 2025",
    summary: "The sequel to Brooklyn, following Eilis twenty years later as she returns to Ireland when her husband's secret threatens to destroy her carefully built American life.",
    themes: ["Marriage & Infidelity", "Immigration & Return", "Family Secrets", "Motherhood", "Irish-American Identity", "Second Chances"],
    review: "Tóibín returns to Eilis with the same masterful touch, showing how the past never truly stays buried. The writing maintains the same elegant restraint as Brooklyn, and the exploration of a woman at midlife facing difficult choices feels authentic and compelling.",
    perfectFor: ["Fans of Brooklyn", "Readers who enjoy literary fiction", "Those interested in immigrant experiences", "People who appreciate character development"],
    notFor: ["Readers unfamiliar with Brooklyn", "Those seeking standalone narratives", "People wanting dramatic plot twists", "Readers preferring contemporary settings"]
  },
  {
    title: "I Who Have Never Known Men",
    author: "Jacqueline Harpman",
    slug: "i-who-have-never-known-men",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570565983l/48570579.jpg",
    genre: "Fiction",
    pages: 192,
    publishYear: 1995,
    readDate: "July 2024",
    summary: "A haunting dystopian novel about a woman who has lived her entire life in captivity with thirty-nine other women, guarded by men in an underground bunker, until one day they are suddenly freed.",
    themes: ["Freedom & Captivity", "Human Nature", "Survival", "Isolation", "Gender & Power", "Existential Questions"],
    review: "This is a unique and unsettling novel that raises profound questions about human nature and freedom. Harpman's sparse, controlled prose perfectly matches the stark reality of her protagonist's world. It's a book that stays with you long after reading.",
    perfectFor: ["Fans of dystopian fiction", "Readers who enjoy philosophical narratives", "Those interested in feminist literature", "People who appreciate experimental fiction"],
    notFor: ["Readers seeking uplifting stories", "Those wanting detailed world-building", "People preferring character-driven plots", "Readers looking for romantic elements"]
  },
  {
    title: "Kala",
    author: "Colin Walsh",
    slug: "kala",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657097468l/61150718.jpg",
    genre: "Fiction",
    pages: 464,
    publishYear: 2023,
    readDate: "April 2025",
    summary: "Set in a small Irish town, this psychological thriller follows three childhood friends reunited as adults when they return for a wedding, forced to confront the disappearance of their friend Kala fifteen years earlier.",
    themes: ["Childhood Trauma", "Small Town Secrets", "Friendship & Betrayal", "Irish Society", "Memory & Truth", "Coming of Age"],
    review: "Walsh creates a gripping psychological thriller that also serves as a sharp critique of small-town Irish society. The multiple perspectives and shifting timelines are handled expertly, and the mystery at the heart of the story is genuinely compelling.",
    perfectFor: ["Thriller and mystery fans", "Readers interested in Irish fiction", "Those who enjoy multiple perspectives", "People who like psychological suspense"],
    notFor: ["Readers avoiding dark themes", "Those seeking light entertainment", "People preferring straightforward narratives", "Readers uncomfortable with trauma"]
  },
  {
    title: "An American Marriage",
    author: "Tayari Jones",
    slug: "an-american-marriage",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1494800914l/33590210.jpg",
    genre: "Fiction",
    pages: 308,
    publishYear: 2018,
    readDate: "2024",
    summary: "The story of newlyweds Celestial and Roy, whose lives are upended when Roy is wrongfully imprisoned, exploring how their marriage survives separation, injustice, and the intrusion of the past.",
    themes: ["Criminal Justice", "Marriage & Commitment", "Racial Injustice", "Love & Loyalty", "American Society", "Family Dynamics"],
    review: "Jones creates a powerful examination of love, loyalty, and the criminal justice system. The characters are complex and flawed, making their struggles feel authentic. This is both a love story and a social commentary that doesn't shy away from difficult questions.",
    perfectFor: ["Readers interested in social justice themes", "Those who enjoy relationship dramas", "People seeking diverse contemporary fiction", "Fans of character-driven narratives"],
    notFor: ["Readers avoiding heavy social issues", "Those seeking light romance", "People uncomfortable with injustice themes", "Readers preferring plot-driven stories"]
  },
  {
    title: "Tokyo Express",
    author: "Seichō Matsumoto",
    slug: "tokyo-express",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644498806l/58835135.jpg",
    genre: "Fiction",
    pages: 176,
    publishYear: 1957,
    readDate: "December 2023",
    summary: "A classic Japanese mystery following two detectives investigating what appears to be a lovers' suicide, but which reveals itself to be a carefully planned murder involving train schedules and alibis.",
    themes: ["Detective Fiction", "Japanese Society", "Crime & Punishment", "Social Class", "Deception", "Police Procedure"],
    review: "A masterclass in classic detective fiction that helped establish the Japanese mystery genre. Matsumoto's methodical approach to unraveling the crime is satisfying, and the social commentary about post-war Japan adds depth to the mystery.",
    perfectFor: ["Classic mystery fans", "Readers interested in Japanese literature", "Those who enjoy procedural mysteries", "People who like methodical detective work"],
    notFor: ["Readers seeking fast-paced thrillers", "Those wanting psychological complexity", "People preferring contemporary settings", "Readers looking for action scenes"]
  },
  {
    title: "My Sister, the Serial Killer",
    author: "Oyinkan Braithwaite",
    slug: "my-sister-the-serial-killer",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545149772l/38819868.jpg",
    genre: "Fiction",
    pages: 226,
    publishYear: 2018,
    readDate: "August 2024",
    summary: "A darkly comic thriller about Korede, whose beautiful sister Ayoola has a habit of killing her boyfriends, forcing Korede to help clean up the mess while questioning her own moral boundaries.",
    themes: ["Family Loyalty", "Moral Ambiguity", "Dark Comedy", "Nigerian Culture", "Sisterhood", "Violence & Society"],
    review: "Braithwaite creates a unique blend of dark comedy and psychological thriller that shouldn't work but absolutely does. The moral questions about family loyalty versus justice are genuinely complex, and the Nigerian setting adds cultural richness to the story.",
    perfectFor: ["Fans of dark comedy", "Readers who enjoy psychological thrillers", "Those interested in African literature", "People who like morally complex characters"],
    notFor: ["Readers sensitive to violence", "Those seeking traditional mysteries", "People wanting clear moral lines", "Readers preferring serious literary fiction"]
  },
  {
    title: "Lullaby",
    author: "Leïla Slimani",
    slug: "lullaby",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493813797l/34273226.jpg",
    genre: "Fiction",
    pages: 224,
    publishYear: 2016,
    readDate: "June 2024",
    summary: "A psychological thriller about a Parisian family who hire Louise as a nanny for their children, leading to a tragic outcome that the novel works backward from to explore class, motherhood, and domestic relationships.",
    themes: ["Childcare & Trust", "Class Differences", "Psychological Thriller", "French Society", "Motherhood", "Domestic Violence"],
    review: "Slimani creates a tense psychological study that examines class dynamics and the complexities of domestic life. While the structure is interesting, the pacing can feel uneven, and some characters lack depth. Still, it's a compelling read that raises important questions.",
    perfectFor: ["Psychological thriller fans", "Readers interested in class dynamics", "Those who enjoy French literature", "People interested in motherhood themes"],
    notFor: ["Readers avoiding dark subject matter", "Those seeking uplifting stories", "People preferring fast-paced narratives", "Readers uncomfortable with child endangerment"]
  },
  {
    title: "Seven Days in June",
    author: "Tia Williams",
    slug: "seven-days-in-june",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614268139l/54304428.jpg",
    genre: "Fiction",
    pages: 368,
    publishYear: 2021,
    readDate: "October 2023",
    summary: "A contemporary romance about Eva and Shane, former teenage lovers who reunite after twenty years, both now successful authors who must confront their past and the daughter Eva never told Shane about.",
    themes: ["Second Chance Romance", "Teenage Love", "Single Motherhood", "Writing & Creativity", "Trauma & Healing", "Family Secrets"],
    review: "Williams creates an engaging romance with depth and emotional complexity. The writing is strong and the characters feel real, though some plot elements feel predictable. The exploration of trauma and healing adds weight to what could have been a simple romance.",
    perfectFor: ["Romance readers", "Those who enjoy second-chance love stories", "People interested in writer protagonists", "Readers seeking diverse contemporary fiction"],
    notFor: ["Readers avoiding romance", "Those preferring literary fiction", "People uncomfortable with trauma themes", "Readers seeking complex plot structures"]
  },
  {
    title: "Sorrow and Bliss",
    author: "Meg Mason",
    slug: "sorrow-and-bliss",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627398306l/58186138.jpg",
    genre: "Fiction",
    pages: 352,
    publishYear: 2021,
    readDate: "May 2024",
    summary: "The story of Martha, a woman struggling with an unnamed mental illness that affects her marriage, family relationships, and sense of self, told with dark humor and emotional honesty.",
    themes: ["Mental Health", "Marriage & Divorce", "Family Dynamics", "Dark Humor", "Self-Discovery", "Stigma & Treatment"],
    review: "Mason tackles mental illness with both humor and sensitivity, creating a protagonist who is deeply flawed but sympathetic. The writing is sharp and often funny, though the unnamed condition sometimes feels like a literary device rather than authentic representation.",
    perfectFor: ["Readers interested in mental health narratives", "Those who appreciate dark humor", "People who enjoy family sagas", "Fans of British humor"],
    notFor: ["Readers seeking clear diagnoses", "Those avoiding mental health content", "People preferring uplifting stories", "Readers uncomfortable with family dysfunction"]
  },
  {
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    slug: "beautiful-world-where-are-you",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
    genre: "Fiction",
    pages: 368,
    publishYear: 2021,
    readDate: "May 2023",
    summary: "Following two friends, Alice and Eileen, as they navigate love, friendship, and their place in the world, interspersed with emails between them discussing art, politics, and the meaning of life.",
    themes: ["Friendship", "Modern Relationships", "Millennial Anxiety", "Art & Culture", "Political Consciousness", "Coming of Age"],
    review: "Rooney's follow-up to Normal People is ambitious but uneven. The email exchanges between the friends feel forced and overly intellectual, while the relationship dynamics are more successful. Her prose remains sharp, but the philosophical elements don't always integrate smoothly.",
    perfectFor: ["Fans of Sally Rooney", "Readers interested in millennial literature", "Those who enjoy relationship dramas", "People interested in literary discussions"],
    notFor: ["Readers seeking plot-driven narratives", "Those avoiding lengthy philosophical discussions", "People preferring action or adventure", "Readers uncomfortable with sexual content"]
  }
];

export const nonFictionBooks: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    slug: "atomic-habits",
    rating: 5,
    cover: "/atomic-habits-cover.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2018,
    readDate: "January 2024",
    summary: "Clear presents a comprehensive system for building good habits and breaking bad ones through small, incremental changes. He introduces the concept of 'atomic habits'—tiny changes that compound over time to create remarkable results.",
    themes: ["Behavior Change", "Personal Development", "Systems Thinking", "Consistency & Discipline", "Goal Achievement", "Identity Change"],
    review: "This book is a game-changer. Clear's approach is refreshingly practical and backed by solid research. What I love most is how he focuses on systems rather than goals, and the emphasis on identity-based habits. The writing is clear, engaging, and full of actionable advice that you can implement immediately. It's not just theory—it's a manual for real change that actually works. Essential reading for anyone looking to improve their life.",
    perfectFor: ["Evidence-based self-improvement", "Practical, actionable advice", "Psychology and behavior science", "Building lasting positive changes"],
    notFor: ["You want quick fixes and shortcuts", "You dislike structured approaches", "You prefer philosophical over practical", "You're not ready to put in the work"]
  },
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    slug: "creative-act",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663804423l/60965426.jpg",
    genre: "Non-Fiction",
    pages: 432,
    publishYear: 2023,
    readDate: "November 2023",
    summary: "Legendary music producer Rick Rubin shares his philosophy on creativity, offering insights into the creative process from his decades of working with artists across all genres.",
    themes: ["Creativity & Innovation", "Artistic Process", "Mindfulness", "Authenticity", "Inspiration", "Creative Discipline"],
    review: "Rubin offers profound insights into the nature of creativity that apply far beyond music. His approach is both spiritual and practical, encouraging readers to trust their instincts while remaining open to the creative process. The book is beautifully written and full of wisdom.",
    perfectFor: ["Creative professionals", "Artists and musicians", "Those seeking creative inspiration", "People interested in the psychology of creativity"],
    notFor: ["Readers seeking step-by-step instructions", "Those preferring scientific approaches", "People wanting quick creative fixes", "Readers uncomfortable with spiritual concepts"]
  },
  {
    title: "Why Has Nobody Told Me This Before",
    author: "Julie Smith",
    slug: "why-has-nobody-told-me-this-before",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642273284l/58864742.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2022,
    readDate: "March 2024",
    summary: "Clinical psychologist Julie Smith provides practical tools and strategies for managing mental health, covering everything from anxiety and depression to building resilience and emotional intelligence.",
    themes: ["Mental Health", "Self-Care", "Emotional Intelligence", "Anxiety Management", "Depression", "Psychological Tools"],
    review: "Dr. Smith provides invaluable mental health tools in an accessible format. Her clinical expertise shines through while remaining relatable and practical. This book should be required reading for everyone - the skills taught here are essential for navigating modern life.",
    perfectFor: ["Mental health awareness", "Practical psychological tools", "Self-help based on clinical expertise", "Anxiety and stress management"],
    notFor: ["Those seeking quick fixes", "Readers avoiding mental health topics", "People preferring academic approaches", "Those uncomfortable with self-reflection"]
  },
  {
    title: "Make It Ours",
    author: "Robin Givhan",
    slug: "make-it-ours",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680018721l/76045467.jpg",
    genre: "Non-Fiction",
    pages: 256,
    publishYear: 2023,
    readDate: "June 2025",
    summary: "Fashion critic Robin Givhan examines how clothing and style serve as powerful tools for identity, self-expression, and cultural commentary in American society.",
    themes: ["Fashion & Identity", "Cultural Commentary", "Self-Expression", "American Society", "Style & Politics", "Personal Branding"],
    review: "Givhan brings her keen eye for fashion and cultural criticism to bear on how we use clothing to communicate identity. Her insights are sharp and thought-provoking, making this essential reading for anyone interested in the intersection of style and society.",
    perfectFor: ["Fashion enthusiasts", "Cultural critics", "Those interested in identity and self-expression", "People who appreciate social commentary"],
    notFor: ["Readers uninterested in fashion", "Those seeking practical style advice", "People preferring academic approaches", "Readers avoiding cultural criticism"]
  },
  {
    title: "Educated",
    author: "Tara Westover",
    slug: "educated",
    rating: 5,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922.jpg",
    genre: "Non-Fiction",
    pages: 334,
    publishYear: 2018,
    readDate: "July 2025",
    summary: "A memoir about Tara Westover's journey from growing up in a survivalist family in rural Idaho without formal education to earning a PhD from Cambridge University.",
    themes: ["Education & Learning", "Family & Trauma", "Religious Fundamentalism", "Personal Transformation", "Rural America", "Academic Achievement"],
    review: "Westover's memoir is both heartbreaking and inspiring, showing the transformative power of education while exploring the painful cost of leaving one's family behind. Her writing is beautiful and her story is unforgettable.",
    perfectFor: ["Memoir lovers", "Education advocates", "Those interested in family dynamics", "Readers who appreciate transformation stories"],
    notFor: ["Readers avoiding family trauma", "Those seeking light memoirs", "People uncomfortable with religious criticism", "Readers preferring fiction"]
  },
  {
    title: "Quit Like a Woman",
    author: "Holly Whitaker",
    slug: "quit-like-a-woman",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570726540l/43721556.jpg",
    genre: "Non-Fiction",
    pages: 352,
    publishYear: 2019,
    readDate: "March 2025",
    summary: "Holly Whitaker challenges traditional addiction recovery models and offers a feminist perspective on sobriety, exploring how women's relationship with alcohol is shaped by cultural and societal factors.",
    themes: ["Addiction & Recovery", "Feminism", "Mental Health", "Sobriety", "Women's Health", "Cultural Criticism"],
    review: "Whitaker brings a fresh, feminist perspective to addiction recovery that challenges many traditional approaches. Her writing is honest and empowering, offering valuable insights for women struggling with alcohol regardless of where they are in their journey.",
    perfectFor: ["Women questioning their relationship with alcohol", "Feminism and women's health advocates", "Those seeking alternative recovery approaches", "Readers interested in cultural criticism"],
    notFor: ["Those happy with traditional recovery models", "Readers avoiding addiction topics", "People uncomfortable with feminist perspectives", "Those seeking quick sobriety fixes"]
  },
  {
    title: "13 Things Mentally Strong Women Don't Do",
    author: "Amy Morin",
    slug: "13-things-mentally-strong-women-dont-do",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1507477576l/36373808.jpg",
    genre: "Non-Fiction",
    pages: 288,
    publishYear: 2018,
    readDate: "August 2023",
    summary: "Psychotherapist Amy Morin identifies specific challenges women face and provides strategies for building mental strength, resilience, and emotional intelligence in personal and professional life.",
    themes: ["Mental Strength", "Women's Psychology", "Resilience", "Self-Confidence", "Emotional Intelligence", "Personal Development"],
    review: "Morin provides practical strategies specifically tailored to women's experiences and challenges. The advice is grounded in psychology but presented in an accessible way. While some points feel obvious, the female-focused approach adds value to the mental strength conversation.",
    perfectFor: ["Women seeking empowerment", "Personal development enthusiasts", "Those building confidence", "Readers interested in psychology"],
    notFor: ["Those seeking gender-neutral advice", "Readers avoiding self-help", "People preferring academic approaches", "Those uncomfortable with gendered perspectives"]
  },
  {
    title: "Feel Good Productivity",
    author: "Ali Abdaal",
    slug: "feel-good-productivity",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698687097l/200258448.jpg",
    genre: "Non-Fiction",
    pages: 320,
    publishYear: 2023,
    readDate: "January 2024",
    summary: "YouTuber and former doctor Ali Abdaal explores how to be productive without burning out, focusing on sustainable systems that actually make you feel good while getting things done.",
    themes: ["Productivity", "Well-being", "Work-Life Balance", "Sustainable Success", "Motivation", "Energy Management"],
    review: "Abdaal brings a refreshing perspective to productivity that prioritizes well-being over pure output. His approach is evidence-based and practical, though some concepts may be familiar to productivity enthusiasts. The focus on feeling good while being productive is valuable.",
    perfectFor: ["Productivity enthusiasts", "Those seeking work-life balance", "People interested in sustainable success", "Readers who enjoy evidence-based approaches"],
    notFor: ["Those seeking traditional productivity hacks", "Readers wanting quick fixes", "People comfortable with hustle culture", "Those avoiding self-help content"]
  },
  {
    title: "The Artist's Way",
    author: "Julia Cameron",
    slug: "the-artists-way",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394127007l/615570.jpg",
    genre: "Non-Fiction",
    pages: 272,
    publishYear: 1992,
    readDate: "June 2025",
    summary: "A 12-week program designed to recover and discover creative abilities through practices like morning pages and artist dates, helping readers overcome creative blocks and self-doubt.",
    themes: ["Creativity & Art", "Spiritual Growth", "Self-Discovery", "Creative Blocks", "Artistic Practice", "Personal Development"],
    review: "Cameron's approach to creativity recovery has helped countless artists and creative individuals. The practices are simple but powerful, though the spiritual elements may not resonate with everyone. The emphasis on daily practice and self-care is valuable for any creative person.",
    perfectFor: ["Creative individuals", "Those experiencing creative blocks", "People interested in spiritual approaches to creativity", "Artists seeking inspiration"],
    notFor: ["Highly secular readers", "Those seeking quick creative fixes", "People uncomfortable with spiritual concepts", "Readers preferring scientific approaches"]
  },
  {
    title: "The Let Them Theory",
    author: "Mel Robbins",
    slug: "the-let-them-theory",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688044142l/196548625.jpg",
    genre: "Non-Fiction",
    pages: 224,
    publishYear: 2024,
    readDate: "February 2025",
    summary: "Mel Robbins explores the power of letting go of the need to control others and focusing on what you can actually influence in your own life, leading to greater peace and effectiveness.",
    themes: ["Personal Boundaries", "Control & Letting Go", "Relationships", "Self-Empowerment", "Stress Reduction", "Emotional Freedom"],
    review: "Robbins presents a simple but powerful concept that can transform how you approach relationships and stress. While the core idea is straightforward, her examples and applications make it practical and actionable. A useful tool for anyone struggling with control issues.",
    perfectFor: ["Those struggling with control", "People in difficult relationships", "Readers seeking stress reduction", "Those interested in boundary setting"],
    notFor: ["Readers seeking complex psychological theories", "Those avoiding self-help", "People preferring academic approaches", "Readers uncomfortable with letting go"]
  },
  {
    title: "Invisible Women",
    author: "Caroline Criado Perez",
    slug: "invisible-women",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549722683l/41104077.jpg",
    genre: "Non-Fiction",
    pages: 432,
    publishYear: 2019,
    readDate: "February 2025",
    summary: "An examination of the gender data gap and how the absence of women's perspectives in data collection leads to a world built largely by and for men, with serious consequences for women's lives.",
    themes: ["Gender Equality", "Data & Research", "Feminist Analysis", "Social Justice", "Design & Policy", "Women's Rights"],
    review: "Criado Perez presents compelling evidence of how gender bias affects everything from medical research to urban planning. The research is thorough and the examples are eye-opening, though the presentation can sometimes feel repetitive. Essential reading for understanding gender inequality.",
    perfectFor: ["Feminism advocates", "Data and research enthusiasts", "Social justice readers", "Those interested in gender studies"],
    notFor: ["Readers uncomfortable with feminist perspectives", "Those seeking light reading", "People avoiding political content", "Readers preferring narrative styles"]
  },
  {
    title: "Manifest",
    author: "Roxie Nafousi",
    slug: "manifest",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631020568l/58724923.jpg",
    genre: "Non-Fiction",
    pages: 208,
    publishYear: 2022,
    readDate: "January 2025",
    summary: "A practical guide to manifestation that combines spiritual practices with actionable steps, teaching readers how to align their thoughts, beliefs, and actions to create the life they want.",
    themes: ["Manifestation", "Law of Attraction", "Goal Setting", "Mindset", "Spiritual Practice", "Personal Development"],
    review: "Nafousi presents manifestation in a practical, accessible way that feels less woo-woo than many books on the topic. Her step-by-step approach is useful, though skeptics may still find the concepts challenging. Good for those new to manifestation practices.",
    perfectFor: ["Those interested in manifestation", "Goal-setting enthusiasts", "People seeking mindset shifts", "Readers new to spiritual practices"],
    notFor: ["Highly skeptical readers", "Those avoiding spiritual content", "People preferring scientific approaches", "Readers uncomfortable with abstract concepts"]
  },
  {
    title: "Notes on Heartbreak",
    author: "Annie Lord",
    slug: "notes-on-heartbreak",
    rating: 4,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674204901l/59808091.jpg",
    genre: "Non-Fiction",
    pages: 272,
    publishYear: 2022,
    readDate: "November 2024",
    summary: "A candid exploration of heartbreak, healing, and the messiness of modern love, combining personal memoir with cultural analysis of how we process romantic loss in the digital age.",
    themes: ["Heartbreak & Healing", "Modern Dating", "Emotional Recovery", "Digital Age Romance", "Self-Discovery", "Millennial Relationships"],
    review: "Lord captures the rawness of heartbreak with honesty and humor. Her writing is relatable and insightful, though sometimes feels overly focused on millennial dating culture. A good read for anyone navigating the complexities of modern love and loss.",
    perfectFor: ["Those experiencing heartbreak", "Millennial readers", "People interested in modern dating culture", "Readers seeking honest emotional narratives"],
    notFor: ["Those avoiding relationship content", "Readers seeking academic analysis", "People uncomfortable with raw emotion", "Those preferring solution-focused books"]
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    slug: "deep-work",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962l/25744928.jpg",
    genre: "Non-Fiction",
    pages: 304,
    publishYear: 2016,
    readDate: "May 2025",
    summary: "Newport argues that the ability to focus without distraction on cognitively demanding tasks is becoming increasingly rare and valuable, providing strategies for cultivating this skill in a distracted world.",
    themes: ["Focus & Concentration", "Productivity", "Technology & Distraction", "Skill Development", "Professional Success", "Mindfulness"],
    review: "Newport makes a compelling case for the value of deep work, though his solutions can feel rigid and not applicable to all work situations. The concept is important, but the execution sometimes lacks nuance about different work styles and life circumstances.",
    perfectFor: ["Knowledge workers", "Those struggling with focus", "Productivity enthusiasts", "People seeking career advancement"],
    notFor: ["Those in collaborative work environments", "Readers seeking flexible approaches", "People with demanding family responsibilities", "Those avoiding productivity content"]
  },
  {
    title: "The Practice",
    author: "Seth Godin",
    slug: "the-practice",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598641854l/53574624.jpg",
    genre: "Non-Fiction",
    pages: 256,
    publishYear: 2020,
    readDate: "July 2024",
    summary: "Godin explores the discipline of creative work, arguing that creativity is not about inspiration but about showing up consistently and doing the work, regardless of how you feel.",
    themes: ["Creative Practice", "Discipline & Consistency", "Professional Creativity", "Artistic Development", "Work Ethic", "Creative Process"],
    review: "Godin's emphasis on consistency over inspiration is valuable, though the book can feel repetitive and sometimes overly simplistic. His perspective on creative work is useful for professionals, but may not resonate with all types of creative individuals.",
    perfectFor: ["Creative professionals", "Those struggling with consistency", "Entrepreneurs and freelancers", "People building creative habits"],
    notFor: ["Hobby creatives", "Those seeking inspiration over discipline", "Readers preferring detailed strategies", "People avoiding business-focused creativity advice"]
  },
  {
    title: "The Dose Effect",
    author: "TJ Power",
    slug: "the-dose-effect",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650530481l/60421267.jpg",
    genre: "Non-Fiction",
    pages: 288,
    publishYear: 2022,
    readDate: "May 2025",
    summary: "Power explores how small, consistent actions compound over time to create significant results, examining the science behind incremental change and habit formation.",
    themes: ["Incremental Change", "Habit Formation", "Compound Effects", "Behavioral Science", "Personal Development", "Goal Achievement"],
    review: "The concept of small changes creating big results is valuable, though Power's presentation sometimes lacks the depth and research backing found in similar books like Atomic Habits. Useful for beginners to personal development.",
    perfectFor: ["Personal development beginners", "Those seeking simple change strategies", "Goal-setting enthusiasts", "Readers interested in behavioral science"],
    notFor: ["Those familiar with habit formation books", "Readers seeking advanced strategies", "People preferring academic depth", "Those avoiding self-help content"]
  },
  {
    title: "Confidence",
    author: "Roxie Nafousi",
    slug: "confidence",
    rating: 3,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656067169l/61218632.jpg",
    genre: "Non-Fiction",
    pages: 240,
    publishYear: 2022,
    readDate: "March 2025",
    summary: "Nafousi provides practical strategies for building genuine confidence through self-awareness, mindset shifts, and actionable exercises designed to overcome self-doubt and impostor syndrome.",
    themes: ["Self-Confidence", "Personal Development", "Mindset", "Self-Doubt", "Impostor Syndrome", "Self-Awareness"],
    review: "Nafousi offers accessible advice for building confidence, though much of the content feels familiar from other self-help books. The exercises are practical, but the book lacks depth in addressing the root causes of low confidence.",
    perfectFor: ["Those struggling with confidence", "Self-help beginners", "People seeking practical exercises", "Readers interested in mindset work"],
    notFor: ["Those seeking deep psychological insight", "Readers familiar with confidence-building literature", "People preferring academic approaches", "Those avoiding self-help content"]
  },
  {
    title: "Bad Drunk",
    author: "Millie Mackintosh",
    slug: "bad-drunk",
    rating: 2,
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674123456l/75504287.jpg",
    genre: "Non-Fiction",
    pages: 288,
    publishYear: 2023,
    readDate: "April 2025",
    summary: "Reality TV personality Millie Mackintosh shares her personal journey with alcohol addiction and recovery, exploring how sobriety transformed her life and relationships.",
    themes: ["Addiction & Recovery", "Celebrity Memoir", "Sobriety", "Personal Transformation", "Mental Health", "British Culture"],
    review: "While Mackintosh's honesty about her struggles is commendable, the book often feels superficial and lacks the depth needed to provide real insight into addiction and recovery. Her privileged perspective may not resonate with many readers facing similar struggles.",
    perfectFor: ["Fans of celebrity memoirs", "Those interested in sobriety stories", "Reality TV enthusiasts", "Readers seeking light addiction narratives"],
    notFor: ["Those seeking deep addiction insight", "Readers preferring expert-written recovery books", "People avoiding celebrity content", "Those looking for comprehensive recovery guidance"]
  }
];

export const allBooks: Book[] = [...fictionBooks, ...nonFictionBooks];

// Utility functions for working with the book data
export function getBookBySlug(slug: string): Book | undefined {
  return allBooks.find(book => book.slug === slug);
}

export function getBooksByGenre(genre: "Fiction" | "Non-Fiction"): Book[] {
  return allBooks.filter(book => book.genre === genre);
}

export function getBooksByRating(rating: number): Book[] {
  return allBooks.filter(book => book.rating === rating);
}

export function searchBooks(query: string): Book[] {
  const lowercaseQuery = query.toLowerCase();
  return allBooks.filter(book =>
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.themes.some(theme => theme.toLowerCase().includes(lowercaseQuery))
  );
}