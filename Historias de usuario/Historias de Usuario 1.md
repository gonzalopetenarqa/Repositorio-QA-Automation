Historia de Usuario: Validación de Búsqueda de Productos en una Tienda Online

Título
Validación de búsqueda de productos en una tienda online
Descripción
Como usuario, quiero buscar productos en una tienda online para encontrar artículos disponibles de manera rápida y eficiente.
Acceptance Criteria
Escenario 1: Búsqueda exitosa
- Dado que el usuario ingresa un término de búsqueda válido, cuando presiona el botón de buscar, entonces debería ver una lista de productos relevantes con nombre, precio e imagen.
Escenario 2: Sin resultados
- Dado que el usuario ingresa un término no válido, cuando presiona el botón de buscar, entonces debería ver un mensaje indicando "No se encontraron resultados para tu búsqueda".
Escenario 3: Campo vacío
- Dado que el usuario intenta buscar sin ingresar texto, cuando presiona el botón de buscar, entonces debería ver un mensaje de error indicando que el campo no puede estar vacío.
Escenario 4: Error del sistema
- Dado un problema técnico, cuando el usuario intenta buscar, entonces debería mostrarse un mensaje de error general: "Ha ocurrido un error, por favor intenta más tarde".
OOS (Out of Scope)
- Funcionalidad de filtrado avanzado o búsqueda por categorías específicas.
- Sugerencias automáticas mientras se escribe en el campo de búsqueda.
Manejo de Errores
- Mensaje de error para campo vacío y para errores técnicos del sistema.
- Manejo de búsquedas sin resultados con mensajes claros.
Requisitos No Funcionales
- Permitir búsquedas usando la tecla "Enter".
- Compatible con dispositivos móviles y escritorio.
Story Points (SP)
5 (Complejidad media por el manejo de errores y compatibilidad en diferentes dispositivos).
Happy Path
1. El usuario ingresa un término válido en el campo de búsqueda.
2. Presiona el botón "Buscar" o la tecla "Enter".
3. Aparece una lista de productos relevantes, mostrando nombre, precio e imagen de cada uno.
Escenarios Negativos
- Búsqueda sin resultados.
- Intento de búsqueda con campo vacío.
- Error del sistema.

Página para pruebas:
Se recomienda usar la página Automation Practice para realizar las validaciones y pruebas en un entorno controlado.

[automationtest.cy.js](https://github.com/gonzalopetenarqa/Repositorio-QA-Automation/blob/main/cypress/e2e/automationtest.cy.js)

------------------------------------------------------------------------------------------------------------------------
