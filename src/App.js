import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Form />
      <Table />
      <ToastContainer />
    </div>
  );
}

export default App;
