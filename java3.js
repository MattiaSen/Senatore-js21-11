function Palindroma(stringa) {
    const FraseSenzaSpazzi = stringa.replace(/\s/g,"").toLowerCase();

    const FraseInvertita = FraseSenzaSpazzi.split("").reverse().join("");

    return FraseSenzaSpazzi === FraseInvertita;
    
}

console.log(Palindroma("i topi non avevano nipoti"))