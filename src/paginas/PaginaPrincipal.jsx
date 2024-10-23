import { useEffect, useState } from "react";
import {
  agregarEmpresa,
  editarEmpresa,
  eliminarEmpresa,
  obtenerEmpresas,
} from "../servicios/api";
import toast from "react-hot-toast";
import { Button, Container, Grid, Message } from "semantic-ui-react";
import ListaEmpresas from "../componentes/ListaEmpresas";
import FormularioEmpresa from "../componentes/modal/FormularioEmpresa";
import ConfirmarEliminacion from "../componentes/modal/ConfirmarEliminacion";
import { useTranslation } from "react-i18next";

const PaginaPrincipal = () => {
  const { t } = useTranslation();

  const [empresas, setEmpresas] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null);

  const [confirmarEliminar, setConfirmarEliminar] = useState(false);
  const [empresaAEliminar, setEmpresaAEliminar] = useState(null);

  const cargarEmpresas = async () => {
    try {
      const data = await obtenerEmpresas();
      setEmpresas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarEmpresas();
  }, []);

  const manejarGuardarEmpresa = async (empresa) => {
    try {
      if (empresaSeleccionada) {
        await editarEmpresa(empresaSeleccionada.id, empresa);
        toast.success(t("notificacion.editada"));
      } else {
        await agregarEmpresa(empresa);
        toast.success(t("notificacion.agregada"));
      }
      setModalAbierto(false);
      cargarEmpresas();
    } catch (error) {
      console.error(error.response.data.errors);
      throw error;
    }
  };

  const confirmarEliminarEmpresa = (empresa) => {
    setEmpresaAEliminar(empresa);
    setConfirmarEliminar(true);
  };

  const manejarEliminarEmpresa = async () => {
    try {
      await eliminarEmpresa(empresaAEliminar.id);
      toast.success(t("notificacion.eliminada"));
      cargarEmpresas();
    } catch (error) {
      console.error(error);
      toast.error(t("notificacion.eliminadaError"));
    }
    setConfirmarEliminar(false);
    setEmpresaAEliminar(null);
  };

  return (
    <Container as="main" style={{ paddingBottom: "100px" }}>
      <h1>{t("paginaPrincipal.titulo")}</h1>

      <Grid stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Button
              primary
              onClick={() => {
                setModalAbierto(true);
                setEmpresaSeleccionada(null);
              }}
            >
              {t("paginaPrincipal.btnAgregar")}
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            {empresas.length === 0 ? (
              <Message info size="big">
                <Message.Header>
                  {t("paginaPrincipal.sinEmpresas")}
                </Message.Header>
                <p>{t("paginaPrincipal.mensajeSinEmpresas")}</p>
              </Message>
            ) : (
              <ListaEmpresas
                empresas={empresas}
                onEditar={(empresa) => {
                  setEmpresaSeleccionada(empresa);
                  setModalAbierto(true);
                }}
                onEliminar={(empresa) => confirmarEliminarEmpresa(empresa)}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <FormularioEmpresa
        abierto={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onGuardar={manejarGuardarEmpresa}
        datosIniciales={empresaSeleccionada}
      />

      <ConfirmarEliminacion
        abierto={confirmarEliminar}
        empresaAEliminar={empresaAEliminar?.nombre || ""}
        onCancelar={() => setConfirmarEliminar(false)}
        onConfirmar={manejarEliminarEmpresa}
      />
    </Container>
  );
};

export default PaginaPrincipal;
