# Proyecto servicio Meza

## Páginas por crear

| Nombre página                      | Acceso público | Acceso user | Acceso admin | Ruta               |
| ---------------------------------- | :------------: | :---------: | :----------: | ------------------ |
| Login                              |       ✅       |     ➖      |      ➖      | `/login`           |
| Dashboard (visualización de datos) |       ➖       |     ✅      |      ✅      | `/dashboard`       |
| Administración de usuarios         |       ➖       |     ➖      |      ✅      | `/dashboard/users` |
| Registro de estudiantes            |       ✅       |     ➖      |      ➖      | `/register`        |

### Descripción páginas

#### Login

Página para inicio de sesión de usuarios registrados (`admin`/`user`)

#### Dashboard

Página para visualización de datos de estudiantes registrados:

**Tabla: Estudiantes**

- ID UAA **_PK_**
- Nombre(s)
- Apellido paterno
- Apellido materno (?)
- Semestre
- Correo
- Teléfono
- LinkedIn (?)
- GitHub (?)
- Herramientas de desarrollo (Lista de elementos)

**Formulario para agregar estudiantes\* **
Campos antes listados

- Tablas: [React Data Table](https://github.com/jbetancur/react-data-table-component#readme)
- Herramientas de desarrollo: [Select](https://react-select.com/home)
- Manejo de formularios: [Formik](https://formik.org/)
- Validaciones: [Yup](https://github.com/jquense/yup)

#### Administración de usuarios

Página para administración de usuarios con acceso a la plataforma (creación/modificación/visualización)

**Tabla: Usuarios**

- Nombre(s)
- Apellido(s)
- Correo **_PK_**
- Rol (`UserRole`)
- Verificado

```ts
type UserRole = "admin" | "user"

const UserRoles: Record<UserRole, string> = {
	admin: "Administrador",
	user: "Usuario",
} as const
```

**Formulario para agregar usuarios**
Campos antes listados + `tempPassword`

```ts
interface User {
	firstName: string
	lastName: string
	email: string
	role: UserRole
	verified?: boolean
}

type FirebaseUser = User & {
	tempPassword: string
}

const newUser: User = {
	firstName: "Nombre",
	lastName: "Apellido",
	email: "correo@correo.com",
	role: "admin",
}
```

#### Registro de estudiantes

Página para registro externo de estudiantes de manera independiente. Los estudiantes ingresarán a esta página de acceso público para agregar sus datos a la base. **Nota: Se limitará el registro a correos _@edu.uaa.mx_**

**Formulario para agregar estudiantes\* **
Campos antes listados
