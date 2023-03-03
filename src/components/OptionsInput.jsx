"use client";

export default function OptionsInput({ name, options }) {
    return (
        <div className="flex items-center gap-4">
            {options.map(({ label, value }) => (
                <div className="flex items-center gap-2" key={value}>
                    <input className="hidden" type="radio" value={value} />
                    <label className="px-4 bg-white cursor-pointer">
                        {label}
                    </label>
                </div>
            ))}
        </div>
    );
}
