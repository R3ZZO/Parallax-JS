var default_slowdown_factor = 3; // Ici on peut paramétrer le degré d'intensité de l'effet parallax (1 = images complètement fixes - plus la valeur sera grande, plus l'effetr sera subtil)

var parallax_elements = document.querySelectorAll(".parallax");
// ou : document.getElementsByClassName("parallax")

// On rattache un bloc d'instructions (sous forme de fonction anonyme) à l'événement scroll de la fenêtre. Ce bloc s'exécutera donc à chaque défilement (scroll)
window.onscroll = function() {
    
    // On peut obtenir à tout moment le nombre de pixels défilés verticalement dans la fenêtre, via la propriété scrollY de l'objet window
    //console.log(window.scrollY);
    
    // A chaque scroll, chaque élément de classe "parallax" doit subir une modification.
    
    parallax_elements.forEach(function(the_element){
        
        // Ici on peut accéder à chaque élément de notre liste, via the_element (à condition d'avoir placé ce terme entre les parenthèses de la fonction anonyme dans laquelle on se trouve)
        
        var slowdown_factor = default_slowdown_factor;
        
        // On vérifie si l'élément concerné a un attribut data-slowdown
        if (the_element.hasAttribute("data-slowdown")) {
            // Si c'est le cas, on remplace la valeur slowdown_factor qu'on utilisera plus bas dans le calcul de marge à appliquer
           slowdown_factor = the_element.getAttribute("data-slowdown");
               
        }
        
        /* Formule pour obtenir une valeur à donner au margin-top de chaque image, en fonction de :
        - le nombre de pixels scrollés dans la fenêtre
        - la position de base de l'image concernée (position de sa section parent par rapport au haut de la page)
        */
        var position_Y_parent = the_element.parentElement.offsetTop;
        
        var margin = (window.scrollY - position_Y_parent) / slowdown_factor;
        
        the_element.style.marginTop = margin + "px";
        
    });
    
}