"use client";
import React, { useEffect, useState } from "react";
import { handleCommand, initRegistry } from "../lib/commandHandler";
import OutputLog from "./OutputLog";
import CommandInput from "./CommandInput";

export default function Terminal() {
  const [output, setOutput] = useState([]);
  const [ready, setReady] = useState(false);

  const addOutput = (text) => setOutput((prev) => [...prev, text]);
  const clearOutput = () => setOutput([]);

  const context = { addOutput, clearOutput };

  useEffect(() => {
    async function boot() {
        addOutput("Booting WebbyOS kernel...");
        await initRegistry();
        addOutput("Kernel loaded. Type 'help' to see available commands.");
        setReady(true);
    }
    boot();
  }, []);

  const onCommand = (input) => {
    addOutput(`> ${input}`);
    const result = handleCommand(input, context);
    if (result) addOutput(result);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-green-400 p-4 font-mono">
      <OutputLog output={output} />
      {ready && <CommandInput onSubmit={onCommand} />}
    </div>
  );
}
