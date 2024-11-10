let gens = [
    ["Killua", "Hunter X Hunter", "https://i.pinimg.com/564x/b4/a9/7f/b4a97fcecac0bbdce829914ebea72322.jpg"],
    ["Gon", "Hunter X Hunter", "https://i.pinimg.com/564x/8d/51/f1/8d51f1ecfc07262034a4476192ad4014.jpg"],
    ["Kurapika", "Hunter X Hunter", "https://i.pinimg.com/564x/6b/de/a8/6bdea8779d4ebdc317ad2952b1553ff9.jpg"],
    ["Léolio", "Hunter X Hunter", "https://i.pinimg.com/564x/11/ed/2d/11ed2d14ab2985fdc5714a97440204c1.jpg"],
    ["Hisoka", "Hunter X Hunter", "https://i.pinimg.com/564x/91/b3/6d/91b36dea3b5d0af055cd503f5ed70a5b.jpg"],
    ["Neferpitou", "Hunter x Hunter", "https://i.pinimg.com/564x/5e/0a/74/5e0a7431757ed6eb0bfc81de4e10d0b9.jpg"],
    ["Izuku", "My Hero Academia", "https://i.pinimg.com/564x/b6/72/5f/b6725fd7d886fa644aff0f2a0edabdcb.jpg"],
    ["Bakugo", "My Hero Academia", "https://i.pinimg.com/564x/f8/1d/be/f81dbee7eee612cfe68957ae64a93ec6.jpg"],
    ["Shoto", "My Hero Academia", "https://i.pinimg.com/564x/66/25/f1/6625f1126b3ffb0ba543bf751869177e.jpg"],
    ["Ochaco", "My Hero Academia", "https://i.pinimg.com/564x/6b/f9/36/6bf9360209ab8e98e661d2fdea8041e7.jpg"],
    ["Momo", "My Hero Academia", "https://i.pinimg.com/564x/50/58/62/5058622938957453a571651db008f576.jpg"],
    ["Mina", "My Hero Academia", "https://i.pinimg.com/564x/28/44/7f/28447fb9a5a6372e349710ff03dbd1f9.jpg"],
    ["Denki", "My Hero Academia", "https://i.pinimg.com/564x/93/10/13/931013e6ba2dbd0cff37ea018ff51c5c.jpg"],
    ["Hanta", "My Hero Academia", "https://i.pinimg.com/564x/37/d5/d8/37d5d8e647582571017027f74f1ef47c.jpg"],
    ["Eijiro", "My Hero Academia", "https://i.pinimg.com/564x/d9/57/ed/d957ed428440bb49b5fb926ef59f9dbd.jpg"],
    ["Kyoka", "My Hero Academia", "https://i.pinimg.com/564x/a9/a1/c1/a9a1c1b3f379ca02d9009145186e78a1.jpg"],
    ["Tsuyu", "My Hero Academia", "https://i.pinimg.com/236x/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg"],
    ["Best Jeanist", "My Hero Academia", "https://i.pinimg.com/236x/c3/a4/50/c3a450de17bf9a3dff4e548d8f4696a6.jpg"],
    ["Tamaki", "My Hero Academia", "https://i.pinimg.com/564x/a1/f9/db/a1f9db394938e7fcab704b86cf90ebe0.jpg"],
    ["Mirio", "My Hero Academia", "https://i.pinimg.com/564x/86/7c/65/867c656e09f48e0717374f1984a3f746.jpg"],
    ["Aizawa", "My Hero Academia", "https://i.pinimg.com/564x/64/a1/6a/64a16ae91407afa47dec4abbd60cd773.jpg"],
    ["All Might", "My Hero Academia", "https://i.pinimg.com/564x/49/9d/1f/499d1f4c1f3038c689cd8553009cf93e.jpg"],
    ["Nejire", "My Hero Academia", "https://i.pinimg.com/564x/d0/65/ee/d065eedf730abdb9cc8064a28b0436cf.jpg"],
    ["Hawks", "My Hero Academia", "https://i.pinimg.com/564x/60/5c/54/605c54a8a646cbec831d2e79fbd0a6a5.jpg"],
    ["Yuga", "My Hero Academia", "https://i.pinimg.com/564x/93/35/3c/93353cab84e18d0e72ac53887c8dfbb8.jpg"],
    ["Toga", "My Hero Academia", "https://i.pinimg.com/564x/fc/8d/45/fc8d4511b92f8ddbbe31817404fd3a12.jpg"],
    ["Fumikage", "My Hero Academia", "https://i.pinimg.com/564x/37/50/e9/3750e9bc39caa14124cecc4ad36db307.jpg"],
    ["Mirko", "My Hero Academia", "https://i.pinimg.com/564x/fe/62/38/fe6238e0bcc22e4b2434a299c325e3df.jpg"],
    ["Light", "Death Note", "https://i.pinimg.com/564x/45/ef/f6/45eff6467ed3bc90ea480123566e0f0b.jpg"],
    ["Misa", "Death Note", "https://i.pinimg.com/564x/60/09/50/6009501d27ef3be40feb23dc53c821e0.jpg"],
    ["L", "Death Note", "https://i.pinimg.com/564x/a7/08/46/a70846a58007be74ffcbc6e5295c304f.jpg"],
    ["Nagisa", "Assassination Classroom", "https://i.pinimg.com/564x/af/36/95/af36953f46f951aa76f098777b6c1a46.jpg"],
    ["Karma", "Assassination Classroom", "https://i.pinimg.com/564x/cc/6c/b4/cc6cb4dbd892d7835543a48bba413820.jpg"],
    ["Kayano", "Assassination Classroom", "https://i.pinimg.com/564x/1a/fe/d6/1afed695fd4e6c7c3fa5c9d48a912a36.jpg"],
    ["Irina", "Assassination Classroom", "https://i.pinimg.com/564x/72/c0/fb/72c0fbfc01c4bfa0292b1a60eba36bf4.jpg"],
    ["Karasuma", "Assassination Classroom", "https://i.pinimg.com/564x/b0/eb/c4/b0ebc4047fdc123cbc51a8e005d72fea.jpg"],
    ["Ryuma", "Assassination Classroom", "https://i.pinimg.com/564x/13/34/03/133403660b804cb2d6706cffc013dea3.jpg"],
    ["Shinomiya", "Love Is War", "https://i.pinimg.com/564x/9b/98/fe/9b98feb63a22c6a559b7304ef7ccba84.jpg"],
    ["Shirogane", "Love Is War", "https://i.pinimg.com/564x/86/ac/da/86acda5e9864d6fc98279a16cc815492.jpg"],
    ["Fujiwara", "Love Is War", "https://i.pinimg.com/564x/ec/e0/3f/ece03f989cd7435166749d71d6fff234.jpg"],
    ["Ishigami", "Love Is War", "https://i.pinimg.com/564x/15/7d/31/157d310038f315f2d75e5e35455a1075.jpg"],
    ["Yumeko", "Gambling School", "https://i.pinimg.com/564x/db/c5/03/dbc5030b4cb08822935ca533cb91df6f.jpg"],
    ["Mary", "Gambling School", "https://i.pinimg.com/564x/7e/fc/4c/7efc4cddaad2809b30e94bda7a3fa813.jpg"],
    ["Kirari", "Gambling School", "https://i.pinimg.com/564x/9d/fe/10/9dfe10698bb6c1907fda2d5f3beca1ac.jpg"],
    ["Tanjirô", "Demon Slayer", "https://i.pinimg.com/564x/5b/fe/53/5bfe53ed22a14b51d75e96b5c0463765.jpg"],
    ["Nezuko", "Demon Slayer", "https://i.pinimg.com/564x/24/b5/fd/24b5fd63b79a3d88584c6bcafd14c6ec.jpg"],
    ["Giyû", "Demon Slayer", "https://i.pinimg.com/564x/01/a0/64/01a064866c62da820a8dd591c21b5c7c.jpg"],
    ["Zenitsu", "Demon Slayer", "https://i.pinimg.com/564x/46/63/cb/4663cbd74f685235a381f26df6e0f89b.jpg"],
    ["Shinobu", "Demon Slayer", "https://i.pinimg.com/736x/84/1f/63/841f63ada80ae4499ffceb1787dcc852.jpg"],
    ["Saiki", "Saiki Kusuo", "https://i.pinimg.com/564x/11/b7/b0/11b7b0be3fe65903ed99e25167522681.jpg"],
    ["Eren", "L'Attaque des Titans", "https://i.pinimg.com/564x/25/b2/d6/25b2d6e5db030175f353de288d89aeb4.jpg"],
    ["Mikasa", "L'Attaque des Titans", "https://i.pinimg.com/564x/91/16/1e/91161e935bc2d056a98fa461e1852c69.jpg"],
    ["Armin", "L'Attaque des Titans", "https://i.pinimg.com/564x/c7/c9/54/c7c954dffb5eb40cc6b32bd1bc410c19.jpg"],
    ["Livaï", "L'Attaque des Titans", "https://i.pinimg.com/564x/05/78/c5/0578c51ad9aac6b28af750fce4d49382.jpg"],
    ["Ymir", "L'Attaque des Titans", "https://i.pinimg.com/564x/83/ac/33/83ac33404c03107634b44da7d191e591.jpg"],
    ["Historia", "L'Attaque des Titans", "https://i.pinimg.com/564x/f3/5c/0e/f35c0e944c6045cf02628f5a57574681.jpg"],
    ["Jean", "L'Attaque des Titans", "https://i.pinimg.com/564x/3c/6c/08/3c6c084109443bb2a48b8a56f51dbdb9.jpg"],
    ["Sasha", "L'Attaque des Titans", "https://i.pinimg.com/564x/57/88/da/5788da1a3657a8fcfe2273eb3b71b77c.jpg"],
    ["Annie", "L'Attaque des Titans", "https://i.pinimg.com/564x/1e/1b/a8/1e1ba80f7d4fd3aeb531fa3340c8a7d5.jpg"],
    ["Erwin", "L'Attaque des Titans", "https://i.pinimg.com/564x/2e/34/79/2e347979ceae897f238c30e30f00ee4f.jpg"],
    ["Naegi", "Danganronpa", "https://i.pinimg.com/564x/f7/f8/58/f7f858bfdf2442687e7bdd0a900eef51.jpg"],
    ["Enoshima", "Danganronpa", "https://i.pinimg.com/564x/5f/71/52/5f7152b7ec109d587092d3844b5e8c3f.jpg"],
    ["Asahina", "Danganronpa", "https://i.pinimg.com/564x/69/34/8c/69348c3a5619585ba55178e848d5c506.jpg"],
    ["Kirigiri", "Danganronpa", "https://i.pinimg.com/564x/a1/bc/c0/a1bcc0e9072f9372d801b844555fd954.jpg"],
    ["Fukawa", "Danganronpa", "https://i.pinimg.com/564x/90/e7/58/90e75859831d6c253e642bad4306797c.jpg"],
    ["Celestia", "Danganronpa", "https://i.pinimg.com/564x/1c/47/72/1c477288bb1c7c58eb42bb8a61e3265a.jpg"],
    ["Togami", "Danganronpa", "https://i.pinimg.com/564x/64/38/25/64382554d1f55ede4538d7fdec319db5.jpg"],
    ["Dio", "Jojo's Bizarre Adventure", "https://i.pinimg.com/564x/98/3c/4d/983c4df83d3d09a19f28eba452b06af6.jpg"],
    ["Jotaro", "Jojo's Bizarre Adventure", "https://i.pinimg.com/564x/52/a6/ba/52a6ba79e3b618816f26a318a4e35fd9.jpg"],
    ["Kakiôin", "Jojo's Bizarre Adventure", "https://i.pinimg.com/564x/b9/c2/f6/b9c2f64dbdb5fcf889812368718be28a.jpg"],
    ["Polnareff", "Jojo's Bizarre Adventure", "https://i.pinimg.com/564x/54/77/8a/54778af723605a2ca6f12765a748593a.jpg"],
    ["Kaneki", "Tokyo Ghoul", "https://i.pinimg.com/564x/4d/5b/80/4d5b8097ddf72c51cdc4c96127559ccb.jpg"],
    ["Lize", "Tokyo Ghoul", "https://i.pinimg.com/564x/07/8c/3f/078c3f8f8e0424192426cfe7c1d7c28c.jpg"],
    ["Tôka", "Tokyo Ghoul", "https://i.pinimg.com/564x/8d/83/d7/8d83d7e2c6f674eb19c1063ddbe6a41a.jpg"],
    ["Uta", "Tokyo Ghoul", "https://i.pinimg.com/564x/b5/fa/74/b5fa74c4ffbd4038e8ba6a9866b8d880.jpg"],
    ["Nishiki", "Tokyo Ghoul", "https://i.pinimg.com/564x/22/79/0f/22790f8f5e48833c4d609b373c30ca35.jpg"],
    ["Hide", "Tokyo Ghoul", "https://i.pinimg.com/564x/72/27/a7/7227a7f904e058b30f9c029091668f28.jpg"],
    ["Tsukiyama", "Tokyo Ghoul", "https://i.pinimg.com/564x/4e/77/37/4e77375cd61b66caa6b43b90d1f92773.jpg"],
    ["Suzuya", "Tokyo Ghoul", "https://i.pinimg.com/564x/d5/59/0e/d5590e53012550e80c8e02e8443fe102.jpg"],
    ["Akira", "Tokyo Ghoul", "https://i.pinimg.com/564x/23/de/c4/23dec46e52e0e25f5459321c938bd81c.jpg"],
    ["Amon", "Tokyo Ghoul", "https://i.pinimg.com/564x/55/1e/6b/551e6ba7a79a758864288663957be89f.jpg"],
    ["Luffy", "One Piece", "https://i.pinimg.com/564x/6f/66/30/6f66309d4fb6946f515ab8a2c55733c5.jpg"],
    ["Zoro", "One Piece", "https://i.pinimg.com/564x/7a/b9/13/7ab91335818a1d85809de558dde324f3.jpg"],
    ["Nami", "One Piece", "https://i.pinimg.com/564x/50/d4/92/50d4924f3055230462cc60cad7f3b35a.jpg"],
    ["Sanji", "One Piece", "https://i.pinimg.com/564x/a5/bd/f5/a5bdf53ad36e678e2974b730eaf8f118.jpg"],
    ["Nico Robin", "One Piece", "https://i.pinimg.com/564x/33/05/99/3305999c1886d2ee9bfe77ff30828f32.jpg"],
    ["Ace", "One Piece", "https://i.pinimg.com/564x/d7/55/fb/d755fb0575871a404a98a04b9b247093.jpg"],
    ["Naruto", "Naruto", "https://i.pinimg.com/564x/38/65/ad/3865adc7ea94ca9fd5e1b0c375f30f7a.jpg"],
    ["Sasuke", "Naruto", "https://i.pinimg.com/564x/e8/8e/d4/e88ed44f38e078bcd1a203e98ed2d29f.jpg"],
    ["Itachi", "Naruto", "https://i.pinimg.com/564x/b0/c1/ca/b0c1ca08848f4626110313f3081707c5.jpg"],
    ["Kakashi", "Naruto", "https://i.pinimg.com/564x/37/2a/ca/372aca55019530baeb790f6d41e17610.jpg"],
    ["Sakura", "Naruto", "https://i.pinimg.com/564x/3e/3c/4b/3e3c4b27f0c9c9ec0873ffee3af38808.jpg"],
    ["Pain", "Naruto", "https://i.pinimg.com/564x/66/c3/41/66c341684a269ba96ac6ef56797db94c.jpg"],
    ["Madara", "Naruto", "https://i.pinimg.com/564x/00/f0/34/00f034ead202ce169ff64cb8f1307efd.jpg"],
    ["Obito", "Naruto", "https://i.pinimg.com/564x/80/42/62/8042629a42ba22760eb05ce85c821876.jpg"],
    ["Hinata", "Naruto", "https://i.pinimg.com/564x/ac/e9/19/ace919e97780ab73d5edd999bb4cc20b.jpg"],
    ["Tsunade", "Naruto", "https://i.pinimg.com/564x/9b/45/97/9b459798606f24500a0e1976215a5f09.jpg"],
    ["Gaara", "Naruto", "https://i.pinimg.com/564x/17/e4/5b/17e45b4365e9fdb669afb73f1a4cefca.jpg"],
    ["Ino", "Naruto", "https://i.pinimg.com/564x/8f/c4/52/8fc452f243b7b05014d8a4146d90ddc9.jpg"],
    ["Tenten", "Naruto", "https://i.pinimg.com/564x/be/61/45/be61458711f8cd498e87fe484de2bef1.jpg"],
    ["Jiraya", "Naruto", "https://i.pinimg.com/736x/1f/88/14/1f88142a5ef5a4b599203396062c1cef.jpg"],
    ["Edward", "Fullmetal Alchemist", "https://i.pinimg.com/564x/d1/6b/3d/d16b3d3cae5af37db55053dfc2f6994f.jpg"],
    ["Winry", "Fullmetal Alchemist", "https://i.pinimg.com/564x/b0/fb/0c/b0fb0cc60eecd07cb5b604050a0ca41b.jpg"],
    ["Sonic", "One Punch Man", "https://i.pinimg.com/564x/5a/aa/c5/5aaac550e62ad0e328e3c406f4429120.jpg"],
    ["Genos", "One Punch Man", "https://i.pinimg.com/564x/78/f3/86/78f386f3fbf545fecbacb8c3ad2683c0.jpg"],
    ["Saitama", "One Punch Man", "https://i.pinimg.com/564x/d3/5f/17/d35f1782b36a2628f70e6de6fb0f9359.jpg"],
    ["Shinichi", "Detective Conan", "https://i.pinimg.com/564x/93/a4/12/93a412f7150e0512eb7eca3557ff103e.jpg"],
    ["Ran", "Detective Conan", "https://i.pinimg.com/564x/20/e4/42/20e4423df3c8bdc43ef93a256fafd75d.jpg"],
    ["Hinata", "Haikyuu", "https://i.pinimg.com/564x/9b/7d/20/9b7d205a82322bd822e145094214a862.jpg"],
    ["Kageyama", "Haikyuu", "https://i.pinimg.com/564x/a1/55/ca/a155cadd2e8f77997490c122baec2020.jpg"],
    ["Kenma", "Haikyuu", "https://i.pinimg.com/564x/3b/ea/84/3bea84a11b7821445c993767600fc02f.jpg"],
    ["Nishinoya", "Haikyuu", "https://i.pinimg.com/564x/71/3c/90/713c905c3c06e67b51b3c89a38dd34b8.jpg"],
    ["Zero Two", "Darling in the Franxx", "https://i.pinimg.com/564x/33/45/d5/3345d5287dcb80a5221808d714ce6290.jpg"],
    ["Ladybug", "Miraculous Ladybug", "https://i.pinimg.com/564x/4f/06/2d/4f062d9a0abb891b09747ad107d262aa.jpg"],
    ["Chat Noir", "Miraculous Ladybug", "https://i.pinimg.com/564x/28/d7/03/28d7033d476a7aecd1606b058e87a90d.jpg"],
    ["Juleka", "Miraculous Ladybug", "https://i.pinimg.com/564x/d9/89/eb/d989eb50a09e8f347b4ba7da339ec9da.jpg"],
    ["Rose", "Miraculous Ladybug", "https://i.pinimg.com/564x/2f/5c/b4/2f5cb47141e9a2723da26bc423c78a4e.jpg"],
    ["Alya", "Miraculous Ladybug", "https://i.pinimg.com/564x/8b/81/6d/8b816da5cc5d75eb77e54bd1f3571615.jpg"],
    ["Nino", "Miraculous Ladybug", "https://i.pinimg.com/236x/2d/80/33/2d8033d55de04e6429210eb119537771.jpg"],
    ["Chloé", "Miraculous Ladybug", "https://i.pinimg.com/236x/79/1c/59/791c5905edb6f6edd492801cf59c723c.jpg"],
    ["Papillon", "Miraculous Ladybug", "https://i.pinimg.com/564x/ae/37/36/ae3736de610a720ea0817ee62483288f.jpg"],
    ["Luka", "Miraculous Ladybug", "https://i.pinimg.com/564x/fb/84/ce/fb84ced850aaa595cb88f33df8c024bc.jpg"],
    ["Alix", "Miraculous Ladybug", "https://i.pinimg.com/236x/d6/86/3d/d6863dec847ee76ff8cbfb4c613c78c5.jpg"],
    ["Emma", "The Promised Neverland", "https://i.pinimg.com/564x/7d/a3/a1/7da3a1947bf0cade164cb1eef15ada6a.jpg"],
    ["Norman ", "The Promised Neverland", "https://i.pinimg.com/564x/04/32/e9/0432e968858277958cc9f4468a59a18b.jpg"],
    ["Ray", "The Promised Neverland", "https://i.pinimg.com/564x/fd/08/0d/fd080dbc856c46a1e8a6fbe11768898b.jpg"],
    ["Isabella", "The Promised Neverland", "https://i.pinimg.com/564x/1a/ff/68/1aff68b0e670fb446a969c988d21be32.jpg"],
    ["Krone", "The Promised Neverland", "https://i.pinimg.com/236x/f4/bd/05/f4bd05eca20d3966ebcd95cab1956a0b.jpg"],
    ["Ai", "Wonder Egg Priority", "https://i.pinimg.com/236x/8d/69/42/8d6942b7699c22ffcbabcef5e4eb7353.jpg"],
    ["Momoe", "Wonder Egg Priority", "https://i.pinimg.com/564x/72/e6/1a/72e61ad44b93c3e6deb631b2486a49ef.jpg"],
    ["Rika", "Wonder Egg Priority", "https://i.pinimg.com/236x/44/97/92/4497923b619f0ca96c5e703bcdd15c4f.jpg"],
    ["Neiru", "Wonder Egg Priority", "https://i.pinimg.com/564x/25/6e/46/256e463015d4012cad5a32f5ee74984f.jpg"],
    ["Nagatoro", "Nagatoro", "https://i.pinimg.com/564x/06/0c/86/060c8657dff4f4cc1ef24526cb27f5ad.jpg"],
    ["Loid", "Spy x Family", "https://i.pinimg.com/564x/0e/c5/2d/0ec52dcb2b6e17c2a7e09355bb6ccd04.jpg"],
    ["Yor", "Spy x Family", "https://i.pinimg.com/564x/58/22/50/582250f5f70094b90953c8c805abe204.jpg"],
    ["Hanako Kun", "Toilet Bound Hanako Kun", "https://i.pinimg.com/564x/af/a5/19/afa519832ed35735cd4b694a7a1f7a62.jpg"],
    ["Krul Tepes", "Seraph of the End", "https://i.pinimg.com/564x/b0/ed/ea/b0edeae748f90db4f8659c89cfc9609c.jpg"],
    ["Mika", "Seraph of the End", "https://i.pinimg.com/564x/bc/61/b2/bc61b2c625990c01d9e531757c005912.jpg"],
    ["Yuu", "Seraph of the End", "https://i.pinimg.com/564x/82/f5/cc/82f5cca29584b0733dbeee64100f2dd3.jpg"],
    ["Guren", "Seraph of the End", "https://i.pinimg.com/564x/e2/5f/8b/e25f8b33a0973c89b68ae4a2f523ed4e.jpg"],
    ["Son Goku", "Dragon Ball", "https://i.pinimg.com/564x/7a/2e/b8/7a2eb848eaf783479564a8cc382f2882.jpg"],
    ["Chichi", "Dragon Ball", "https://i.pinimg.com/564x/1a/59/21/1a59216534cd6f4407b3584cff1d2448.jpg"],
    ["Piccolo", "Dragon Ball", "https://i.pinimg.com/736x/3f/88/64/3f8864ce2735d6eb29185c2336b3f0c6.jpg"],
    ["Freezer", "Dragon Ball", "https://i.pinimg.com/564x/cb/e5/0b/cbe50bf0982551faefe77f52de0a5cb5.jpg"],
    ["Vegeta", "Dragon Ball", "https://i.pinimg.com/564x/dd/c9/a3/ddc9a3e120389a99e10ed76cdc66ae52.jpg"],
    ["Bulma", "Dragon Ball", "https://i.pinimg.com/736x/e2/e4/6f/e2e46f9267c220eda92db1b70387c753.jpg"],
    ["Videl", "Dragon Ball", "https://i.pinimg.com/564x/05/81/ec/0581ec55009dfd7b99987e342a18abd1.jpg"],
    ["Lunch", "Dragon Ball", "https://i.pinimg.com/564x/a3/03/6b/a3036b72edda14f2bc9b383b87e756f3.jpg"],
    ["C-18", "Dragon Ball", "https://i.pinimg.com/564x/0b/f5/59/0bf55958e0adecddd6b339791d9dba31.jpg"],
    ["Boo", "Dragon Ball", "https://i.pinimg.com/564x/5e/2c/15/5e2c15cccec9fdedf68dac8bf3dc70f6.jpg"],
    ["Son Gohan", "Dragon Ball", "https://i.pinimg.com/564x/c8/c8/5f/c8c85f8fb8ebdfd8dca1074f0b429a4b.jpg"],
    ["Cell", "Dragon Ball", "https://i.pinimg.com/564x/e1/0e/51/e10e51d20706082f34fecbd2cbd09887.jpg"],
    ["Gojo", "Jujutsu Kaisen", "https://i.pinimg.com/736x/38/19/26/381926437d67e759cd922cea7f9e1a5f.jpg"],
    ["Yuji", "Jujutsu Kaisen", "https://i.pinimg.com/564x/1f/af/d1/1fafd1897c9257f408dee7b0c68a7c22.jpg"],
    ["Megumi", "Jujutsu Kaisen", "https://i.pinimg.com/736x/1d/03/67/1d036787105ca65cee1cd0bd0b513919.jpg"],
    ["Nobara", "Jujutsu Kaisen", "https://i.pinimg.com/564x/37/02/c6/3702c688019f3333a386eee3c10fbc16.jpg"],
    ["Maki", "Jujutsu Kaisen", "https://i.pinimg.com/736x/a0/50/2a/a0502a6305b849bd5516f90a42fd27df.jpg"],
    ["Yuta", "Jujutsu Kaisen", "https://i.pinimg.com/564x/f7/b2/2c/f7b22c37fb753d9d0e95ad0ca1813fb2.jpg"],
    ["Mai", "Jujutsu Kaisen", "https://i.pinimg.com/564x/27/e9/55/27e955d1a74f3efc29c197798fd93b85.jpg"],
    ["Aoi Todo", "Jujutsu Kaisen", "https://i.pinimg.com/564x/df/de/0b/dfde0b8b5000a5b3678b96e724c1d807.jpg"],
    ["Kento", "Jujutsu Kaisen", "https://i.pinimg.com/564x/d2/b2/90/d2b290e8cf7898eefdd64b68ae477849.jpg"],
    ["Yuki Tsukumo", "Jujutsu Kaisen", "https://i.pinimg.com/736x/ee/75/f2/ee75f286ef676efa6bc675a2d73d8d09.jpg"],
    ["Geto", "Jujutsu Kaisen", "https://i.pinimg.com/736x/a3/a2/76/a3a27635de5b1703cb940961431eb8e0.jpg"],
    ["Toji", "Jujutsu Kaisen", "https://i.pinimg.com/564x/8f/34/02/8f340285e0a39b748a87a25315227bc5.jpg"],
    ["Sukuna", "Jujutsu Kaisen", "https://i.pinimg.com/736x/6a/51/5b/6a515ba660cb94b5189ac1dd14c502f0.jpg"],
    ["Ichigo", "Bleach", "https://i.pinimg.com/736x/dd/18/9d/dd189dfaafbea23379b7093b3bc61fe6.jpg"],
    ["Sosuke Aizen", "Bleach", "https://i.pinimg.com/564x/77/64/33/776433ec797b6cbc2131f65355812f2e.jpg"],
    ["Nelliel", "Bleach", "https://i.pinimg.com/564x/cb/c8/da/cbc8da017058361e3bcd7be5627594d5.jpg"],
    ["Kenpachi", "Bleach", "https://i.pinimg.com/564x/5b/63/4f/5b634f325dc7a44d91f1f5ae6ab0d183.jpg"],
    ["Retsu", "Bleach", "https://i.pinimg.com/564x/c2/e1/b1/c2e1b161662632ab95301d81e6e6e2d8.jpg"],
    ["Rangiku Matsumoto", "Bleach", "https://i.pinimg.com/736x/70/cf/5a/70cf5acb03af10295364d5fe55d1f4c6.jpg"],
    ["Orihime Inoue", "Bleach", "https://i.pinimg.com/564x/c1/71/27/c1712712fa56834844c34a11a3e0618a.jpg"],
    ["Thorfinn", "Vinland Saga", "https://i.pinimg.com/564x/fc/2c/8b/fc2c8b775f36d9a4f941c4589ca286fe.jpg"],
]

// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_anime`;


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
