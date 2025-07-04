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

## 





