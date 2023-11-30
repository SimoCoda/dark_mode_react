import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// per tenere fisso l'ultimo the inserito
const getFromLocalStorage = () => {
  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme');
  }else{
    return 'light-mode';
  }
}
// returna il suo valore o di default return 'light-mode'

function App() {
  // settiamo l'ultimo thema inserito || oppure se non c'è nulla mettiamo light-mode
  const [theme, setTheme] = useState(getFromLocalStorage() || 'light-mode');

  // funzione che cambia il tema a seconda del suo valore
  const cambiaTema = () => {
    if(theme === 'light-mode'){
      setTheme('dark-mode');
    }else{
      setTheme('light-mode');
    }
  }

  // al mutare del theme state, attaca una classe al nostro html TAG
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <section className="section-center">
      <div className="container">
        <button type="button" className="btn" onClick={cambiaTema}>
          Cambia
        </button>
        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
