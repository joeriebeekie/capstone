import Header from "./Molecules/header"
import Footer from "./Molecules/footer"
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default App;
