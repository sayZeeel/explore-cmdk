import { React, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.module.scss";
import "./globals.scss";
import "./vercel.scss";
import "./App.css";

import * as Popover from "@radix-ui/react-popover";

import { Command } from "cmdk";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command
      filter={(value, search, keywords) => {
        const extendValue = value + " " + keywords.join(" ");
        if (extendValue.includes(search)) return 1;
        return 0;
      }}
    >
      {/* <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"> */}
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Fiction">
          <Command.Item keywords={["archer", "jeffrey"]}>
            The Clifton Chronicles
          </Command.Item>
          <Command.Item keywords={["yerin", "lindon"]}>Cradle</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="F1 teams">
          <Command.Item keywords={["verstappen", "max"]}>Redbull</Command.Item>
          <Command.Item keywords={["hamilton", "bottas"]}>
            Mercedes
          </Command.Item>
          <Command.Item>Aston Martin</Command.Item>
        </Command.Group>
      </Command.List>
      {/* </Command.Dialog> */}
    </Command>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CommandMenu />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
