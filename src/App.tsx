import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./Pages/Home/HomePage";
import { useState } from "react";
import Main from "./components/Wrappers/Main";
import "./App.css";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModalTest = () => {
    setShowModal(!showModal);
  };

  /*const toggleModal = () => {
    setOpenModal(!openModal);
  }; */

  return (
    <>
      <Layout handleModalOpen={toggleModalTest}>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/test" element={<TestPage />} /> */}
          </Routes>
        </Main>
      </Layout>
    </>
  );
}
