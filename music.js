let gens= [
["Beyoncé", "https://i.pinimg.com/236x/02/8b/c1/028bc1d8e3c643ca34c26558d9de0a57.jpg"],
["Ariana Grande", "https://i.pinimg.com/236x/fc/6e/bd/fc6ebdd16255fde28d68bc4438bd7d83.jpg"],
["Taylor Swift", "https://i.pinimg.com/564x/22/87/1a/22871a333151e155def4176a18d20020.jpg"],
["Selena Gomez", "https://i.pinimg.com/564x/77/83/37/778337ce14081a95b04a4000beb05c05.jpg"],
["Katy Perry", "https://i.pinimg.com/564x/a9/b0/f0/a9b0f0d67ac87d94c8f4c6e989cd9add.jpg"],
["Sabrina Carpenter", "https://i.pinimg.com/736x/61/bd/1a/61bd1ad3b7bc8d15e15eca74c448ede5.jpg"],
["Olivia Rodrigo", "https://i.pinimg.com/236x/c6/b6/63/c6b663d8176165856dcd022a104c346c.jpg"],
["Dua Lipa", "https://i.pinimg.com/564x/a8/d4/7a/a8d47a63cdfc0b2fc2acc80261014032.jpg"],
["Doja Cat", "https://i.pinimg.com/564x/f2/d7/0c/f2d70cf77b0c0c3bc77a51667a4f5763.jpg"],
["The Weeknd", "https://i.pinimg.com/236x/7f/5f/aa/7f5faa69bbb4823627b81ea7f7dcce43.jpg"],
["Harry Styles", "https://i.pinimg.com/236x/b4/38/f8/b438f8acf276d02c3ab0eefc458cb4e1.jpg"],
["Queen", "https://i.pinimg.com/236x/dc/12/97/dc1297a9eb2090395eb7423c15a0a229.jpg"],
["Coldplay", "https://i.pinimg.com/564x/df/2d/44/df2d4420767e36f53385463ec64f9cdf.jpg"],
["BTS", "https://i.pinimg.com/236x/55/ad/a7/55ada7879c7d9ff01cb102a15349b67a.jpg"],
["Blackpink", "https://i.pinimg.com/564x/8c/b1/e1/8cb1e1e1e17882bad71e778829b38a3f.jpg"],
["The Rolling Stones", "https://i.pinimg.com/236x/f1/40/48/f140487f919d98480e2a18691402e062.jpg"],
["Red Hot Chili Peppers", "https://i.pinimg.com/236x/48/bc/d9/48bcd97fef61de5365975cca16f3c6db.jpg"],
["Madison Beer", "https://i.pinimg.com/236x/00/e4/71/00e47197db10f3c19231fa582f413d4a.jpg"],
["Billie Eilish", "https://i.pinimg.com/564x/89/22/3b/89223bb207e0234fbed8cc4ef3b4bc73.jpg"],
["Khalid", "https://i.pinimg.com/236x/be/31/3a/be313a56d0b76462351ebf5a1757f454.jpg"],
["Halsey", "https://i.pinimg.com/564x/28/be/3f/28be3f4116834155a847948ba292a752.jpg"],
["Tate McRae", "https://i.pinimg.com/236x/3e/a6/99/3ea699fda1f65abc57375d5c537a382d.jpg"],
["MÅNESKIN", "https://i.pinimg.com/236x/de/62/8f/de628fdb2eb02dbb108abc24fed02491.jpg"],
["Pentatonix", "https://i.pinimg.com/236x/27/25/26/2725261cba0d54877d59996857baa826.jpg"],
["Citizen Queen", "https://i.pinimg.com/564x/15/8c/a4/158ca485cf4481bb429d8dd9e2db0bff.jpg"],
["Jorja Smith", "https://i.pinimg.com/236x/6e/c2/85/6ec285821bc065eed17358d9d99a1688.jpg"],
["Jonas Blue", "https://i.pinimg.com/236x/ab/33/f4/ab33f40e8ead1bf2be76607af7ebcafb.jpg"],
["TINI", "https://i.pinimg.com/236x/36/5e/30/365e30481065ee3639e6ecfa4ed63281.jpg"],
["Greeicy", "https://i.pinimg.com/564x/da/56/60/da566026c7818addb3708402e774e05e.jpg"],
["Hayley Kiyoko", "https://i.pinimg.com/236x/ec/12/67/ec1267ecfb958a88f5d70c94b6b05ca4.jpg"],
["Normani", "https://i.pinimg.com/236x/f7/67/65/f7676556847ca38f79e6b1e1d1cd1167.jpg"],
["Camila Cabello", "https://i.pinimg.com/236x/96/d5/aa/96d5aa3abb882b5f0d0e335ff628010c.jpg"],
["Shawn Mendes", "https://i.pinimg.com/236x/89/92/56/899256088d8a7f4d1e251a3a9066cd2a.jpg"],
["Ed Sheeran", "https://i.pinimg.com/236x/bc/9a/ee/bc9aeee978f50e397e799031269c4530.jpg"],
["Ava Max", "https://i.pinimg.com/236x/4f/16/3c/4f163ccdd6728105bdadfcd79bddef1c.jpg"],
["Justin Bieber", "https://i.pinimg.com/236x/0c/28/fb/0c28fbf3e6ee708fc52ecb55e762f2fc.jpg"],
["Orelsan", "https://i.pinimg.com/236x/61/62/60/6162605b7c875486b623b719639d4fab.jpg"],
["Rick Astley", "https://i.pinimg.com/236x/a7/79/c7/a779c7f27026995ba2482608a6edfac3.jpg"],
["Britney Spears", "https://i.pinimg.com/564x/e7/b8/93/e7b89336cd98f067b728129c252391c5.jpg"],
["Carly Rae Jepsen", "https://i.pinimg.com/236x/0f/b1/d8/0fb1d82ddf1ddbf02f9331391606ee7c.jpg"],
["Nicki Minaj", "https://i.pinimg.com/564x/b6/d5/69/b6d5694fa36eceef0113276089662efb.jpg"],
["Cardi B", "https://i.pinimg.com/236x/06/53/34/065334a864c6d1274c3587e0cb7ccfbe.jpg"],
["Bebe Rexha", "https://i.pinimg.com/236x/c9/c1/ce/c9c1cee9d9c3d894ba112d41a94c42a3.jpg"],
["Louis Tomlinson", "https://i.pinimg.com/236x/60/36/7d/60367d98f5fcbd51834191188c8cde9f.jpg"],
["Niall Horan", "https://i.pinimg.com/236x/f0/f5/06/f0f506e5c9607dd176f62b341251afee.jpg"],
["Liam Payne", "https://i.pinimg.com/236x/3a/76/48/3a7648628570eec349bda60dd4d634f9.jpg"],
["Zayn", "https://i.pinimg.com/236x/df/f1/ee/dff1eecc2e2329c1e51f61ca8220d9a7.jpg"],
["Sia", "https://i.pinimg.com/236x/12/68/13/126813a2768ce19ee0d0a3e098bd6728.jpg"],
["Céline Dion", "https://i.pinimg.com/236x/dd/a1/9c/dda19c7e857d00ce0850e09b8df75d7a.jpg"],
["Lady Gaga", "https://i.pinimg.com/236x/87/16/7e/87167e700da65678ae1f12242e205d1d.jpg"],
["Rihanna", "https://i.pinimg.com/236x/b7/d7/af/b7d7af1260a48e508b63474797fa113f.jpg"],
["Aurora", "https://i.pinimg.com/236x/f2/0b/9c/f20b9c83ea3618ba8723e36dd6ff6a13.jpg"],
["Sam Smith", "https://i.pinimg.com/236x/41/1e/e1/411ee13c1b5f31a4c069f1093c718d90.jpg"],
["Lewis Capaldi", "https://i.pinimg.com/236x/6e/24/a9/6e24a9f524e5ae6ab37cfa34b6499ab6.jpg"],
["Adèle", "https://i.pinimg.com/236x/c2/3b/51/c23b51e4b87f9a0a7113628d2a29fcf1.jpg"],
["John Legend", "https://i.pinimg.com/236x/08/94/5c/08945c064024aff5f4c4d2672b97d3e7.jpg"],
["Demi Lovato", "https://i.pinimg.com/236x/64/96/f1/6496f1903d28336f0989d23786ad97fc.jpg"],
["Bruno Mars", "https://i.pinimg.com/236x/3a/6c/e5/3a6ce5e63b6c990c6d209855f9b31fe1.jpg"],
["Nirvana", "https://i.pinimg.com/236x/fe/e4/2d/fee42dcc4ebb443cd31ff679bee8f80f.jpg"],
["Marina", "https://i.pinimg.com/236x/3d/2f/78/3d2f78e00d8f17460887812263506712.jpg"],
["Clean Bandit", "https://i.pinimg.com/236x/c2/b1/4b/c2b14b8b85e3fb3eab87c482006645a1.jpg"],
["Mabel", "https://i.pinimg.com/236x/04/4d/de/044ddece2baeea424cbcffc268767086.jpg"],
["Julia Michaels", "https://i.pinimg.com/236x/b7/38/17/b73817d7c2f3f69d2a8407d887069cea.jpg"],
["DJ Snake", "https://i.pinimg.com/236x/65/01/4b/65014b20dab51d4566da5cc2e3745dbf.jpg"],
["David Guetta", "https://i.pinimg.com/236x/16/43/74/164374f387404f7f208603b321fb5c09.jpg"],
["Avicii", "https://i.pinimg.com/236x/4b/c2/a1/4bc2a1ccf12fe472566f79496e71d179.jpg"],
["Kanye West", "https://i.pinimg.com/236x/19/8c/d2/198cd24dd1d8b1f93bac7bdab0cc97f0.jpg"],
["Drake", "https://i.pinimg.com/236x/0a/01/83/0a0183955bfe1ed54515407708d95238.jpg"],
["The Beatles", "https://i.pinimg.com/236x/56/68/b6/5668b68c023da96bc2b8f14e36903e63.jpg"],
["ABBA", "https://i.pinimg.com/564x/00/b1/6d/00b16de276c45ad74bd110b1e1383687.jpg"],
["Lil Nas X", "https://i.pinimg.com/236x/3b/17/5f/3b175f4fb36c8b1d7ad0d85a6be9874f.jpg"],
["Miley Cyrus", "https://i.pinimg.com/236x/49/fb/07/49fb0739b510c3e0c69bcf5520b49e01.jpg"],
["Tones and I", "https://i.pinimg.com/564x/1a/b8/7c/1ab87ce70c1fb214e1c8499dab65e6cb.jpg"],
["Meghan Trainor", "https://i.pinimg.com/236x/40/66/17/406617ac517cf9d66d2cbbdb78131c6b.jpg"],
["Christina Aguilera", "https://i.pinimg.com/236x/db/6b/99/db6b99142cbd8b3c056a9f26d57e8df8.jpg"],
["Iggy Azalea", "https://i.pinimg.com/236x/06/e3/32/06e332d46d6bdaa0c480bc92c123adb1.jpg"],
["Maroon 5", "https://i.pinimg.com/236x/c0/8d/44/c08d4431cc36e105b65e60af234fa7f1.jpg"],
["Jonas Brothers", "https://i.pinimg.com/236x/50/1f/94/501f94a23dcecb3934dd3f1cac14272e.jpg"],
["Christina Perri", "https://i.pinimg.com/236x/31/25/b3/3125b355e9eaffee114c20e616a4f396.jpg"],
["Whitney Huston", "https://i.pinimg.com/236x/4f/ce/ef/4fceef22df85e77c7245390dc728b267.jpg"],
["P!nk", "https://i.pinimg.com/236x/fc/68/24/fc6824dd9e215534507b66794e9b840f.jpg"],
["Anna-Marie", "https://i.pinimg.com/236x/fd/3a/2c/fd3a2c3bf6aab260c23ce7afaf14f4f5.jpg"],
["Lana Del Rey", "https://i.pinimg.com/236x/a6/4e/6e/a64e6e87c775dd9aaf8c5958d420b29d.jpg"],
["Kim Petras", "https://i.pinimg.com/236x/fb/31/a4/fb31a45ea6592daf0bd1485745be8a24.jpg"],
["Kehlani", "https://i.pinimg.com/236x/73/ab/b6/73abb6d8d0b10b3bba9e2301bd415919.jpg"],
["Stromae", "https://i.pinimg.com/236x/36/14/e1/3614e1f7f6d215545dd8b883cda36529.jpg"],
["Biglo & Oli", "https://i.pinimg.com/236x/e7/6d/e5/e76de5a14fcc19657c7849e3a8379826.jpg"],
["Boney M", "https://i.pinimg.com/236x/07/42/b3/0742b3ad480140c09f6dd04a8139b575.jpg"],
["Gwen Stefani", "https://i.pinimg.com/236x/18/9e/fa/189efadfb2eb5338eb0a3fbe5a7b4947.jpg"],
["Madonna", "https://i.pinimg.com/564x/20/12/22/201222944d4ffcc246dcd2c2329155b8.jpg"],
["AC/DC", "https://i.pinimg.com/564x/20/98/01/2098018393aecc03e85f1a76be62518f.jpg"],
["Imagine Dragons", "https://i.pinimg.com/236x/e0/0e/87/e00e87d3c31a3b249ecff114c758126c.jpg"],
["Led Zeppelin", "https://i.pinimg.com/236x/fc/b1/a9/fcb1a910044d1c6fe94a03f2b34827bc.jpg"],
["Eminem", "https://i.pinimg.com/236x/6c/cc/79/6ccc794f9ab6b04038f9ded151c81246.jpg"],
["The White Stripes", "https://i.pinimg.com/236x/eb/c1/80/ebc180d53ed4f6d99973775982a5e3d5.jpg"],
["The Neighbourhood", "https://i.pinimg.com/236x/61/c5/7e/61c57e886e7481f6a082ae734544bce1.jpg"],
["Arctic Monkeys", "https://i.pinimg.com/236x/98/0e/82/980e825565bfceca2d8833ff65e1adc1.jpg"],
["Mother Mother", "https://i.pinimg.com/564x/44/89/c5/4489c5f0a07db473d3f1ef982c17867c.jpg"],
["Angèle", "https://i.pinimg.com/736x/69/65/0f/69650fe781937a63450bbc46d04ba027.jpg"],
["Hoshi", "https://i.pinimg.com/236x/3b/39/18/3b3918cad5dbabcf805a0210e5cf4f59.jpg"],
["Pomme", "https://i.pinimg.com/236x/ac/c2/f1/acc2f16e4cbb149b7df09e363f69fcd0.jpg"],
["Marina Kaye", "https://i.pinimg.com/236x/98/44/cf/9844cf9ddf3dc81fea96cb47cdbec9a3.jpg"],
["Gorillaz", "https://i.pinimg.com/236x/76/2c/bb/762cbb850369c37596b2e96200fca1a2.jpg"],
["Lomepal", "https://i.pinimg.com/236x/5b/7e/47/5b7e47d1fea6039629ae9a0a0bdc55e3.jpg"],
["Wham!", "https://i.pinimg.com/236x/17/11/11/1711111bd580dd6a6bf75334a2138902.jpg"],
["twenty one pilots", "https://i.pinimg.com/236x/84/a5/ce/84a5ce4db55f8df7897944c8435f683e.jpg"],
["David Bowie", "https://i.pinimg.com/236x/96/6d/35/966d359ec73f05799c4c31e3ba982e52.jpg"],
["Sting", "https://i.pinimg.com/236x/7d/62/a1/7d62a1aa67f6dd1420c48a37dc3471a8.jpg"],
["ZZ Top", "https://i.pinimg.com/236x/f2/bb/49/f2bb496f3ff12fad7252ea06ff7f189d.jpg"],
["France Gall", "https://i.pinimg.com/236x/2a/cc/77/2acc7744a215b10bb0a32e9adf4ffb82.jpg"],
["Serge Gainsbourg", "https://i.pinimg.com/236x/50/d9/87/50d987608a2926a08858f170cabd2d83.jpg"],
["Joe Dassin", "https://i.pinimg.com/236x/2b/78/59/2b7859a7ffd23c793527ae3429cfb112.jpg"],
["Georges Brassens", "https://i.pinimg.com/236x/b2/a5/8e/b2a58ee384d9111e92f812da21ead602.jpg"],
["Jacques Brel", "https://i.pinimg.com/236x/f3/46/64/f34664f0864cc0b83e4f8ff45e736e98.jpg"],
["Eddie Mitchell", "https://i.pinimg.com/236x/bf/57/b0/bf57b0c81a818274c4588e86999b9c5f.jpg"],
["Michel Polnareff", "https://i.pinimg.com/236x/6f/c6/d6/6fc6d60bd65ce00c757a6fc070ac3b7b.jpg"],
["Johnny Halliday", "https://i.pinimg.com/236x/5b/51/aa/5b51aa451ab410abdc806ffade93e0cc.jpg"],
["Charles Aznavour", "https://i.pinimg.com/236x/4c/d9/a2/4cd9a25cff95f8996f3890e1ef102485.jpg"],
["Laurent Voulzy", "https://i.pinimg.com/236x/43/da/11/43da112cbbef99865437f1cc9a4dbdd8.jpg"],
["Calogero", "https://i.pinimg.com/236x/2c/a5/00/2ca500119c569d57eacdfd75df4ec4c0.jpg"],
["Claude François", "https://i.pinimg.com/236x/3d/13/57/3d1357319c0760ae7a68e5276b7583e8.jpg"],
["Daniel Balavoine", "https://i.pinimg.com/236x/74/1c/ae/741caef5172369f58e043af564fabaa6.jpg"],
["Patrick Bruel", "https://i.pinimg.com/236x/a7/82/c7/a782c79659f2344204411fa124b2aeb0.jpg"],
["Florent Pagny", "https://i.pinimg.com/236x/e9/89/3c/e9893c9771d2c20ca0a296a058ec5c76.jpg"],
["Michel Sardou", "https://i.pinimg.com/236x/c5/f9/b1/c5f9b15f7b412c8f651f2d5e72fdee13.jpg"],
["Jean-Jacques Goldman", "https://i.pinimg.com/236x/55/be/7c/55be7c1a5f4b0f3d07310f037b0b7826.jpg"],
["Edith Piaf", "https://i.pinimg.com/236x/5c/05/f4/5c05f4d937697a8b37bf076bfc498341.jpg"],
["Mylène Farmer", "https://i.pinimg.com/236x/03/aa/bd/03aabda5137cf8f8f6eae0c81960b0ee.jpg"],
["Louane", "https://i.pinimg.com/236x/50/b0/8e/50b08e043522f96f7a576c0886d3f941.jpg"],
["Julien Doré", "https://i.pinimg.com/236x/7b/e4/44/7be444eb30db3913aa2c74ecbd892fcf.jpg"],
["Indochine", "https://i.pinimg.com/236x/7e/44/82/7e44823efdd178953423a4a5334bcc96.jpg"],
["Gims", "https://i.pinimg.com/236x/65/7b/b2/657bb22f51e03900ccc6c06c29902ac5.jpg"],
["M", "https://i.pinimg.com/236x/08/90/9a/08909a2ea36d3f557a3e6ca37197b168.jpg"],
["Vanessa Paradis", "https://i.pinimg.com/236x/eb/85/18/eb851899d6cb154e29500d8ab78608c5.jpg"],
["Marilyn Manson", "https://i.pinimg.com/236x/ca/e4/8d/cae48dcaf5a40d928e12593a232e72dc.jpg"],
["Mariah Carey", "https://i.pinimg.com/236x/a5/2a/30/a52a30072e6afc22db3b30f35a2542cf.jpg"],
["Hélène Ségara", "https://i.pinimg.com/236x/6e/67/3d/6e673d56a5ba729cfaa2b8f7b9e494cc.jpg"],
["Elvis Presley", "https://i.pinimg.com/236x/5b/76/6e/5b766e7e1bb2d9ccddfda5e14e241c7a.jpg"],
["ROSALÍA", "https://i.pinimg.com/236x/5f/02/1a/5f021a29589719a9373152c70e6d255a.jpg"],
["Michael Jackson", "https://i.pinimg.com/564x/69/53/59/695359b6cdc65e352a93e80695a5a506.jpg"],
["Charli XCX", "https://i.pinimg.com/736x/13/9d/9d/139d9db70b24fbb425e660ada3735655.jpg"],
["Chappell Roan", "https://i.pinimg.com/736x/91/2d/bc/912dbc51d67165cf72af9ba2a408d120.jpg"],
["Hozier", "https://i.pinimg.com/564x/63/4f/54/634f54cf8318cc3f8e4058866096d34c.jpg"],
["Addison Rae", "https://i.pinimg.com/736x/b8/66/c2/b866c2ef75db4b8bb15056ae6717a5bb.jpg"],
["Zara Larsson", "https://i.pinimg.com/564x/db/99/55/db99553ddfcc236d330831eeb7e5e4f7.jpg"],
["Kendrick Lamar", "https://i.pinimg.com/564x/f9/b3/2e/f9b32e46bf32a28a80f227675acea98f.jpg"],
["Paramore", "https://i.pinimg.com/564x/12/59/67/125967b1a0036e9ee6f3d8e1ac65e386.jpg"],
["Little Mix", "https://i.pinimg.com/564x/5e/52/76/5e5276b7f7c201439a64478604de9700.jpg"],
["Shakira", "https://i.pinimg.com/736x/ea/7b/a7/ea7ba7e17a4d66724d064a1dde05ab6c.jpg"],
["FLO", "https://i.pinimg.com/564x/00/3e/e8/003ee815b8fd8c87ba5b3257685654d9.jpg"],
["Rina Sawayama", "https://i.pinimg.com/564x/60/8f/06/608f06541a489364b61a6939396a1619.jpg"],
["Backstreet Boys", "https://i.pinimg.com/564x/7c/e8/3d/7ce83d30f9f441cb5522184a95476297.jpg"],
["NSYNC", "https://i.pinimg.com/564x/85/66/e6/8566e64dae265781549ffe34f7e5d262.jpg"],
["Ashnikko", "https://i.pinimg.com/564x/93/fe/d0/93fed0d2376702293640acae5cd85d2d.jpg"],
["November Ultra", "https://i.pinimg.com/564x/48/ee/ef/48eeef5cbed8ffb66d17bb0c8eaa30be.jpg"],
["JVKE", "https://i.pinimg.com/564x/1c/4a/76/1c4a765941c722e3353c2ceea324da63.jpg"],
["Troye Sivan", "https://i.pinimg.com/564x/96/b3/c4/96b3c4d29569aa22ddae605132bd3c64.jpg"],
["Charlie Puth", "https://i.pinimg.com/564x/64/49/51/6449514ea9716c9447575a08ea49bcec.jpg"],
["Tori Kelly", "https://i.pinimg.com/736x/b4/af/a9/b4afa92394437c8baaca551ca5678662.jpg"],
["Conan Gray", "https://i.pinimg.com/564x/b1/46/56/b146568142e77a25d761f83057ce13d2.jpg"],
["Benson Boone", "https://i.pinimg.com/736x/ab/0a/3c/ab0a3c1860dbb471df9997a4e6e68653.jpg"],
["Kendji Girac", "https://i.pinimg.com/564x/db/bd/95/dbbd953145fe1c924c6a83fc61de0c81.jpg"],
["Karol G", "https://i.pinimg.com/564x/36/66/1d/36661d35cc05d259ea16af0f42d099ee.jpg"],
["Becky G", "https://i.pinimg.com/564x/6a/60/7f/6a607fecf34abe584d00f45d7d8cb898.jpg"],
["Yseult", "https://i.pinimg.com/564x/75/85/fc/7585fcd5f8396dbb14e7e3059c55d2f0.jpg"],
["Clara Luciani", "https://i.pinimg.com/564x/c8/e2/8f/c8e28ff15d88c11ef0746f11670f6da1.jpg"],
["Juliette Armanet", "https://i.pinimg.com/564x/76/cc/72/76cc727859a57725ff279288f2eba7e7.jpg"],
["Gracie Abrams", "https://i.pinimg.com/736x/ea/c5/56/eac5560aaa042cadf0a5f79696d41616.jpg"],
["Anitta", "https://i.pinimg.com/564x/ac/74/91/ac7491888aa9101c926c49a3c081f6ba.jpg"],
["Post Malone", "https://i.pinimg.com/736x/9b/be/ae/9bbeae9a204d564046761906c311909c.jpg"],
["Mozart", "https://i.pinimg.com/564x/5b/af/e8/5bafe84236ba7bde1f313d7e378f5a98.jpg"],
["Beethoven", "https://i.pinimg.com/564x/79/d9/33/79d93321de80e0b3f130bf542f8418ac.jpg"],
["Chopin", "https://i.pinimg.com/564x/d2/17/38/d217381cf6e2b2586c15f9c2d34b7c4d.jpg"],
["Panic At The Disco", "https://i.pinimg.com/736x/82/1f/6f/821f6f5f8f6d110187b37bd57528f782.jpg"],
["Maureen", "https://la1ere.francetvinfo.fr/image/WsdKKDxKRr-F1k0Zd-v5qyZV2Ho/1200x900/outremer/2023/01/30/63d82acb337b3_photo-maureen.jpg"],
["Chase Atlantic", "https://i.pinimg.com/564x/dd/b2/54/ddb25405bee167596e6954cf6326a2a2.jpg"],
["Cigarettes after sex", "https://i.pinimg.com/564x/b3/ed/82/b3ed8245c5878ee3ebb2ab3743997f58.jpg"],
["Aya Nakamura", "https://i.pinimg.com/736x/c8/30/67/c83067902b25935dc301c93fab29eb16.jpg"],
["Niska", "https://i.pinimg.com/564x/60/23/f2/6023f22dd3b4e8b37ea736904a973464.jpg"],
["Ninho", "https://i.pinimg.com/564x/f8/7a/4e/f87a4e7cfb25243f7e4dc716b530e01c.jpg"],
["SCH", "https://i.pinimg.com/564x/75/77/ff/7577ffbe52411a0af846f8ceaefa6a76.jpg"],
["Shay", "https://images.ctfassets.net/gxeut4f3d77x/5GTrMPv18bOuOHsLpNtQrk/5ff486ac93f47adb9c05eaf5378ea5ba/qui-est-shay-lartiste-belge-qui-se-produit-a-forest-national-en-novembre-1200x675.jpg?fm=jpg"],
["Booba", "https://i.pinimg.com/564x/d9/7f/fb/d97ffb93cca37993fab29ab8af83a299.jpg"],
["Kaaris", "https://i.pinimg.com/564x/b8/f5/fd/b8f5fddbdcb68d606b81bc40cdeea252.jpg"],
["Damso", "https://i.pinimg.com/564x/36/e6/3c/36e63c1681bf83a1ec77316eaaad5619.jpg"],
["Ozuna", "https://i.pinimg.com/564x/fb/c5/9b/fbc59bcf9170a2323cdbb190436d3216.jpg"],
["Tyla", "https://i.pinimg.com/564x/d0/6c/46/d06c46a4a24b5e53fbf7f2ff1f2d8bb6.jpg"],
["Cher", "https://i.pinimg.com/564x/cc/e7/18/cce7184c1494efa046a52b6e2aa7b606.jpg"],
["Victoria Monét", "https://i.pinimg.com/736x/c0/86/5d/c0865de9df12eef9726dde4f12533887.jpg"],
["Tinashe", "https://i.pinimg.com/564x/75/1c/c7/751cc734a1429bcab28c1540e6585dc0.jpg"],
["SZA", "https://i.pinimg.com/736x/34/cc/91/34cc91816b6aed3085b019c4559dc756.jpg"],
["Tyler, the creator", "https://i.pinimg.com/736x/ff/49/fe/ff49fe62ad11d83fe5999ea36ff7a6c0.jpg"],
["Playboi Carti", "https://i.pinimg.com/736x/ec/e4/d6/ece4d6abe01001de357e23eb1b6c3db3.jpg"],
["Teddy Swims", "https://i.pinimg.com/564x/b5/c2/93/b5c29336bf63895e681381ce291581b5.jpg"],
["Kali Uchis", "https://i.pinimg.com/564x/a7/2f/31/a72f31b4551e8099a084b7ff659ec453.jpg"],
["Amy Winehouse", "https://i.pinimg.com/564x/06/47/d3/0647d355f0cb4d5a01fa295d77c55df0.jpg"],
["Mac Miller", "https://i.pinimg.com/564x/42/4e/8b/424e8b8cbe950a1b5f8edc86063d4098.jpg"],
["Destiny's Child", "https://i.pinimg.com/564x/0f/40/8e/0f408e56e4b74472d6256de0e1fe699e.jpg"],
["Jojo Siwa", "https://i.pinimg.com/736x/4a/8f/33/4a8f33393b9e7192e924f8cc7a65495f.jpg"],
["Dolly Parton", "https://i.pinimg.com/564x/b5/f5/d3/b5f5d35e63b638fc4b0fbda179ec72db.jpg"],
["Prince", "https://i.pinimg.com/564x/04/d3/ee/04d3eee0538a3f172356e6aabeb127f7.jpg"],
["Reneé Rapp", "https://i.pinimg.com/736x/48/f1/b6/48f1b6b6a1a83bea09ec2667920172d5.jpg"],
["Megan Thee Stallion", "https://i.pinimg.com/736x/2e/85/0f/2e850fcc454259274d3f49600b7c71aa.jpg"],
["Justin Timberlake", "https://i.pinimg.com/564x/6c/bd/a7/6cbda7bb10035ec52cb6d9a87db57ce5.jpg"],
["GIMS", "https://images.lesindesradios.fr/fit-in/1100x2000/filters:format(webp)/radios/voltage/importrk/news/original/5ab89e87bbb464.33370422.jpg"],
["Black M", "https://images.genius.com/500eb6bdfbc4f33bd72af4f3d3e7e6a1.930x930x1.jpg"],
["Dadju", "https://i.pinimg.com/564x/bf/2e/df/bf2edf8bda9d382a4549079eee372407.jpg"],
["Kesha", "https://i.pinimg.com/736x/12/28/a3/1228a36d1c1f6e3d02c99964d32bc007.jpg"],
["Peso Pluma", "https://i.pinimg.com/736x/df/a0/fc/dfa0fc1ac0f487f934bbad8d76a5ff16.jpg"],
["Hamza", "https://i.pinimg.com/564x/f2/31/e4/f231e493b81f4831921aef94a2a09ebe.jpg"],
["PLK", "https://i.pinimg.com/736x/3f/d4/b8/3fd4b8a064a12f28e79406c959fac667.jpg"],
["Kalash", "https://i.pinimg.com/564x/a9/28/42/a92842df6f367aeddf2dbb2ca1659fd4.jpg"],
["Inna", "https://i.pinimg.com/564x/de/6b/11/de6b11604a121651f4427ec133a84231.jpg"],
["Pibull", "https://i.pinimg.com/564x/36/7f/65/367f655204d00edb31a2c8710eae0781.jpg"],
["Naza", "https://i.pinimg.com/564x/27/82/b5/2782b56cb7eef60738c9a236afa2d0f6.jpg"],
["Bigflo & Oli", "https://i.pinimg.com/564x/0e/4c/77/0e4c77b14565473dc0d7377641aceb48.jpg"],
["Jul", "https://i.pinimg.com/564x/d2/87/a3/d287a3c5f308e39410b97cd7ef0d67d0.jpg"],
["Freeze Corleone", "https://i.pinimg.com/564x/c3/90/0b/c3900b02e5fcdd44f5b78c802795d188.jpg"],
["Bad Bunny", "https://i.pinimg.com/564x/01/72/44/0172443c7a1203347d80fe3c20ee8fbf.jpg"],
["SDM", "https://i.pinimg.com/564x/77/76/91/77769111ed578980c39449a18e164c4a.jpg"],
["Koba LaD", "https://i.pinimg.com/564x/e5/74/ca/e574ca5fc78423deebc5f23aa4d1ab83.jpg"],
["Laylow", "https://i.pinimg.com/564x/4e/93/6a/4e936a4b308baa37eb709c14680ad266.jpg"],
["Favé", "https://i.pinimg.com/564x/54/07/b1/5407b1103864dfaed2736a2893cc07d3.jpg"],
["Frank Ocean", "https://i.pinimg.com/564x/e7/49/4e/e7494e6210f1846e2b3f3e11df8418d2.jpg"],
["Sade", "https://i.pinimg.com/564x/07/e9/44/07e94413faf591bcda036f90cc1e5299.jpg"],
["Childish Gambino", "https://i.pinimg.com/564x/4a/ed/7a/4aed7a34800079767709449c2d1bd6cd.jpg"],
["Jok'Air", "https://i.pinimg.com/564x/4d/3b/e8/4d3be84fe522134dfc74becf46e1a29d.jpg"],
["Nekfeu", "https://i.pinimg.com/564x/01/e0/be/01e0be8ab00709271e8779294fe8e7ec.jpg"],
["Sabrina Claudio", "https://i.pinimg.com/564x/ea/ad/65/eaad654c97819aa44a4cb196a5d66150.jpg"],
["Kanoe", "https://i.pinimg.com/564x/e6/04/8e/e6048e24142943e57928e8d990c9dcdd.jpg"],
]
    
// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_music`;


gens = gens.map(person => ({
    name: person[0],
    image: person[1],
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
        document.getElementById('person1-image').src = person1.image;

        document.getElementById('person2-text').innerText = person2.name;
        document.getElementById('person2-image').src = person2.image;


        document.getElementById('person3-text').innerText = person3.name;
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
