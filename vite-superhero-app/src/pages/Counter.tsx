import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Création du composant Counter');
    return () => {
      console.log('Avant la destruction du composant Counter');
    };
  }, []);

  useEffect(() => {
    console.log('Création ou Mise à jour du compteur - composant Counter', counter);
    return () => {
      console.log('Destruction du composant dont la valeur de counter est: ', counter);
    };
  }, [counter]);

  const onButtonHandler = (value: number) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  return (
    <section>
      <h1>Counter</h1>
      <div>
        <p>Compteur: {counter}</p>
        <button
          onClick={() => {
            onButtonHandler(1);
          }}
        >
          Incrementer de 1
        </button>
        <button
          onClick={() => {
            onButtonHandler(-1);
          }}
        >
          Decrementer de 1
        </button>
        <button
          onClick={() => {
            onButtonHandler(5);
          }}
        >
          Incrementer de 5
        </button>
        <button
          onClick={() => {
            onButtonHandler(-6);
          }}
        >
          Decrementer de 6
        </button>
      </div>
    </section>
  );
};

// export par défaut
export default Counter;

// export nommé
// export { Heroes }
