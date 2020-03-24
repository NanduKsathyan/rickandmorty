import React,{Suspense,lazy} from 'react';
import './App.scss';

const Home=lazy(()=>import('./components/home'))
const App=() =>{
  return (
    <Suspense fallback='<div> Loading</div>'>
      {/* <header className="header">
        <p>Rick</p>
      </header> */}
    <Home/>
    </Suspense>
  );
}

export default App;
