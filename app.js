let quotes = [ //array with quotes
    {
        quote: "Mulți oameni consideră norocul si munca altora drept o insultă la adresa lor.",
        author: "Robin Hobb"
    },
    {
        quote: "Un om înțelept n spune niciodată tot ce știe, iar cel ce poartă vorbe nu are nimic în căpățină!",
        author: "Robin Hobb"
    },
    {
        quote: "De cele mai multe ori ne construim singuri o inchisoare în jurul nostru, așa cum tot singuri ne alegem singurătatea.",
        author: "Robin Hobb"
    },
    {
        quote: "O femeie ignorată de bărbat e un monstru!",
        author: "vers din romanul Enigma Otiliei"
    },
    {
        quote: "O intrebare simplă primește cel mai bun răspuns.",
        author: "Robin Hobb"
    },
    {
        quote: "Nimic nu descurajează mai mult pe om decât perspectiva eșecului.",
        author: "Robin Hobb"
    }
];

const btn = document.querySelector(".generate");
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});