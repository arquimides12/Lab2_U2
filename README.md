# **ESPE Tasks**

Este Laboratorio es una aplicación web para la gestión de tareas, donde puedes agregar, editar, marcar como completadas y eliminar tareas. Está desarrollado utilizando LitElement para la creación de componentes personalizados y Webpack para la construcción del proyecto.

## **Tecnologías Utilizadas**

- **LitElement**: Framework para crear componentes web.
- **Webpack**: Empaquetador de módulos.
- **CSS**: Estilos para la interfaz de usuario.
- **Git y GitHub**: Control de versiones y repositorio remoto.

## **Instalación**

Para instalar y configurar el proyecto en tu máquina local, sigue estos pasos:

### **1. Clona el repositorio**

Si aún no has clonado el repositorio, utiliza el siguiente comando para clonarlo:

```bash
git clone https://github.com/arquimides12/Lab2_U2.git
```
En mi caso sucedio esto ya que cree el repositorio despues.

# Instala las dependencias
Entra en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
npm run serve
```
Esto abrirá la aplicación en http://localhost:8080.

## Estructrua del Proyecto 

![Captura de ejecución](img/carpeta.png)

## Componentes 
En este laboratorio los componentes era a preferencia del desarrollador en este caso se 
hicieron cinco dentro de la carpeta src los culaes son 

![Captura de ejecución](img/components.png)

## Conexión de Archivos

index.html: Este archivo cumple la función de entrada de la aplicación. Aquí se define la estructura básica de la página HTML y se incluyen los enlaces a los archivos CSS y JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 1</title>
    <link rel="stylesheet" href="css/styles.css"> <!-- Estilos -->
    <script type="module" src="./src/index.js"></script> <!-- Conexión al archivo JS -->
<body>
    
</body>
</html>
```
se utiliza como punto de entrada donde se cargan todos los componentes y estilos. index.js se incluye como un script de módulo, lo que permite el uso de ES6+ y la importación de componentes.


## index.js 
En este archivo se configuran los componentes de LitElement y se controlan las interacciones y la lógica de la aplicación.

```js 
import "./components/espe-header.js";
import "./components/espe-task-list.js";
import "./components/espe-task-items.js";
import "./components/espe-task-form.js";
import "./components/espe-task-detail.js";
import '../css/styles.css';
// Aquí se puede agregar lógica como eventos, actualización de datos, etc.
```
index.js importa los componentes definidos en la carpeta src/components. Cada componente es una clase que extiende de LitElement y define su estructura y comportamiento.

index.js importa los componentes definidos en la carpeta src/components. Cada componente es una clase que extiende de LitElement y define su estructura y comportamiento.
---
Aquí definimos variables CSS para mantener una apariencia consistente y se utilizan en los componentes como LitElement. Las variables como --bg-primary, --text-primary se utilizan en los componentes para personalizar colores y otros estilos. 
---

## package.json

El archivo package.json contiene los metadatos del proyecto, como el nombre, la versión, las dependencias y los scripts para ejecutar tareas.

------
dependencies: Aquí están las dependencias del proyecto, como lit, que es la librería para crear los componentes web.

devDependencies: Contiene las dependencias necesarias para el desarrollo, como Webpack, webpack-cli y webpack-dev-server.
------

Los scripts definidos en package.json permiten ejecutar comandos como npm run serve para iniciar el servidor de desarrollo con Webpack.

## Uso en Componentes
 
Dentro de los componentes LitElement, las variables definidas en styles.css se pueden usar para personalizar los colores y otros estilos.

```js 
static get styles() {
  return css`
    :host {
      display: block;
      background-color: var(--bg-primary);  /* Utilizando las variables CSS definidas */
      color: var(--text-primary);
    }
  `;
}
```
### Importación del CSS: 

En el archivo index.html, el archivo CSS se importa para que se apliquen los estilos globales a todos los componentes:


