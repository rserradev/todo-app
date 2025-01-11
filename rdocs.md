# TODO App - Documentación

## Funcionalidades por desarrollar

### Funcionalidades Básicas
- [ ] Filtro para tareas: todas, completadas, pendientes.
- [ ] Funcionalidad para eliminar tarea.
- [ ] Funcionalidad para completar tarea.
- [ ] Funcionalidad para modificar tarea.
- [ ] Botones para cada tarea (eliminar, completar, modificar).
- [ ] Crear componente `TaskItem`.

### Funcionalidades de Gestión de Datos
- [ ] Guardar las tareas en localStorage o en una API simple.
- [ ] Cargar las tareas guardadas al abrir la aplicación.
- [ ] Validar que no se puedan agregar tareas vacías.
- [ ] Validar que no se puedan agregar tareas duplicadas (si es relevante).

### Funcionalidades de Visualización
- [ ] Agregar estilos dinámicos (por ejemplo, colores para tareas completadas).
- [ ] Mostrar un mensaje cuando no haya tareas visibles.

### Funcionalidades de Código y Organización
- [ ] Separar el formulario de creación de tareas en su propio componente.

### Funcionalidades avanzadas
- [ ] Crear un menu lateral para filtrar tareas.

---

## Funcionalidades completadas
- [ ] Funcionalidad para agregar nueva tarea
- [ ] Mostrar lista de tareas.
- [x] Funcionalidad para crear tarea.
- [x] Funcionalidad para eliminar tarea.
- [x] Funcionalidad para completar tarea.



---

## Notas técnicas
- Usar `v-model` para enlazar datos entre el formulario y la lógica.
- Usar `v-for` para recorrer arrays y mostrarlos en el HTML.
- Considerar el uso de `computed` para filtrar tareas dinámicamente en el futuro.
- Planificar componentes reutilizables para mantener el código limpio y modular.
