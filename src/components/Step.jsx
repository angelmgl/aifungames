"use client";

import NextButton from "./NextButton";
import OptionsInput from "./OptionsInput";
import PrevButton from "./PrevButton";
import TextInput from "./TextInput";

export default function Step({
    step,
    index,
    form,
    handlePrev,
    handleNext,
    handleSubmit,
    handleChange,
    type,
    question,
    placeholder,
    name,
    maxLength,
    options,
    last = false,
}) {
    return step === index ? (
        <div className="w-full flex flex-col gap-2 fadeInUp">
            <label className="text-white text-xl">{question}</label>
            {type === "text" ? (
                <TextInput
                    value={form[name]}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    handleChange={handleChange}
                />
            ) : (
                <OptionsInput
                    currentValue={form[name]}
                    handleChange={handleChange}
                    name={name}
                    options={options}
                />
            )}
            <div className="grid grid-cols-2 gap-8">
                <PrevButton handlePrev={handlePrev} show={index === 1} />
                {last ? (
                    <NextButton
                        handleClick={handleSubmit}
                        label="Leer mi historia"
                    />
                ) : (
                    <NextButton handleClick={handleNext} label="Siguiente" />
                )}
            </div>
        </div>
    ) : (
        ""
    );
}
