let gens = [
    ["Pablo Gavi", "Foot", "https://i.pinimg.com/564x/ac/75/c2/ac75c220faabe475a8fc5761760b68a7.jpg"],
    ["Antoine Griezmann", "Foot", "https://i.pinimg.com/564x/4e/cd/b4/4ecdb4bf052ddf99b30c10f3d02a2b25.jpg"],
    ["Killian Mbappe", "Foot", "https://i.pinimg.com/564x/6f/e6/24/6fe624de260d64a1c3c24f25742603ac.jpg"],
    ["Olivier Giroud", "Foot", "https://i.pinimg.com/564x/79/fd/74/79fd7479b233743d7a78dbca7ea5f25f.jpg"],
    ["Elisa Dealmeida", "Foot", "https://i.pinimg.com/564x/3b/d1/aa/3bd1aaf1fa255e8317ab91733fd29e64.jpg"],
    ["Lamine Yamal", "Foot", "https://i.pinimg.com/736x/f8/61/4b/f8614bb7357e71ac05ffdfd16fcf7fd7.jpg"],
    ["Serena Williams", "Tennis", "https://i.pinimg.com/564x/f6/2e/72/f62e72986d663ac9ede61b4e03c9d834.jpg"],
    ["Venus Williams", "Tennis", "https://i.pinimg.com/564x/71/16/7f/71167f5a7713b00fe4733985bc8e4b8c.jpg"],
    ["Simone Biles", "Gymnastique", "https://i.pinimg.com/564x/30/5d/06/305d06ce0496f7d09ef341aea3d8ff22.jpg"],
    ["Daniel Ricciardo", "F1", "https://i.pinimg.com/564x/92/d0/62/92d062f2bca7a08f93df8203418eedd9.jpg"],
    ["Charles Leclerc", "F1", "https://i.pinimg.com/564x/3a/30/2c/3a302cb4e16653d9cc0eaff3cf3601c3.jpg"],
    ["Lando Norris", "F1", "https://i.pinimg.com/736x/eb/48/2c/eb482cf0d90f20faa2e86fc702b4b74e.jpg"],
    ["Yuki Tsunoda", "F1", "https://i.pinimg.com/564x/ae/0c/ca/ae0cca757c876919472ca09de167eb88.jpg"],
    ["Alex Albon", "F1", "https://i.pinimg.com/736x/e3/7a/db/e37adb219cbae4b393f9beeed8ab8005.jpg"],
    ["Nico Hülkenburg", "F1", "https://i.pinimg.com/564x/cf/88/79/cf8879e236c09443c0b20896b6f5c954.jpg"],
    ["Sergio Perez", "F1", "https://i.pinimg.com/736x/a6/ef/98/a6ef985799862137e541c05024ea9029.jpg"],
    ["Neymar", "Foot", "https://i.pinimg.com/736x/a3/35/25/a3352556bcae36993c40f3ab0ddee8b2.jpg"],
    ["Sergio Ramos", "Foot", "https://i.pinimg.com/564x/fb/82/6d/fb826dd744cc50f9d341f3c296f1ecb9.jpg"],
    ["Zidane", "Foot", "https://i.pinimg.com/564x/fe/11/61/fe1161d72791c816da25bee224b558a3.jpg"],
    ["Zlatan", "Foot", "https://i.pinimg.com/564x/f1/7d/b3/f17db3aad38e2d2e7ecc4e9d90391296.jpg"],
    ["Cristiano Ronaldo", "Foot", "https://i.pinimg.com/564x/85/b1/32/85b132280423fc8beadc3a29c9d42f8c.jpg"],
    ["Lionel Messi", "Foot", "https://i.pinimg.com/736x/73/40/80/734080e38671256c68be995fd1b55976.jpg"],
    ["Lewis Hamilton", "F1", "https://i.pinimg.com/564x/9d/01/3a/9d013a68aa7f2797a584f0f79fc8cd32.jpg"],
    ["Luka Modric", "Foot", "https://i.pinimg.com/564x/3b/62/6c/3b626c75c9a04655eb95affe8fce5206.jpg"],
    ["Carlos Sainz", "F1", "https://i.pinimg.com/736x/67/29/a7/6729a7cebfe29439ee5bf39fc37c7a7c.jpg"],
    ["Georges Russel", "F1", "https://i.pinimg.com/564x/6b/c1/01/6bc101bc50fb653272b8596b49f38b4d.jpg"],
    ["Lance Stroll", "F1", "https://i.pinimg.com/736x/53/c3/6c/53c36ca13cfa2ba02f3ef69ab1a5a2a6.jpg"],
    ["Fernando Alonso", "F1", "https://i.pinimg.com/564x/8d/a2/10/8da210cfba7a96d6de593ad0d3ffdab6.jpg"],
    ["Pierre Gasly", "F1", "https://i.pinimg.com/564x/b3/11/77/b31177a66c63137c2dc06d3905f73cb0.jpg"],
    ["Esteban Ocon", "F1", "https://i.pinimg.com/564x/38/f7/d4/38f7d485401ad91355fe320125474692.jpg"],
    ["Nate Diaz", "MMA", "https://i.pinimg.com/564x/b3/ec/4a/b3ec4a209471d5d95743d127fd55c62a.jpg"],
    ["Khabib Murmagomedou", "MMA", "https://i.pinimg.com/564x/07/88/40/07884038c2a7eebb758895ef2a6b4602.jpg"],
    ["Conor Mcgregor", "MMA", "https://i.pinimg.com/564x/73/d5/d5/73d5d5962a350a05e21fc6a8718b3733.jpg"],
    ["Dustin Poirier", "MMA", "https://i.pinimg.com/564x/56/ad/a6/56ada65a82b7186a83a9d2149969cde8.jpg"],
    ["Benoît Saint-Denis", "MMA", "https://i.pinimg.com/736x/98/ac/2b/98ac2b4b7ee668ad1d812c06971499b8.jpg"],
    ["Charles Olivera", "MMA", "https://i.pinimg.com/564x/aa/17/a3/aa17a38d0fe6a07b5301f657867fa677.jpg"],
    ["Hasbulla", "MMA", "https://i.pinimg.com/564x/d0/0e/d6/d00ed62eb52626e57c76ca2f541d8690.jpg"],
    ["Khamzat Chimaev", "MMA", "https://i.pinimg.com/564x/7a/93/44/7a934414e262b2743db2d13c62791045.jpg"],
    ["Israel Adesarya", "MMA", "https://i.pinimg.com/564x/b9/5b/2b/b95b2bdc14852ee6609f070449601187.jpg"],
    ["Mike Tyson", "Boxe", "https://i.pinimg.com/736x/1e/5f/de/1e5fde42eb01e3899c4499426bf7c111.jpg"],
    ["Jon Jones", "MMA", "https://i.pinimg.com/564x/59/5c/52/595c526158bf5a5d43a0d37a7a411eb8.jpg"],
    ["Georges St Pierre", "MMA", "https://i.pinimg.com/564x/bd/d5/a1/bdd5a1a79b70a32901d8c39ca0404e5e.jpg"],
    ["Tony Ferguson", "MMA", "https://i.pinimg.com/564x/b6/89/5d/b6895d14dcc47a195c1d285bc0081c21.jpg"],
    ["Jude Bellingham", "Foot", "https://i.pinimg.com/736x/68/80/42/688042058872beffe4f68a2595511fa8.jpg"],
    ["Max Verstappen", "F1", "https://i.pinimg.com/736x/14/f4/69/14f46987a82201347a4323157934962c.jpg"],
    ["Achraf Hakimi", "Foot", "https://i.pinimg.com/564x/69/b4/e8/69b4e8e31bf7e19a8bd6bec1f696f325.jpg"],
    ["Karchaoui", "Foot", "https://i.pinimg.com/564x/8c/2d/42/8c2d425e0a61de9c97088cb13262c515.jpg"],
    ["Stephen Curry", "Basket", "https://i.pinimg.com/564x/a6/66/83/a66683c69255bd416250fffd27e12674.jpg"],
    ["Michael Jordan", "Basket", "https://i.pinimg.com/564x/e2/09/fb/e209fb0723bf3c44f67ce052d7b2f4e6.jpg"],
    ["Teddy Riner", "Judo", "https://i.pinimg.com/736x/0b/92/a7/0b92a77fc55cdb6143ca0f97a3385d7b.jpg"],
    ["Romane Dicko", "Judo", "https://i.pinimg.com/736x/07/cc/a9/07cca9e9058f4de740156a2094c6c0db.jpg"],
    ["Wendie Renard", "Foot", "https://i.pinimg.com/564x/b9/9d/97/b99d97eaf460f3959e5c52dbf75222db.jpg"],
    ["Leon Marchand", "Natation", "https://i.pinimg.com/1200x/f4/f9/b5/f4f9b5cb5f7e78270f1faae38e4c638c.jpg"],
    ["Mélanie de Jesus dos Santos", "Gymnastique", "https://i.pinimg.com/564x/ed/a9/41/eda941b8229584f14cd0251699c17b6f.jpg"],
    ["Aurélien Giraud", "Skate", "https://i.pinimg.com/564x/b1/05/3f/b1053fc062110a8f6403dc19a68739a1.jpg"],
    ["Sylvain André", "BMX", "https://www.laprovence.com/media/hermes/2022-07/2022-07-24/20220724_1_1_1_1_1_obj26560666_1.jpg"],
    ["Nyjah Huston", "Skate", "https://i.pinimg.com/736x/3e/98/ac/3e98ac2bb481e5e8ce3a92f504e5b03e.jpg"],
    ["Tiger Woods", "Golf", "https://i.pinimg.com/564x/82/8b/f4/828bf49bc075b92c7783f14ff5ea1cbc.jpg"],
    ["Zusje", "MMA", "https://i.pinimg.com/564x/9c/56/de/9c56de83666e5c56d7c056d67f46e7f0.jpg"],
    ["Novak Djokovic", "Tennis", "https://i.pinimg.com/564x/6e/4e/57/6e4e57f3e636ccdddf2323adf2005418.jpg"],
    ["Carlos Alcaraz", "Tennis", "https://i.pinimg.com/736x/fe/c1/63/fec1637b4c8bd772fa0497ecf71b8fb7.jpg"],
    ["Laure Manaudou", "Natation", "https://i.pinimg.com/736x/27/8f/7d/278f7d80b00a9aaf5c053f2518b2b39a.jpg"],
    ["Florent Manaudou", "Natation", "https://i.pinimg.com/564x/32/b2/08/32b2083c6ed3de28997492dfc76d653e.jpg"],
    ["Rafael Nadal", "Tennis", "https://i.pinimg.com/564x/be/4f/91/be4f916ab1c1dc65d9a5fdea3b741760.jpg"],
    ["Maria Sharapova", "Tennis", "https://i.pinimg.com/564x/d6/2c/a1/d62ca1821036d2875a33e8a8bbd62bff.jpg"],
    ["Antoine Dupont", "Rugby", "https://i.pinimg.com/564x/1a/d5/f1/1ad5f15f7141fbce6f886ee1dde03462.jpg"],
    ["Adrien Rabiot", "Foot", "https://i.pinimg.com/564x/39/4e/29/394e29c93472c1c14f93c237077a26a6.jpg"],
    ["Mike Maignan", "Foot", "https://i.pinimg.com/564x/71/da/54/71da54d083ae3819c8dae0653013e34e.jpg"],
    ["Jules Koundé", "Foot", "https://i.pinimg.com/736x/96/d2/39/96d23942335cb13ab130900921bf92ab.jpg"],
    ["Aurélien Tchouaméni", "Foot", "https://i.pinimg.com/564x/0e/a3/66/0ea366c13cc29e1b82c47ca1a706f70d.jpg"],
    ["Benjamin Pavard", "Foot", "https://i.pinimg.com/564x/a2/e6/27/a2e6275bdab555c3a2d42de8315f9825.jpg"],
    ["Théo Hernandez", "Foot", "https://i.pinimg.com/736x/b5/76/9f/b5769ff14712ca0bc6dcf549deb280c1.jpg"],
    ["Anthony Joshua", "Boxe", "https://i.pinimg.com/564x/3d/a8/c1/3da8c18c511e035ddffe2c727b1f83a0.jpg"],
    ["Baki", "MMA", "https://i.pinimg.com/564x/6a/ae/8d/6aae8dd0aaa728e463a3c2515619a78d.jpg"],
    ["Cedric Doumbe", "MMA", "https://i.pinimg.com/564x/22/1c/b7/221cb74c457400d8f164e8a7ff0e8f17.jpg"],
    ["Lebron James", "Basket", "https://i.pinimg.com/564x/bc/7c/c0/bc7cc0a239e8ed8b441ce6b3a253bf53.jpg"],
    ["Victor Wembanyama", "Basket", "https://i.pinimg.com/564x/ff/73/88/ff73885fec700e551d91aff6a22caea3.jpg"],
    ["Tony Parker", "Basket", "https://i.pinimg.com/564x/01/0a/02/010a028bf76c49ae5a840935b7e71962.jpg"],
    ["Damian Penaud", "Rugby", "https://i.pinimg.com/564x/75/80/a1/7580a1037ee711ac7649ba362f5b980f.jpg"],
    ["Uini Atonio", "Rugby", "https://i.pinimg.com/564x/2b/2e/c0/2b2ec0a8e3afcfa2b8fac305341c290e.jpg"],
    ["Hugo Descat", "Handball", "https://www.lequipe.fr/_medias/img-photo-jpg/auteur-d-un-sans-faute-hugo-descat-a-ete-le-meilleur-marqueur-des-bleus-jeudi-soir-s-mantey-l-equipe/1500000001889465/112:6,707:601-828-828-75/6ed18.jpg"],
    ["Dylan Nahi", "Handball", "https://www.startnplay.com/wp-content/uploads/2023/03/dylan_nahi-217-scaled-e1679925048459.jpg"],
    ["Aymeric Minne", "Handball", "https://cdn-s-www.lalsace.fr/images/2F9C0F09-6BB1-4D25-8098-6141DF2FE419/NW_raw/le-demi-centre-aymeric-minne-a-rejoint-nantes-cet-ete-pour-franchir-un-palier-et-se-rapprocher-de-l-equipe-de-france-photo-dna-franck-delhomme-1566505318.jpg"],
    ["Nikola Karabatic", "Handball", "https://i.pinimg.com/564x/52/79/a3/5279a3e1e6ec48a8ecbf821c368ea70c.jpg"],
    ["Elohim Prandi", "Handball", "https://i.pinimg.com/564x/1c/94/54/1c94547314598944b07171de61066668.jpg"],
    ["Karl Konan", "Handball", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCInkdWaG21fyzBM_iMFoB5x9720yHVqfU1g&s"],
    ["Gervonta Davis", "Boxe", "https://i.pinimg.com/736x/07/34/58/073458e2f0efb20d7304ce605cb6eff1.jpg"],
    ["Ryan Garcia", "Boxe", "https://i.pinimg.com/736x/1c/dd/27/1cdd276db1be94d9c4c4e5e71dcaee56.jpg"],
    ["Ben Whittaker", "Boxe", "https://i.pinimg.com/564x/88/96/a4/8896a40cb925e81fde73057b75ec4477.jpg"],
    ["Javon Walton", "Boxe", "https://i.pinimg.com/564x/0f/d6/5b/0fd65badcc55cb7ee2da1cc71378fad3.jpg"],
    ["Johnny Walker", "MMA", "https://images.tapology.com/letterbox_images/85671/default/walker1.jpg?1534011086"],
    ["Emma Raducanu", "Tennis", "https://i.pinimg.com/564x/4d/90/2d/4d902d9d5dd2843fb4fe3015f811ac54.jpg"],
    ["Garrett Clark", "Golf", "https://i.pinimg.com/564x/19/15/4c/19154c8ae29a7e8fa85a32641d97222a.jpg"],
    ["Kim Ye-ji", "Tir", "https://i.pinimg.com/736x/55/62/b4/5562b47fbad300ac574599823708a559.jpg"],
    ["Felix Lebrun", "Tennis de table", "https://i.pinimg.com/564x/39/41/40/394140087914e283ab0346fb5efc4656.jpg"],
    ["Camille Lacourt", "Natation", "https://i.pinimg.com/564x/6c/36/45/6c3645f438c26346d9eb74a4e6aba699.jpg"],
    ["Usain Bolt", "Course", "https://i.pinimg.com/564x/9e/76/88/9e76882904417ef5dd2481618ea96cbd.jpg"],
    ["Robert Lewandowski", "Foot", "https://i.pinimg.com/736x/bd/64/53/bd6453043bd13df668f63df4eccf0f6a.jpg"],
    ["Raphael Varane", "Foot", "https://i.pinimg.com/564x/db/52/57/db52572f5ca1713490392f389c65b392.jpg"],
    ["Michael Phelps", "Natation", "https://i.pinimg.com/736x/e7/b7/e8/e7b7e8b6bb0f1b2973a3775d23e99d98.jpg"],
    ["Rhea Ripley", "Catch", "https://i.pinimg.com/736x/0b/68/a6/0b68a632c06d2fceeea1a3c28bd8904b.jpg"],
]

// Définir la clé du localStorage selon la catégorie
const localStorageKey = `countersData_sportifs`;


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
