function getAttitude(attitude) {
    const brave =
        "Soy una persona valiente, así que debo actuar curioso y atrevido.";
    const coward =
        "Soy una persona cobarde, así que debo actuar con mucha cautela y miedo.";
    return attitude === "valiente" ? brave : coward;
}

function getRandomWords(arr) {
    const randomWords = [];
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomWord = arr.splice(randomIndex, 1)[0];
        randomWords.push(randomWord);
    }
    return `primero con ${randomWords[0]} y luego con ${randomWords[1]}`;
}

function getSupernatural(supernatural) {
    const paranormalKeywords = [
        "demonios",
        "fantasmas",
        "casas encantadas",
        "posesiones demoniacas",
        "exorcismos",
        "crucifijos encantados",
        "monstruos",
        "duendes malignos",
        "el Anticristo",
        "hombre lobo",
        "Slenderman",
    ];
    const naturalKeywords = [
        "asesinos",
        "psicópatas",
        "lobos que escaparon del zoológico",
        "mutaciones",
        "infecciones",
        "zombies",
        "alienígenas",
        "marcianos",
        "pesadillas",
        "Jeff the Killer",
        "secuestradores",
        "acosadores",
        "sentir asfixia",
        "morir ahogado"
    ];
    const paranormal =
        "Soy una persona que cree en lo paranormal, así que intenta asustarme " +
        getRandomWords(paranormalKeywords);
    const natural =
        "Soy una persona que no cree en lo paranormal, así que intenta asustarme " +
        getRandomWords(naturalKeywords);
    return supernatural === "si" ? paranormal : natural;
}

function getSelfish(selfish) {
    const greedy =
        "Soy una persona egoísta, así que debo sobrevivir a toda costa, y mi acompañante debe morir";
    const normal =
        "Soy una persona poco egoísta, así que al final debemos sobrevivir mi acompañante y yo.";
    const kind =
        "Soy una persona altruista, así que al final puedo morir tratando de salvar a mi acompañante.";
    if (selfish === "si") return greedy;
    if (selfish === "normal") return normal;
    if (selfish === "no") return kind;
}

export default function generatePrompt({
    name,
    attitude,
    partner,
    fear,
    supernatural,
    selfish,
    place,
}) {
    return `Escribe una historia de terror para mí, con los datos que voy a enviarte.
Yo soy el protagonista, mi nombre es ${name}.
${getAttitude(attitude)}
Quiero que mi acompañante sea: ${partner}.
Mi mayor miedo es: ${fear}, así que tomalo en cuenta.
${getSupernatural(supernatural)}
${getSelfish(selfish)}
Deseo que los sucesos transcurran en ${place}.
Y no olvides formatear el texto resultante, como si fuera HTML con etiquetas <p> para cada párrafo.`;
}
