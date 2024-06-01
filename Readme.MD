# Yor Bot

Yor Bot es un bot de Discord desarrollado en Node.js con TypeScript, diseñado para realizar diversas funciones en servidores de Discord.

## Índice

- [Yor Bot](#yor-bot)
  - [Índice](#índice)
  - [Instalación](#instalación)
  - [Instalación de Yarn](#instalación-de-yarn)
    - [Windows](#windows)
    - [Linux](#linux)
  - [Ejecución](#ejecución)
    - [Windows](#windows-1)
    - [Linux](#linux-1)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Instalación

Antes de ejecutar el proyecto, asegúrate de tener Node.js y Yarn instalados en tu sistema. Puedes descargar Node.js desde [aquí](https://nodejs.org/) y seguir las instrucciones de instalación. Para instalar Yarn, puedes seguir las instrucciones disponibles en la [página oficial de Yarn](https://yarnpkg.com/getting-started/install).

## Instalación de Yarn

Yarn es un administrador de paquetes para Node.js que ofrece mejoras sobre npm en términos de velocidad, consistencia y seguridad.

### Windows

Puedes instalar Yarn en Windows siguiendo estos pasos:

1. Visita el sitio web oficial de Yarn en [yarnpkg.com](https://yarnpkg.com/getting-started/install) y descarga el instalador para Windows.

2. Ejecuta el instalador descargado y sigue las instrucciones en pantalla para completar la instalación.

3. Después de la instalación, verifica que Yarn se haya instalado correctamente abriendo una terminal (cmd o PowerShell) y ejecutando el siguiente comando:

    ```bash
    yarn --version
    ```

    Si Yarn se instaló correctamente, verás la versión de Yarn instalada en tu sistema.

### Linux

Para instalar Yarn en Linux, puedes utilizar el administrador de paquetes de tu distribución (por ejemplo, apt en Ubuntu). Aquí tienes un ejemplo de cómo instalar Yarn en Ubuntu:

1. Abre una terminal y actualiza el índice de paquetes:

    ```bash
    sudo apt update
    ```

2. Instala Yarn usando el siguiente comando:

    ```bash
    sudo apt install yarn
    ```

3. Después de la instalación, verifica que Yarn se haya instalado correctamente ejecutando:

    ```bash
    yarn --version
    ```

    Esto debería mostrar la versión de Yarn instalada en tu sistema.

Una vez que tengas Node.js y Yarn instalados, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/JFN-Engine/Yor-Bot.git
    ```

2. Navega hasta el directorio del proyecto:

    ```bash
    cd Yor-Bot
    ```

3. Instala las dependencias del proyecto usando Yarn:

    ```bash
    yarn install
    ```

## Ejecución

### Windows

Para ejecutar el proyecto en un entorno Windows, sigue estos pasos:

1. Abre una terminal en la raíz del proyecto.

2. Ejecuta el siguiente comando para iniciar el bot en modo de desarrollo:

    ```bash
    yarn dev-win
    ```

### Linux

Para ejecutar el proyecto en un entorno Linux, sigue estos pasos:

1. Abre una terminal en la raíz del proyecto.

2. Ejecuta el siguiente comando para iniciar el bot en modo de desarrollo:

    ```bash
    yarn dev
    ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, no dudes en abrir un issue o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia [ISC](https://opensource.org/licenses/ISC).

---
