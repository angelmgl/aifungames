export default function NextButton({ handleNext }) {
    return (
        <button
            onClick={(e) => handleNext(e)}
            className="w-full mt-4 p-1 bg-pink-700 hover:bg-pink-900 active:bg-pink-200 active:text-pink-900 text-white uppercase rounded-lg"
        >
            Siguiente
        </button>
    );
}
