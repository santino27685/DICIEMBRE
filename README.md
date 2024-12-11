# Sistema Básico de Login con Pantalla 404

Este proyecto es un sistema básico de login y registro de usuarios con una pantalla 404 para indicar que la sección está en construcción.

## Funcionalidades

### Inicio de Sesión
- **Formulario de Login**: Permite a los usuarios iniciar sesión ingresando su nombre de usuario y contraseña.
- **Validación de Usuario**: Verifica que el nombre de usuario y la contraseña coincidan con los datos almacenados en `localStorage`.
- **Mensaje de Error**: Muestra un mensaje de error si el nombre de usuario o la contraseña son incorrectos.
- **Pantalla 404**: Después de un inicio de sesión exitoso, se muestra una pantalla 404 indicando que la sección está en construcción.

### Registro de Usuario
- **Formulario de Registro**: Permite a los usuarios crear una nueva cuenta ingresando su nombre de usuario, correo electrónico, contraseña y confirmación de contraseña.
- **Validación de Campos**: Verifica que todos los campos estén completos y que las contraseñas coincidan.
- **Validación de Email**: Verifica que el formato del correo electrónico sea correcto.
- **Validación de Contraseña**: Verifica que la contraseña tenga al menos 6 caracteres y contenga al menos un número.
- **Verificación de Usuario Existente**: Verifica que el nombre de usuario y el correo electrónico no estén ya registrados.
- **Mensaje de Error**: Muestra mensajes de error específicos para cada tipo de validación fallida.
- **Registro Exitoso**: Al completar el registro exitosamente, se muestra una pantalla 404 indicando que la sección está en construcción.

### Modo Oscuro
- **Activación del Modo Oscuro**: Permite a los usuarios alternar entre el modo claro y oscuro mediante un botón de alternancia.
- **Estilos del Modo Oscuro**: Cambia los colores de fondo, texto y elementos de la interfaz para una mejor visualización en entornos con poca luz.

## Archivos Principales
- `index.html`: Contiene la estructura HTML del sistema de login y registro.
- `style.css`: Contiene los estilos CSS para el diseño y la presentación del sistema.
- `login.js`: Contiene la lógica JavaScript para el manejo del inicio de sesión.
- `register.js`: Contiene la lógica JavaScript para el manejo del registro de usuarios.
- `theme.js`: Contiene la lógica JavaScript para el manejo del modo oscuro.
- `image.jpg`: Imagen utilizada en la pantalla de login.

## Instalación
1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador web.

## Uso
1. Navega a la página de inicio de sesión o registro.
2. Completa los formularios según sea necesario.
3. Sigue las instrucciones y mensajes en pantalla.
4. Alterna entre el modo claro y oscuro según tu preferencia.

## Cambiar Imagen de Login
Para cambiar la imagen del login, reemplaza el archivo `image.jpg` con la nueva imagen que deseas utilizar.

## Cambios Realizados
- **Navbar eliminada y modo oscuro se guarda en LocalStorage**: La barra de navegación ha sido eliminada y la preferencia del modo oscuro ahora se guarda en `localStorage`.
- **Implementación de sesión con timeout**: Se ha implementado una funcionalidad de sesión con tiempo de espera.
- **Mejora de naming y organización de carpetas**: Se ha mejorado la nomenclatura y la organización de las carpetas del proyecto.

## Créditos
Este proyecto utiliza las siguientes tecnologías y recursos:
- HTML5
- CSS
- JavaScript
- Google Fonts
- Font Awesome
