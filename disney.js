let gens= [
    ["Blanche Neige", "Blanche Neige", "https://i.pinimg.com/564x/87/a3/ba/87a3ba9a132c696b68ed4a97715d63a1.jpg"],
    ["La Méchante Reine", "Blanche Neige", "https://i.pinimg.com/564x/36/b9/c8/36b9c8143c281564121b10e371fdb3ff.jpg"],
    ["Cendrillon", "Cendrillon", "https://i.pinimg.com/236x/35/ea/2a/35ea2aa86d9a9ea08fd09c66ea1b2256.jpg"],
    ["Anastasie", "Cendrillon", "https://i.pinimg.com/236x/46/6f/e9/466fe92992140213a2820cd74a7e3db7.jpg"],
    ["Javotte", "Cendrillon", "https://i.pinimg.com/236x/b4/de/2b/b4de2ba086785e449bd99ebd14818824.jpg"],
    ["Aurore", "La Belle au Bois Dormant", "https://i.pinimg.com/236x/71/48/5c/71485c8ea13eef3505a690cc122c2e13.jpg"],
    ["Philippe", "La Belle au Bois Dormant", "https://i.pinimg.com/236x/df/8a/15/df8a155c908c903aeb1441b186810976.jpg"],
    ["Maléfique", "La Belle au Bois Dormant", "https://i.pinimg.com/564x/25/71/d7/2571d70731b67bc52059e2438f0b533b.jpg"],
    ["Ariel", "La Petite Sirène", "https://i.pinimg.com/236x/82/97/77/8297777ee890bea54959c5367786eb7b.jpg"],
    ["Eric", "La Petite Sirène", "https://i.pinimg.com/236x/f7/a5/a4/f7a5a47d4213e29dfc7fb95c94149fa3.jpg"],
    ["Vanessa", "La Petite Sirène", "https://i.pinimg.com/236x/29/53/60/29536004b7543df6986af958b225e154.jpg"],
    ["Belle", "La Belle et la Bête", "https://i.pinimg.com/236x/1f/0b/74/1f0b749a4c3ede7bb1c3e5e0136701cf.jpg"],
    ["La Bête (humain)", "La Belle et la Bête", "https://i.pinimg.com/236x/73/a3/bf/73a3bf9c0e457daeb943c74651ed2ca6.jpg"],
    ["Alice", "Alice au Pays des Merveilles", "https://i.pinimg.com/236x/28/05/2d/28052de17c7fdd4ec0a0630f2d904f1c.jpg"],
    ["Peter Pan", "Peter Pan", "https://i.pinimg.com/236x/88/ef/03/88ef03a898f56908f8d86a13095af2cf.jpg"],
    ["Wendy", "Peter Pan", "https://i.pinimg.com/236x/b1/0c/a1/b10ca13a9f07d47b21b571728ecd5dd7.jpg"],
    ["Mary Poppins", "Mary Poppins", "https://i.pinimg.com/236x/b0/ef/f6/b0eff6fe150edd1b3e500df90b23fc7b.jpg"],
    ["Jasmine", "Aladdin", "https://i.pinimg.com/236x/4a/50/d7/4a50d70a110312d02c4e842be0198c3e.jpg"],
    ["Aladdin", "Aladdin", "https://i.pinimg.com/236x/4a/14/50/4a14508881223ebe12f30a2a5fceab03.jpg"],
    ["Jafar", "Aladdin", "https://i.pinimg.com/236x/88/63/2c/88632c09fefeafa99af5da443bc9a7e9.jpg"],
    ["Le génie", "Aladdin", "https://i.pinimg.com/236x/03/25/79/0325794254e67a116de0e186da95a212.jpg"],
    ["Monsieur Jack", "L'Etrange Noël de Monsieur Jack", "https://i.pinimg.com/236x/8d/fa/19/8dfa198cf6f2e431d9e620bca7695998.jpg"],
    ["Sally", "L'Etrange Noël de Monsieur Jack", "https://i.pinimg.com/236x/5c/8d/71/5c8d713b46b4e57357ddea335008da22.jpg"],
    ["Pocahontas", "Pocahontas", "https://i.pinimg.com/236x/97/8f/1b/978f1b23f1223adb4e4fb74235a5116e.jpg"],
    ["John Smith", "Pocahontas", "https://i.pinimg.com/236x/95/9d/2a/959d2ad45ed493d49731e10bb7e58a45.jpg"],
    ["Woody", "Toy Story", "https://i.pinimg.com/236x/be/a0/14/bea0143bca98e761addf0ef9dec37f67.jpg"],
    ["Jessie", "Toy Story", "https://i.pinimg.com/564x/ab/29/49/ab29491a656500fb36970c2407ce1624.jpg"],
    ["Buzz l'éclair", "Toy Story", "https://i.pinimg.com/564x/49/0b/5c/490b5c86bf01510e5af5b5ae3549fd7c.jpg"],
    ["Bo Peep", "Toy Story", "https://i.pinimg.com/564x/4f/62/7f/4f627fbee3bb4f21984d0e9f709c86c7.jpg"],
    ["Duke Caboom", "Toy Story", "https://i.pinimg.com/564x/5b/57/be/5b57be6079b94b09b0761e3383c2dc56.jpg"],
    ["Esmeralda", "Le Bossu de Notre-Dame","https://i.pinimg.com/236x/4c/6b/ee/4c6beeed1ced174a83d904d36a6cf7ab.jpg"],
    ["Hercule", "Hercule", "https://i.pinimg.com/236x/cf/25/b2/cf25b26deb613410fac2789f032e6331.jpg"],
    ["Megara", "Hercule", "https://i.pinimg.com/236x/fb/de/83/fbde83438bfd922461a6cdbc323cd47c.jpg"],
    ["Anastasia", "Anastasia", "https://i.pinimg.com/236x/19/34/9e/19349efe3de549dabfe42f29d8f016ac.jpg"],
    ["Mulan", "Mulan", "https://i.pinimg.com/236x/3e/c0/69/3ec0692847a84acc6128acf2db6d7e66.jpg"],
    ["Li Shang", "Mulan", "https://i.pinimg.com/236x/95/ee/91/95ee91b6d78ef79a317ab9482e135458.jpg"],
    ["Raiponce", "Raiponce", "https://i.pinimg.com/236x/34/67/3c/34673c070558090629241a3f946ca94e.jpg"],
    ["Tarzan", "Tarzan", "https://i.pinimg.com/236x/c7/82/42/c782425135e9abeb024f9a07f5d508cb.jpg"],
    ["Jane", "Tarzan", "https://i.pinimg.com/564x/7a/30/5a/7a305adb1cd7b41a24173b43b42fb94c.jpg"],
    ["Kida", "Atlantide", "https://i.pinimg.com/236x/5a/94/68/5a946807f355dedec64c8ca6f8aea896.jpg"],
    ["Milo", "Atlantide", "https://i.pinimg.com/236x/58/25/f0/5825f0c59a58323887fbb835a94609e4.jpg"],
    ["Wall-E", "Wall-E", "https://i.pinimg.com/236x/37/2b/1b/372b1bc699cc80c57b9661d48a0a3dc1.jpg"],
    ["Eve", "Wall-E", "https://i.pinimg.com/564x/80/25/a9/8025a9f63435b64305b1cf045c76fd70.jpg"],
    ["Clochette", "La Fée Clochette", "https://i.pinimg.com/564x/73/41/ba/7341ba9265fa26c836428e4370d9a660.jpg"],
    ["Iridessa", "La Fée Clochette", "https://i.pinimg.com/236x/ca/75/d0/ca75d0dfbc4e47f7d841635b6919fb02.jpg"],
    ["Ondine", "La Fée Clochette", "https://i.pinimg.com/564x/05/09/10/0509106f2086de76e543521c54863bb1.jpg"],
    ["Roselia", "La Fée Clochette", "https://i.pinimg.com/564x/f1/9d/50/f19d502bd43b88e22daef6af3e232126.jpg"],
    ["Vidia", "La Fée Clochette", "https://i.pinimg.com/236x/0e/14/f4/0e14f4a65663614aff32d29d314dab53.jpg"],
    ["Noa", "La Fée Clochette", "https://i.pinimg.com/564x/9d/77/16/9d77168aad89b8c5755265d909241e00.jpg"],
    ["Tiana", "La Princesse et la Grenouille", "https://i.pinimg.com/236x/f8/18/4d/f8184d05f09ec46461f0c5e4bfad36e4.jpg"],
    ["Naveen", "La Princesse et la Grenouille", "https://i.pinimg.com/236x/44/4a/33/444a330ac92ed584cf9db7ccce34acc0.jpg"],
    ["Dr Facilier", "La Princesse et la Grenouille", "https://i.pinimg.com/564x/57/bc/8c/57bc8c3a8c51cb0189094bcd00766fa3.jpg"],
    ["Charlotte", "La Princesse et la Grenouille", "https://i.pinimg.com/236x/e7/c3/99/e7c3995f59b6e7a88ee3676d40bb4219.jpg"],
    ["Ray", "La Princesse et la Grenouille", "https://i.pinimg.com/564x/17/60/fe/1760fec56a55a6cb917b0d72a1b2ac97.jpg"],
    ["Big Daddy", "La Princesse et la Grenouille", "https://i.pinimg.com/564x/06/da/68/06da684130f5353798bece4c1011f2af.jpg"],
    ["Eudora", "La Princesse et la Grenouille", "https://i.pinimg.com/564x/e3/be/11/e3be1168f7f0cf97dfcbb0478264746e.jpg"],
    ["James", "La Princesse et la Grenouille", "https://i.pinimg.com/564x/86/74/ab/8674ab80ca5321bf0ea20e94f3301389.jpg"],
    ["Flynn", "Raiponce", "https://i.pinimg.com/236x/04/f9/35/04f93570abf5044ff3804782a9e2119d.jpg"],
    ["Merida", "Rebelle", "https://i.pinimg.com/236x/bd/3f/3f/bd3f3fb8e39e53102527d98cadd010a3.jpg"],
    ["Elsa", "La Reine des Neiges", "https://i.pinimg.com/236x/a7/15/de/a715de33669982c172a4f70b3fc8029e.jpg"],
    ["Anna", "La Reine des Neiges", "https://i.pinimg.com/236x/a3/8a/a8/a38aa8ca030fc3309b1d1f424e6e5266.jpg"],
    ["Olaf", "La Reine des Neiges", "https://i.pinimg.com/236x/6c/3e/12/6c3e12e584e6ef743a83387412c7a26f.jpg"],
    ["Christophe", "La Reine des Neiges", "https://i.pinimg.com/564x/a6/a5/d8/a6a5d8b0d09270ff0e066f758ff9613a.jpg"],
    ["Tadashi", "Les Nouveaux Héro", "https://i.pinimg.com/736x/3f/1f/37/3f1f37b438b7151db488c3f6a651e53f.jpg"],
    ["Hiro", "Les Nouveaux Héro", "https://i.pinimg.com/236x/58/91/07/5891074b4fa5699fb6ce5a51221de8a6.jpg"],
    ["Honey Lemon", "Les Nouveaux Héro", "https://i.pinimg.com/564x/48/dd/08/48dd08925f6a72fcf1f13565fe03b620.jpg"],
    ["GoGo", "Les Nouveaux Héro", "https://i.pinimg.com/564x/0e/59/67/0e5967f64e379583b66b49ffb1a48654.jpg"],
    ["Baymax", "Les Nouveaux Héro", "https://i.pinimg.com/236x/92/4c/f5/924cf5ecf1a4c2abde419738dcead483.jpg"],
    ["Wasabi", "Les Nouveaux Héro", "https://i.pinimg.com/236x/ac/41/5e/ac415ed49c14baa17bff491b1110b023.jpg"],
    ["Fred", "Les Nouveaux Héro", "https://i.pinimg.com/236x/6a/ac/51/6aac51ba1824caa1d87007626266a95a.jpg"],
    ["Joie", "Vice-Versa", "https://i.pinimg.com/236x/6f/ae/f9/6faef9debbb3c34443ddf59b2c81bf25.jpg"],
    ["Dégoût", "Vice-Versa", "https://i.pinimg.com/236x/1a/44/98/1a4498c8817c638fd918cc1f2c743780.jpg"],
    ["Tristesse", "Vice-Versa", "https://i.pinimg.com/236x/f5/95/da/f595da41495167b65314b88b00d5288c.jpg"],
    ["Peur", "Vice-Versa", "https://i.pinimg.com/236x/42/05/bf/4205bfc00fbbcbc373bab2aee0ddbc70.jpg"],
    ["Colère", "Vice-Versa", "https://i.pinimg.com/236x/42/a6/54/42a654026628457506920e05d5d5b75f.jpg"],
    ["Riley", "Vice-Versa", "https://i.pinimg.com/236x/30/c4/e1/30c4e1ffe5bca092e39c1f60989a8780.jpg"],
    ["Miguel", "Coco", "https://i.pinimg.com/236x/24/82/5f/24825f085fd26e89bd0afafcde07f3f1.jpg"],
    ["Elastigirl", "Les Indestructibles", "https://i.pinimg.com/236x/c8/57/98/c857986f3cbf1fccdaa465843f480c99.jpg"],
    ["Violette", "Les Indestructibles", "https://i.pinimg.com/236x/3b/49/7c/3b497cbf302e044d214a926c5558bc8b.jpg"],
    ["Vanellope", "Les Mondes de Ralph", "https://i.pinimg.com/236x/d6/dd/be/d6ddbe64bece560f198a81020544c8c1.jpg"],
    ["Ralph", "Les Mondes de Ralph", "https://i.pinimg.com/564x/65/d0/c3/65d0c3dafef97cc282d124baf2eda1f1.jpg"],
    ["Shank", "Les Mondes de Ralph 2", "https://i.pinimg.com/236x/cc/b3/19/ccb319062a2453a57610e0ff9d3558d1.jpg"],
    ["Mickey", "Mickey", "https://i.pinimg.com/564x/29/e6/4e/29e64e3f482601b12cc902c159d7fa4c.jpg"],
    ["Minnie", "Mickey", "https://i.pinimg.com/564x/e9/68/eb/e968eb48f0fabfff65a9bc39fbe60c65.jpg"],
    ["Picsou", "Mickey", "https://i.pinimg.com/564x/15/25/7f/15257f8b745d6748255404dfd0b70d71.jpg"],
    ["Donald", "Mickey", "https://i.pinimg.com/564x/d5/e6/72/d5e67201ee28515194f09168cbaa9ae2.jpg"],
    ["Luca", "Luca", "https://i.pinimg.com/564x/4b/97/1b/4b971b77b4dd3155a535d2536b7c3b12.jpg"],
    ["Alberto", "Luca", "https://i.pinimg.com/564x/06/64/9c/06649cda0122d7475099f99ab5ceeb30.jpg"],
    ["Giulia", "Luca", "https://i.pinimg.com/236x/e6/51/95/e651953d0186219859012c1222edf5ab.jpg"],
    ["Raya", "Raya et le Dernier Dragon", "https://i.pinimg.com/564x/2f/ca/01/2fca0104db23a132f44bd932771924b0.jpg"],
    ["Namaari", "Raya et le Dernier Dragon", "https://i.pinimg.com/564x/1a/43/98/1a4398402750d5bcc11638d4ec884c05.jpg"],
    ["Mirabel Madrigal", "Encanto", "https://i.pinimg.com/564x/98/82/d8/9882d8a69f3949e165b2e8a535ec27a7.jpg"],
    ["Luisa Madrigal", "Encanto", "https://i.pinimg.com/564x/bb/e7/11/bbe711d149a3c2ea07c7722bd00f98c3.jpg"],
    ["Isabela Madrigal", "Encanto", "https://i.pinimg.com/564x/d3/1f/24/d31f240d4143a6f13864c662abbbdc26.jpg"],
    ["Dolores Madrigal", "Encanto", "https://i.pinimg.com/564x/c8/ee/10/c8ee1056c84f12688585400227e41674.jpg"],
    ["Camilo Madrigal", "Encanto", "https://i.pinimg.com/564x/20/ce/98/20ce98579e5322426b25e854f64821a7.jpg"],
    ["Julieta Madrigal", "Encanto", "https://i.pinimg.com/564x/e7/8e/9e/e78e9ede1067797d500470812d796013.jpg"],
    ["Peppa Madrigal", "Encanto", "https://i.pinimg.com/564x/95/87/19/95871960e84f00fde99073c03371c388.jpg"],
    ["Felix Madrigal", "Encanto", "https://i.pinimg.com/564x/bd/03/4f/bd034f29635bd25d0fcd8b073c2d93df.jpg"],
    ["Bruno Madrigal", "Encanto", "https://i.pinimg.com/564x/e5/d5/35/e5d53561c9b4df03a4ce8ee9864fb34f.jpg"],
    ["Flam", "Elementaire", "https://i.pinimg.com/564x/6e/4f/d9/6e4fd9020501672079b35eed713776e8.jpg"],
    ["Flack", "Elementaire", "https://i.pinimg.com/564x/a4/92/31/a492316f4f2fd53530d1b355faadc7be.jpg"],
    ["Simba", "Le Roi Lion", "https://i.pinimg.com/564x/76/fd/1f/76fd1fb1c5e0e9370038a37143324ead.jpg"],
    ["Nala", "Le Roi Lion", "https://i.pinimg.com/564x/ef/14/cf/ef14cfa7c8e4ca984998278e6250e27b.jpg"],
    ["Mufasa", "Le Roi Lion", "https://i.pinimg.com/564x/b8/4a/b7/b84ab7194608b503072ecd57453aa19d.jpg"],
    ["Scar", "Le Roi Lion", "https://i.pinimg.com/736x/17/18/21/17182150605edbfcf436ec49af8a65c7.jpg"],
    ["Pumba", "Le Roi Lion", "https://i.pinimg.com/564x/a0/aa/01/a0aa01b284bf19115b5dd0ad7a02ef4f.jpg"],
    ["Timon", "Le Roi Lion", "https://i.pinimg.com/564x/f9/e4/aa/f9e4aa1efd6d54fa8b1a89ec6969317b.jpg"],
    ["Kiara", "Le Roi Lion", "https://i.pinimg.com/564x/a7/49/2a/a7492a3c0bc5fdf35ce3741939d2f209.jpg"],
    ["Kovu", "Le Roi Lion", "https://i.pinimg.com/564x/45/61/f8/4561f8952d69a61778ebc333d379a3d2.jpg"],
    ["Nick", "Zootopie", "https://i.pinimg.com/564x/c2/20/6c/c2206c553236e20b2f4c1b74ab62173f.jpg"],
    ["Judy", "Zootopie", "https://i.pinimg.com/564x/1f/ee/9f/1fee9f9df2db096fabbb38561cf3693f.jpg"],
]

// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_disney`;


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
