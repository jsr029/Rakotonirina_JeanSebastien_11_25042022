import React from 'react'
import QualiteItem from '../QualiteItem';

const qualiteTab = [
		{
            id:1,
			name : "Fiabilité",
			description : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
		}, {
            id:2,
			name : "Respect",
			description :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
		}, {
            id:3,
			name : "Service",
			description : "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique,"
		}, {
            id:4,
			name : "Responsabilité",
			description : "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du 'De Finibus Bonorum et Malorum' de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914)."
		}
    ]
function Qualite(){
    return (
        <>
             {qualiteTab.map(({ id, name, description }) => 
                (
                <div className='lgt-ap-blocRec' key={id}>
                    <QualiteItem 
                        id={id}
                        name={name}
                        description={description}
                    />
                </div>
                )
            )}
  
        </>
    );
};

export default Qualite