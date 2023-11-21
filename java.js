
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]


function filtraProdottiPerPrezzo(lista, prezzoLimite) {
    let prodottiFiltrati = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].prezzo > prezzoLimite) {
            prodottiFiltrati.push(lista[i]);
        }
    }

    return prodottiFiltrati;
}

let listaFiltrata = filtraProdottiPerPrezzo(listaProdotti, 250);
console.log(listaFiltrata);