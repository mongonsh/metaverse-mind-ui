// components/QuillEditor.tsx

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const editor = new Quill(editorRef.current as HTMLDivElement, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
          ],
        },
      });

      editor.on("text-change", () => {
        onChange(editor.root.innerHTML);
      });

      return () => {
        editor.off("text-change");
      };
    }
  }, [isClient, onChange]);

  return (
    <div>
      <div ref={editorRef} />
    </div>
  );
};

export default QuillEditor;
