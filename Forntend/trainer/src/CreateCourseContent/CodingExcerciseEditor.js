import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodingExerciseEditor = ({ language }) => {
  const [output, setOutput] = useState('');

  const handleEditorChange = (value, event) => {
    // Handle changes to the code
  };

  const handleRunCode = () => {
    try {
      // Execute the code using eval()
      const result = (output); // Note: Using eval() can be unsafe and is generally not recommended in production
      setOutput(result.toString());
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <MonacoEditor
        width="800"
        height="400"
        language={language}
        theme="vs-dark"
        value={output}
        onChange={handleEditorChange}
      />
      <button onClick={handleRunCode}>Run</button>
    </div>
  );
};

export default CodingExerciseEditor;
