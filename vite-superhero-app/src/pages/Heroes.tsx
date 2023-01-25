import { useState } from 'react';

const Heroes = () => {
  const [letter, setLetter] = useState('A');

  fetch('http://localhost:4000/heroes?name_like=^A')
    .then((res) => res.json())
    .then((data) => console.log(data));

  const onClickHandler = (letter: string) => {
    setLetter(letter);
  };

  return (
    <section>
      <h1>Heroes List</h1>
      <ul>
        <li onClick={() => onClickHandler('A')}>A</li>
        <li onClick={() => onClickHandler('B')}>B</li>
        <li onClick={() => onClickHandler('C')}>C</li>
        <li onClick={() => onClickHandler('D')}>D</li>
        <li onClick={() => onClickHandler('E')}>E</li>
        <li onClick={() => onClickHandler('F')}>F</li>
      </ul>
      <p>Vous avez cliqué sur la lettre: {letter}</p>
      <div>
        <p>Nom de hero</p>
      </div>
    </section>
  );
};

// export par défaut
export default Heroes;

// export nommé
// export { Heroes }
