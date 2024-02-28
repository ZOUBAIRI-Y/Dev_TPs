import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Nopage from "./components/Nopage";


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inscription" element={<Form />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
