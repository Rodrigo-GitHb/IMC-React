import { useState } from "react";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcularIMC() {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  }

  return (

    <>
      <label>Peso:</label>
      <input type="number" placeholder="EX: 72.0"  onChange={(e) => setPeso(parseFloat(e.target.value))}/>
      <br />
      <label>Altura:</label>
      <input type="number" placeholder="EX: 1.80" onChange={(e) => setAltura(parseFloat(e.target.value))}/>
      <br />
      <button onClick={calcularIMC}>Calcular</button>
      <p>Seu IMC é: {calcularIMC()}</p>
    </>
  )
}

export default App
