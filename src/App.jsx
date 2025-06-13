import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const json = JSON.parse(input);
      setOutput(JSON.stringify(json, null, 2));
    } catch (error) {
      setOutput("❌ Invalid JSON");
    }
  };

  const minifyJSON = () => {
    try {
      const json = JSON.parse(input);
      setOutput(JSON.stringify(json));
    } catch (error) {
      setOutput("❌ Invalid JSON");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Toolstack JSON Formatter</h1>
      <textarea
        placeholder="Paste your JSON here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: "150px" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={formatJSON}>Format</button>
        <button onClick={minifyJSON} style={{ marginLeft: "1rem" }}>
          Minify
        </button>
      </div>
      <h2>Result:</h2>
      <pre style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
        {output}
      </pre>
    </div>
  );
}

export default App;
