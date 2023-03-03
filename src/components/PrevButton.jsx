export default function PrevButton({ handlePrev, show }) {
    return (
        <button
            onClick={(e) => handlePrev(e)}
            className={`w-full mt-4 p-1 bg-pink-700 hover:bg-pink-900 active:bg-pink-200 active:text-pink-900 text-white uppercase rounded-lg ${
                show ? "opacity-0 pointer-events-none" : ""
            }`}
        >
            Anterior
        </button>
    );
}
