"use cliet";

export default function TextInput({
    value,
    name,
    placeholder,
    maxLength,
    handleChange,
    next,
}) {
    return (
        <input
            className="text-2xl text-white bg-transparent outline-none border-b border-b-white px-5"
            type="text"
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => {
                if (e.key === "Enter") next(e)
            }}
        />
    );
}
