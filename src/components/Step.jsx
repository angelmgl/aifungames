"use client";

import NextButton from "./NextButton";
import OptionsInput from "./OptionsInput";
import PrevButton from "./PrevButton";
import TextInput from "./TextInput";

export default function Step({
    step,
    index,
    handlePrev,
    handleNext,
    type,
    question,
    placeholder,
    name,
    maxLength,
    options,
    last=false
}) {
    return step === index ? (
        <div className="w-full flex flex-col gap-2 fadeInUp">
            <label className="text-white text-xl">{question}</label>
            {type === "text" ? (
                <TextInput
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
            ) : (
                <OptionsInput name={name} options={options} />
            )}
            <div className="grid grid-cols-2 gap-8">
                <PrevButton handlePrev={handlePrev} show={index === 1} />
                <NextButton handleNext={handleNext} />
            </div>
        </div>
    ) : (
        ""
    );
}
