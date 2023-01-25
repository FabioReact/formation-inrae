import reactLogo from './assets/react.svg'
import styles from './App.module.css'
// import { Fragment } from 'react'

// primary, danger

type ButtonProps = {
  danger?: boolean
  children: string
}

const Button = ({ danger, children }: ButtonProps) => {
  if (danger === true) {
    return <button style={{ backgroundColor: 'red' }}>{children}</button>
  }

  return (
    <button style={{ backgroundColor: 'green' }}>{children}</button>
  )
}

function App(props: unknown) {
  const formateur = 'Fabio'
  return (
    <>
      <div className={styles.parent}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>Apprendre React avec {formateur}</h2>
        <Button danger>Click here</Button>
      </div>
      <p>Autre</p>
    </>
  )
}

export default App
