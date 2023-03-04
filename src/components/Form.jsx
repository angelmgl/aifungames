"use client";

import { useState } from "react";
import Result from "./Result";
import Step from "./Step";

const initialForm = {
    name: "",
    attitude: "",
    partner: "",
    fear: "",
    supernatural: "",
    selfish: "",
    place: "",
    city: "",
};

export default function Form() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [result, setResult] = useState("<p>Yo soy Kevin, una persona cobarde, pero también altruista. Siempre me ha acompañado el miedo a quedarme solo, motivo por el cual siempre he tratado de cuidar a mi acompañante Dahiana, el amor de mi vida. Yo creo en lo paranormal y siempre me he mantenido al tanto de todas las historias y leyendas acerca de este tema.</p>\n\n<p>Un día decidimos visitar La oficina de Girolabs, un lugar muy conocido por sus actividades paranormales. Al principio se presentaron los duendes malignos, lo que me provocó un gran miedo. Pero ese miedo cambió a terror cuando algunos fantasmas hicieron su aparición. Mi único pensamiento era proteger a mi acompañante a toda costa.</p>\n\n<p>La atmósfera cambió rápidamente y los fantasmas comenzaron a acercarse. Yo traté de proteger a Dahiana, quien se encontraba realmente aterrorizada. Empujé a los fantasmas con todas mis fuerzas tratando de encontrar una forma de escapar, pero ellos nos estaban rodeando y parecía que no había salida.</p>\n\n<p>Finalmente, me dejé caer al suelo y comencé a orar. En ese momento una luz cegadora me envolvió y los fantasmas desaparecieron. Yo sabía que mi altruismo me había salvado una vez más. Cuando me levanté, mi acompañante me abrazó y me dijo que habíamos vuelto a salir con vida.</p>");

    const handleNext = (e) => setStep(step + 1);

    const handlePrev = (e) => setStep(step - 1);

    const handleChange = (e) => {
        let name = e.target.name;
        setForm({ ...form, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: form }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw (
                    data.error ||
                    new Error(`Request failed with status ${response.status}`)
                );
            }

            setResult(data.result);
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[500px] bg-gray-900 mx-4 py-8 px-6 md:px-12 rounded-xl shadow-xl fadeInUp"
        >
            <h1 className="text-4xl text-center mb-8 font-bold text-white">
                Tu historia de horror
            </h1>
            {result ? (
                <Result result={result} />
            ) : (
                <div>
                    <Step
                        step={step}
                        index={1}
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
                        type="text"
                        question="¿Cuál es tu nombre?"
                        placeholder="Angel..."
                        name="name"
                        maxLength={15}
                    />
                    <Step
                        step={step}
                        index={2}
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
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
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
                        type="text"
                        question="Elige una persona que te acompañe ¿Quién es?"
                        placeholder="Alondra, mi novia"
                        name="partner"
                        maxLength={40}
                    />
                    <Step
                        step={step}
                        index={4}
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
                        type="text"
                        question="¿Cuál es tu peor miedo?"
                        placeholder="¿Arañas? ¿Asesinos? ¿Payasos?"
                        name="fear"
                        maxLength={40}
                    />
                    <Step
                        step={step}
                        index={5}
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
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
                        form={form}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleChange={handleChange}
                        type="options"
                        question="¿Te consideras una persona egoísta?"
                        name="selfish"
                        options={[
                            { label: "Un poco", value: "si" },
                            { label: "Lo normal", value: "normal" },
                            { label: "Para nada", value: "no" },
                        ]}
                    />
                    <Step
                        step={step}
                        index={7}
                        form={form}
                        handlePrev={handlePrev}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        type="text"
                        question="¿En qué lugar deseas que transcurra la historia?"
                        placeholder="¿Un cementerio? ¿Un hotel? ¿Tu casa?"
                        name="place"
                        maxLength={50}
                        last={true}
                    />
                </div>
            )}
        </form>
    );
}
