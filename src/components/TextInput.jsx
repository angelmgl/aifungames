"use cliet";

export default function TextInput({ name, placeholder, maxLength }) {
    return (
        <input
            className="text-2xl text-white bg-transparent outline-none border-b border-b-white px-5"
            type="text"
            id={name}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
        />
    );
}
