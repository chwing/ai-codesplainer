import Header from "./Header";
import CodeExplainForm from "./forms/codeExplainForm.jsx";

const CodeEntry = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <Header />
      <CodeExplainForm />
    </div>
  );
};

export default CodeEntry;