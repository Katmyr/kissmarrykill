let gens = [
    ["Mr Jack", "L'Etrange Noël de Monsieur Jack", "https://i.pinimg.com/564x/4a/2d/49/4a2d4984e0717a156f639a115521367c.jpg"],
    ["Sally", "L'Etrange Noël de Monsieur Jack", "https://i.pinimg.com/564x/92/a0/17/92a017ad3ab82da0047782e78267c5f6.jpg"],
    ["Emily", "Les Noces Funèbres", "https://i.pinimg.com/564x/dd/60/ff/dd60ff96e8bbc4aa7e045d0ebd13bfd3.jpg"],
    ["Victor Van Dort", "Les Noces Funèbres", "https://i.pinimg.com/564x/b4/cb/4e/b4cb4e6af0396da99506008ecc827746.jpg"],
    ["Pennywise", "Ça", "https://i.pinimg.com/564x/2a/1e/c4/2a1ec4c2b49aa10e8f265a0267d019e3.jpg"],
    ["La Nonne", "La Nonne", "https://i.pinimg.com/564x/e3/6c/bf/e36cbfcd6a76428e46154a096f64ad48.jpg"],
    ["Mavis", "Hôtel Transylvanie", "https://i.pinimg.com/564x/da/d2/70/dad270d54c0b826048369e1a0ee154d9.jpg"],
    ["Dracula", "Hôtel Transylvanie", "https://i.pinimg.com/564x/17/de/6d/17de6df85796fe3fda177ae85124e8f7.jpg"],
    ["Mercredi Addams", "La Famille Addams", "https://i.pinimg.com/564x/f6/f7/27/f6f727847a5b609fcdf7fbf727e1348a.jpg"],
    ["Morticia Addams", "La Famille Addams", "https://i.pinimg.com/564x/1b/62/53/1b6253779ad05788833910f3c32b6771.jpg"],
    ["Gomez Addams", "La Famille Addams", "https://i.pinimg.com/564x/3c/75/34/3c7534ab65a8ec7a292d437be715a54a.jpg"],
    ["Cousin Machin", "La Famille Addams", "https://i.pinimg.com/564x/bf/90/73/bf9073ecd1e23e1b91e79147e313eec1.jpg"],
    ["Oncle Fétide", "La Famille Addams", "https://i.pinimg.com/564x/4d/1f/03/4d1f03b1ff18537d09f27fde579b650d.jpg"],
    ["Le Joker", "Batman The Dark Knight", "https://i.pinimg.com/564x/f4/9f/30/f49f3036e50cc1e7ee3b2a35d6486435.jpg"],
    ["Frankenstein", "Frankenstein", "https://i.pinimg.com/564x/85/ce/42/85ce4267b0c09a0f6f27d6983264dd86.jpg"],
    ["Casper", "Casper", "https://i.pinimg.com/564x/dc/a2/1c/dca21c81c8504e5448ad5e6873e0113f.jpg"],
    ["Carrie", "Carrie", "https://i.pinimg.com/564x/dd/18/d0/dd18d0c164300a735326947d7e92f3df.jpg"],
    ["Jack Torrance", "The Shining", "https://i.pinimg.com/564x/07/5f/e0/075fe00c5688d5358ba4ceb9c426df3b.jpg"],
    ["Chucky", "Chucky", "https://i.pinimg.com/564x/48/ad/9a/48ad9a92effa2f8184389662eddd347c.jpg"],
    ["Tiffany", "Chucky", "https://i.pinimg.com/564x/a7/ac/07/a7ac076bf0021695fce659dadaf96c0f.jpg"],
    ["Glenn", "Chucky", "https://i.pinimg.com/564x/91/d0/88/91d088036d4857cf803105475b81672e.jpg"],
    ["Ryuk", "Death Note", "https://i.pinimg.com/564x/ff/17/99/ff1799e2316f59766b722aacd0985c71.jpg"],
    ["Annabelle", "Annabelle", "https://i.pinimg.com/564x/37/2f/65/372f656d83428fb8cb505727860931c6.jpg"],
    ["Michael Myers", "Halloween", "https://i.pinimg.com/564x/c3/2f/a3/c32fa339dff81dea851b3618bcd2d868.jpg"],
    ["Freddy Krueger", "Les Griffes de la Nuit", "https://i.pinimg.com/564x/43/02/37/430237e9c73afbdd2462e036a660f525.jpg"],
    ["Edward", "Edward aux mains d'argent", "https://i.pinimg.com/564x/51/ae/cd/51aecda7d2cc9de1f0af7c3e190705fe.jpg"],
    ["Coraline", "Coraline", "https://i.pinimg.com/564x/b0/cb/a5/b0cba58594391a1b526804f469530d04.jpg"],
    ["Sweeney Todd", "Sweeney Todd", "https://i.pinimg.com/564x/5c/a5/5e/5ca55e6247839b3a93d1c468a8e7203e.jpg"],
    ["Mrs Lovett", "Sweeney Todd", "https://i.pinimg.com/564x/05/33/4b/05334b34db045ee54b0c17376ae11d7c.jpg"],
    ["Voldemort", "Harry Potter", "https://i.pinimg.com/564x/91/d5/8a/91d58a6648e8d75392a55f5d861e3a85.jpg"],
    ["Bellatrix Lestrange", "Harry Potter", "https://i.pinimg.com/564x/82/fc/db/82fcdbbe95819bed923880683ba1719e.jpg"],
    ["Dolores Ombrage", "Harry Potter", "https://i.pinimg.com/564x/eb/96/65/eb9665a27b1dea07740f8f82c569021f.jpg"],
    ["The Mask", "The Mask", "https://i.pinimg.com/564x/7b/fb/6e/7bfb6e51b916b9daaf60b56c59b20b1c.jpg"],
    ["Lucifer", "Lucifer", "https://i.pinimg.com/564x/36/da/ff/36daffbd3847c622425fd1b84975af1e.jpg"],
    ["Billy the Puppet", "Saw", "https://i.pinimg.com/564x/3c/f4/5a/3cf45a0bfdd3213685eb12df4014599c.jpg"],
    ["La Sorcière de l'Ouest", "Le magicien d'Oz", "https://i.pinimg.com/564x/1a/7c/7a/1a7c7a84597649930ca246e8e178e589.jpg"],
    ["Ange Pleureur", "Doctor Who", "https://i.pinimg.com/564x/67/d1/88/67d188474870c23076ef36995f59981f.jpg"],
    ["Ghostface", "Scream", "https://i.pinimg.com/564x/10/e3/45/10e3451ea9b6b2e4284319e6de15c888.jpg"],
    ["Slenderman", "Creepypasta", "https://i.pinimg.com/564x/f1/48/e9/f148e911712f11450d0ef03386add000.jpg"],
    ["La Dame Blanche", "Légende", "https://i.pinimg.com/564x/fd/c9/01/fdc901c81b374c296eb276e802d55528.jpg"],
    ["Hannibal Lecter", "Le Silence des Agneaux", "https://i.pinimg.com/564x/b0/eb/40/b0eb40b3192a09067eb94458fb0446a4.jpg"],
    ["Sarah Sanderson", "Hocus Pocus", "https://i.pinimg.com/564x/56/30/ee/5630eec5f7b823103160647f0f37d299.jpg"],
    ["Winifred Sanderson", "Hocus Pocus", "https://i.pinimg.com/564x/2b/54/5f/2b545f62f320e1242d3170bcbcbe4d85.jpg"],
    ["Mary Sanderson", "Hocus Pocus", "https://i.pinimg.com/564x/72/63/f3/7263f3f37f563d21c9da493cf839ee56.jpg"],
    ["Catwoman", "Batman", "https://i.pinimg.com/564x/d8/eb/5b/d8eb5bbd5fa2b53682dec92a4339f231.jpg"],
    ["Bella", "Twilight", "https://i.pinimg.com/564x/79/d2/91/79d291f3145efcf242a396fc6127b99f.jpg"],
    ["Edward", "Twilight", "https://i.pinimg.com/564x/9e/48/3d/9e483dd20b7e8b1a04477cf2143f20c7.jpg"],
    ["Tinky Winky", "Teletubbies", "https://i.pinimg.com/564x/ff/0f/64/ff0f64b6abddd3c021ff6039181e4b85.jpg"],
    ["Dipsy", "Teletubbies", "https://i.pinimg.com/564x/e3/d8/5b/e3d85be567daad65ada292499a8422bc.jpg"],
    ["Lala", "Teletubbies", "https://i.pinimg.com/564x/81/e5/85/81e585f5a6f592ff2428975bb968292d.jpg"],
    ["Po", "Teletubbies", "https://i.pinimg.com/564x/11/45/e2/1145e2ff989c15a40f2bef8c5be307e5.jpg"],
    ["Thomas", "Thomas le Train", "https://i.pinimg.com/564x/b2/bc/74/b2bc74df6904aa1c9b562d0660f22bb2.jpg"],
    ["Demogorgon", "Stranger Things", "https://i.pinimg.com/564x/32/3d/2a/323d2affed10be4c893c585206e5c66e.jpg"],
    ["La Poupée", "Squid Game", "https://i.pinimg.com/564x/96/9c/c1/969cc1a9bda05b1aa07b17cfeee9295e.jpg"],
    ["Kappa", "Folklore Japonais", "https://i.pinimg.com/564x/4e/fc/f6/4efcf689174f792bcd7f721c167e42b2.jpg"],
    ["Troll", "Folklore Nordique", "https://i.pinimg.com/564x/16/f9/cc/16f9ccf1486080b39b28a68410c26b78.jpg"],
    ["Aragog", "Harry Potter", "https://i.pinimg.com/564x/05/b4/8e/05b48edf8fefb3d7f14bc0a95dbb104b.jpg"],
    ["Kuchisake-onna", "Folklore Japonais", "https://i.pinimg.com/564x/2a/50/99/2a509901fb872ef89467f7c9cf62cc33.jpg"],
    ["Pearl", "Pearl", "https://i.pinimg.com/736x/65/9f/4c/659f4c51bcba75577707bd434be09de8.jpg"],
    ["Karaba la sorcière", "Kirikou", "https://i.pinimg.com/564x/ff/b9/83/ffb983d40f300e527c2eb4a565cd7778.jpg"],
    ["Art Le Clown", "Terrifier", "https://i.pinimg.com/736x/3d/c7/43/3dc743e86df7ffa046beeaf9aaabb1f4.jpg"],
    ["Elisabeth Sparkle", "The Substance", "https://i.pinimg.com/564x/04/df/68/04df68952f2439c5abc9ef016e5696ed.jpg"],
    ["Sue", "The Substance", "https://i.pinimg.com/564x/81/37/2e/81372e7bcc31d8fb7de022b2784de554.jpg"],
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
