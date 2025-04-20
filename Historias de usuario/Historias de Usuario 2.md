Historia de Usuario: Personalización del Dashboard mediante Drag and Drop

Título
Personalización del Dashboard mediante Drag and Drop
Descripción
Como usuario, quiero arrastrar y soltar widgets en diferentes secciones del dashboard para tener un espacio de trabajo personalizado según mis necesidades.
Acceptance Criteria
- El usuario puede arrastrar un widget desde el panel lateral y soltarlo en una zona válida del dashboard.
- El widget se posiciona correctamente y permanece fijo tras soltarse.
- Aparece un mensaje de éxito confirmando la acción.
- Los cambios se guardan automáticamente.
OOS (Out of Scope)
- Configuración avanzada o edición del contenido del widget.
- Arrastrar widgets a zonas no válidas debe manejarse sin errores críticos.
Manejo de Errores
- Mensaje de advertencia si se intenta soltar un widget fuera de zonas válidas.
- No permitir widgets duplicados en la misma zona de destino.
Requisitos No Funcionales
- Compatibilidad con Chrome, Firefox y Edge.
Story Points (SP)
5 (Complejidad media-alta por las interacciones de UI y compatibilidad cross-browser).
Happy Path
1. El usuario selecciona un widget del panel lateral.
2. Arrastra el widget y lo suelta en una zona válida del dashboard.
3. Recibe un mensaje de confirmación de éxito.
4. Los cambios se guardan automáticamente.
Escenarios Negativos
- Intentar soltar un widget en una zona inválida muestra un mensaje de advertencia.
- No se permite colocar widgets duplicados.

Página para pruebas:
Se recomienda usar DemoQA - Droppable para validar el comportamiento esperado en un entorno controlado

[automationtest_2.cy.js](https://github.com/gonzalopetenarqa/Repositorio-QA-Automation/blob/main/cypress/e2e/automationtest_2.cy.js)

------------------------------------------------------------------------------------------------------------------------
