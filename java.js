
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


listaProdotti.sort((a, b) => a.nome.localeCompare(b.nome));


listaProdotti.sort((a, b) => {
    if (a.nome === b.nome) {
        return a.prezzo - b.prezzo;
    }
    return 0;
});

console.log(listaProdotti);