"use client";

export default function Result({ result }) {
    const copyText = (e) => {
        e.preventDefault();
        const textElement = document.getElementById("story");
        const range = document.createRange();
        range.selectNodeContents(textElement);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        let text = textElement.innerText;
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log("Texto copiado al portapapeles: " + text);
            })
            .catch((err) => {
                console.error("Error al copiar texto al portapapeles: ", err);
            });

        selection.removeAllRanges();
        e.target.textContent = "¡Copiado!"
    };

    return (
        <div>
            <div
                id="story"
                className="text-white spaced-paragraphs"
                dangerouslySetInnerHTML={{ __html: result }}
            />
            <button
                className="mt-4 py-1 px-6 bg-pink-700 hover:bg-pink-900 active:bg-pink-200 active:text-pink-900 text-white uppercase rounded-lg"
                onClick={copyText}
            >
                Copiar historia al portapapeles
            </button>
        </div>
    );
}
