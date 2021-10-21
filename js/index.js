function getParamParNom(nom, url = window.location.href) {
    nom = nom.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + nom + '(=([^&#]*)|&|#|$)'),
        resultat = regex.exec(url);
    if (!resultat) return null;
    if (!resultat[2]) return '';
    return decodeURIComponent(resultat[2].replace(/\+/g, ' '));
}

