import dynamic from "next/dynamic";

const ReactQuillDynamicWrapper = dynamic(() => import("./QuillEditor"), {
  ssr: false,
});
ReactQuillDynamicWrapper.displayName = "ReactQuillDynamicWrapper";

export default ReactQuillDynamicWrapper;
