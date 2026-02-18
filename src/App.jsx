import "./App.css";
import Fruity from "./assets/components/Fruity";
function App() {
  return (
    <div className="bg-slate-700 min-h-screen mx-4 ">
      <div className="mx-auto max-w-4xl pt-10 pb-20 px-4">
        <Fruity />
      </div>
      <footer className="text-center text-slate-300 py-6">
        réalisé par <span className="font-semibold">Kebe Aboul Kader</span>
      </footer>
    </div>
  );
}

export default App;
