const movies = [
  {
    overview:
      "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    release_date: "2021-12-22",
    adult: false,
    backdrop_path: "/oQPbZ5e6J9fuAyv4Gl0mMZMIyPI.jpg",
    vote_count: 661,
    genre_ids: [28, 12, 53, 10752],
    id: 476669,
    original_language: "en",
    original_title: "The King's Man",
    poster_path: "/nj5HmHRZsrYQEYYXyAusFv35erP.jpg",
    title: "The King's Man",
    video: false,
    vote_average: 7.1,
    popularity: 1291.478,
    media_type: "movie",
  },
  {
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    video: false,
    title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    release_date: "2021-12-15",
    vote_count: 7540,
    vote_average: 8.4,
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    id: 634649,
    genre_ids: [28, 12, 878],
    popularity: 9526.653,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/jdLsmpqmP1wTdFUPtmxMnYgoifT.jpg",
    genre_ids: [18, 80, 53],
    original_language: "en",
    original_title: "House of Gucci",
    poster_path: "/vHla3Ej2m53rNmvmYkzvennLrKn.jpg",
    vote_count: 930,
    video: false,
    vote_average: 6.7,
    title: "House of Gucci",
    overview:
      "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately…murder.",
    release_date: "2021-11-24",
    id: 644495,
    popularity: 1070.932,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    genre_ids: [28, 12, 14, 878],
    vote_count: 4186,
    original_language: "en",
    original_title: "Eternals",
    poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
    video: false,
    title: "Eternals",
    vote_average: 7.2,
    release_date: "2021-11-03",
    overview:
      "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
    id: 524434,
    popularity: 2946.623,
    media_type: "movie",
  },
  {
    vote_average: 7.2,
    overview:
      "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
    release_date: "2021-12-02",
    adult: false,
    backdrop_path: "/mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg",
    vote_count: 584,
    genre_ids: [80, 18, 53],
    video: false,
    original_language: "en",
    original_title: "Nightmare Alley",
    poster_path: "/680klE0dIreQQOyWKFgNnCAJtws.jpg",
    title: "Nightmare Alley",
    id: 597208,
    popularity: 491.277,
    media_type: "movie",
  },
  {
    original_language: "en",
    original_title: "The Ice Age Adventures of Buck Wild",
    poster_path: "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
    title: "The Ice Age Adventures of Buck Wild",
    video: false,
    vote_average: 7.3,
    overview:
      "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash \u0026 Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
    release_date: "2022-01-28",
    vote_count: 478,
    adult: false,
    backdrop_path: "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
    id: 774825,
    genre_ids: [16, 35, 12, 10751],
    popularity: 2975.037,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
    genre_ids: [14, 35, 12],
    original_language: "en",
    original_title: "Ghostbusters: Afterlife",
    poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    video: false,
    vote_average: 7.7,
    vote_count: 1912,
    overview:
      "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
    release_date: "2021-11-11",
    id: 425909,
    title: "Ghostbusters: Afterlife",
    popularity: 1925.571,
    media_type: "movie",
  },
  {
    poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    id: 568124,
    video: false,
    vote_average: 7.8,
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    release_date: "2021-11-24",
    adult: false,
    backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    vote_count: 4174,
    genre_ids: [16, 35, 10751, 14],
    title: "Encanto",
    original_language: "en",
    original_title: "Encanto",
    popularity: 3846.41,
    media_type: "movie",
  },
  {
    original_language: "en",
    original_title: "The 355",
    poster_path: "/xef9Ht77B2igqZv754HNdW8qZCk.jpg",
    video: false,
    vote_average: 6.2,
    id: 522016,
    overview:
      "A group of top female agents from American, British, Chinese, Columbian and German  government agencies are drawn together to try and stop an organization from acquiring a deadly weapon to send the world into chaos.",
    release_date: "2022-01-05",
    adult: false,
    backdrop_path: "/8pgKccb5PfE1kWB9qqiXJem83VC.jpg",
    vote_count: 191,
    genre_ids: [28, 53],
    title: "The 355",
    popularity: 2857.096,
    media_type: "movie",
  },
  {
    id: 624860,
    adult: false,
    backdrop_path: "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
    genre_ids: [878, 28, 12],
    title: "The Matrix Resurrections",
    original_language: "en",
    original_title: "The Matrix Resurrections",
    poster_path: "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    video: false,
    vote_average: 6.8,
    vote_count: 2849,
    overview:
      "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    release_date: "2021-12-16",
    popularity: 1593.031,
    media_type: "movie",
  },
  {
    original_language: "es",
    original_title: "A través de mi ventana",
    poster_path: "/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
    title: "Through My Window",
    video: false,
    vote_average: 8.0,
    overview:
      "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
    release_date: "2022-02-04",
    vote_count: 896,
    adult: false,
    backdrop_path: "/4rsomWxlqnHt3muGYK06auhOib6.jpg",
    id: 818647,
    genre_ids: [10749, 18],
    popularity: 2713.821,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/mruT954ve6P1zquaRs6XG0hA5k9.jpg",
    genre_ids: [53],
    id: 800510,
    original_language: "en",
    original_title: "Kimi",
    overview:
      "A tech worker with agoraphobia discovers recorded evidence of a violent crime, but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.",
    poster_path: "/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
    release_date: "2022-02-10",
    title: "Kimi",
    video: false,
    vote_average: 7.0,
    vote_count: 21,
    popularity: 80.466,
    media_type: "movie",
  },
  {
    genre_ids: [35, 10749, 10402],
    original_language: "en",
    original_title: "Marry Me",
    poster_path: "/ko1JVbGj4bT8IhCWqjBQ6ZtF2t.jpg",
    video: false,
    vote_average: 7.6,
    title: "Marry Me",
    overview:
      "Explores the possibilities of what might happen when a superstar marries an average Joe as a joke and discovers that perhaps there are no accidents.",
    release_date: "2022-02-09",
    vote_count: 20,
    adult: false,
    backdrop_path: "/ilty8eu65u6vCJpyMva9ele8Qtm.jpg",
    id: 615904,
    popularity: 541.818,
    media_type: "movie",
  },
  {
    video: false,
    vote_average: 7.9,
    overview:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    id: 438631,
    adult: false,
    backdrop_path: "/jtVl3nN5bJ4t7pgakLfGJmOrqZm.jpg",
    vote_count: 5895,
    genre_ids: [878, 12],
    title: "Dune",
    original_language: "en",
    original_title: "Dune",
    poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    release_date: "2021-09-15",
    popularity: 546.858,
    media_type: "movie",
  },
  {
    overview:
      "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    release_date: "2021-12-01",
    adult: false,
    backdrop_path: "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg",
    vote_count: 1777,
    genre_ids: [35, 16, 10751, 10402],
    id: 438695,
    original_language: "en",
    original_title: "Sing 2",
    poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    title: "Sing 2",
    video: false,
    vote_average: 8.2,
    popularity: 1784.885,
    media_type: "movie",
  },
  {
    genre_ids: [16, 10751, 14, 35, 12],
    original_language: "en",
    original_title: "Hotel Transylvania: Transformania",
    poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    video: false,
    vote_average: 7.6,
    vote_count: 1649,
    overview:
      "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
    release_date: "2022-01-13",
    title: "Hotel Transylvania: Transformania",
    id: 585083,
    adult: false,
    backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
    popularity: 2565.75,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
    genre_ids: [27, 28, 878],
    original_language: "en",
    original_title: "Resident Evil: Welcome to Raccoon City",
    poster_path: "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
    video: false,
    vote_average: 6.2,
    vote_count: 1164,
    overview:
      "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
    release_date: "2021-11-24",
    id: 460458,
    title: "Resident Evil: Welcome to Raccoon City",
    popularity: 1523.462,
    media_type: "movie",
  },
  {
    overview:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    release_date: "2022-03-01",
    adult: false,
    backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
    genre_ids: [28, 80, 18],
    vote_count: 0,
    id: 414906,
    original_title: "The Batman",
    poster_path: "/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg",
    video: false,
    title: "The Batman",
    vote_average: 0.0,
    original_language: "en",
    popularity: 225.977,
    media_type: "movie",
  },
  {
    overview:
      "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    release_date: "2021-09-29",
    adult: false,
    backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
    vote_count: 3420,
    genre_ids: [12, 28, 53],
    id: 370172,
    original_language: "en",
    original_title: "No Time to Die",
    poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    title: "No Time to Die",
    video: false,
    vote_average: 7.5,
    popularity: 517.889,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/vhR1r0yv7IReXuX9dVJa1wyURtj.jpg",
    genre_ids: [99, 80],
    vote_count: 184,
    original_language: "en",
    original_title: "The Tinder Swindler",
    poster_path: "/iLUSFjdavIf0SrP7ldoQ1xomQVC.jpg",
    video: false,
    title: "The Tinder Swindler",
    vote_average: 7.1,
    release_date: "2022-02-02",
    overview:
      "Posing as a wealthy, jet-setting diamond mogul, an Israeli conman wooed women online then conned them out of millions of dollars. Now some victims plan for payback.",
    id: 923632,
    popularity: 214.724,
    media_type: "movie",
  },
];

export default movies;
