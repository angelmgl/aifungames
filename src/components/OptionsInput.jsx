"use client";

export default function OptionsInput({
    currentValue,
    handleChange,
    name,
    options,
}) {
    return (
        <div className="flex items-center gap-4">
            {options.map(({ label, value }) => (
                <div className="flex items-center gap-2" key={value}>
                    <input
                        className="hidden"
                        id={value}
                        type="radio"
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor={value}
                        className={
                            (currentValue === value
                                ? "bg-cyan-400"
                                : "bg-white") + " px-3 md:px-4 cursor-pointer"
                        }
                    >
                        {label}
                    </label>
                </div>
            ))}
        </div>
    );
}
