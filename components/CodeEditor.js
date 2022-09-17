import styles from "scss/components/Code_Editor.module.scss";
import React from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

const code = `export default function App() {
  return <h1>Hello Sandpack</h1>
}

const CustomCode = () => {
    return (
      <div>
        <h1>saldjaksldj</h1>
      </div>
    );
  };


  const CustomCode = () => {
    return (
      <div>
        <h1>saldjaksldj</h1>
      </div>
    );
  };
`;

function Code_Editor() {
  return (
    <SandpackProvider
      template="react"
      theme="dark"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      files={{
        "/App.js": code,
      }}
    >
      <SandpackCodeEditor
        style={{ height: "100%" }}
        wrapContent={true}
        showTabs={false}
      />
    </SandpackProvider>
  );
}

export default Code_Editor;
