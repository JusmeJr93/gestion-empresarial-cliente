export const formatoFecha = (fecha, idioma) => {
    const date = new Date(fecha);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    if (idioma === "es") {
        return date.toLocaleDateString("es-ES", options);
    } else {
        return date.toLocaleDateString("en-US", options);
    }
};
