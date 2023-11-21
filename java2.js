const url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999";

const parametriString = url.split('?')[1];

const parametriArray = parametriString.split('&');

const parametri = {};

parametriArray.forEach(parametro => {
    const [chiave, valore] = parametro.split('=');
    parametri[chiave] = valore;
});

console.log(parametri);