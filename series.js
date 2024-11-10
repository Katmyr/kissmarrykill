let gens = [
    ["Harry Potter", "Harry Potter", "https://i.pinimg.com/originals/e5/c4/09/e5c409a8e8e78d1d9d04cefeb579569f.jpg"],
    ["Hermione", "Harry Potter", "https://i.pinimg.com/originals/8a/40/8e/8a408e59e004ab88572cb351bfdb48e4.png"],
    ["Ron", "Harry Potter", "https://i.pinimg.com/originals/e6/43/47/e6434750dcdbf4514805c8062a2a1e53.jpg"],
    ["Drago", "Harry Potter", "https://i.pinimg.com/originals/4b/ee/03/4bee03dee87ce06c36f759d334ece15f.png"],
    ["Cedric", "Harry Potter", "https://i.pinimg.com/originals/4d/ee/db/4deedbe558df842e3b84dcac22e87507.jpg"],
    ["Luna", "Harry Potter", "https://i.pinimg.com/originals/64/38/58/643858241a1d13f2d7b84318f83392f9.png"],
    ["Marty", "Retour Vers le Futur", "https://i.pinimg.com/originals/d7/72/1a/d7721aa0b521283c6fb79ab2d742bc1f.jpg"],
    ["Sheldon", "The Big Bang Theory", "https://i.pinimg.com/564x/f9/4f/48/f94f48bb4dd3341465a161db0c80bfd1.jpg"],
    ["Penny", "The Big Bang Theory", "https://i.pinimg.com/564x/a9/1b/14/a91b1421779953f9852842ab6b605dca.jpg"],
    ["Leonard", "The Big Bang Theory", "https://i.pinimg.com/564x/a5/15/71/a515710f2fb23bb37641c0e2b2410ddd.jpg"],
    ["Howard", "The Big Bang Theory", "https://i.pinimg.com/564x/15/5d/38/155d38a7ce01c22e77dd689eee1e532f.jpg"],
    ["Rajesh", "The Big Bang Theory", "https://i.pinimg.com/236x/d7/af/58/d7af58b43806a45bb03c7313a14162d8.jpg"],
    ["Amy", "The Big Bang Theory", "https://i.pinimg.com/736x/5c/cd/35/5ccd359631f7b5126182d74563426b4b.jpg"],
    ["Bernadette", "The Big Bang Theory", "https://i.pinimg.com/564x/33/9a/cc/339acc6a471163d8e84ded637ca145d0.jpg"],
    ["10th Doctor", "Doctor Who", "https://i.pinimg.com/564x/6e/f7/ac/6ef7acea823be296b643d72dd2a78afd.jpg"],
    ["11th Doctor", "Doctor Who", "https://i.pinimg.com/564x/39/91/eb/3991eb326d0d1f4991020fffeeb0d236.jpg"],
    ["Sherlock", "Sherlock", "https://i.pinimg.com/564x/71/59/93/7159933cfaf2c39e56418a80cd8d7f33.jpg"],
    ["Watson", "Sherlock", "https://i.pinimg.com/564x/de/68/2e/de682e6d2ebd5297028012ca353dedf4.jpg"],
    ["Moriarty", "Sherlock", "https://i.pinimg.com/564x/2e/b2/5f/2eb25f95af3403b2537d1c46bb5ff299.jpg"],
    ["Lucifer", "Lucifer", "https://i.pinimg.com/564x/b7/88/8f/b7888f6a5f308ff08b76261e76595613.jpg"],
    ["Klaus", "Umbrella Academy", "https://i.pinimg.com/564x/2c/8c/17/2c8c1793b311e879b2750778ad9986a1.jpg"],
    ["Five", "Umbrella Academy", "https://i.pinimg.com/564x/51/ee/2a/51ee2a5dc6ac8b9fc8a17d10b6a1b1ab.jpg"],
    ["Viktor", "Umbrella Academy", "https://i.pinimg.com/564x/24/bb/c4/24bbc49c1f731b46422d9cbd6847ec7b.jpg"],
    ["Luther", "Umbrella Academy", "https://i.pinimg.com/564x/9b/5e/3d/9b5e3dc6b280fd0bfb5bab30d650d2d7.jpg"],
    ["Ben", "Umbrella Academy", "https://i.pinimg.com/564x/43/34/30/433430fdff04686f6d394b8b786f1a6c.jpg"],
    ["Crowley", "Good Omens", "https://i.pinimg.com/564x/47/06/c4/4706c460f4c544962e48e747dbaaaf55.jpg"],
    ["Aziraphale", "Good Omens", "https://i.pinimg.com/564x/4f/34/73/4f3473f83318c9baa5b4ab64561bc01b.jpg"],
    ["Norbert", "Les Animaux Fantastiques", "https://i.pinimg.com/736x/d1/17/bc/d117bc3ad418506b66802d23717c593d.jpg"],
    ["Tina", "Les Animaux Fantastiques", "https://i.pinimg.com/564x/95/fa/dc/95fadc73baf33a031e349413a5dc0d69.jpg"],
    ["Queenie", "Les Animaux Fantastiques", "https://i.pinimg.com/564x/04/d1/b2/04d1b21b02c1f6d7baa214bf22882b58.jpg"],
    ["Rachel", "Friends", "https://i.pinimg.com/564x/26/f6/ef/26f6efba3dbfe342caa8a19c00efb263.jpg"],
    ["Monica", "Friends", "https://i.pinimg.com/564x/1f/69/ad/1f69ad7102b4873a43e0ace40b7eaadd.jpg"],
    ["Phoebe", "Friends", "https://i.pinimg.com/564x/b9/9c/72/b99c72c3e325156237887f6e6af6baf6.jpg"],
    ["Chandler", "Friends", "https://i.pinimg.com/564x/0d/94/50/0d945003c8dd9bdf69134f8c8acde7d0.jpg"],
    ["Ross", "Friends", "https://i.pinimg.com/564x/0e/c9/bf/0ec9bfb7fdaff6635402bdd0d221a1f6.jpg"],
    ["Joey", "Friends", "https://i.pinimg.com/564x/3f/07/1b/3f071be0031842c8a107f0b304aa1b78.jpg"],
    ["Daenerys", "Game of Thrones", "https://i.pinimg.com/564x/c9/22/0d/c9220d56e984573c5e30650e74e33907.jpg"],
    ["Jon Snow", "Game of Thrones", "https://i.pinimg.com/236x/10/53/99/105399f9ceb475175b16045d9778764e.jpg"],
    ["Robb Stark", "Game of Thrones", "https://i.pinimg.com/736x/25/c3/36/25c336c56ea29fcd51882cf2ea81aa80.jpg"],
    ["Sansa Stark", "Game of Thrones", "https://i.pinimg.com/564x/13/17/c4/1317c4275c69957360c994d89b0e616d.jpg"],
    ["Tokyo", "La Casa De Papel", "https://i.pinimg.com/564x/30/f7/32/30f7324cedbeef0f8f8149966f21eacc.jpg"],
    ["Rio", "La Casa De Papel", "https://i.pinimg.com/564x/c9/aa/ef/c9aaefb50a989ba737990873f4f5e007.jpg"],
    ["Luke", "Star Wars", "https://i.pinimg.com/564x/d4/3a/b9/d43ab91415c68f63266f2adc5e83572f.jpg"],
    ["Anakin", "Star Wars", "https://i.pinimg.com/564x/c8/7a/fe/c87afe46353fd4fdc03b9c5a6c159ea3.jpg"],
    ["Leia", "Star Wars", "https://i.pinimg.com/564x/ee/0c/9d/ee0c9d9d6eb80d8a850b86598506c5e6.jpg"],
    ["Padme", "Star Wars", "https://i.pinimg.com/564x/d3/93/1b/d3931b06aca5564dd22b771fd136fddd.jpg"],
    ["Rue", "Euphoria", "https://i.pinimg.com/564x/4b/a5/8a/4ba58abcaf6dc9ee06256ef47abfbfae.jpg"],
    ["Jules", "Euphoria", "https://i.pinimg.com/564x/a0/13/42/a01342c425ce39a6df532166fd3da814.jpg"],
    ["Nate", "Euphoria", "https://i.pinimg.com/564x/90/2e/f6/902ef628a099d4e098307c63f1445652.jpg"],
    ["Maddy", "Euphoria", "https://i.pinimg.com/564x/1e/60/2c/1e602c0659bcb5f2f447ee59066de1dc.jpg"],
    ["Kat", "Euphoria", "https://i.pinimg.com/564x/a7/97/f8/a797f802920a1898a73509a96d1d46a9.jpg"],
    ["Lexie", "Euphoria", "https://i.pinimg.com/564x/d0/86/95/d08695aa6b38de10f1e372ea47862578.jpg"],
    ["Fezco", "Euphoria", "https://i.pinimg.com/564x/b6/6d/fd/b66dfdf5ebb965c8bc7cff46c01ed4b3.jpg"],
    ["Elliot", "Euphoria", "https://i.pinimg.com/564x/ba/46/71/ba46716d1c7496aaa56e00e9edc36cbf.jpg"],
    ["Cal", "Euphoria", "https://i.pinimg.com/564x/5a/c2/08/5ac2084068b3a451d7bb0de6d2877495.jpg"],
    ["Cassie", "Euphoria", "https://i.pinimg.com/564x/47/31/96/47319622abd3b36af95a9d7d42b5f504.jpg"],
    ["Eleven", "Stranger Things", "https://i.pinimg.com/564x/84/4a/48/844a48fb3a01827ebaa3d0512a202079.jpg"],
    ["Steve", "Stranger Things", "https://i.pinimg.com/564x/69/67/7f/69677f0fd812519d542ff7d1c35195af.jpg"],
    ["Mike", "Stranger Things", "https://i.pinimg.com/564x/47/db/28/47db285472187f85807e772a3a92a582.jpg"],
    ["Dustin", "Stranger Things", "https://i.pinimg.com/564x/6b/22/70/6b2270501075bd37e133568094bf16ae.jpg"],
    ["Max", "Stranger Things", "https://i.pinimg.com/564x/cd/dc/46/cddc4623ad2d8230e269015e2deee731.jpg"],
    ["Nancy", "Stranger Things", "https://i.pinimg.com/564x/a4/3c/ee/a43ceee7c9f761985fe6acb670b0b844.jpg"],
    ["Robin", "Stranger Things", "https://i.pinimg.com/564x/68/d4/fb/68d4fb7728a66560d3222f36ed79c249.jpg"],
    ["Will", "Stranger Things", "https://i.pinimg.com/564x/45/57/e3/4557e32924b1a16748e6197f44c5573a.jpg"],
    ["Lucas", "Stranger Things", "https://i.pinimg.com/564x/06/48/d3/0648d38a2da5a196994acdb5101c996a.jpg"],
    ["Legolas", "Lord of the Rings", "https://i.pinimg.com/564x/56/cc/a3/56cca3ae2d42bf6352e00bd7b9c24e83.jpg"],
    ["Frodon", "Lord of the Rings", "https://i.pinimg.com/564x/e9/c0/85/e9c0853068e60cb73c33b2d283251c3e.jpg"],
    ["Joker", "Joker", "https://i.pinimg.com/564x/62/c3/cf/62c3cffb22a858cd3a3c1ae5f0c51f44.jpg"],
    ["Nairobi", "La Casa De Papel", "https://i.pinimg.com/564x/a2/c0/6d/a2c06de4937e55ca00134032031bc37e.jpg"],
    ["Spider-Man", "Marvel", "https://i.pinimg.com/564x/9d/1d/89/9d1d8921bf04af2df70af7f445ea9df2.jpg"],
    ["Spider-Man", "The Amazing Spider-Man", "https://i.pinimg.com/564x/a9/28/0d/a9280dd1b79624d79fa79146d2baee96.jpg"],
    ["Spider-Man", "Spider-Man", "https://i.pinimg.com/564x/b8/89/f0/b889f01394b2f26fa86819b7fee941a1.jpg"],
    ["Dr Strange", "Marvel", "https://i.pinimg.com/564x/c8/16/a7/c816a7208f6845dc42b7f5662f54adad.jpg"],
    ["Captain America", "Marvel", "https://i.pinimg.com/564x/36/01/b3/3601b349f9f4b95528d7a85104c5ff15.jpg"],
    ["Black Widow", "Marvel", "https://i.pinimg.com/564x/55/25/09/5525092e8443f71099518aa94e221260.jpg"],
    ["Gamora", "Les Gardiens de la Galaxie", "https://i.pinimg.com/736x/99/3f/83/993f8333916d742d9f4d59f2b13668f3.jpg"],
    ["Nebula", "Les Gardiens de la Galaxie", "https://i.pinimg.com/564x/7f/7b/1c/7f7b1c32e66cb95b825ae48f4649e9f7.jpg"],
    ["Black Panther", "Marvel", "https://i.pinimg.com/564x/cf/1c/ee/cf1cee383124c78f996a4008e19c6901.jpg"],
    ["Star-Lord", "Les Gardiens de la Galaxie", "https://i.pinimg.com/564x/8a/c8/17/8ac817e6d1208c23eedf590896dcfbcd.jpg"],
    ["Iron-Man", "Marvel", "https://i.pinimg.com/564x/c9/a0/4b/c9a04baa9ef3be6ebca4e20b76e4e7b3.jpg"],
    ["Thor", "Marvel", "https://i.pinimg.com/564x/a3/7c/f8/a37cf83fa7248799aae39819e26522ba.jpg"],
    ["Rose", "Titanic", "https://i.pinimg.com/564x/31/f7/89/31f789af9ddb3cc4eb80414e2f83d8ec.jpg"],
    ["Jack", "Titanic", "https://i.pinimg.com/564x/3b/b2/f7/3bb2f7a3d39611f2b71d49a1109afdaa.jpg"],
    ["Jack Sparrow", "Pirates des Caraïbes", "https://i.pinimg.com/564x/c5/6a/f2/c56af2ca4db9460d814ebb3bedad4dfa.jpg"],
    ["Elizabeth", "Pirates des Caraïbes", "https://i.pinimg.com/564x/6e/ab/55/6eab551827a660ae854cb27a3d2347ab.jpg"],
    ["William", "Pirates des Caraïbes", "https://i.pinimg.com/564x/9d/cf/ac/9dcfacd2f38bb566357fb04e5dc0e35b.jpg"],
    ["Newt", "Le Labyrinthe", "https://i.pinimg.com/564x/af/f1/5d/aff15d656e2f4c04bbb0c259577c5801.jpg"],
    ["Thomas", "Le Labyrinthe", "https://i.pinimg.com/564x/46/5e/2b/465e2b03ad0800d5f5a2c31c32a7685f.jpg"],
    ["Teresa", "Le Labyrinthe", "https://i.pinimg.com/564x/3c/f3/7d/3cf37d75bd13c6736d3bde17af40b7ef.jpg"],
    ["Negan", "The Walking Dead", "https://i.pinimg.com/564x/0d/38/b2/0d38b2bd575ff7986a4be5b86710b842.jpg"],
    ["Rick", "The Walking Dead", "https://i.pinimg.com/564x/05/c1/c6/05c1c6c94a3a6ef35635b59ff35a54c3.jpg"],
    ["Maeve", "Sex Education", "https://i.pinimg.com/564x/c1/47/81/c1478175c9921cc6b279b2af7172679c.jpg"],
    ["Otis", "Sex Education", "https://i.pinimg.com/564x/07/72/75/077275a87e1db1f94e2b3b39f5d79849.jpg"],
    ["Miss Perigrine", "Miss Perigrine", "https://i.pinimg.com/564x/f5/f6/91/f5f69194faf57a541a3765cb2ce130f5.jpg"],
    ["Jo March", "Little Women", "https://i.pinimg.com/564x/00/31/f6/0031f60b65fae9f314816b562bca2711.jpg"],
    ["Meg March", "Little Women", "https://i.pinimg.com/564x/f5/db/46/f5db46cbe6debb792edfd26f3ce5df77.jpg"],
    ["Amy March", "Little Women", "https://i.pinimg.com/564x/51/25/94/512594b123c57c8f96662bd19e5f3bc5.jpg"],
    ["Théodore Laurence", "Little Women", "https://i.pinimg.com/564x/22/21/84/222184674a6340c9b801c29b4acfd04a.jpg"],
    ["Ginny", "Harry Potter", "https://i.pinimg.com/564x/61/bd/3b/61bd3b077ea9b77fe1f9e1654dda3a79.jpg"],
    ["Forrest Gump",  "Forrest Gump", "https://i.pinimg.com/564x/6c/52/c1/6c52c1eb12252773905231cac79097a4.jpg"],
    ["Cat", "Victorious", "https://i.pinimg.com/564x/bc/af/82/bcaf8268468768f7a27cddcfa3705c5e.jpg"],
    ["Jade", "Victorious", "https://i.pinimg.com/564x/9f/52/ea/9f52ead97f036e265769ce3332ecacbb.jpg"],
    ["Beck", "Victorious", "https://i.pinimg.com/564x/4a/96/7d/4a967dfb4b3a5884d4f8b4a3cb768217.jpg"],
    ["Carly", "ICarly", "https://i.pinimg.com/564x/8b/09/a9/8b09a9f492adfa191863ab1ddbe02bf9.jpg"],
    ["Sam", "ICarly", "https://i.pinimg.com/564x/de/41/6f/de416fc10e2f2ad2affb8eca6e43e683.jpg"],
    ["Freddie", "ICarly", "https://i.pinimg.com/564x/66/15/fa/6615fa46a74baa8267a5a4269ecb576b.jpg"],
    ["Jessie", "Jessie", "https://i.pinimg.com/564x/c1/e7/9d/c1e79d0f2974ecf2625cf34c08a176ac.jpg"],
    ["Enola Holmes", "Enola Holmes", "https://i.pinimg.com/564x/70/8c/1b/708c1bed0fb2397e4bf81f8a4cc1afec.jpg"],
    ["Mr Bean", "Mr Bean", "https://i.pinimg.com/564x/72/f3/ab/72f3ab641148d227d799570de7547777.jpg"],
    ["Gi Hun", "Squid Game", "https://i.pinimg.com/564x/10/f9/a0/10f9a0723d648a20b19f4cec0abd5985.jpg"],
    ["Saebyeok", "Squid Game", "https://i.pinimg.com/564x/86/6a/15/866a155b8d988a9f494bede96ec9b215.jpg"],
    ["Ji Yeon", "Squid Game", "https://i.pinimg.com/564x/3f/7d/9b/3f7d9b480bf85a75157587473f375ae5.jpg"],
    ["Ali", "Squid Game", "https://i.pinimg.com/564x/63/d4/80/63d480b78a17af59824551a4f416b1fe.jpg"],
    ["Jun-Ho", "Squid Game", "https://i.pinimg.com/564x/f7/83/eb/f783ebe6fde1c4ca74c9822f366cda4c.jpg"],
    ["Edward", "Gotham", "https://i.pinimg.com/564x/b3/43/0a/b3430a67845165fab0ea851989845f36.jpg"],
    ["Oswald", "Gotham", "https://i.pinimg.com/564x/e7/82/eb/e782eb2a4e6590fd22e7ec2b1de9a78b.jpg"],
    ["Barbara", "Gotham", "https://i.pinimg.com/564x/e2/a3/08/e2a30887063379cbdbf7d617d64d12ab.jpg"],
    ["Tabatha", "Gotham", "https://i.pinimg.com/564x/e9/fa/d1/e9fad18899b25323d553020a9541e76f.jpg"],
    ["Thomas", "Downtown Abbey", "https://i.pinimg.com/564x/1c/3e/45/1c3e45724f72b88935b425422a4a46d9.jpg"],
    ["Nick", "Heartstopper", "https://i.pinimg.com/564x/40/7a/b9/407ab9bf0dfbabe95fd5b0faffcbdfe0.jpg"],
    ["Charlie", "Heartstopper", "https://i.pinimg.com/564x/09/72/ff/0972ff1295ababe5ebadb9edbd14d367.jpg"],
    ["Elle", "Heartstopper", "https://i.pinimg.com/564x/22/60/d0/2260d0e1cf957d9c2a967d8f335ac268.jpg"],
    ["Regina", "Mean Girls", "https://i.pinimg.com/736x/d3/8e/55/d38e5572729c5bbabb1a927773d8902b.jpg"],
    ["Cady", "Mean Girls", "https://i.pinimg.com/564x/f0/df/11/f0df1137139118d594c6a6b1d93d2e74.jpg"],
    ["Karen", "Mean Girls", "https://i.pinimg.com/564x/8b/00/7a/8b007a421020d9ba06b5b6568a7a8115.jpg"],
    ["Gretchen", "Mean Girls", "https://i.pinimg.com/564x/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"],
    ["Regina", "Mean Girls The Musical", "https://i.pinimg.com/1200x/08/c0/48/08c0485752e78bffb5872f67ef16df84.jpg"],
    ["Cady", "Mean Girls The Musical", "https://i.pinimg.com/736x/cf/dc/3b/cfdc3bac6fcfa806379c822f7d147aa0.jpg"],
    ["Karen", "Mean Girls The Musical", "https://i.pinimg.com/736x/aa/36/b0/aa36b0e04d62f263917939663e5a1fb0.jpg"],
    ["Gretchen", "Mean Girls The Musical", "https://i.pinimg.com/736x/2e/59/aa/2e59aa6723b4e64b183578b17818b320.jpg"],
    ["Edward", "Twilight", "https://i.pinimg.com/564x/67/0f/f4/670ff4009d953a168fc621c63d13b687.jpg"],
    ["Jacob", "Twilight", "https://i.pinimg.com/564x/c4/40/c6/c440c6fb79dffa8415b01fc5a4915233.jpg"],
    ["Bella", "Twilight", "https://i.pinimg.com/564x/6a/17/1b/6a171b8e6e39a17ba489f73aeeed560f.jpg"],
    ["Luffy", "One Piece", "https://i.pinimg.com/750x/3f/52/9c/3f529c3831bdf10a3e1504f4b1193556.jpg"],
    ["Zoro", "One Piece", "https://i.pinimg.com/750x/96/f4/e9/96f4e9afb3e5aadd7c423a5ecff39579.jpg"],
    ["Nami", "One Piece", "https://i.pinimg.com/750x/80/cc/44/80cc44480ad7cfd2cb1466eaf4447a29.jpg"],
    ["Usopp", "One Piece", "https://i.pinimg.com/564x/45/1f/cc/451fccc3541318ed80d4c08d61e062e1.jpg"],
    ["Sanji", "One Piece", "https://i.pinimg.com/564x/f6/ea/a8/f6eaa87ae3e377410b2f7c9fe9ff0edb.jpg"],
    ["Shanks", "One Piece", "https://i.pinimg.com/564x/4d/98/13/4d98130245182d56b654f33a92ba0b84.jpg"],
    ["Baggy", "One Piece", "https://i.pinimg.com/750x/2a/80/ca/2a80ca86b31594422642abe31103e1f4.jpg"],
    ["Barbie", "Barbie", "https://i.pinimg.com/564x/45/7f/c6/457fc6924ab64ffa5ec51425000147b4.jpg"],
    ["Ken", "Barbie", "https://i.pinimg.com/564x/4e/70/aa/4e70aa4952cc78d23bccdab4dbd0e3f2.jpg"],
    ["Oppenheimer", "Oppenheimer", "https://i.pinimg.com/564x/8f/0b/26/8f0b263ec7b9aa425085804313a2e759.jpg"],
    ["Rachel", "Glee", "https://i.pinimg.com/564x/e0/b9/11/e0b911f72571a9d58211e16325ce273b.jpg"],
    ["Santana", "Glee", "https://i.pinimg.com/564x/46/6e/af/466eaf0214c4a6b2ea4eb102c314f555.jpg"],
    ["Kurt", "Glee", "https://i.pinimg.com/564x/71/fc/b6/71fcb654eab852178d694bbc747b4ba2.jpg"],
    ["Blaine", "Glee", "https://i.pinimg.com/564x/78/36/4d/78364dc33e5650a92f0a8bf7717926aa.jpg"],
    ["Brittany", "Glee", "https://i.pinimg.com/564x/e7/64/e3/e764e32af2cf7dd860f68e64c283ff54.jpg"],
    ["Mercedes", "Glee", "https://i.pinimg.com/564x/39/a5/2c/39a52c8c9dd5d8a64576fe21443239c0.jpg"],
    ["Quinn", "Glee", "https://i.pinimg.com/736x/b4/b5/9d/b4b59d2cd056f7e0ea6985e86306b022.jpg"],
    ["Sue", "Glee", "https://i.pinimg.com/564x/66/ac/46/66ac46f59170bc3dee31f1389174ecf7.jpg"],
    ["Indiana Jones", "Indiana Jones", "https://i.pinimg.com/564x/7b/ef/db/7befdb5904516de4d7d82d3c4f74938f.jpg"],
    ["Emmy", "Brooklyn 99", "https://i.pinimg.com/564x/61/f6/61/61f661c9b2941f0c0f115220f8cf5623.jpg"],
    ["Jake", "Brooklyn 99", "https://i.pinimg.com/564x/51/07/03/510703fc4870179c1311a01a642187a1.jpg"],
    ["Rosa", "Brooklyn 99", "https://i.pinimg.com/564x/82/77/16/827716bac369f914cadaf7560c0b29b6.jpg"],
    ["Jeff", "Community", "https://i.pinimg.com/564x/b9/b9/81/b9b9812abe61f1e5da92aaa807d66fe9.jpg"],
    ["Britta", "Community", "https://i.pinimg.com/564x/84/cb/c6/84cbc66bbbd2ff8652be8aad4a602e21.jpg"],
    ["Annie", "Community", "https://i.pinimg.com/564x/68/0e/b8/680eb8686d550c06630730b4aa5a7aeb.jpg"],
    ["Troy", "Community", "https://i.pinimg.com/564x/8b/9a/ec/8b9aec145bf635d22731e6421ecbb6ad.jpg"],
    ["Abed", "Community", "https://i.pinimg.com/564x/48/f0/48/48f04822aa9d6a23b19fb8128768c0e8.jpg"],
    ["Devi", "Never have I ever", "https://i.pinimg.com/564x/a0/89/cc/a089cc69f69daf4331141500cfc69b55.jpg"],
    ["Paxton", "Never have I ever", "https://i.pinimg.com/564x/a4/6f/8c/a46f8c4c76d0d58798f0a3b5bdb3ad96.jpg"],
    ["Ben", "Never have I ever", "https://i.pinimg.com/564x/db/0e/c4/db0ec487cca77acc868d3f2aa915cddd.jpg"],
    ["Eleanore", "Never have I ever", "https://i.pinimg.com/564x/4e/c9/5b/4ec95bb1bcddcd0f7b01bfd4d77040ca.jpg"],
    ["Fabiola", "Never have I ever", "https://i.pinimg.com/564x/54/35/04/54350472383ec3cb2cb42365b8bd9b4b.jpg"],
    ["Kamala", "Never have I ever", "https://i.pinimg.com/564x/3d/6f/d6/3d6fd69b2e441d81b0c7d144302433c6.jpg"],
    ["Ethan", "Never have I ever", "https://i.pinimg.com/564x/51/4e/5c/514e5cdf175110a24a2101ff2aa9c7f8.jpg"],
    ["Ariel", "La Petite Sirène", "https://i.pinimg.com/564x/ff/8b/13/ff8b13be92fde41abbdcd9dd1e41b069.jpg"],
    ["Eric", "La Petite Sirène", "https://i.pinimg.com/564x/e2/fd/4d/e2fd4d2f5b952f5ff9500ae4551d25ec.jpg"],
    ["Vanessa", "La Petite Sirène", "https://i.pinimg.com/564x/88/f6/c5/88f6c513e6e591072cdb9890faf42067.jpg"],
    ["Gloria", "Modern Family", "https://i.pinimg.com/564x/1f/aa/04/1faa04f415192cdb454727b7ced64137.jpg"],
    ["Claire", "Modern Family", "https://i.pinimg.com/564x/78/83/d3/7883d36eb1aeb0edb83493e832bac026.jpg"],
    ["Haley", "Modern Family", "https://i.pinimg.com/564x/59/39/e7/5939e70fd350120fe7d667ff394422db.jpg"],
    ["Alex", "Modern Family", "https://i.pinimg.com/564x/f3/80/ce/f380ce57c2c3a46cad25b06b2525a230.jpg"],
    ["Eleanor", "The Good Place", "https://i.pinimg.com/564x/37/22/bc/3722bcc4962ee2efad803fe45320ab85.jpg"],
    ["Chidi", "The Good Place", "https://i.pinimg.com/736x/9c/64/6c/9c646c8a156712b248af2edb985f9404.jpg"],
    ["Tahani", "The Good Place", "https://i.pinimg.com/736x/56/49/df/5649df6463006bad93ed082a3b94f3d5.jpg"],
    ["Jason", "The Good Place", "https://i.pinimg.com/564x/17/93/fc/1793fc4d86b208cdda817e0f160ef003.jpg"],
    ["Michael", "The Office", "https://i.pinimg.com/564x/aa/47/da/aa47da623a05e888f8b5df6e1e234d5e.jpg"],
    ["Jim", "The Office", "https://i.pinimg.com/564x/c4/ed/49/c4ed49fb578856121d07652300b089dd.jpg"],
    ["Pam", "The Office", "https://i.pinimg.com/564x/50/3e/83/503e837f074b797a396350ca9426e2d1.jpg"],
    ["Mercredi Addams", "Mercredi", "https://i.pinimg.com/564x/8d/29/91/8d29916b28b577b1b1fb6610cc4185aa.jpg"],
    ["Morticia Addams", "Mercredi", "https://i.pinimg.com/564x/fe/a7/df/fea7df71b8de0f778a168d565afee346.jpg"],
    ["Gomez Addams", "Mercredi", "https://i.pinimg.com/564x/2d/c9/a1/2dc9a15985e712ecf51cf6959290b362.jpg"],
    ["Tris", "Divergente", "https://i.pinimg.com/564x/43/8b/90/438b902b8f1db00816542cd9a36725e3.jpg"],
    ["Quatre", "Divergente", "https://i.pinimg.com/564x/55/63/19/5563196d2f556cb1ff9ac21dc9b65b7b.jpg"],
    ["Cher", "Clueless", "https://i.pinimg.com/564x/32/fb/98/32fb98f8da305a1cbc35fd4c09fc6a9b.jpg"],
    ["Dionne", "Clueless", "https://i.pinimg.com/564x/c2/2e/e8/c22ee8770ebcc2ba6fb9337d71d15338.jpg"],
    ["Josh", "Clueless", "https://i.pinimg.com/736x/b4/7d/f1/b47df105ba66ea2aa00b043f878822c9.jpg"],
    ["Tai", "Clueless", "https://i.pinimg.com/736x/51/7f/7c/517f7c59e6edb5320ff816290abe730a.jpg"],
    ["Mal", "Descendants", "https://i.pinimg.com/564x/de/1f/42/de1f428bf5efda50e4bf6ad954091949.jpg"],
    ["Evie", "Descendants", "https://i.pinimg.com/736x/c0/b5/ad/c0b5ad5e9fc6a9f07524752902ee549a.jpg"],
    ["Ben", "Descendants", "https://i.pinimg.com/564x/5d/e0/20/5de020e3599bae1a060aa62dd673bf6e.jpg"],
    ["Audrey", "Descendants", "https://i.pinimg.com/564x/cc/0e/5c/cc0e5c28888cdea03cfc8511eb201b2a.jpg"],
    ["Uma", "Descendants", "https://i.pinimg.com/736x/6c/6f/eb/6c6feb4673750023134bb2e49c19f2f6.jpg"],
    ["Addison", "Zombies", "https://i.pinimg.com/564x/ef/ee/1f/efee1faaf74b8af82850164407a408e3.jpg"],
    ["Zed", "Zombies", "https://i.pinimg.com/564x/07/79/6e/07796e654b96cf3359338f5e200389f2.jpg"],
    ["Aria", "Pretty Little Liars", "https://i.pinimg.com/736x/a8/e7/7b/a8e77b7f0c8c1c2327be52a824b37ae2.jpg"],
    ["Hanna", "Pretty Little Liars", "https://i.pinimg.com/736x/68/25/9e/68259e4eaea6f10e26b4d0958a261bed.jpg"],
    ["Emily", "Pretty Little Liars", "https://i.pinimg.com/564x/02/d5/85/02d5858f5b6fddec5a4bfcd2cdc1bceb.jpg"],
    ["Spencer", "Pretty Little Liars", "https://i.pinimg.com/564x/4f/f8/30/4ff830925f0ebd9a4eb37b8a36230624.jpg"],
    ["Alison", "Pretty Little Liars", "https://i.pinimg.com/564x/0f/c1/86/0fc18655ce71a1f604980b16636ba39b.jpg"],
    ["Mike", "Suits", "https://i.pinimg.com/736x/82/69/42/82694227ab176ebd2da7ddf62aaae220.jpg"],
    ["Harvey", "Suits", "https://i.pinimg.com/736x/1f/8b/03/1f8b036d539dee9bf3c4c5fd0778b7e6.jpg"],
    ["Rachel", "Suits", "https://i.pinimg.com/564x/e9/04/23/e90423c420a2245036e1e0108dcfc3eb.jpg"],
    ["Donna", "Suits", "https://i.pinimg.com/564x/93/5d/a8/935da86f3c5713422bf170daa8af60be.jpg"],
    ["Jessica", "Suits", "https://i.pinimg.com/736x/4b/a5/ad/4ba5ad1e3eb4af4e9ea9c989c977ee24.jpg"],
    ["Miranda", "Le Diable s'habille en Prada", "https://i.pinimg.com/564x/ec/0e/d6/ec0ed682f6e32643f730ca18a2a5de44.jpg"],
    ["Andrea", "Le Diable s'habille en Prada", "https://i.pinimg.com/564x/4f/3b/a0/4f3ba09bdb5efbc9dacee6346bcc7fe8.jpg"],
    ["Emily", "Le Diable s'habille en Prada", "https://i.pinimg.com/564x/ba/58/e0/ba58e092f57a9d51e503c59377ba77d2.jpg"],
    ["Joseph Cooper", "Interstellar", "https://i.pinimg.com/564x/a5/8c/88/a58c88673685ff8cb6abd107088782c7.jpg"],
    ["Amelia Brand", "Interstellar", "https://i.pinimg.com/564x/a8/bc/93/a8bc933bbe9311d190a9ee07f6a3172e.jpg"],
    ["Blair", "Gossip Girl", "https://i.pinimg.com/736x/dd/98/ab/dd98ab8f3660f12b5ba20c5a9b925c16.jpg"],
    ["Serena", "Gossip Girl", "https://i.pinimg.com/736x/b8/70/03/b87003802e1a75ee6d753448f873384b.jpg"],
    ["Nate", "Gossip Girl", "https://i.pinimg.com/564x/a8/9b/56/a89b5623cbaa6ab67e476b6271fce3a0.jpg"],
    ["Chuck", "Gossip Girl", "https://i.pinimg.com/564x/e7/2b/16/e72b16a1d2808b72d3e91bf88755a6a5.jpg"],
    ["Georgina", "Gossip Girl", "https://i.pinimg.com/736x/f9/bf/d2/f9bfd26261970ef3d796f9d54c3a58b1.jpg"],
    ["Meredith", "Grey's Anatomy", "https://i.pinimg.com/564x/67/41/06/674106303b91b8fa147bf7648ddccd92.jpg"],
    ["Derek", "Grey's Anatomy", "https://i.pinimg.com/564x/5b/49/77/5b4977374507c91e568c075a9d8b193a.jpg"],
    ["Cristina", "Grey's Anatomy", "https://i.pinimg.com/564x/cc/b4/86/ccb486d816835743e1439c8d795021b6.jpg"],
    ["Jackson", "Grey's Anatomy", "https://i.pinimg.com/564x/db/dc/f6/dbdcf6e7336a656a9914f7ed63d3383b.jpg"],
    ["Simon", "Bridgerton", "https://i.pinimg.com/564x/3d/5a/26/3d5a2611190d354a7d8b9c8ae99fe07a.jpg"],
    ["Daphne", "Bridgerton", "https://i.pinimg.com/736x/8f/cf/28/8fcf28d0079ef7ed3b766df3d9075344.jpg"],
    ["Benedict", "Bridgerton", "https://i.pinimg.com/564x/d0/59/63/d05963cc66089f0aed55a28f8b27bfff.jpg"],
    ["Kate", "Bridgerton", "https://i.pinimg.com/564x/a3/ac/21/a3ac2180636b4f2566d42838c692279e.jpg"],
    ["Francesca", "Bridgerton", "https://i.pinimg.com/736x/2e/b0/f8/2eb0f8102a0c2fb602b2e55183a2fa79.jpg"],
    ["Penelope", "Bridgerton", "https://i.pinimg.com/736x/b6/31/05/b631050eee0c859b2707ff147f066e3f.jpg"],
    ["Anthony", "Bridgerton", "https://i.pinimg.com/736x/f0/a3/6d/f0a36de0724c871f714d4121763f8c53.jpg"],
    ["Colin", "Bridgerton", "https://i.pinimg.com/736x/87/1b/b7/871bb70b491b94c0e3d889b1e0a8d54c.jpg"],
    ["Reine Charlotte", "Bridgerton", "https://i.pinimg.com/736x/b6/1c/eb/b61cebb4c25375651e57bf4187a04895.jpg"],
    ["Roi George", "Bridgerton", "https://i.pinimg.com/736x/c4/b0/4a/c4b04a70f25939c1b40958e3ac447695.jpg"],
    ["Elena", "The Vampire Diaries", "https://i.pinimg.com/564x/19/f6/2b/19f62bcfd49da6cc3cd20190d2edd4b7.jpg"],
    ["Stefan", "The Vampire Diaries", "https://i.pinimg.com/564x/70/7a/c2/707ac2aeda849111e433e139fa91ed49.jpg"],
    ["Damon", "The Vampire Diaries", "https://i.pinimg.com/736x/70/74/81/70748136392678847f085ac64997a18d.jpg"],
    ["Violetta", "Violetta", "https://i.pinimg.com/564x/4c/b9/34/4cb9341f08be1c8a4bfaa1f3d475c6ef.jpg"],
    ["Leon", "Violetta", "https://i.pinimg.com/564x/ab/4b/35/ab4b354cdb21d2704b5cfef4e2e4a40a.jpg"],
    ["Diego", "Violetta", "https://i.pinimg.com/564x/fe/b3/3e/feb33e434f0d50f72384ecfffc353d37.jpg"],
    ["Ludmila", "Violetta", "https://i.pinimg.com/564x/1c/56/83/1c568362c2187b4742853b64e49b5742.jpg"],
    ["Daisy", "Chica Vampiro", "https://i.pinimg.com/564x/47/43/f6/4743f645fedbd6a5e7e6cc08cb811dd5.jpg"],
    ["Mirco", "Chica Vampiro", "https://i.pinimg.com/736x/a0/ab/6d/a0ab6dbe7fa281e829396b5b8d962b0b.jpg"],
    ["William Thacker", "Coup de Foudre à Notting Hill", "https://i.pinimg.com/736x/d6/ec/31/d6ec31a14a411a5e78c29cb6554ae0af.jpg"],
    ["Anna Scott", "Coup de Foudre à Notting Hill", "https://i.pinimg.com/736x/48/ac/3d/48ac3d1366109ec895f1ce444958843d.jpg"],
    ["David", "Love Actually", "https://i.pinimg.com/564x/69/0e/8b/690e8bb76ec3222c24798de2165381c7.jpg"],
    ["Karen", "Love Actually", "https://i.pinimg.com/564x/df/88/98/df889848acae4a6b349a772d4ef02ab3.jpg"],
    ["Jamie", "Love Actually", "https://i.pinimg.com/564x/8b/44/fa/8b44fa80744be2a00b3e172032c0abe0.jpg"],
    ["Daniel", "Love Actually", "https://i.pinimg.com/564x/d9/01/83/d901838233564abc029a3157209292b2.jpg"],
    ["Juliet", "Love Actually", "https://i.pinimg.com/564x/15/36/fb/1536fbb2d1bc4f08e74b74955b8e38b6.jpg"],
    ["Harry", "Love Actually", "https://i.pinimg.com/564x/2f/a9/4e/2fa94e54de6c6bc5cbd14d92205f97cf.jpg"],
]

// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_series`;


gens = gens.map(person => ({
    name: person[0],
    origin: person[1],
    image: person[2],
    kiss: 0,
    marry: 0,
    kill: 0
}));


console.log(gens); // Affiche la nouvelle structure avec les compteurs


function generate() {
    let person1 = gens[Math.floor(Math.random() * gens.length)];
    let person2 = gens[Math.floor(Math.random() * gens.length)];
    let person3 = gens[Math.floor(Math.random() * gens.length)];

    if (person1.image == person2.image || person1.image == person3.image || person2.image == person3.image) {
        setTimeout(() => {
            generate();
        }, 100);
    } else {
        document.getElementById('person1-text').innerText = person1.name;
        document.getElementById('person1-desc').innerText = person1.origin;
        document.getElementById('person1-image').src = person1.image;

        document.getElementById('person2-text').innerText = person2.name;
        document.getElementById('person2-desc').innerText = person2.origin;
        document.getElementById('person2-image').src = person2.image;


        document.getElementById('person3-text').innerText = person3.name;
        document.getElementById('person3-desc').innerText = person3.origin;
        document.getElementById('person3-image').src = person3.image;

    }

    document.querySelectorAll('.selected-icon').forEach(icon => icon.remove());
}

generate()
loadCounters()

// Initialiser les compteurs ou charger depuis le localStorage
function loadCounters() {
    const data = localStorage.getItem(localStorageKey);
    if (data) {
        const counters = JSON.parse(data);
        // Mettre à jour gens avec les données du localStorage
        gens = gens.map(person => ({
            ...person,
            kiss: counters[person.image]?.kiss || 0,
            marry: counters[person.image]?.marry || 0,
            kill: counters[person.image]?.kill || 0,
        }));
        //console.log("Compteurs chargés depuis localStorage :", counters);
    }
}



// Charger les compteurs depuis localStorage
// Fonction pour charger les compteurs depuis localStorage
function loadCountersFromLocalStorage() {
    const data = localStorage.getItem(localStorageKey);
    
    if (data) {
        try {
            const counters = JSON.parse(data);
            //console.log("Compteurs chargés depuis localStorage:", counters);
            // Assurez-vous que counters est bien un objet
            if (typeof counters === 'object' && counters !== null) {
                return counters;
            } else {
                console.error("Les données dans localStorage ne sont pas un objet valide.");
                return {}; // Retourne un objet vide en cas d'erreur
            }
        } catch (error) {
            console.error("Erreur lors du parsing des données depuis localStorage:", error);
            return {}; // Retourne un objet vide si une erreur se produit
        }
    } else {
        console.log("Aucune donnée trouvée dans localStorage.");
        return {}; // Retourne un objet vide si aucune donnée n'est trouvée
    }
}

// Fonction pour trier les personnages selon l'action
function getSortedRankings(action, counters) {
    console.log("Données des compteurs pour le tri:", counters);
    
    // Vérification que 'counters' est un objet
    if (typeof counters !== 'object' || counters === null) {
        console.error("Les données des compteurs sont invalides.");
        return []; // Retourne un tableau vide si les données sont invalides
    }

    return Object.entries(counters) // Convertir l'objet en tableau [clé, valeur]
        .map(([image, scores]) => ({
            image,
            name: scores.name,  // Récupérer le nom
            origin: scores.origin,  // Récupérer l'origine
            [action]: scores[action],  // Récupérer le score de l'action
        }))
        .sort((a, b) => b[action] - a[action]);  // Trier par score décroissant
}

// Test pour charger les compteurs et trier par action
const counters = loadCountersFromLocalStorage();
const sortedByKiss = getSortedRankings("kiss", counters);
//console.log("Classement par Kiss:", sortedByKiss);


// Créer le classement pour chaque action
// Fonction pour trier les classements selon l'action (kiss, marry, kill)
function getSortedRankings(action, counters) {
    return Object.entries(counters)
        .map(([image, scores]) => ({
            image,
            name: scores.name,
            origin: scores.origin,
            [action]: scores[action],
        }))
        .sort((a, b) => b[action] - a[action]); // Tri des personnages par action (du plus grand au plus petit)
}

let currentPodiumIndex = 0; // 0 = Kiss, 1 = Marry, 2 = Kill

// Tableau des classements pour chaque action
let podiums = [];

// Fonction pour afficher le podium actuel

// Fonction de navigation entre les podiums
function changePodium(direction) {
    // Met à jour l'index du podium, avec un cycle (0, 1, 2)
    currentPodiumIndex = (currentPodiumIndex + direction + podiums.length) % podiums.length;
    showCurrentPodium();
}


// Afficher les podiums des classements dans l'HTML
function displayRankings() {
    const counters = loadCountersFromLocalStorage();

    // Stocker chaque classement dans un tableau de podiums
    podiums = [
        getSortedRankings('kiss', counters),
        getSortedRankings('marry', counters),
        getSortedRankings('kill', counters)
    ];

    showCurrentPodium(); // Affiche le premier podium par défaut (kiss)
}



// Mettre à jour les podiums avec les informations triées
function updatePodiumDisplay(podium, action) {
    // Met à jour le titre du podium en fonction de l'action
    const podiumTitle = document.getElementById("podium-title");
    const actionTitles = {
        kiss: "Top 3 des plus embrassés 💋",
        marry: "Top 3 des plus mariés 💍",
        kill: "Top 3 des plus tués 🔪"
    };
    podiumTitle.textContent = actionTitles[action];

    // Vérifie que le podium contient bien un top 3
    if (podium.length >= 3) {
        // Met à jour chaque podium avec les images, noms, origines, et scores selon l'action sélectionnée
        document.getElementById("img-1").src = podium[1].image;
        document.getElementById("name-1").textContent = podium[1].name;
        document.getElementById("source-1").textContent = podium[1].origin;
        document.getElementById("score-1").textContent = `${podium[1][action] || 0} fois`;

        document.getElementById("img-2").src = podium[0].image;
        document.getElementById("name-2").textContent = podium[0].name;
        document.getElementById("source-2").textContent = podium[0].origin;
        document.getElementById("score-2").textContent = `${podium[0][action] || 0} fois`;

        document.getElementById("img-3").src = podium[2].image;
        document.getElementById("name-3").textContent = podium[2].name;
        document.getElementById("source-3").textContent = podium[2].origin;
        document.getElementById("score-3").textContent = `${podium[2][action] || 0} fois`;
    }
}

function showCurrentPodium() {
    // Récupère les podiums pour chaque action à partir du localStorage
    const podiums = {
        kiss: getSortedRankings('kiss', loadCountersFromLocalStorage()),
        marry: getSortedRankings('marry', loadCountersFromLocalStorage()),
        kill: getSortedRankings('kill', loadCountersFromLocalStorage())
    };

    // Récupère l'action courante basée sur l'index
    const actions = ["kiss", "marry", "kill"];
    const action = actions[currentPodiumIndex];

    // Appelle la fonction d'affichage avec le podium correspondant
    updatePodiumDisplay(podiums[action], action);
}



// Appeler cette fonction pour afficher les podiums à chaque mise à jour
displayRankings();

// Sauvegarder les compteurs dans localStorage
function saveCounters() {
    const countersData = gens.reduce((acc, person) => {
        acc[person.image] = {
            name: person.name,
            origin: person.origin,
            kiss: person.kiss,
            marry: person.marry,
            kill: person.kill
        };
        return acc;
    }, {});
    localStorage.setItem(localStorageKey, JSON.stringify(countersData));
    //console.log("Compteurs sauvegardés dans le localStorage :", countersData);
}


//########################
function updateCountersByImage() {
    document.querySelectorAll('.person-card').forEach((card) => {
        const imageSrc = card.querySelector('img').src; // Utiliser l'image pour identifier le personnage
        const selectedIcon = card.querySelector('.selected-icon');

        if (selectedIcon) {
            const iconContent = selectedIcon.textContent.trim(); // Récupère l'icône sélectionnée

            // Trouver le personnage correspondant par l'image
            const person = gens.find(p => p.image === imageSrc);

            if (person) {
                // Incrémente le compteur correspondant en fonction de l'icône choisie
                if (iconContent === '💋') {
                    person.kiss++;
                } else if (iconContent === '💍') {
                    person.marry++;
                } else if (iconContent === '🔪') {
                    person.kill++;
                }
            }
        }
    });
    // Sauvegarder les compteurs dans le localStorage après chaque mise à jour
    saveCounters();
}



function validateChoices() {
    let allChosen = true; // Vérifie si tous les personnages ont une icône sélectionnée
    let chosenIcons = []; // Liste pour stocker les icônes choisies

    // Variable pour savoir si on doit afficher l'alerte ou non
    let errorOccurred = false;

    // Parcours tous les personnages
    document.querySelectorAll('.person-card').forEach((card, index) => {
        const selectedIcon = card.querySelector('.selected-icon'); // Trouve l'icône sélectionnée
        const personId = card.dataset.id; // Utilise l'ID unique du personnage
        
        if (selectedIcon) {
            const iconContent = selectedIcon.textContent.trim(); // Récupère l'emoji

            // Vérifie si cette icône a déjà été choisie
            if (chosenIcons.includes(iconContent)) {
                if (!errorOccurred) {
                    alert("Erreur : Vous avez sélectionné plusieurs fois la même icône.");
                    errorOccurred = true; // Marque qu'une erreur a eu lieu pour éviter d'afficher plusieurs alertes
                }
                return; // Arrête l'exécution ici si un doublon est détecté
            } else {
                chosenIcons.push(iconContent); // Ajoute l'icône choisie à la liste
            }
        } else {
            allChosen = false; // Si un personnage n'a pas de choix
        }
    });

    // Vérifie si tous les personnages ont une action
    if (!allChosen) {
        if (!errorOccurred) {
            alert("Erreur : Tous les personnages doivent avoir une action.");
            errorOccurred = true; // Marque qu'une erreur a eu lieu
        }
        return; // Arrête l'exécution ici si un personnage n'a pas de choix
    }

    // Si tout est bon, on affiche un message de validation
    if (!errorOccurred) {
        console.log("Validation réussie !");
        console.log("Icônes choisies :", chosenIcons);
        // Incrémenter les compteurs en fonction des icônes choisies et de l'index
       // Met à jour les compteurs en fonction des icônes choisies
       // Met à jour les compteurs en fonction des icônes choisies
        // Mise à jour des compteurs après validation
        updateCountersByImage();


        // Afficher les compteurs mis à jour dans la console
        console.log(gens);
        saveCounters(gens.reduce((acc, p) => {
            acc[p.image] = { marry: p.marry, kiss: p.kiss, kill: p.kill };
            return acc;
        }, {})); 
        displayRankings(); // Sauvegarde dans le localStorage
        generate();
        // Ajoute ici toute action supplémentaire après la validation
    }
}
