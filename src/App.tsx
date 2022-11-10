import { useState } from "react";
import "./App.css";
type jsonResponse = {
  symbol: string;
};
function App() {
  const [acao, setAcao] = useState("");
  const [resposta, setResposta] = useState("");
  const chaveApi = "6SQDLPKECKY05F0U";
  const searchAcao = () => {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${acao}.SAO&apikey=${chaveApi}`)
      .then((response) => response.json())
      .then((data) => setResposta(data["Global Quote"]));
  };
  const montaTabela = () => {
    const keys = Object.keys(resposta);
    const value = Object.values(resposta);
    return (
      <table>
        <thead>
          <tr>
            {keys.map((key, i) => {
              return <th key={i}>{key.split(".")[1]}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {value.map((key, i) => {
              return <th key={i}>{key}</th>;
            })}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <header className="header">Header</header>
      <div className="wrapper">
        <input onChange={(e) => setAcao(e.target.value)} />
        <button onClick={searchAcao}>Pesquisar</button>
        {resposta ? montaTabela() : ""}
      </div>
    </>
  );
}

export default App;
