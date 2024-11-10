function selectAction(action, button) {
    // Récupérer la carte de la personne
    const personCard = button.closest('.person-card');
    
    // Vérifier si une icône existe déjà
    const existingIcon = personCard.querySelector('.selected-icon');
    if (existingIcon) {
        // Si une icône existe déjà, on la supprime
        existingIcon.remove();
    }

    // Créer un nouvel élément pour l'icône sélectionnée
    const icon = document.createElement('span');
    icon.classList.add('selected-icon');
    
    // Ajouter l'icône selon l'action sélectionnée
    if (action === 'kiss') {
        icon.innerHTML = '💋'; // Icône pour Kiss
    } else if (action === 'marry') {
        icon.innerHTML = '💍'; // Icône pour Marry
    } else if (action === 'kill') {
        icon.innerHTML = '🔪'; // Icône pour Kill
    }

    // Ajouter l'icône dans la carte, en bas à gauche de l'image
    personCard.appendChild(icon);
}
