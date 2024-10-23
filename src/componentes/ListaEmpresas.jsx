/* eslint-disable react/prop-types */
import { Button, Icon, Table } from "semantic-ui-react";
import { formatoFecha } from "../utilidades/formatoFecha";
import { useTranslation } from "react-i18next";

const ListaEmpresas = ({ empresas, onEditar, onEliminar }) => {
  const { t, i18n } = useTranslation();

  const traducirTipo = (tipoEmpresa) => {
    switch (tipoEmpresa) {
      case "Distribuidor":
        return t("formularioEmpresa.tipo.opcion1");
      case "Mayorista":
        return t("formularioEmpresa.tipo.opcion2");
      case "Usuario final":
        return t("formularioEmpresa.tipo.opcion3");
      default:
        return tipoEmpresa;
    }
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t("listaEmpresas.nombre")}</Table.HeaderCell>
            <Table.HeaderCell>{t("listaEmpresas.tipo")}</Table.HeaderCell>
            <Table.HeaderCell>{t("listaEmpresas.fecha")}</Table.HeaderCell>
            <Table.HeaderCell>{t("listaEmpresas.favorita")}</Table.HeaderCell>
            <Table.HeaderCell>{t("listaEmpresas.acciones")}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {empresas.map((empresa) => (
            <Table.Row key={empresa.id}>
              <Table.Cell>{empresa.nombre}</Table.Cell>
              <Table.Cell>{traducirTipo(empresa.tipo_empresa)}</Table.Cell>
              <Table.Cell>
                {formatoFecha(empresa.fecha_constitucion, i18n.language)}
              </Table.Cell>
              <Table.Cell>
                {empresa.favorita ? t("listaEmpresas.esFavorita") : "No"}
              </Table.Cell>
              <Table.Cell>
                <Button
                  icon
                  onClick={() => onEditar(empresa)}
                  title={t("listaEmpresas.btnEditar")}
                >
                  <Icon name="edit" />
                </Button>
                <Button
                  icon
                  color="red"
                  onClick={() => onEliminar(empresa)}
                  title={t("listaEmpresas.btnEliminar")}
                >
                  <Icon name="trash" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListaEmpresas;
