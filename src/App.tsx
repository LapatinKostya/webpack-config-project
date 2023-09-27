import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "./pages";
import {Suspense} from "react";


const App = () => {
  return (
    <div className={'App'}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={'...loading'}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App
