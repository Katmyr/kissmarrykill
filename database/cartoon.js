let gens= [
["Rick", "Rick & Morty", "https://i.pinimg.com/236x/34/fd/54/34fd54b29fedb82e075732e328d1eb89.jpg"],
["Morty", "Rick & Morty", "https://i.pinimg.com/236x/6b/bb/b8/6bbbb8473690a996984b33240b33157a.jpg"],
["Charlie", "Hazbin Hotel", "https://i.pinimg.com/236x/fb/0b/b4/fb0bb418b497a8193423bcc722f0c440.jpg"],
["Alastor", "Hazbin Hotel", "https://i.pinimg.com/236x/23/82/7d/23827db39f367a7478a371ded3f1bf72.jpg"],
["Angel Dust", "Hazbin Hotel", "https://i.pinimg.com/236x/80/4b/15/804b1535f06208ab53fe2fa9e1551e01.jpg"],
["Vaggie", "Hazbin Hotel", "https://i.pinimg.com/564x/90/a4/e4/90a4e4598019f69eeba1ab47631db029.jpg"],
["Husk", "Hazbin Hotel", "https://i.pinimg.com/236x/71/48/b5/7148b5249715c27eb81da90e9fa6ad01.jpg"],
["Cherri Bomb", "Hazbin Hotel", "https://i.pinimg.com/236x/80/cb/7d/80cb7d7d4c228cf078c7cd112347e55e.jpg"],
["Cartman", "South Park", "https://i.pinimg.com/236x/d4/5c/c2/d45cc21bf10c31bdb98f0f1c4d28c7b0.jpg"],
["Chef", "South Park", "https://i.pinimg.com/236x/6d/c0/03/6dc003a6e592807878619a8555374b9e.jpg"],
["Kyle", "South Park", "https://i.pinimg.com/564x/da/9c/0d/da9c0d3a71fd82d0241ef5a7ed8960c6.jpg"],
["Kenny", "South Park", "https://i.pinimg.com/564x/c5/16/20/c51620249df667e7652882dd119a41b1.jpg"],
["Stan", "South Park", "https://i.pinimg.com/564x/ae/27/4f/ae274f29fbdd3881eef8706e35a08838.jpg"],
["Sam", "Totally Spies", "https://i.pinimg.com/236x/0f/a4/93/0fa493dcad5d00b8e2f13736959a0131.jpg"],
["Clover", "Totally Spies", "https://i.pinimg.com/564x/14/55/f5/1455f52e3c9b324270739ed4b0f43b42.jpg"],
["Alex", "Totally Spies", "https://i.pinimg.com/564x/cb/51/04/cb5104af4dc5549401c3dcfc289bc089.jpg"],
["Jerry", "Totally Spies", "https://i.pinimg.com/236x/64/37/a9/6437a960ebc468eede4faa1efb459ce5.jpg"],
["Mandy", "Totally Spies", "https://i.pinimg.com/236x/80/db/b7/80dbb747852017550bbc0de404229eb6.jpg"],
["Mabel", "Gravity Falls", "https://i.pinimg.com/564x/5e/01/0f/5e010fe204f2e13f22ac46ae1d6272b5.jpg"],
["Dipper", "Gravity Falls", "https://i.pinimg.com/564x/e3/df/bf/e3dfbf620b43ac5d8289a3cca40a7ef7.jpg"],
["Oncle Stan", "Gravity Falls", "https://i.pinimg.com/564x/fe/16/1e/fe161e1d14b0509e650f173273ad87b0.jpg"],
["Bill Cipher", "Gravity Falls", "https://i.pinimg.com/564x/cb/72/91/cb7291031e3de9af88c124ac57ab1171.jpg"],
["Wendy", "Gravity Falls", "https://i.pinimg.com/564x/f7/a5/aa/f7a5aa8d70e2838ffbe3c34590a789c3.jpg"],
["Homer", "Les Simpsons", "https://i.pinimg.com/236x/e2/98/0d/e2980d8d3cbf515d102c295f76012d7f.jpg"],
["Marge", "Les Simpsons", "https://i.pinimg.com/564x/aa/57/de/aa57de0347b5470a6de8e46ca160c948.jpg"],
["Bart", "Les Simpsons", "https://i.pinimg.com/564x/8d/b6/cb/8db6cb3f7bff3bf8b29a65c0a98aa1ed.jpg"],
["Lisa", "Les Simpsons", "https://i.pinimg.com/564x/81/dc/a3/81dca3fa5aad979c4d03b6361edd1101.jpg"],
["Martin", "Martin Mystère", "https://i.pinimg.com/236x/48/9c/b0/489cb00fa464a3fe74d91971394d07b6.jpg"],
["Diana", "Martin Mystère", "https://i.pinimg.com/236x/2d/3d/a5/2d3da5837045bc013851dae88bfa7a7e.jpg"],
["Sammy", "Scooby-Doo", "https://i.pinimg.com/564x/fc/68/f5/fc68f57fdab102e8cb96cc64ca0cf4c9.jpg"],
["Scooby-Doo", "Scooby-Doo", "https://i.pinimg.com/564x/31/ff/03/31ff03408e3b42ea23dc1125511042b5.jpg"],
["Vera", "Scooby-Doo", "https://i.pinimg.com/236x/7d/8e/fb/7d8efb9a28627787322d561ecb4cac96.jpg"],
["Fred", "Scooby-Doo", "https://i.pinimg.com/564x/61/f1/38/61f138a26ba1134838f07868a3650301.jpg"],
["Daphne", "Scooby-Doo", "https://i.pinimg.com/236x/25/9c/2c/259c2cca862d2637fcc2cddc4621a2f7.jpg"],
["Titi", "Looney Tunes", "https://i.pinimg.com/236x/b6/1b/b1/b61bb1fb13411d37f01862e8efff9213.jpg"],
["Grosminet", "Looney Tunes", "https://i.pinimg.com/236x/a6/ad/69/a6ad6981afae9e9b7070a7ffc4cdcffe.jpg"],
["Bugs Bunny", "Looney Tunes", "https://i.pinimg.com/236x/f7/f5/c8/f7f5c8e6404ad2c36a15122c1a62ac2c.jpg"],
["Phineas", "Phineas & Ferb", "https://i.pinimg.com/564x/18/98/07/189807d80a5ddd8a93ddedcb070b4ff5.jpg"],
["Ferb", "Phineas & Ferb", "https://i.pinimg.com/564x/75/fe/d5/75fed53ceefb20e2815ef8d3d5178f25.jpg"],
["Perry", "Phineas & Ferb", "https://i.pinimg.com/236x/5c/32/c9/5c32c9b0ff6646214b85eddf2a55cf21.jpg"],
["Dr Doofenshmirtz", "Phineas & Ferb", "https://i.pinimg.com/564x/7d/2d/c1/7d2dc1817dd2b2bb24d91da8e6518dfd.jpg"],
["Candice", "Phineas & Ferb", "https://i.pinimg.com/564x/c1/48/4b/c1484bff683315e62686e2b4cf49850e.jpg"],
["Vanessa", "Phineas & Ferb", "https://i.pinimg.com/236x/34/f8/ed/34f8ed4738a25d770e05d83688733c7a.jpg"],
["Kim Possible", "Kim Possible", "https://i.pinimg.com/236x/04/65/e9/0465e9807ce396ba6a1abe1eb486a885.jpg"],
["Jessica Rabbit", "Qui veut la peau de Roger Rabbit ?", "https://i.pinimg.com/236x/78/d7/0a/78d70a682fe329278c84b6b11f2ebb33.jpg"],
["Bob l'Éponge", "Bob l'Éponge", "https://i.pinimg.com/236x/2d/07/8f/2d078f5c9809debc299cbdd8e8f25f59.jpg"],
["Patrick", "Bob l'Éponge", "https://i.pinimg.com/236x/18/03/2a/18032a74056820ac4b314a11baa308d4.jpg"],
["Carlos", "Bob l'Éponge", "https://i.pinimg.com/236x/a7/2a/e3/a72ae38f412b42164df24fd2906503a2.jpg"],
["Mr Krabs", "Bob l'Éponge", "https://i.pinimg.com/564x/d2/12/59/d21259c78a8952636e47276085d2dd81.jpg"],
["Sandy", "Bob l'Éponge", "https://i.pinimg.com/236x/b2/cf/28/b2cf288afb1414374bfd8d08cf597be0.jpg"],
["Bloom", "Les Winx", "https://i.pinimg.com/564x/bc/71/51/bc7151e9f26c21a0697efa0f07365fb6.jpg"],
["Stella", "Les Winx", "https://i.pinimg.com/564x/0e/11/f7/0e11f71c867a49b791eaff3addc6a54e.jpg"],
["Musa", "Les Winx", "https://i.pinimg.com/564x/3c/4c/d3/3c4cd3a96a8c3a79f8730faa4667e7f1.jpg"],
["Flora", "Les Winx", "https://i.pinimg.com/564x/70/a5/82/70a582f9c99baed5414ca455636a31e7.jpg"],
["Layla", "Les Winx", "https://i.pinimg.com/236x/29/9a/43/299a4398469e2dcd8667195c0b72997e.jpg"],
["Roxy", "Les Winx", "https://i.pinimg.com/564x/71/e5/89/71e589c1ab85c5f6524ca64a4dcbb1ec.jpg"],
["Techna", "Les Winx", "https://i.pinimg.com/236x/b3/e2/f7/b3e2f77f294341229ed70e11c06b6769.jpg"],
["Marceline", "Adventure Time", "https://i.pinimg.com/564x/bf/e1/a4/bfe1a4bdf8cd8cb0accfc42585aad450.jpg"],
["Bubblegum", "Adventure Time", "https://i.pinimg.com/564x/95/ec/73/95ec73a6dd5220de6d4a6959996507c2.jpg"],
["Finn", "Adventure Time", "https://i.pinimg.com/236x/04/4e/46/044e463109ccc789105872b98db89db5.jpg"],
["Jake", "Adventure Time", "https://i.pinimg.com/564x/14/85/a6/1485a6f33b1e4751390dd9fb779ff6ee.jpg"],
["Flame", "Adventure Time", "https://i.pinimg.com/564x/ae/d4/f1/aed4f1f300973c48566a427f4e8902e6.jpg"],
["Rainbow Dash", "My Little Pony", "https://i.pinimg.com/236x/e7/06/de/e706de0a6a26681f78bebfabf35ff49c.jpg"],
["Apple Jack", "My Little Pony", "https://i.pinimg.com/236x/05/93/83/0593835fd4969b85796fb85e7cf91b03.jpg"],
["Rarity", "My Little Pony", "https://i.pinimg.com/236x/fa/bd/07/fabd07eb001953fd474b6ec4e9832a3a.jpg"],
["Fluttershy", "My Little Pony", "https://i.pinimg.com/236x/69/06/c1/6906c1b348916681e9d49e8376d6a286.jpg"],
["Pinkie Pie", "My Little Pony", "https://i.pinimg.com/236x/dd/1f/03/dd1f0361d06e01480c9cef02e112b96c.jpg"],
["Twilight", "My Little Pony", "https://i.pinimg.com/236x/f0/a6/35/f0a6350667fb93e6caff0ca9ff2a48bb.jpg"],
["Princesse Celestia", "My Little Pony", "https://i.pinimg.com/564x/d5/47/56/d5475668558eb88809af429fb6633987.jpg"],
["Princesse Luna", "My Little Pony", "https://i.pinimg.com/736x/1c/e9/67/1ce967ee03dbacff3d4719091e5793e3.jpg"],
["Tom", "Tom & Jerry", "https://i.pinimg.com/236x/84/74/22/847422467444334d8b7df7ee308880a8.jpg"],
["Jerry", "Tom & Jerry", "https://i.pinimg.com/236x/2f/3c/36/2f3c36dd5244ce001eae2547fd6d151b.jpg"],
["Belle", "Les Supernanas", "https://i.pinimg.com/564x/11/bb/ab/11bbab66afc36e3eae102a08831888c9.jpg"],
["Bulle", "Les Supernanas", "https://i.pinimg.com/564x/f2/57/e1/f257e1af5637c71e2920e01b5786af99.jpg"],
["Rebelle", "Les Supernanas", "https://i.pinimg.com/564x/8d/6e/81/8d6e81d3140ec88b9543cbb80c0129e3.jpg"],
["Vi", "Arcane", "https://i.pinimg.com/564x/1c/45/eb/1c45eb740cd79cc9ec8b2330bb9b896d.jpg"],
["Viktor", "Arcane", "https://i.pinimg.com/564x/95/ae/2f/95ae2f28646da04928a192389a93cb28.jpg"],
["Mel", "Arcane", "https://i.pinimg.com/564x/93/38/ed/9338ed936523e7407149f3da9c479e8a.jpg"],
["Jinx", "Arcane", "https://i.pinimg.com/564x/72/5c/ec/725cecbe7757b615c45e7710fc591ba5.jpg"],
["Caitlyn", "Arcane", "https://i.pinimg.com/564x/b2/94/71/b29471dbe98500e70b07cd6b50b0960e.jpg"],
["Jayce", "Arcane", "https://i.pinimg.com/564x/26/69/c6/2669c6514cc09f61df670dc883b7a1a6.jpg"],
["Ekko", "Arcane", "https://i.pinimg.com/564x/6c/dc/3f/6cdc3f6222913c0bfff1fa40a2bfeeff.jpg"],
["Hormone Monstress", "Big Mouth", "https://i.pinimg.com/564x/f4/08/67/f40867dc4ac2d1d8b1aec271a388f159.jpg"],
["Nick", "Big Mouth", "https://i.pinimg.com/564x/a9/7b/3d/a97b3dc28f622a7acd5efb4a48797d06.jpg"],
["Andrew", "Big Mouth", "https://i.pinimg.com/564x/44/bb/04/44bb04dac57a9b70d22e2510c1585701.jpg"],
["Jessi", "Big Mouth", "https://i.pinimg.com/564x/6c/0a/c1/6c0ac1b99320d1cb9a284ed5c3db55d7.jpg"],
["Jay", "Big Mouth", "https://i.pinimg.com/564x/75/32/6a/75326a463af7c37a6871d2de5fed2716.jpg"],
["Missy", "Big Mouth", "https://i.pinimg.com/564x/6d/08/e6/6d08e665625c64cb3b5d410ae47fb957.jpg"],
["Peppa Pig", "Peppa Pig", "https://i.pinimg.com/564x/74/ba/85/74ba85ced7295711f889a3319693251f.jpg"],
["Maman Pig", "Peppa Pig", "https://i.pinimg.com/564x/69/cf/6c/69cf6cec40e3d8ccc014fb10ce04bfcc.jpg"],
["Papa Pig", "Peppa Pig", "https://i.pinimg.com/564x/f4/ee/cb/f4eecbab609f3ef8022baead9f2bd998.jpg"],
["Dora", "Dora l'Exploratrice", "https://i.pinimg.com/564x/5e/b2/2b/5eb22b85a84a6c998f1e9c3139d875ee.jpg"],
["Ben 10", "Ben 10", "https://i.pinimg.com/564x/bd/5d/94/bd5d948d4ff1d3427b572bb0f168dd9e.jpg"],
["Gumball", "Le Monde Incroyable de Gumball", "https://i.pinimg.com/564x/9d/e4/99/9de499d85d28a26eedfcbf09ddd28607.jpg"],
["Darwin", "Le Monde Incroyable de Gumball", "https://i.pinimg.com/564x/1f/eb/3b/1feb3b6cbc32082fc26ab06d7e9ed418.jpg"],
["Lola Bunny", "Looney Tunes", "https://i.pinimg.com/564x/a3/12/bc/a312bcc1fcd878f7e156ec96b8f3bbd8.jpg"],
["Hello Kitty", "Sanrio", "https://i.pinimg.com/736x/8b/53/4a/8b534a7e50c0498e44279babd8f4dbd0.jpg"],
["Cinamoroll", "Sanrio", "https://i.pinimg.com/564x/22/66/61/22666139d8cdff2fb2b9d1d7a5e7e182.jpg"],
["Kuromi", "Sanrio", "https://i.pinimg.com/564x/26/9b/7a/269b7a8fb6358687ad81c6bc321a8f9c.jpg"],
["My Melody", "Sanrio", "https://i.pinimg.com/736x/3b/33/1a/3b331a90de93441ad4e76c44055bdbcf.jpg"],
["Pompompurin", "Sanrio", "https://i.pinimg.com/564x/7f/1a/df/7f1adfb72d69972e2bfdae0e7dbcaa3f.jpg"],
["Frankie", "Monster High", "https://i.pinimg.com/564x/c0/f6/cf/c0f6cff65801b6c9bea8e10166a567f4.jpg"],
["Clawdeen", "Monster High", "https://i.pinimg.com/736x/9f/a7/e4/9fa7e4f959c213148d9aee93c4898898.jpg"],
["Lagoona", "Monster High", "https://i.pinimg.com/736x/9c/e9/60/9ce960304da94dba6fafbd2ae17a7b6b.jpg"],
["Ghoulia", "Monster High", "https://i.pinimg.com/564x/71/0f/4e/710f4e1311dc9fd493b2935b0c9ac459.jpg"],
["Abby Bominable", "Monster High", "https://i.pinimg.com/736x/99/96/c9/9996c9f5357c5242f2ceb9a7c2f4b6e1.jpg"],
["Draculaura", "Monster High", "https://i.pinimg.com/564x/33/e9/5e/33e95e38b4fee7207e22176ba1edf5c5.jpg"],
["Cleo", "Monster High", "https://i.pinimg.com/564x/88/c2/1b/88c21b934d554fa35de032e8af81af82.jpg"],
["Apple White", "Ever After High", "https://i.pinimg.com/564x/23/ae/69/23ae69cbf99bf33c53b9da282391062f.jpg"],
["Raven Queen", "Ever After High", "https://i.pinimg.com/564x/0c/45/ad/0c45ad1aacd9227dee8fd25f664e96cd.jpg"],
["Briar Beauty", "Ever After High", "https://i.pinimg.com/564x/07/e6/49/07e649ff8a5b4d8578924dad82b51e2f.jpg"],
]
    
function generate() {
    let person1 = gens[Math.floor(Math.random() * gens.length)];
    let person2 = gens[Math.floor(Math.random() * gens.length)];
    let person3 = gens[Math.floor(Math.random() * gens.length)];

    if (person1[0] == person2[0] || person1[0] == person3[0] || person2[0] == person3[0]) {
        setTimeout(() => {
            generate();
        }, 100);
    } else {
        document.getElementById('person1-text').innerText = person1[0];
        document.getElementById('person1-desc').innerText = person1[1];
        document.getElementById('person1-image').src = person1[2];
        document.getElementById('person2-text').innerText = person2[0];
        document.getElementById('person2-desc').innerText = person2[1];
        document.getElementById('person2-image').src = person2[2];
        document.getElementById('person3-text').innerText = person3[0];
        document.getElementById('person3-desc').innerText = person3[1];
        document.getElementById('person3-image').src = person3[2];
    }
}

generate();

