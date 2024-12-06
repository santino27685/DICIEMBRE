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

### Navegación
- **Cambio entre Formularios**: Permite a los usuarios cambiar entre los formularios de inicio de sesión y registro mediante enlaces y navegación en la barra superior.
- **Barra de Navegación**: Incluye enlaces para iniciar sesión y registrarse, con estilos que indican la sección activa.

## Archivos Principales
- `index.html`: Contiene la estructura HTML del sistema de login y registro.
- `style.css`: Contiene los estilos CSS para el diseño y la presentación del sistema.
- `login.js`: Contiene la lógica JavaScript para el manejo del inicio de sesión.
- `register.js`: Contiene la lógica JavaScript para el manejo del registro de usuarios.

## Instalación
1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador web.

## Uso
1. Navega a la página de inicio de sesión o registro.
2. Completa los formularios según sea necesario.
3. Sigue las instrucciones y mensajes en pantalla.

## Créditos
Este proyecto utiliza las siguientes tecnologías y recursos:
- HTML5
- CSS
- JavaScript
- Google Fonts
- Font Awesome
