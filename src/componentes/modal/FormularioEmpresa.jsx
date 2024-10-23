/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Modal } from "semantic-ui-react";

const FormularioEmpresa = ({ abierto, onClose, onGuardar, datosIniciales }) => {
  const { t } = useTranslation();

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [favorita, setFavorita] = useState(false);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (datosIniciales) {
      setNombre(datosIniciales.nombre);
      setFecha(
        new Date(datosIniciales.fecha_constitucion)
          .toISOString()
          .split("T")[0] || ""
      );
      setTipo(datosIniciales.tipo_empresa || "");
      setComentarios(datosIniciales.comentarios || "");
      setFavorita(datosIniciales.favorita || false);
    }
  }, [datosIniciales]);

  const empresa = {
    nombre,
    fecha_constitucion: fecha,
    tipo_empresa: tipo,
    comentarios,
    favorita,
  };

  const manejarGuardar = async () => {
    setErrores({});

    try {
      await onGuardar(empresa);

      limpiarFormulario();
      onClose();
    } catch (error) {
      const newErrors = {};

      error.response.data.errors.forEach((err) => {
        newErrors[err.path] = err.msg;
      });

      setErrores(newErrors);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setFecha("");
    setTipo("");
    setComentarios("");
    setFavorita(false);
    setErrores({});
  };

  return (
    <Modal open={abierto}>
      <Modal.Header>
        {datosIniciales
          ? t("formularioEmpresa.titulo.editar")
          : t("formularioEmpresa.titulo.agregar")}
      </Modal.Header>
      <Modal.Content>
        <p style={{ fontStyle: "italic", color: "gray", marginBottom: "1em" }}>
          {t("formularioEmpresa.mensaje1")}
          <span style={{ color: "red" }}> * </span>
          {t("formularioEmpresa.mensaje2")}
        </p>

        <Form>
          <Form.Input
            label={t("formularioEmpresa.nombre")}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            error={
              errores.nombre && { content: errores.nombre, pointing: "below" }
            }
          />

          <Form.Input
            type="date"
            label={t("formularioEmpresa.fecha")}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            error={
              errores.fecha_constitucion && {
                content: errores.fecha_constitucion,
                pointing: "below",
              }
            }
          />

          <Form.Select
            label={t("formularioEmpresa.tipo.label")}
            options={[
              {
                key: "d",
                text: t("formularioEmpresa.tipo.opcion1"),
                value: "Distribuidor",
              },
              {
                key: "m",
                text: t("formularioEmpresa.tipo.opcion2"),
                value: "Mayorista",
              },
              {
                key: "u",
                text: t("formularioEmpresa.tipo.opcion3"),
                value: "Usuario final",
              },
            ]}
            value={tipo}
            onChange={(e, { value }) => setTipo(value)}
            required
            error={
              errores.tipo_empresa && {
                content: errores.tipo_empresa,
                pointing: "below",
              }
            }
          />

          <Form.TextArea
            label={t("formularioEmpresa.comentarios")}
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            error={
              errores.comentarios && {
                content: errores.comentarios,
                pointing: "below",
              }
            }
          />

          <Form.Checkbox
            label={t("formularioEmpresa.favorita")}
            checked={favorita}
            onChange={(e, { checked }) => setFavorita(checked)}
          />
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button
          onClick={() => {
            limpiarFormulario();
            onClose();
          }}
        >
          {t("formularioEmpresa.btnCancelar")}
        </Button>
        <Button positive onClick={manejarGuardar}>
          {t("formularioEmpresa.btnGuardar")}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FormularioEmpresa;
