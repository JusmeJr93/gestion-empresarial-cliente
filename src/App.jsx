import { Toaster } from "react-hot-toast";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import PaginaPrincipal from "./paginas/PaginaPrincipal";

const App = () => {
  return (
    <>
      <Header />
      <PaginaPrincipal />
      <Footer />

      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f3f2f2",
            color: "#66696d",
          },
        }}
      />
    </>
  );
};

export default App;
