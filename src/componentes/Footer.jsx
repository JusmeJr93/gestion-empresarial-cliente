import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "8px",
        backgroundColor: "#333333",
        color: "white",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <p>{t("footer.derechosAutor")}</p>
    </footer>
  );
};

export default Footer;
