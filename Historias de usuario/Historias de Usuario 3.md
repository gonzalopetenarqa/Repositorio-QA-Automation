Historia de Usuario Combinada: Flujo Completo de Login, Filtro y Compra en Sauce Labs

Título
Automatización del Flujo de Login, Filtro y Compra en Sauce Labs
Descripción
Como usuario estándar, quiero realizar el login, filtrar productos y completar una compra exitosa en Sauce Labs.
Acceptance Criteria
- Login: Ingresar usuario standard_user y contraseña secret_sauce, y acceder a la página principal.
- Filtro: Seleccionar filtro de productos (A-Z, Z-A, precio).
- Compra: Agregar productos al carrito, completar datos personales (nombre, apellido, código postal) y finalizar la compra con confirmación de éxito.
- Validaciones: Mensajes de error si no se completan los datos necesarios.
OOS (Out of Scope)
Métodos de pago avanzados y búsquedas fuera del flujo principal.
Story Points (SP)
13 (3 + 5 + 8)
Happy Path
1. El usuario inicia sesión correctamente.
2. Filtra productos según su preferencia.
3. Agrega productos al carrito.
4. Completa el pago y recibe una confirmación de compra exitosa.
Escenarios Negativos
- Error al ingresar datos de pago incompletos.
- Intento de checkout sin productos seleccionados.


[automationtest_3.cy.js](https://github.com/gonzalopetenarqa/Repositorio-QA-Automation/blob/main/cypress/e2e/automationtest_3.cy.js)

-------------------------------------------------------------------------------------------------------------------------
