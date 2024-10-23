import { Container, Dropdown } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import logo from "/brand.png";
import bordeInferior from "/compusoluciones.png";

const Header = () => {
  const { i18n, t } = useTranslation();

  const idiomaOpciones = [
    { key: "English", text: "English", value: "en" },
    { key: "Spanish", text: "Spanish", value: "es" },
  ];

  useEffect(() => {
    const idiomaPreferido = sessionStorage.getItem("idioma");
    if (idiomaPreferido) {
      i18n.changeLanguage(idiomaPreferido);
    }
  }, [i18n]);

  const cambiarIdioma = (value) => {
    i18n.changeLanguage(value);
    sessionStorage.setItem("idioma", value);
  };

  return (
    <header
      style={{
        padding: "6px",
        marginBottom: "15px",
        borderBottom: "4px solid transparent",
        borderImage: `url(${bordeInferior}) 30 stretch`,
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} width={45} />

        <Dropdown
          button
          className="icon"
          labeled
          icon="world"
          options={idiomaOpciones}
          onChange={(e, { value }) => cambiarIdioma(value)}
          text={t("header.cambiarIdioma")}
        />
      </Container>
    </header>
  );
};

export default Header;
