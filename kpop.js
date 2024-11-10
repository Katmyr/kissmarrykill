let gens = [
    ["Lisa", "BLACKPINK", "https://i.pinimg.com/736x/82/53/43/825343e522df894caad513ac5180c552.jpg"],
    ["Jennie", "BLACKPINK", "https://i.pinimg.com/736x/01/57/23/015723b311c9ef5d9e2ab653440e843f.jpg"],
    ["Rosé", "BLACKPINK", "https://i.pinimg.com/736x/7b/cd/1a/7bcd1a3d8f573b306f6a3d6d051cea3e.jpg"],
    ["Jisoo", "BLACKPINK", "https://i.pinimg.com/564x/5e/b5/c6/5eb5c63620a4af882965db1276e544c8.jpg"],
    ["Jinyoung", "GOT7", "https://i.pinimg.com/564x/8b/5d/7d/8b5d7d20809f68b15f2d03243c061725.jpg"],
    ["Mark", "GOT7", "https://i.pinimg.com/564x/e9/d9/75/e9d975c762283fcef19950bb98fdcfa0.jpg"],
    ["JB", "GOT7", "https://i.pinimg.com/564x/18/87/fa/1887fa696b7e83000c114f0b08416586.jpg"],
    ["Bambam", "GOT7", "https://i.pinimg.com/564x/94/bb/9a/94bb9aac2079db65def17158a0ef9a2c.jpg"],
    ["Yugyeom", "GOT7", "https://i.pinimg.com/564x/71/95/2f/71952f01899218c6a51c5a9d3c605b7f.jpg"],
    ["Youngjae", "GOT7", "https://i.pinimg.com/564x/00/34/91/0034916346dad0ee6895c0ed338071e3.jpg"],
    ["Jackson", "GOT7", "https://i.pinimg.com/564x/39/a7/cc/39a7ccd3910f0272a21ea63eb411825f.jpg"],
    ["Lucas", "NCT", "https://i.pinimg.com/564x/fe/da/50/feda503ff2f033f27ed163f87ab5d357.jpg"],
    ["Taeyong", "NCT", "https://i.pinimg.com/564x/7a/a5/cc/7aa5ccbcf8f8c116953d8993dfa79d8c.jpg"],
    ["Yuta", "NCT", "https://i.pinimg.com/564x/b8/03/ef/b803efcc19488b3ff36a6d37bf5e33dc.jpg"],
    ["Shotaro", "RIIZE", "https://i.pinimg.com/736x/0a/43/67/0a4367a52097471ff47abc078e9f0990.jpg"],
    ["Hendery", "NCT", "https://i.pinimg.com/564x/66/12/ff/6612ff81b80aef9bb36c47949800eace.jpg"],
    ["Sungchan", "RIIZE", "https://i.pinimg.com/736x/a5/ac/01/a5ac0150da67b7a38413f371fbbc4767.jpg"],
    ["Jaemin", "NCT", "https://i.pinimg.com/564x/a3/19/08/a319086263753c99dd108c189b223cd0.jpg"],
    ["Xiaojun", "NCT", "https://i.pinimg.com/564x/06/c2/72/06c2729ce923c4cb324a00d873ebf14b.jpg"],
    ["Jaehyun", "NCT", "https://i.pinimg.com/564x/5e/b7/4c/5eb74cbb61ace512411295f5cf51a6fe.jpg"],
    ["Mark", "NCT", "https://i.pinimg.com/564x/32/63/56/3263562a3588d8c4fce298ef06be9460.jpg"],
    ["Johnny", "NCT", "https://i.pinimg.com/564x/06/04/ee/0604eebcf7b0e25a4750dbc9f894f331.jpg"],
    ["Doyoung", "NCT", "https://i.pinimg.com/564x/77/11/33/77113318496740e472e5b61bb3c3890b.jpg"],
    ["Haechan", "NCT", "https://i.pinimg.com/564x/6a/da/ef/6adaef5d88453b93ef43a5c866d5ade0.jpg"],
    ["Ten", "NCT", "https://i.pinimg.com/564x/e6/67/be/e667bef6f08bfa0c38130c5e4191cf3b.jpg"],
    ["Jin", "BTS", "https://i.pinimg.com/564x/2e/4e/d8/2e4ed868ac8458b2d6c255b477b1290d.jpg"],
    ["RM", "BTS", "https://i.pinimg.com/564x/d0/7c/93/d07c93e0225174196584174ecfa5b8db.jpg"],
    ["Jungkook", "BTS", "https://i.pinimg.com/564x/80/7a/9e/807a9e7fe83efc43da14ca861e67ef4d.jpg"],
    ["V", "BTS", "https://i.pinimg.com/564x/bf/20/e7/bf20e710f9d11250c543d9fe2f934e49.jpg"],
    ["Suga", "BTS", "https://i.pinimg.com/564x/1e/ce/cc/1ececc5da7aa70afcc3b08c82b56e36a.jpg"],
    ["J-Hope", "BTS", "https://i.pinimg.com/564x/b1/52/fb/b152fbb9f5a79e3026e285c73f39c77f.jpg"],
    ["Jimin", "BTS", "https://i.pinimg.com/564x/b2/1a/c1/b21ac1d814b7334d3cdf56314572bb02.jpg"],
    ["Kai", "EXO", "https://i.pinimg.com/564x/69/f9/0d/69f90d8a39ced0925e78c1fe36a00afc.jpg"],
    ["Baekhyun", "EXO", "https://i.pinimg.com/564x/f8/01/20/f80120bd9a2bb319e85656d504280444.jpg"],
    ["Chanyeol", "EXO", "https://i.pinimg.com/564x/37/b0/ff/37b0ff38e121cfced985c47574a583d8.jpg"],
    ["Sehun", "EXO", "https://i.pinimg.com/564x/de/1a/0d/de1a0d8a2917c4024147b86f70668fb7.jpg"],
    ["Suho", "EXO", "https://i.pinimg.com/564x/5f/26/ef/5f26ef7a0873b59ae5e90cac6f6ff97d.jpg"],
    ["Xiumin", "EXO", "https://i.pinimg.com/564x/5c/5e/93/5c5e9349eb4e3456970e5d9a61577625.jpg"],
    ["Chen", "EXO", "https://i.pinimg.com/564x/b9/3f/e2/b93fe2c85d2b493457c9e385c1e38e7b.jpg"],
    ["D.O", "EXO", "https://i.pinimg.com/564x/61/cf/fd/61cffd8878984da4c4e54a0e669f9def.jpg"],
    ["Bangchan", "Stray Kids", "https://i.pinimg.com/564x/1b/00/af/1b00af74a5b6938f9075fb1c728314d5.jpg"],
    ["Felix", "Stray Kids", "https://i.pinimg.com/564x/0b/5d/46/0b5d467c9f00bf47ab7f75d42f8eb891.jpg"],
    ["Hyunjin", "Stray Kids", "https://i.pinimg.com/564x/c7/6c/4c/c76c4c7c7bee0ac0ab1cb16f29dd9186.jpg"],
    ["Han", "Stray Kids", "https://i.pinimg.com/564x/bd/d4/74/bdd4741c6473c18bf2a992f4c0277733.jpg"],
    ["Changbin", "Stray Kids", "https://i.pinimg.com/564x/15/67/a9/1567a9cb715592b88764393bfbf27684.jpg"],
    ["Lee Know", "Stray Kids", "https://i.pinimg.com/564x/65/8e/46/658e46910afa291d32b49ef2445d791f.jpg"],
    ["I.N", "Stray Kids", "https://i.pinimg.com/564x/07/d8/58/07d858971aec87d08ad04d15c5170a19.jpg"],
    ["Seugmin", "Stray Kids", "https://i.pinimg.com/564x/fa/e3/d8/fae3d83a604e1beae4aebb3910a49586.jpg"],
    ["San", "Ateez", "https://i.pinimg.com/736x/bd/c8/40/bdc840e0a99bbbe763b64b88d8aa6fc2.jpg"],
    ["Wooyoung", "Ateez", "https://i.pinimg.com/564x/fe/b1/b6/feb1b67b24e684ef95cef5122a0d2efd.jpg"],
    ["Hongjoong", "Ateez", "https://i.pinimg.com/736x/65/74/62/6574627bfea4b442880d2c8c87778260.jpg"],
    ["Seonghwa", "Ateez", "https://i.pinimg.com/564x/ac/10/6e/ac106ec5c2f808d73506806e9975cd74.jpg"],
    ["Yunho", "Ateez", "https://i.pinimg.com/564x/71/46/48/7146488fc26bd223148659ac91d7490b.jpg"],
    ["Jongho", "Ateez", "https://i.pinimg.com/564x/0a/4e/91/0a4e912b25bb626ac074cc9eea591850.jpg"],
    ["Yeosang", "Ateez", "https://i.pinimg.com/564x/87/ca/ee/87caee10f04d503a27f22b461f234549.jpg"],
    ["Mingi", "Ateez", "https://i.pinimg.com/736x/cf/af/aa/cfafaa8e41cc05f2955d0a5067bc5948.jpg"],
    ["Seulgi", "Red Velvet", "https://i.pinimg.com/564x/a9/0d/da/a90ddad72b7b8d1a77df5da52b80f724.jpg"],
    ["Irène", "Red Velvet", "https://i.pinimg.com/564x/f5/fa/c7/f5fac7a4b5446dd11c41712bf24d55b8.jpg"],
    ["Joy", "Red Velvet", "https://i.pinimg.com/564x/6b/3e/cf/6b3ecfa0ad2567b851ab7f7b506cd7a3.jpg"],
    ["Wendy", "Red Velvet", "https://i.pinimg.com/564x/c5/ce/86/c5ce869166c8a64ec6e94fe8b224daed.jpg"],
    ["Yeri", "Red Velvet", "https://i.pinimg.com/736x/14/3b/e4/143be4d59708ee839acf987f312fb8a5.jpg"],
    ["Eunwoo", "ex-ASTRO", "https://i.pinimg.com/564x/cb/cc/df/cbccdfa310463cfe7302455b52f59ece.jpg"],
    ["Sanha", "ex-ASTRO", "https://i.pinimg.com/564x/41/10/13/4110137a69e8b4a2e79d1219fce8faf1.jpg"],
    ["Jinjin", "ex-ASTRO", "https://i.pinimg.com/564x/7c/c1/37/7cc137197c6e633ffd278dd3275f78b5.jpg"],
    ["MJ", "ex-ASTRO", "https://i.pinimg.com/564x/36/ce/25/36ce250511398596f2b723526aab65a6.jpg"],
    ["Rocky", "ex-ASTRO", "https://i.pinimg.com/564x/a4/23/fb/a423fb2f5646ed91bdba78b00a72cbe1.jpg"],
    ["Seungwoo", "Victon", "https://i.pinimg.com/564x/59/78/b1/5978b1cfc3fcd8e3051f1a1c8aaabe4d.jpg"],
    ["Seungsik", "Victon", "https://i.pinimg.com/564x/e7/10/57/e710573911cc9914d5d4235ea1bff8ad.jpg"],
    ["Byungchan", "Victon", "https://i.pinimg.com/564x/3b/c0/a9/3bc0a96f2fed3bfe46b6f894efb686cc.jpg"],
    ["Chan", "Victon", "https://i.pinimg.com/564x/04/91/fe/0491fe990dfbbb3addfdaa82692e4921.jpg"],
    ["Sejun", "Victon", "https://i.pinimg.com/564x/0d/e4/5d/0de45d39e40069cbd59e311648a6e065.jpg"],
    ["Subin", "Victon", "https://i.pinimg.com/564x/b3/3e/cd/b33ecd392b51298718d46c19c00b5fad.jpg"],
    ["Hanse", "Victon", "https://i.pinimg.com/564x/89/a6/de/89a6de64304230d7e42910edad335e2e.jpg"],
    ["Yeonjun", "TXT", "https://i.pinimg.com/564x/ad/6d/e9/ad6de9f346b9b904b812b4983a68ed7f.jpg"],
    ["Beomgyu", "TXT", "https://i.pinimg.com/564x/7f/2c/63/7f2c63ee3122233a32b60cfc332fcf82.jpg"],
    ["Soobin", "TXT", "https://i.pinimg.com/564x/fa/b1/6d/fab16de706deb766a38f985050ef65f7.jpg"],
    ["Taehyun", "TXT", "https://i.pinimg.com/564x/ce/10/e7/ce10e7cca041542356637800a6c8fa68.jpg"],
    ["Kai", "TXT", "https://i.pinimg.com/564x/4c/e1/22/4ce122089dfc1a7d374f89283770afcf.jpg"],
    ["IU", "Solo", "https://i.pinimg.com/564x/ee/ea/ec/eeeaec0dc5dbf1ad13888c1c61651c56.jpg"],
    ["Seungyeon", "ex-CLC", "https://i.pinimg.com/564x/7b/04/87/7b04874764a2f1ed15fa2aa24e418e18.jpg"],
    ["Seunghee", "ex-CLC", "https://i.pinimg.com/564x/9a/70/6e/9a706ece6594ab865ecc6a65c3f690ca.jpg"],
    ["Sorn", "ex-CLC", "https://i.pinimg.com/564x/80/84/78/808478c842a972ad784d1b8c1b91eb1d.jpg"],
    ["Yeeun", "ex-CLC", "https://i.pinimg.com/736x/81/21/66/812166a53fe5beb5fd3b4bb588f2f81a.jpg"],
    ["Elkie", "ex-CLC", "https://i.pinimg.com/564x/2d/5d/fa/2d5dfa77fc3594664b59846431899e51.jpg"],
    ["Eunbin", "ex-CLC", "https://i.pinimg.com/564x/07/c7/06/07c7066664fe1f9bdba28b8a6c7ce444.jpg"],
    ["Yujin", "Kep1er", "https://i.pinimg.com/564x/bc/3b/4c/bc3b4ca2625b291602387617c2cdbe01.jpg"],
    ["Bahiyyih", "Kep1er", "https://i.pinimg.com/564x/2d/60/9d/2d609d41a6e9111d2db16058549b10a9.jpg"],
    ["Dayeon", "Kep1er", "https://i.pinimg.com/564x/ef/75/b6/ef75b6cbc906c760a941df08ecf2a77e.jpg"],
    ["Xiaoting", "Kep1er", "https://i.pinimg.com/564x/86/b7/c2/86b7c2c240b40f7b5dfb5f4455692374.jpg"],
    ["Hyuna", "Solo", "https://i.pinimg.com/564x/57/8d/db/578ddbf4400e69d5d5a657c5cc30b097.jpg"],
    ["Dawn", "Solo", "https://i.pinimg.com/564x/22/32/b4/2232b4b9d90b5fa0a86b665f15a63251.jpg"],
    ["Karina", "aespa", "https://i.pinimg.com/736x/d2/aa/90/d2aa904daf8ff7e906481c17fce105a7.jpg"],
    ["Winter", "aespa", "https://i.pinimg.com/736x/0c/42/2d/0c422d69c355d8d2581142b122b3bf5b.jpg"],
    ["Giselle", "aespa", "https://i.pinimg.com/564x/45/f8/f0/45f8f0567b64fc598648c6f9ec4ef0a5.jpg"],
    ["Ningning", "aespa", "https://i.pinimg.com/736x/97/d6/f9/97d6f9c8b999e034806bc4b00c941c73.jpg"],
    ["Somi", "Solo", "https://i.pinimg.com/736x/86/15/a6/8615a6bf548de135726cb93bfc68ebba.jpg"],
    ["Sunmi", "Solo", "https://i.pinimg.com/564x/ea/ec/b3/eaecb35731cc2b2d44c8535f4e3990c7.jpg"],
    ["Wonho", "Solo", "https://i.pinimg.com/564x/1e/93/ae/1e93ae7da37dc58a2ff1d81408a75058.jpg"],
    ["Wheein", "Mamamoo", "https://i.pinimg.com/564x/ed/0d/70/ed0d70e2c37a79828176b192ee6bd9be.jpg"],
    ["Moonbyul", "Mamamoo", "https://i.pinimg.com/564x/48/7a/54/487a54a330b8a8f6280249bcdf9b78fc.jpg"],
    ["Solar", "Mamamoo", "https://i.pinimg.com/564x/c8/98/e1/c898e1ff60267a9c0f1471f2e0b3160f.jpg"],
    ["Hwasa", "Mamamoo", "https://i.pinimg.com/564x/5c/40/0b/5c400b2bdaea00ce441a621668227896.jpg"],
    ["Byeongkwan", "A.C.E", "https://i.pinimg.com/564x/9e/cd/b2/9ecdb2e991d7389b4cc01dfc3eeecae8.jpg"],
    ["Chan", "A.C.E", "https://i.pinimg.com/564x/1e/33/96/1e33968ef4cc19199740317d8271eea5.jpg"],
    ["Jun", "A.C.E", "https://i.pinimg.com/564x/59/14/2f/59142f4093043ca10604c7533ad7921d.jpg"],
    ["Chungha", "Solo", "https://i.pinimg.com/564x/83/06/62/830662fc4b619fb47d7853925ef8afce.jpg"],
    ["Bibi", "Solo", "https://i.pinimg.com/564x/4d/36/5d/4d365d7a226d1f032471bbfb2ab11bf1.jpg"],
    ["Younghoon", "The Boyz", "https://i.pinimg.com/564x/47/c9/3e/47c93e1f4d2bab94560413dabe403103.jpg"],
    ["Eric", "The Boyz", "https://i.pinimg.com/564x/13/b0/85/13b085b9128f1086be89328c15277332.jpg"],
    ["New", "The Boyz", "https://i.pinimg.com/564x/98/b4/92/98b492d10ba64d0067871400fc06e6db.jpg"],
    ["Q", "The Boyz", "https://i.pinimg.com/564x/53/08/68/530868b8628e5bf3c1828056fbc0e98b.jpg"],
    ["Juyeon", "The Boyz", "https://i.pinimg.com/564x/e5/a5/52/e5a55218d66cc8d282b3dc9bb6899656.jpg"],
    ["Kevin", "The Boyz", "https://i.pinimg.com/564x/85/e4/48/85e448225585ab88ea1768846e5c4cc1.jpg"],
    ["Rowoon", "SF9", "https://i.pinimg.com/564x/a5/4d/f2/a54df2651768a35a4dd339bf1cb8f0ae.jpg"],
    ["Taemin", "SHINee", "https://i.pinimg.com/564x/1e/b5/c8/1eb5c8e8146be4da7c5daa96025fe2dc.jpg"],
    ["Onew", "SHINee", "https://i.pinimg.com/564x/0d/c2/3f/0dc23faee2003e8df32d665a76aba2fa.jpg"],
    ["Key", "SHINee", "https://i.pinimg.com/564x/05/9e/02/059e02a695c819623f496c894cb94196.jpg"],
    ["Minho", "SHINee", "https://i.pinimg.com/564x/f2/ef/c5/f2efc527ca139e0892a1526130e736ea.jpg"],
    ["Win", "MCND", "https://i.pinimg.com/564x/ec/5b/e4/ec5be46cbe51db56d301dba3f4848e14.jpg"],
    ["Castle J", "MCND", "https://i.pinimg.com/564x/b0/68/90/b06890a7ee6562f1ecabe6a77350765c.jpg"],
    ["Huijin", "MCND", "https://i.pinimg.com/564x/91/41/ed/9141eda524a5680bcb360991153b4c62.jpg"],
    ["Minjae", "MCND", "https://i.pinimg.com/564x/cd/94/98/cd9498d8354d0cbd5411f583cfc6725d.jpg"],
    ["Bic", "MCND", "https://i.pinimg.com/564x/78/2c/0b/782c0b948b09c26932e04adb85d43530.jpg"],
    ["Jungwon", "Enhypen", "https://i.pinimg.com/564x/62/81/ff/6281ffb0634ac7332107b554449754a1.jpg"],
    ["Jake", "Enhypen", "https://i.pinimg.com/564x/77/9f/61/779f61e3c2b2e6579d643bda043f6b0b.jpg"],
    ["Ni-ki", "Enhypen", "https://i.pinimg.com/736x/1f/6a/1b/1f6a1b999d569a6d52f24caac8d6f847.jpg"],
    ["Sunghoon", "Enhypen", "https://i.pinimg.com/564x/45/c8/13/45c81399d22cc0d75c163eb67c3fe2d2.jpg"],
    ["Heesung", "Enhypen", "https://i.pinimg.com/736x/bd/56/c1/bd56c15193373d65a36f67b4ab325adf.jpg"],
    ["Jay", "Enhypen", "https://i.pinimg.com/564x/03/8a/ad/038aad1c2fcd4b3a6218f4f9e58ad9f1.jpg"],
    ["Sunoo", "Enhypen", "https://i.pinimg.com/564x/10/c5/7a/10c57adedcb2aafeb8d54580e8a86e17.jpg"],
    ["Hyeongjun", "CRAVITY", "https://i.pinimg.com/564x/bc/40/71/bc40715c910c05d3b6e4694bee3e43ff.jpg"],
    ["Allen", "CRAVITY", "https://i.pinimg.com/564x/2b/c7/c4/2bc7c41dc2d28d32bf80daddb6ae00bc.jpg"],
    ["Joohoney", "Monsta X", "https://i.pinimg.com/564x/b7/8c/89/b78c89f54c91179606eba58dd63ae86f.jpg"],
    ["Minhyuk", "Monsta X", "https://i.pinimg.com/564x/95/05/d9/9505d9f73355c7f488efe8e494752899.jpg"],
    ["Kihyun", "Monsta X", "https://i.pinimg.com/564x/16/55/d4/1655d4a022baa92e4b8d1fad5e404c63.jpg"],
    ["Hyungwon", "Monsta X", "https://i.pinimg.com/564x/2a/4a/a8/2a4aa8d98f29ba33c501fc463ec90848.jpg"],
    ["I.M", "Monsta X", "https://i.pinimg.com/564x/71/4d/a5/714da58d54ffd16a162edeead4944a01.jpg"],
    ["Shownu", "Monsta X", "https://i.pinimg.com/564x/35/37/fe/3537fe261b20a66f29dad13b19fbe8fb.jpg"],
    ["Yuhan", "WEI", "https://i.pinimg.com/564x/87/6f/fe/876ffe5ef3bd5355c7ee1725f442cc34.jpg"],
    ["Taeyeon", "SNSD", "https://i.pinimg.com/564x/b4/9a/52/b49a52299be32d7adff1e10adfdab26f.jpg"],
    ["HYO", "SNSD", "https://i.pinimg.com/564x/bf/fd/43/bffd43e1f55652a47eea7cc95986e814.jpg"],
    ["CL", "Solo", "https://i.pinimg.com/564x/a8/44/ed/a844ed5b2ec06ec15f5811311f7b4b21.jpg"],
    ["BoA", "Solo", "https://i.pinimg.com/564x/56/a4/1b/56a41b3efb6e9746ef319d6e53e5177c.jpg"],
    ["Hyolyn", "Solo", "https://i.pinimg.com/564x/16/40/d9/1640d91ab7eb6c38cfb9eb87ac30b5db.jpg"],
    ["Jessi", "Solo", "https://i.pinimg.com/564x/72/1d/3c/721d3c85d4eb28263beb48ca37569967.jpg"],
    ["MK", "ONF", "https://i.pinimg.com/564x/dc/25/af/dc25af0f08bb65f1e976e923c385af6e.jpg"],
    ["Wyatt", "ONF", "https://i.pinimg.com/564x/8f/d7/4e/8fd74e3c09669486dc919aa4f9338616.jpg"],
    ["Hyojin", "ONF", "https://i.pinimg.com/564x/d2/33/f3/d233f324aa7a2ddd84d22ca6916a05b6.jpg"],
    ["J-Us", "ONF", "https://i.pinimg.com/564x/fe/2f/fe/fe2ffe4f93f7820e96fbfe879d67cf38.jpg"],
    ["E-Tion", "ONF", "https://i.pinimg.com/564x/88/19/8b/88198b34091758394f4457d3bf45dcb9.jpg"],
    ["Yuto", "ONF", "https://i.pinimg.com/564x/cd/09/e2/cd09e29ea4f0e53cb5adae2ace946a99.jpg"],
    ["Xion", "ONEUS", "https://i.pinimg.com/564x/1b/d1/40/1bd1407d9afc689f5e940a2d50d5762b.jpg"],
    ["Leedo", "ONEUS", "https://i.pinimg.com/564x/a3/5e/78/a35e78227400c7f4535a2f6369b8df52.jpg"],
    ["Seoho", "ONEUS", "https://i.pinimg.com/564x/69/8d/1e/698d1e9a727f4f2888258ba0b4b429c1.jpg"],
    ["Ravn", "ONEUS", "https://i.pinimg.com/564x/54/5a/f4/545af4c546b8af039da2d9a9f8983156.jpg"],
    ["Keonhee", "ONEUS", "https://i.pinimg.com/564x/7b/b8/8c/7bb88c01571483a19570e66ad251e903.jpg"],
    ["Hwanwoong", "ONEUS", "https://i.pinimg.com/564x/14/4f/b7/144fb7c80301073f94c07f200a69dfc1.jpg"],
    ["Gikwang", "HIGHLIGHT", "https://i.pinimg.com/564x/72/b5/b7/72b5b73baa28daf87acdef6ddb96940a.jpg"],
    ["Yujin", "IVE", "https://i.pinimg.com/564x/13/87/ff/1387fff462e0f671db2ff4609c110e7e.jpg"],
    ["Wonyoung", "IVE", "https://i.pinimg.com/564x/d4/00/d3/d400d3d6f0084805b3f43ffeb93c79b8.jpg"],
    ["Gaeul", "IVE", "https://i.pinimg.com/564x/3a/6b/1f/3a6b1f7cb32975d0cf7e63511af1e64a.jpg"],
    ["Liz", "IVE", "https://i.pinimg.com/564x/43/2c/df/432cdfbf97e3502064bcb7d6e5717174.jpg"],
    ["Rei", "IVE", "https://i.pinimg.com/564x/a8/c2/79/a8c2790d3169e63c43a3216331463c23.jpg"],
    ["Leeseo", "IVE", "https://i.pinimg.com/564x/be/c8/2b/bec82bdde5575e113ae1325c763087c6.jpg"],
    ["Sakura", "Le Sserafim", "https://i.pinimg.com/564x/29/2a/7c/292a7cd66c9a3e3d5af5dda4f6ae3cf2.jpg"],
    ["Chaewon", "Le Sserafim", "https://i.pinimg.com/564x/cc/0f/42/cc0f429b6b978b79cbc87c2214839f45.jpg"],
    ["Yunjin", "Le Sserafim", "https://i.pinimg.com/1200x/a2/aa/5f/a2aa5f35d60a426b662686a8f4fa208f.jpg"],
    ["Kazuha", "Le Sserafim", "https://i.pinimg.com/736x/69/eb/9e/69eb9e32b2dead0486e3453597ea5b36.jpg"],
    ["Eunchae", "Le Sserafim", "https://i.pinimg.com/564x/7a/0b/9b/7a0b9bfbfef6d505dd7c6753db3e6977.jpg"],
    ["Handong", "Dreamcatcher", "https://i.pinimg.com/564x/68/41/a2/6841a21d9de1e9f59ad84815368caec4.jpg"],
    ["Siyeon", "Dreamcatcher", "https://i.pinimg.com/564x/91/3b/0e/913b0e8b77c3a7bca1144ffa7666a927.jpg"],
    ["Dami", "Dreamcatcher", "https://i.pinimg.com/564x/d1/78/ab/d178ab01eac58f2aff8bac6a2da95b63.jpg"],
    ["JiU", "Dreamcatcher", "https://i.pinimg.com/564x/88/41/3f/88413f13ed423bf863d4cb8da4187ac9.jpg"],
    ["SuA", "Dreamcatcher", "https://i.pinimg.com/564x/5d/dd/71/5ddd717ceaa34d63e024e5be69e049f4.jpg"],
    ["Yoohyeon", "Dreamcatcher", "https://i.pinimg.com/564x/dc/02/54/dc0254f206085eee4e102941f15ebebe.jpg"],
    ["Gahyeon", "Dreamcatcher", "https://i.pinimg.com/564x/d2/71/d2/d271d24e76ff1787bb0d8d4753ec8c67.jpg"],
    ["The8", "SEVENTEEN", "https://i.pinimg.com/564x/e6/84/7d/e6847d672f3f9638c63afd5203c91e11.jpg"],
    ["Joshua", "SEVENTEEN", "https://i.pinimg.com/564x/72/52/95/725295d8518b8d1be2f1761b9554c62b.jpg"],
    ["Hoshi", "SEVENTEEN", "https://i.pinimg.com/564x/4d/da/63/4dda63a7f3d02ac22897766d5dd43821.jpg"],
    ["Minji", "New Jeans", "https://i.pinimg.com/736x/9b/bb/ad/9bbbade4f56255b6991ece4ea49ebbe3.jpg"],
    ["Danielle", "New Jeans", "https://i.pinimg.com/736x/97/aa/73/97aa73c4c7a92c6babbc329b22fda51f.jpg"],
    ["Haerin", "New Jeans", "https://i.pinimg.com/736x/cf/da/c0/cfdac0cfb722a5b3fdae078941f89299.jpg"],
    ["Hyein", "New Jeans", "https://i.pinimg.com/736x/8f/7c/fa/8f7cfa6a5eafdba24049f215cacc949a.jpg"],
    ["Hanni", "New Jeans", "https://i.pinimg.com/564x/cf/0b/2b/cf0b2b811264b4a4a11956a31e24f7d0.jpg"],
    ["Ahyeon", "BABYMONSTER", "https://i.pinimg.com/736x/e4/20/3c/e4203c6a5e92b2b8b732dadcfc62f609.jpg"],
    ["Rami", "BABYMONSTER", "https://i.pinimg.com/736x/23/b4/fd/23b4fdd8f79fc564e6b28855b74a9bf6.jpg"],
    ["Chiquita", "BABYMONSTER", "https://i.pinimg.com/564x/58/c1/b7/58c1b7f9d280a4c3cbe910ee4ac2ede7.jpg"],
    ["Pharita", "BABYMONSTER", "https://i.pinimg.com/736x/0e/88/69/0e88696fbddebcdf6cdc7ee6b7053349.jpg"],
    ["Asa", "BABYMONSTER", "https://i.pinimg.com/736x/0a/20/5a/0a205acb567feccc2bf9dea50f5e1adf.jpg"],
    ["Ruka", "BABYMONSTER", "https://i.pinimg.com/736x/58/7b/e7/587be7e0cab464072fe8f07b46f13734.jpg"],
    ["Rora", "BABYMONSTER", "https://i.pinimg.com/736x/6a/68/61/6a6861c16f78e82a91cb635918b31049.jpg"],
    ["Manon", "KATSEYE", "https://i.pinimg.com/736x/62/f4/7b/62f47b1ef34645aa7f5c55867475c970.jpg"],
    ["Megan", "KATSEYE", "https://i.pinimg.com/736x/82/20/d0/8220d0396d4ed37e0b4177dca4115f4c.jpg"],
    ["Sophia", "KATSEYE", "https://i.pinimg.com/736x/59/32/ac/5932acafc693f2caf4d46643eecb03be.jpg"],
    ["Lara", "KATSEYE", "https://i.pinimg.com/736x/a4/b3/61/a4b361b273923d0c05c293e7c460ca54.jpg"],
    ["Yoonchae", "KATSEYE", "https://i.pinimg.com/736x/07/e1/b7/07e1b7aab5f1a011d275ca98a07fd149.jpg"],
    ["Daniela", "KATSEYE", "https://i.pinimg.com/736x/ca/ef/5f/caef5f721f794ab2b3c5dfe05919ad49.jpg"],
    ["Natty", "Kiss Of Life", "https://i.pinimg.com/736x/b8/2b/d5/b82bd5762b8c83bfe3d8d25c68ce6855.jpg"],
    ["Belle", "Kiss Of Life", "https://i.pinimg.com/736x/ff/b8/78/ffb878e2ae66b29279b1ea2012f431b3.jpg"],
    ["Julie", "Kiss Of Life", "https://i.pinimg.com/736x/c6/91/93/c691936928507db848ad8c757246bb28.jpg"],
    ["HANEUL", "Kiss Of Life", "https://i.pinimg.com/736x/12/64/56/126456e0fff3e3c8eddc43c607aab011.jpg"],
    ["Jurin", "XG", "https://i.pinimg.com/736x/b2/ae/a4/b2aea40ae94947963c46dd2538d0fce1.jpg"],
    ["Cocona", "XG", "https://i.pinimg.com/736x/21/77/3f/21773fb73921382ae2ef7620ba0a864f.jpg"],
    ["Harvey", "XG", "https://i.pinimg.com/736x/0d/05/1d/0d051d5bd4c9da4a958a087df92a5b4e.jpg"],
    ["Maya", "XG", "https://i.pinimg.com/736x/17/a4/2f/17a42f3f5b195adbee1e5034c1c8be37.jpg"],
    ["Juria", "XG", "https://i.pinimg.com/564x/a9/99/7e/a9997e1f7a0dcbdc191ac587b1cb0fd6.jpg"],
    ["Chisa", "XG", "https://i.pinimg.com/1200x/12/27/63/122763b8bf0370ddf9bb4ce1f64a4166.jpg"],
    ["Hinata", "XG", "https://i.pinimg.com/564x/a3/5e/34/a35e34ee31a81492fc0f63c519046f63.jpg"],
]

// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_kpop`;


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
