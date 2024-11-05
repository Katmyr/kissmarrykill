let gens = [
    ["Pr Layton", "Professeur Layton", "https://i.pinimg.com/236x/f4/b7/09/f4b7095db6e190c5a2509ffcb12ddc14.jpg"],
    ["Mario", "Mario", "https://i.pinimg.com/564x/22/9f/22/229f221c0819375972b61a23b935edc7.jpg"],
    ["Luigi", "Mario", "https://i.pinimg.com/564x/b2/2c/b8/b22cb8a7d825e5a6432d70e4f6ad5bd4.jpg"],
    ["Princesse Peach", "Mario", "https://i.pinimg.com/564x/ab/f3/aa/abf3aa9afde525d00112e7d15db0a8e9.jpg"],
    ["Princesse Daisy", "Mario", "https://i.pinimg.com/564x/ea/20/8a/ea208ac9613c3202d507eb73473228d5.jpg"],
    ["Toad", "Mario", "https://i.pinimg.com/564x/f2/8b/fc/f28bfc7bebcd8b54567ae8ad5424eb32.jpg"],
    ["Yoshi", "Mario", "https://i.pinimg.com/564x/73/7b/b7/737bb75bcc31f320e6a7b0a49040138c.jpg"],
    ["Donkey Kong", "Donkey Kong", "https://i.pinimg.com/564x/e4/fe/52/e4fe52f5ab4dd243dcaf4f83a2298c38.jpg"],
    ["Pac-Man", "Pac-Man", "https://i.pinimg.com/564x/35/3c/34/353c340ad56b7f0a97e44959df8b791c.jpg"],
    ["Zelda", "The Legend of Zelda", "https://i.pinimg.com/564x/a1/17/66/a1176654f5877b10cc95b65a4c2c98c8.jpg"],
    ["Link", "The Legend of Zelda", "https://i.pinimg.com/564x/be/26/73/be267311f0b4fbb41597734f86be021b.jpg"],
    ["Ghirahim", "The Legend of Zelda", "https://i.pinimg.com/564x/e9/d3/0d/e9d30d64a72418fabeca31ff3bcc6dfe.jpg"],
    ["Luke", "Professeur Layton", "https://i.pinimg.com/564x/f4/7e/1e/f47e1e7670738cc98c1383e1f4e9c1b2.jpg"],
    ["Katrielle Layton", "Professeur Layton", "https://i.pinimg.com/564x/a7/50/6f/a7506fc720a8bef63264d078c720a988.jpg"],
    ["Ace Attorney", "Ace Attorney", "https://i.pinimg.com/564x/95/65/88/956588528365db00ad6bc4c6a3ddbc5d.jpg"],
    ["Yuri", "Doki Doki Litterature Club", "https://i.pinimg.com/564x/ac/12/90/ac12904537fa2e9002ac8f0df32f3a7e.jpg"],
    ["Monika", "Doki Doki Litterature Club", "https://i.pinimg.com/564x/1c/27/4a/1c274ad67abea14228516d345e62e405.jpg"],
    ["Natsuki", "Doki Doki Litterature Club", "https://i.pinimg.com/564x/09/6f/9c/096f9ccc876fba18f2678c1894820dfd.jpg"],
    ["Sayori", "Doki Doki Litterature Club", "https://i.pinimg.com/564x/fb/91/b0/fb91b059e325e95c1c019269bd102781.jpg"],
    ["Lara Croft", "Lara Croft", "https://i.pinimg.com/564x/da/e4/4f/dae44fc6443ecc9cdb48aad417689228.jpg"],
    ["Tom Nook", "Animal Crossing", "https://i.pinimg.com/564x/fb/8c/a6/fb8ca6f7d92d48c60f7dadecbdf83853.jpg"],
    ["Marie", "Animal Crossing", "https://i.pinimg.com/564x/af/b1/f0/afb1f0a3c4d4f6765523b6aa11b860c8.jpg"],
    ["Kéké", "Animal Crossing", "https://i.pinimg.com/564x/53/bc/92/53bc921f9491aa2619abe23c0d8d7019.jpg"],
    ["Neferti", "Animal Crossing", "https://i.pinimg.com/564x/07/a0/32/07a03285dbcde687adf4d62e0b5de651.jpg"],
    ["Thibou", "Animal Crossing", "https://i.pinimg.com/736x/29/ff/f2/29fff2e5e41175f4d9c097c704123ff8.jpg"],
    ["Celeste", "Animal Crossing", "https://i.pinimg.com/736x/35/69/21/3569211520a11dbd2c17db5525039680.jpg"],
    ["Kirby", "Kirby", "https://i.pinimg.com/564x/f6/9f/4a/f69f4a2bf43b3f48eb9a0d444ba177f1.jpg"],
    ["Chun Li", "Street Fighter", "https://i.pinimg.com/564x/a4/19/91/a41991e1ade4bd5b989efd57d69a53cb.jpg"],
    ["Ryu", "Street Fighter", "https://i.pinimg.com/564x/2c/14/a9/2c14a9d1e78d52e4607ec8eb56971549.jpg"],
    ["Vega", "Street Fighter", "https://i.pinimg.com/564x/60/dc/99/60dc99c6eaaa5c055ddf42bbd936e1c4.jpg"],
    ["Ken", "Street Fighter", "https://i.pinimg.com/564x/ca/17/2e/ca172ebd39792bbe33aad56a6bc49e92.jpg"],
    ["Cammy", "Street Fighter", "https://i.pinimg.com/564x/04/f5/7a/04f57af2d66d33d35180f57aa7a0acad.jpg"],
    ["Mii", "Super Smash Bros", "https://i.pinimg.com/564x/2d/fc/42/2dfc42411b768768a7752f8466e63f16.jpg"],
    ["Steve", "Minecraft", "https://i.pinimg.com/564x/a8/cb/79/a8cb79a2bad5ddf7c4d4d1a16cfc8db5.jpg"],
    ["Samus", "Metroid", "https://i.pinimg.com/564x/74/c5/24/74c52407ca02fdc11c66c38bed57c5eb.jpg"],
    ["Sacha", "Pokemon", "https://i.pinimg.com/564x/e4/c6/dd/e4c6dd8f72f97d7666af87799e3f27fc.jpg"],
    ["Pikachu", "Pokemon", "https://i.pinimg.com/564x/ff/2b/f4/ff2bf4316e74dec25dd26a29a3c03471.jpg"],
    ["Rondoudou", "Pokemon", "https://i.pinimg.com/564x/32/ab/b7/32abb79d0018186e26aa1a8919a4a898.jpg"],
    ["Bowser", "Mario", "https://i.pinimg.com/564x/4e/74/08/4e7408c3372cbd8c2331a364a6b6eac1.jpg"],
    ["Pikmin", "Pikmin", "https://i.pinimg.com/564x/86/56/a0/8656a0b7b5235af0cfdc1eef719f9180.jpg"],
    ["Mega Man", "Mega Man", "https://i.pinimg.com/564x/77/6b/57/776b57a4914b986c3ba508586bd4a97c.jpg"],
    ["Bayonetta", "Bayonetta", "https://i.pinimg.com/564x/a4/a1/eb/a4a1eb16a1c68978d3f77900cb15e4f4.jpg"],
    ["Ganondorf", "The Legend of Zelda", "https://i.pinimg.com/564x/0d/64/b9/0d64b9e40ff392661e432dce29156d8c.jpg"],
    ["Pit", "Kid Icarus", "https://i.pinimg.com/564x/52/0b/12/520b1224c684749b05ab88b5cd8890b2.jpg"],
    ["Sonic", "Sonic", "https://i.pinimg.com/564x/cd/4a/8a/cd4a8a99b17ec5a7c92cea0d7eca08fb.jpg"],
    ["Inkling", "Splatoon","https://i.pinimg.com/564x/7a/98/c5/7a98c54bf23008a4639bf54b9bfb1811.jpg"],
    ["Mewtwo", "Pokemon", "https://i.pinimg.com/564x/31/94/6c/31946c1930738d848c0bda35f343ec24.jpg"],
    ["Harmonie", "Mario", "https://i.pinimg.com/564x/10/01/76/100176193a6d901307018c852309d01e.jpg"],
    ["Rayman", "Rayman", "https://i.pinimg.com/564x/0d/a2/40/0da2404e9f8352ce88c16db1ddcd08fc.jpg"],
    ["Adibou", "Adibou", "https://i.pinimg.com/564x/27/c1/0b/27c10bfbb3224772133c2b77312520a7.jpg"],
    ["Kassandra", "Assassin's Creed Odyssey", "https://i.pinimg.com/564x/e9/b1/e4/e9b1e4687726ec37f59671f37935f092.jpg"],
    ["Sora", "Kingdom Hearts", "https://i.pinimg.com/564x/91/99/b3/9199b39e596c6c613179c2cb0cb0a7c9.jpg"],
    ["Riku", "Kingdom Hearts", "https://i.pinimg.com/564x/36/38/22/3638224a2ad03b5081000716685fb8d4.jpg"],
    ["Mickey Mouse", "Kingdom Hearts", "https://i.pinimg.com/564x/88/e0/f1/88e0f1fa9a78760acadd04ee7128e3ba.jpg"],
    ["Donald Duck", "Kingdom Hearts", "https://i.pinimg.com/564x/56/01/86/56018628d5ed272a4f720a861b4ef4bf.jpg"],
    ["Dingo", "Kingdom Hearts", "https://i.pinimg.com/564x/80/b5/40/80b5403997b76f6651b0e80139b116ed.jpg"],
    ["Ela", "Rainbow Six Siege", "https://i.pinimg.com/564x/fc/0b/39/fc0b39b35cd1da7b417284fc700c8bc0.jpg"],
    ["Sonia Gothik", "Les Sims", "https://i.ibb.co/tZNQcfv/Sonia-Gothik-Les-Sims-4.png"],
    ["Arthur Morgan", "Red Dead Redemption", "https://i.pinimg.com/564x/c1/b1/82/c1b182102845695eaa0d738125319e72.jpg"],
    ["Tifa", "Final Fantasy", "https://i.pinimg.com/564x/9d/a7/1b/9da71b40a8b3f796f46c6826e8267c4a.jpg"],
    ["Cloud", "Final Fantasy", "https://i.pinimg.com/564x/cf/22/12/cf2212afc2f31a39dd04fadc3d057f52.jpg"],
    ["Foxy", "Five Nights At Freddy's", "https://i.pinimg.com/564x/1c/b0/34/1cb0341f032a281f2c71524a39ca8c74.jpg"],
    ["Freddy", "Five Nights At Freddy's", "https://i.pinimg.com/564x/31/c3/2b/31c32b80a284c88764553547d77900ac.jpg"],
    ["Bonnie", "Five Nights At Freddy's", "https://i.pinimg.com/564x/8f/c7/10/8fc7105358901a140da778eabfee195d.jpg"],
    ["Sans", "Undertale", "https://i.pinimg.com/564x/7a/77/29/7a7729833ca64892ed1840c3eef10700.jpg"],
    ["Flowey", "Undertale", "https://i.pinimg.com/564x/71/08/d2/7108d2243de04ab3fa24cdc5a858a0e7.jpg"],
    ["Reine des Archères", "Clash of Clans", "https://i.pinimg.com/564x/b9/d1/20/b9d120ce9e276c6e039b33504aeea42a.jpg"],
    ["Roi des Barbares", "Clash of Clans", "https://i.pinimg.com/564x/42/df/fb/42dffb488c8bb7aacd17448f3ac57158.jpg"],
    ["Valkyrie", "Clash of Clans", "https://i.pinimg.com/564x/44/ee/57/44ee5717f59075aa5da436b2523ef18c.jpg"],
    ["Chevaucheur de cochons", "Clash of Clans", "https://i.pinimg.com/564x/24/c9/ea/24c9ea8fa365bdf4d8c8b56b14ee6d1f.jpg"],
    ["Ursula", "Merge Mansion", "https://i.pinimg.com/564x/d3/25/e0/d325e0eb72138c0719830f552c47e21b.jpg"],
    ["Maddie", "Merge Mansion", "https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/315641783_627160479147188_8709976778899127447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=-75WaQLpXnQQ7kNvgGiHt3F&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=A5jP4YpBhhftS8bg4W-5CPX&oh=00_AYBFIGXlRX4aB_h2vVoLh0WYxRBpQCf4we7Ze2gPI6_Nyw&oe=672F4642"],
    ["Colt", "Brawl Stars", "https://i.pinimg.com/736x/25/7a/7c/257a7c2f45b75110971fe7776d586227.jpg"],
    ["Nita", "Brawl Stars", "https://i.pinimg.com/564x/c7/1d/ad/c71dad319457bb9606eb013a4d0f953d.jpg"],
    ["El Costo", "Brawl Stars", "https://i.pinimg.com/564x/28/cb/9a/28cb9ab7d78e862979990482f7949b49.jpg"],
    ["Bo", "Brawl Stars", "https://i.pinimg.com/736x/6f/12/e6/6f12e6afda2b216de5ffc4facb1afee5.jpg"],
    ["Lola", "Brawl Stars", "https://i.pinimg.com/564x/69/8f/30/698f307596b3a6cdda87a66f96f9939d.jpg"],
    ["Max", "Brawl Stars", "https://i.pinimg.com/736x/e2/4e/b9/e24eb98d6df59a7ee1bef57e75314cef.jpg"],
    ["Corbac", "Brawl Stars", "https://i.pinimg.com/564x/37/18/74/3718749ea602a19463e130d6a53eb30c.jpg"],
    ["Edgar", "Brawl Stars", "https://i.pinimg.com/564x/55/13/03/551303e384406f9129559f59c1a35316.jpg"],
    ["Ambre", "Brawl Stars", "https://i.pinimg.com/564x/3e/42/cd/3e42cd3a7e8758025e1f80f713d24ec8.jpg"],
    ["Polly", "Brawl Stars", "https://i.pinimg.com/564x/3a/5d/5a/3a5d5a63c54a944b6e4ac6923e3a037d.jpg"],
    ["Nathaniel", "Amour Sucré", "https://i.pinimg.com/564x/b8/8c/de/b88cde97d165061b740150ba7305a548.jpg"],
    ["Castiel", "Amour Sucré", "https://i.pinimg.com/564x/2a/2c/d6/2a2cd67d2b06c566c936c2291eb3ad89.jpg"],
    ["Kentin", "Amour Sucré", "https://i.pinimg.com/564x/6a/e7/cb/6ae7cbf123ee5b64ee1340005e36142b.jpg"],
    ["Priya", "Amour Sucré", "https://i.pinimg.com/564x/10/97/b1/1097b172f4f0df202412c27606f7e57e.jpg"],
    ["Armin", "Amour Sucré", "https://i.pinimg.com/564x/52/62/9b/52629bf48c244101ecfef5e97836920b.jpg"],
    ["Devon", "Amour Sucré New Gen", "https://i.pinimg.com/736x/94/df/68/94df6849f21fb8277a774df9dac10298.jpg"],
    ["Thomas", "Amour Sucré New Gen", "https://i.pinimg.com/736x/29/2e/76/292e76d58a2a6c964743ca59409217c6.jpg"],
    ["Roy", "Amour Sucré New Gen", "https://i.pinimg.com/736x/c2/99/33/c29933259e1c0aff84ea07ff3c06e3fc.jpg"],
    ["Amanda", "Amour Sucré New Gen", "https://i.pinimg.com/736x/60/2d/6a/602d6acb6413f8a29f29fac90e015365.jpg"],
    ["Jason", "Amour Sucré New Gen", "https://i.pinimg.com/736x/95/89/45/958945f3d594bb3eec2abdec6be6f348.jpg"],
    ["Cube", "Geometry Dash", "https://i.pinimg.com/564x/26/4a/a2/264aa2d59edaa2d6c090b384ad57cddf.jpg"],
    ["Lana", "Dress to Impress", "https://i.pinimg.com/736x/47/bb/e6/47bbe6cd80677a60b0612f9a8695ddfd.jpg"],
    ["Lina", "Dress to Impress", "https://i.pinimg.com/736x/b0/c6/4c/b0c64cfbdd05ea726a49a3fff7a59ec2.jpg"],
    ["Dino", "Google", "https://i.pinimg.com/564x/04/14/02/041402ed875674d596aa0a4b83b43341.jpg"],
    ["Ellie", "The Last of Us", "https://i.pinimg.com/736x/a9/d2/df/a9d2df9668c38e95565c5be358cda86d.jpg"],
    ["Joel", "The Last of Us", "https://i.pinimg.com/736x/8f/cd/a1/8fcda18e44c2634396c6a6ed8d31fcf9.jpg"],
    ["Jake", "Subway Surfers", "https://i.pinimg.com/736x/a1/42/85/a1428550f7a79f717e6c8cbdc49feccf.jpg"],
    ["Tricky", "Subway Surfers", "https://i.pinimg.com/564x/b4/96/40/b49640807a5e8a5023a990acda58aa89.jpg"],
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
