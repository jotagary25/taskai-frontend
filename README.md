## DEPLOY frontend for gen task ai app
- Porque Astro?
  Es muy ligero, su velocidad de compilación es clave, y se adapta a cualquier framework frontend
- Porque React?
  intuivo, muchas librerias compatibles, robusto y facil de integrar.
- Para Deployar:
  - Generar un archivo `.env` con el contenido del archivo .env.example, a menos que hayas cambiado el pruerto donde se despliega el backend
  - ejecutar `nvm install` & `nvm use` en el directorio root del proyecto, esto para instalar la versión de nodejs con la que se desarrollo el proyecto.
  - ejecutar `pnpm install` o `npm install` para instalar todas las dependencias.
  - Ejecutar `pnpm dev` o `npm dev` para desplegar el proyecto localmente en localhost:4321
- Arquitectura?
  - sencilla, componentes separados, peticiones separadas, variables de entorno separadas.
  - Contexto global para almacenar sesiones y datos de usuario usando useContext de React

## DASHBOARD de visualización tecnica: (mobile first)
  - Muestra inicio de sesión con el email del usuario y su uuid unico que es usado como `session_id`
  - componente de chat para realizar las preguntas y visualizar las respuestas, listar las tareas pendientes, etc.
  - tablon de tareas en formato vertical, que se actualiza en cuanto se agregguen nuevas tareas.

## 🚀 Project Structure
```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
