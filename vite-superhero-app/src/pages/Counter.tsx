import React, { useState, useEffect, useCallback } from 'react';

// onClick -> type reference

const Button = ({ children, onClick }: { children: string; onClick: any }) => {
  console.log('Render de button');
  return <button onClick={onClick}>{children}</button>;
};

const MemoButton = React.memo(Button);

const Title = ({ content }: { content: string }) => {
  console.log('Render de Title');
  return <h1>{content}</h1>;
};

const MemoTitle = React.memo(Title);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('Création du composant Counter');
  //   return () => {
  //     console.log('Avant la destruction du composant Counter');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('Création ou Mise à jour du compteur - composant Counter', counter);
  //   return () => {
  //     console.log('Destruction du composant dont la valeur de counter est: ', counter);
  //   };
  // }, [counter]);

  const onButtonHandler = (value: number) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  const memoizedIncrement = useCallback(() => {
    onButtonHandler(1);
  }, []);

  return (
    <section>
      {/* <h1>Counter</h1> */}
      <MemoTitle content='Counter' />
      <div>
        <p>Compteur: {counter}</p>
        <MemoButton onClick={memoizedIncrement}>Incrementer de 1</MemoButton>
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
