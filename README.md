# Gestión Empresarial - Frontend

Aplicación web para la gestión de empresa que permite **crear**, **consultar**, **editar** y **eliminar** empresas a través de una interfaz interactiva con funcionalidades como internacionalización y notificaciones.
Este proyecto está construido utilizando principalmente **React**, **Vite**, **Semantic UI React** en el frontend y **Node.js**, **Express**, **MySQL** en el backend; entre otras tecnologías modernas.

Para el repositorio del backend, da clic [aquí](https://github.com/JusmeJr93/gestion-empresarial-servidor/).

La aplicación completa está desplegada en Vercel. Se puede acceder aquí: [Reto técnico Full Stack Developer](https://gestion-empresarial-fullstack.vercel.app/)

## Tecnologías Usadas

- **React**: Biblioteca de JavaScript usada para construir la interfaz.
- **Vite**: Herramienta de desarrollo, como mejor alternativa a create-react-app .
- **Semantic UI React**: Biblioteca de componentes de UI para diseñar la interfaz de manera responsive.
- **Axios**: Cliente HTTP para hacer peticiones al backend.
- **i18next**: Framework para internacionalización, soportando múltiples idiomas.
- **React Hot Toast**: Para mostrar notificaciones interactivas.
- **Session Storage**: Se usa para almacenar el idioma escogido en el navegador para que persista al refrescar la pagina.
- **Vercel**: Plataforma utilizada para desplegar el frontend.

## Características

- **Operaciones CRUD**: Interactúa con el backend para agregar, consultar, editar y eliminar empresas.
- **Notificaciones**: Muestra mensajes de éxito y error en las operaciones de CRUD.
- **Internacionalización**: Cambia fácilmente entre inglés y español.

## Estructura del Proyecto

- **App.jsx**: Componente principal que organiza la estructura de la aplicación.
- **api.js**: Archivo donde se configuran las peticiones a la API del backend.
- **FormularioEmpresa.jsx**: Formulario para agregar y editar empresas, con validaciones y manejo de errores.
- **ListaEmpresas.jsx**: Tabla que muestra la lista de empresas, con botones para editar y eliminar.
- **ConfirmarEliminacion.jsx**: Modal para confirmar la eliminación de una empresa.
- **i18n.js**: Configuración de la internacionalización para cambiar de idioma.
- **formatoFecha.js**: Utilidad para formatear la fecha según el idioma seleccionado

## Uso de IA

- **Inspiración de la interfaz**: La interfaz de la aplicación fue inspirada por un diseño generado en Figma a través de **Galileo AI**, el cual proporcionó ideas valiosas para el layout. Esto me ayudó a simplificar la disposición de los elementos y mejorar la experiencia de usuario.
- **Gestión de errores en el formulario**: Yo estaba gestionando los errores en la pagina principal, lo que provocaba que el formulario se cerrara antes de mostrar los mensajes de errores como feedback el mismo formulario. Con una sugerencia de **ChatGPT** logré corregir eso.
- **Método para pasar el idioma al formatear la fecha**: Para mejorar la internacionalización de la aplicación, **ChatGPT** me proporcionó varios metodos de pasar el idioma actualmente en uso a la función que formatea las fechas en la tabla de empresas.
