let gens= [
["Tom Holland", "https://i.pinimg.com/564x/1f/11/ec/1f11ecfc6e2464324db62583eedac088.jpg"],
["Thimotée Chalamet", "https://i.pinimg.com/564x/ee/1d/ab/ee1dab68eddea0a26d2857203d46c117.jpg"],
["Ryan Gosling", "https://i.pinimg.com/564x/b9/7b/8c/b97b8c87092b283121be51447f5bdfd4.jpg"],
["Chris Hemsworth", "https://i.pinimg.com/564x/b4/78/1d/b4781d3d79fe3bbc44a88ba15405bc1e.jpg"],
["Tom Hiddleston", "https://i.pinimg.com/564x/1d/6d/f6/1d6df6fd3b56ae662be152986c0e3c11.jpg"],
["Edouard Baer", "https://i.pinimg.com/564x/f7/e1/ab/f7e1ab78d19d8aa933392c99063ce527.jpg"],
["Alain Chabat", "https://i.pinimg.com/564x/c6/11/cc/c611cc17c14c7facaf59401c5c4f8fa1.jpg"],
["David Tennant", "https://i.pinimg.com/564x/b7/d1/5a/b7d15af8a38b731384bea8da32f46ad8.jpg"],
["Michael Sheen", "https://i.pinimg.com/564x/6f/4b/d4/6f4bd4c1574053ca020373fbd875dcc4.jpg"],
["Ryan Reynolds", "https://i.pinimg.com/564x/e4/ee/9c/e4ee9c6ef9e082ad22bd3aa89db7afe2.jpg"],
["Jim Parsons", "https://i.pinimg.com/564x/74/3c/9c/743c9cddb68d1499fe3e36dc42a5bd52.jpg"],
["Andrew Scott", "https://i.pinimg.com/564x/14/92/49/14924987591e56b9869471ec9acaae25.jpg"],
["Robert Downey Jr", "https://i.pinimg.com/564x/31/3e/89/313e890db28affe2d55372e9f34b6ac0.jpg"],
["Zendaya", "https://i.pinimg.com/564x/c8/ec/a9/c8eca99ef8d63ed6e932e543c962b2bb.jpg"],
["Jim Carrey", "https://i.pinimg.com/564x/e6/5d/d6/e65dd6d033f64efc22762a2ce4a4b005.jpg"],
["Joaquin Phoenix", "https://i.pinimg.com/564x/ff/a6/79/ffa6792a7b1ce909f64efea92a6d3b28.jpg"],
["Michael J Fox", "https://i.pinimg.com/564x/64/6a/d9/646ad97c394bdda459d7fa48ef1040b7.jpg"],
["Léa Seydoux", "https://i.pinimg.com/564x/68/c1/36/68c1364af3e2368f7ddbf51610e72834.jpg"],
["Johnny Depp", "https://i.pinimg.com/564x/b2/d7/21/b2d721b29c087751a0d3d0aad7477c86.jpg"],
["Christopher Lloyd", "https://i.pinimg.com/564x/9f/53/5b/9f535b6810a477055ccef5ba6d9983c8.jpg"],
["Millie Bobby Brown", "https://i.pinimg.com/564x/51/2a/22/512a22dca8dc465ed6e4a74ac4eeb281.jpg"],
["Chris Evans", "https://i.pinimg.com/564x/ab/b8/8f/abb88fe4cc8e13fe7d49f1c56be8eccd.jpg"],
["Benedict Cumberbatch", "https://i.pinimg.com/564x/c2/a6/2d/c2a62dfaeaf58d65e0f45b309cb9f297.jpg"],
["Madelaine Petsch", "https://i.pinimg.com/564x/61/5f/05/615f05dd347edae1a0838a7a0d5d083d.jpg"],
["Elliot Paige", "https://i.pinimg.com/564x/c9/ce/fc/c9cefcf3e9834770449b35217107b359.jpg"],
["Ariana Grande", "https://i.pinimg.com/564x/61/30/94/613094e3d09d6b618ff6c5963ac6dd0e.jpg"],
["Matt Smith", "https://i.pinimg.com/564x/97/c4/33/97c433609d7bcd01a62d30203f77f095.jpg"],
["Elizabeth Gillies", "https://i.pinimg.com/564x/49/22/ce/4922cebaa3ff47de08d860babe19b0bb.jpg"],
["Blake Lively", "https://i.pinimg.com/564x/ba/21/3b/ba213bfbae732494495793a515d2ff3e.jpg"],
["The Rock", "https://i.pinimg.com/564x/23/a9/b3/23a9b346ef9fc69ef068f1b66e89d08f.jpg"],
["Josephine Langford", "https://i.pinimg.com/564x/30/94/56/30945687f36289bc455d6fd97c2efc92.jpg"],
["Jennifer Lawrence", "https://i.pinimg.com/564x/06/43/e5/0643e577a907ab3b624a8d0ce83dcba1.jpg"],
["Scarlett Johansson", "https://i.pinimg.com/564x/bd/63/d1/bd63d1466be956372998dcd338875f01.jpg"],
["Emma Watson", "https://i.pinimg.com/564x/0b/db/99/0bdb997bdb94b1e70d9f71ce500cf536.jpg"],
["Chris Pratt", "https://i.pinimg.com/564x/67/98/2f/67982f6a31af34fecbc250086cffa4be.jpg"],
["Eva Green", "https://i.pinimg.com/564x/66/ea/fb/66eafbfab8d5394ae9dc0bf3f2224aa4.jpg"],
["Collin Pharrell", "https://i.pinimg.com/564x/a9/94/32/a994325ef9d6f398430189425256760e.jpg"],
["Emma Mackey", "https://i.pinimg.com/564x/39/50/8c/39508c47caf5e6aa2656f7dcee7ad446.jpg"],
["Louis Partrige", "https://i.pinimg.com/564x/e6/6a/88/e66a883d36d8d8c377984641b4adb90b.jpg"],
["Tom Felton", "https://i.pinimg.com/564x/27/fb/6a/27fb6ae6d520762c79b5b9e2b64e58eb.jpg"],
["Robert Pattinson", "https://i.pinimg.com/564x/e2/8f/68/e28f686a1f34f1323e1961642896fdcf.jpg"],
["Ed Westwick", "https://i.pinimg.com/564x/bf/b9/44/bfb9449864db42c37a41afc42d412dcb.jpg"],
["Brad Pitt", "https://i.pinimg.com/564x/ad/14/0c/ad140cd76cae25f866c444bc50032c7b.jpg"],
["Angelina Jolie", "https://i.pinimg.com/564x/c2/5d/71/c25d7191f3af4a59247e54b26e253621.jpg"],
["Will Smith", "https://i.pinimg.com/564x/88/05/0e/88050ecce8345ce7388dd514ee203264.jpg"],
["Leonardo Dicaprio", "https://i.pinimg.com/564x/91/25/cf/9125cf60e440d6d3915b2de4b6ec9b4c.jpg"],
["Karen Gillian", "https://i.pinimg.com/564x/d6/6c/f5/d66cf505aea34f7391f3948b17b45a27.jpg"],
["Tim Curry", "https://i.pinimg.com/564x/11/81/97/118197a7bf3383c512fcd13729008337.jpg"],
["Gal Gadot", "https://i.pinimg.com/564x/65/b0/6b/65b06b2dbdd2777e825e7b2baf318bb2.jpg"],
["Jennette Mc Curdy", "https://i.pinimg.com/564x/2c/ed/0b/2ced0b98f72b0aa37868be895cec8b4a.jpg"],
["Maggie Smith", "https://i.pinimg.com/564x/2e/a0/c7/2ea0c7ad4e385397b666e5a6e8cd988e.jpg"],
["Natalie Portman", "https://i.pinimg.com/564x/51/ad/f9/51adf9c81cf0f3480e0cc1c9d74cc593.jpg"],
["Noah Schnapp", "https://i.pinimg.com/564x/fe/95/9b/fe959bd2d6625f764efec6e6aa85e75d.jpg"],
["Adam Driver", "https://i.pinimg.com/564x/4a/29/88/4a29882c4db4c76fe7b3dc8e32c1be4d.jpg"],
["Cole Sprouse", "https://i.pinimg.com/564x/97/fb/b5/97fbb5448770da93f1ed579b714d83ab.jpg"],
["Chadwick Boseman", "https://i.pinimg.com/564x/f6/92/b2/f692b27411051dd01a4398c65e7c3714.jpg"],
["Rosa Salazar", "https://i.pinimg.com/564x/2a/c8/26/2ac82640ffcf8c5ea140b10b1758e32f.jpg"],
["Rachel McAdams", "https://i.pinimg.com/564x/30/7f/34/307f342ead25ea05ad3c2649c128375c.jpg"],
["Orlando Bloom", "https://i.pinimg.com/564x/2a/a4/5e/2aa45e2c7f8189f641b6ce2cc33c819f.jpg"],
["Franck Dubosc", "https://i.pinimg.com/564x/61/44/6c/61446c29dd015b595ef10cc57791d438.jpg"],
["Gérard Depardieu", "https://i.pinimg.com/564x/79/bb/3b/79bb3bb48780f45041d4a92fd40f63a4.jpg"],
["Anne Hathaway", "https://i.pinimg.com/564x/3a/e6/45/3ae645d81ffe1b59d7dcec5c89567784.jpg"],
["Helena Boham Carter", "https://i.pinimg.com/564x/29/e5/34/29e53492b9f0cdc160338e57d46605cc.jpg"],
["Mimi Mathy", "https://i.pinimg.com/564x/3a/ad/da/3aadda019e39bbe558f797b4c49894fe.jpg"],
["Nick Jonas", "https://i.pinimg.com/564x/28/f0/f1/28f0f113bb964e3fd246deadb5013aa3.jpg"],
["Lady Gaga", "https://i.pinimg.com/564x/cf/b4/b5/cfb4b589e96985a275cdd3dc9ab983e3.jpg"],
["Bradley Cooper", "https://i.pinimg.com/564x/91/fa/8d/91fa8db38d6ab5d7d529c29e080cb2ae.jpg"],
["Rihanna", "https://i.pinimg.com/564x/5f/a5/97/5fa59705a81c9c9194ec4b2b43ee3663.jpg"],
["Tom Ellis", "https://i.pinimg.com/564x/20/a6/73/20a673e10dcad3f9409616202be48779.jpg"],
["Katherine Langford", "https://i.pinimg.com/564x/06/10/39/061039b9bc6804cee85c134dc28a63ee.jpg"],
["Miley Cyrus", "https://i.pinimg.com/564x/96/cc/a7/96cca787f1e8c94451f9507476290089.jpg"],
["Sabrina Carpenter", "https://i.pinimg.com/564x/ef/b1/6c/efb16ca2abdc9bb9ea1f6be7fce8d9f0.jpg"],
["Song Kang", "https://i.pinimg.com/564x/2a/e9/1d/2ae91dc76755509509709e2fa47fb4d3.jpg"],
["Cha Eunwoo", "https://i.pinimg.com/564x/12/eb/4c/12eb4c0e29a936fac2362a22d1bcd7fc.jpg"],
["Hwang In Yeop", "https://i.pinimg.com/564x/0d/90/50/0d9050316da056079d882ff8567f2c5d.jpg"],
["Moon Ga Young", "https://i.pinimg.com/564x/91/a9/1b/91a91bd13488d1fbbad2086bd0e0bbb4.jpg"],
["Lily James", "https://i.pinimg.com/564x/2f/ce/9b/2fce9b9abf5a60e296dc605483476d27.jpg"],
["Margot Robbie", "https://i.pinimg.com/564x/d5/d2/96/d5d296a30e862efe9a3622f28b09e17e.jpg"],
["Christian Bale", "https://i.pinimg.com/564x/4e/a7/f9/4ea7f9c55ee5bf3e2c64df0830df5827.jpg"],
["Mark Ruffalo", "https://i.pinimg.com/564x/1e/16/46/1e164628c6043d844ac61b8f89da8ff5.jpg"],
["Marilyn Monroe", "https://i.pinimg.com/564x/ab/08/0f/ab080f71623a6ddfcaedde6c7a997999.jpg"],
["Hugh Jackman", "https://i.pinimg.com/564x/88/bb/d8/88bbd8c54ce7d77950e59ce21b3621d0.jpg"],
["Austin Butler", "https://i.pinimg.com/564x/e0/87/c4/e087c4f19d4edc3bc382556cc7ef444b.jpg"],
["Zoe Kravitz", "https://i.pinimg.com/564x/8f/42/4f/8f424f831d359ef8ca371ba47e45bc2e.jpg"],
["Anya Taylor Joy", "https://i.pinimg.com/564x/f1/5b/9c/f15b9c12305079f1d4d9c2d9d7f2c7f2.jpg"],
["Nina Dobrev", "https://i.pinimg.com/564x/e2/0c/66/e20c66e25c6736a8f30430fc41e0312d.jpg"],
["Florence Pugh", "https://i.pinimg.com/564x/6c/44/77/6c4477864a5644996cde5d854deaafe7.jpg"],
["Arnold Schwarzenegger", "https://i.pinimg.com/564x/55/34/6f/55346f3fef242f97d2db9a602ad1af79.jpg"],
["Ncuti Gatwa", "https://i.pinimg.com/564x/09/58/6c/09586cebffc6cf1f9d5643179b7395c0.jpg"],
["Kit Connor", "https://i.pinimg.com/564x/b1/81/78/b181780e70e15b9b0016d94b6164e4ee.jpg"],
["Joe Locke", "https://i.pinimg.com/564x/71/4b/12/714b1207f4070c7a13b6b90bd36dc201.jpg"],
["Yasmin Finney", "https://i.pinimg.com/564x/aa/64/f4/aa64f4963654b63cdde0f99098dd44cd.jpg"],
["Adèle Exarchopoulos", "https://i.pinimg.com/736x/89/79/64/897964d6d554872056de13eb05530157.jpg"],
["Pierre Niney", "https://i.pinimg.com/564x/1f/bc/c0/1fbcc01b62322dec72a925f4c1ab3caf.jpg"],
["François Civil", "https://i.pinimg.com/564x/f2/50/d0/f250d010e68bedcc7523f04586b8e4ff.jpg"],
["Jean Dujardin", "https://i.pinimg.com/564x/52/eb/f1/52ebf1c57693074e38c43e3ddf2ff3ac.jpg"],
["Henry Cavill", "https://i.pinimg.com/564x/57/2d/bb/572dbb29fa8b64e2c32d0941ac25116e.jpg"],
["Andrew Garfield", "https://i.pinimg.com/736x/0e/89/9f/0e899f864746d4381778db7310e069d7.jpg"],
["Tobey Maguire", "https://i.pinimg.com/564x/97/54/b0/9754b038a8d2b71b6b7a4431d8c35d07.jpg"],
["Hugh Grant", "https://i.pinimg.com/564x/15/29/07/15290710024aae3c995de2884c81911a.jpg"],
["Ian Somerhalder", "https://i.pinimg.com/736x/ba/f6/96/baf696691fb381457046dab7af04ea66.jpg"],
["Patrick Dempsey", "https://i.pinimg.com/736x/43/19/68/4319688588e2b4cb28d7100a0e88261c.jpg"],
["Christian Bale", "https://i.pinimg.com/564x/3a/49/f5/3a49f54bcd9506b13c34bfaf5d50d46e.jpg"],
["Paul Rudd", "https://i.pinimg.com/564x/83/e8/2d/83e82db23f8f1833b894d9daf5d9cbb6.jpg"],
["Colin Firth", "https://i.pinimg.com/564x/25/32/e9/2532e98524d73a0f375cd4daa1746d18.jpg"],
["Evan Peters", "https://i.pinimg.com/564x/40/cb/23/40cb2371752c149cccdd66481fbf0f41.jpg"],
["Guillaume Canet", "https://i.pinimg.com/564x/70/4c/61/704c61c6899dac76ce130e6bf8c15247.jpg"],
["Marion Cotillard", "https://i.pinimg.com/564x/e9/5a/54/e95a545c14d7cb4db8cb88471667af48.jpg"],
["Camille Cottin", "https://i.pinimg.com/564x/73/c2/8b/73c28b1d754d64756cbc02e3b0b568d4.jpg"],
["Julia Roberts", "https://i.pinimg.com/564x/94/56/f2/9456f2df28bdc6432b45f534ae09b6f4.jpg"],
["Eddie Redmayne", "https://i.pinimg.com/564x/3c/66/ef/3c66efe18eaa90002ffbce1f6bed0416.jpg"],
["Mike Faist", "https://i.pinimg.com/736x/c3/ba/ce/c3bacec6f86f95c52b1a834e34a98a6a.jpg"],
["Heith Ledger", "https://i.pinimg.com/564x/38/c5/e6/38c5e6035c6e204e8eb12011ccbcc0bf.jpg"],
["Adam Sandler", "https://i.pinimg.com/564x/76/c6/b2/76c6b2c3d34dc0d59f672ffb8b0a3330.jpg"],
["Andy Samberg", "https://i.pinimg.com/736x/0d/80/bb/0d80bb2f6e6ca342a731900b0b4eb988.jpg"],
["Audrey Fleurot", "https://i.pinimg.com/564x/c6/6e/4c/c66e4c876469374e0e49423eb1191450.jpg"],
["Virginie Efira", "https://i.pinimg.com/564x/9e/97/2f/9e972f4a91dd4dd6a7d06c6726d5e56d.jpg"],
["Matthew Perry", "https://i.pinimg.com/736x/80/14/62/801462dbfc9428190736d087c4d00bd4.jpg"],
["Cillian Murphy", "https://i.pinimg.com/564x/e1/ab/a9/e1aba98098232e3cc83d8937e9f63797.jpg"],
["Helen McCrory", "https://i.pinimg.com/564x/dc/35/f3/dc35f38fc22a52ac9dfa3c1d21fcd7dc.jpg"],
["Finn Cole", "https://i.pinimg.com/564x/42/05/7c/42057c7c7aec81a1e17f3a4cb3d95090.jpg"],
["Courteney Cox", "https://i.pinimg.com/564x/6c/3b/07/6c3b07cdc7bbc34fd4b5c0191c3bb874.jpg"],
["Matt Leblanc", "https://i.pinimg.com/564x/d8/4f/74/d84f74297677affb8f40fe9843eba1f5.jpg"],
["Michael B Jordan", "https://i.pinimg.com/564x/cd/80/4c/cd804ceaff3a3e5ce0eed33ce0664756.jpg"],
["Sophie Marceau", "https://i.pinimg.com/564x/f0/96/f3/f096f36685789b18c4c035b490d12489.jpg"],
["Aidan Gallagher", "https://i.pinimg.com/564x/60/d1/32/60d1327fb6c7c6aef9cb373982b529bd.jpg"],
["Keira Knightley", "https://i.pinimg.com/564x/12/be/c0/12bec0c86fac599f25ba0fac58c81d1d.jpg"],
["Aaron Taylor-Johnson", "https://i.pinimg.com/736x/e3/e7/94/e3e794842d0df0ab6045c17d0cb86eda.jpg"],
]
    
// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_acteurs`;


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
