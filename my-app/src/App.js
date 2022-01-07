import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;