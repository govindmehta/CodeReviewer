import { useEffect, useState, useRef } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
//@ts-ignore
import Prism from "prismjs";
import Markdown from "react-markdown";
import axios from "axios";

const App: React.FC = () => {
  const [code, setCode] = useState<string>(`function sum(a: number, b: number): number {\n  return a + b;\n}`);
  const [review, setReview] = useState<string>("Results will be displayed here...");
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  // Focus editor on click
  const focusEditor = () => {
    if (editorRef.current) {
      const textarea = editorRef.current.querySelector("textarea");
      textarea?.focus();
    }
  };

  // Function to send code for AI review
  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setReview(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("Failed to fetch review.");
    }
  }

  return (
    <main>
      <section className="left" onClick={focusEditor}>
        <h2 className="section-title">Code Editor</h2>
        <div className="code" ref={editorRef}>
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={15}
            className="editor"
            textareaId="code-editor"
          />
        </div>
        <button className="review" onClick={reviewCode}>🔍 Review Code</button>
      </section>

      <section className="right">
        <h2 className="section-title">Review Output</h2>
        <p className="output-placeholder"><Markdown>{review}</Markdown></p>
      </section>
    </main>
  );
};

export default App;
