"use client";

import { useState } from "react";
import Step from "./Step";

const initialForm = {
    name: null,
    attitude: null,
    partner: null,
    fear: null,
    supernatural: null,
    selfish: null,
    place: null,
    city: null,
}

export default function Form() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm)

    const handleNext = (e) => setStep(step + 1);

    const handlePrev = (e) => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // next
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[500px] bg-gray-900 py-8 px-12 rounded-xl"
        >
            <h1 className="text-4xl text-center mb-8 font-bold text-white">
                Tu historia de horror
            </h1>
            <Step
                step={step}
                index={1}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="text"
                question="¿Cuál es tu nombre?"
                placeholder="Angel..."
                name="name"
                maxLength={15}
            />
            <Step
                step={step}
                index={2}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="options"
                question="¿Te consideras una persona valiente o cobarde?"
                name="attitude"
                options={[
                    { label: "Valiente", value: "valiente" },
                    { label: "Cobarde", value: "cobarde" },
                ]}
            />
            <Step
                step={step}
                index={3}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="text"
                question="Elige una persona que te acompañe ¿Quién es?"
                placeholder="Alondra, mi novia"
                name="partner"
                maxLength={30}
            />
            <Step
                step={step}
                index={4}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="text"
                question="¿Cuál es tu peor miedo?"
                placeholder="¿Arañas? ¿Asesinos? ¿Payasos?"
                name="fear"
                maxLength={15}
            />
            <Step
                step={step}
                index={5}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="options"
                question="¿Crees en cosas sobrenaturales?"
                name="supernatural"
                options={[
                    { label: "Si, creo", value: "si" },
                    { label: "No, para nada", value: "no" },
                ]}
            />
            <Step
                step={step}
                index={6}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="options"
                question="¿Te consideras una persona egoísta?"
                name="selfish"
                options={[
                    { label: "Si, un poco", value: "si" },
                    { label: "Lo normal", value: "normal"},
                    { label: "No, para nada", value: "no" },
                ]}
            />
            <Step
                step={step}
                index={7}
                handlePrev={handlePrev}
                handleNext={handleNext}
                type="text"
                question="¿En qué lugar deseas que transcurra la historia?"
                placeholder="¿Un cementerio? ¿Un hotel? ¿Tu casa?"
                name="place"
                maxLength={50}
            />
            <Step
                step={step}
                index={8}
                handlePrev={handlePrev}
                handleNext={handleNext}
                last={true}
                type="text"
                question="¿En qué ciudad o pueblo vives?"
                placeholder="Capiatá"
                name="city"
                maxLength={20}
            />
        </form>
    );
}
