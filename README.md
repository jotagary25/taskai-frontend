## DEPLOY frontend for gen task ai app
- Porque Astro?
  Es muy ligero, su velocidad de compilación es clave, y se adapta a cualquier framework frontend
- Porque React?
  intuivo, muchas librerias compatibles, robusto y facil de integrar.
- Para Deployar:
  - Generar un archivo `.env` con el contenido del archivo .env.example, a menos que hayas cambiado el pruerto donde se despliega el backend
  - ejecutar `nvm install` & `nvm use` en el directorio root del proyecto, esto para instalar la versión de nodejs con la que se desarrollo el proyecto.
  - Ejecutar `pnpm dev` o `npm dev` para desplegar el proyecto localmente en localhost:4321
- Arquitectura?
  - sencilla, componentes separados, peticiones separadas, variables de entorno separadas.
  - Contexto global para almacenar sesiones y datos de usuario usando useContext de React

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
