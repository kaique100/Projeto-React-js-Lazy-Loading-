import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
import img  from './loader.gif';//aqui Vih
const Slogan = lazy(() => import('./code-splitting/Slogan'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));
const Logo = lazy(() => import('./code-splitting/Logo'));
// const logo1 = lazy(() => import('./loader.gif'));

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Suspense fallback={<p>Espere pelo Logo</p>}>
          <Logo />
        </Suspense>
        <Suspense fallback={<p>Espere pelo slogan</p>}>
          <Slogan />
        </Suspense>

        <Suspense fallback={<p>Espere pelo rodape</p>}>
          <Rodape />
        </Suspense>

        {/* <Suspense fallback={<img src={img} className="App-logo" alt="logo" />}>
       <Rodape />          
        </Suspense> */}
      </header>
    </div>
  );
}

export default App;