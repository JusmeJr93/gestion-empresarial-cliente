/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { Button, Modal } from "semantic-ui-react";

const ConfirmarEliminacion = ({
  abierto,
  empresaAEliminar,
  onConfirmar,
  onCancelar,
}) => {
  const { t } = useTranslation();

  return (
    <Modal size="tiny" open={abierto} onClose={onCancelar}>
      <Modal.Header>{t("confirmarEliminacion.titulo")}</Modal.Header>
      <Modal.Content>
        <p>
          {t("confirmarEliminacion.mensaje")}
          <strong>&quot;{empresaAEliminar}&quot;</strong>?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onCancelar}>
          {t("confirmarEliminacion.btnCancelar")}
        </Button>
        <Button negative onClick={onConfirmar}>
          {t("confirmarEliminacion.btnAceptar")}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmarEliminacion;
