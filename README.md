# Development

Pasos para levantar la app en desarollo:


1. Levantar la base de datos
```
    docker compose up -d
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ``` pnpm install ```
5. Ejecutar el comando ``` pnpm dev ```
6. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
    pnpm dlx prisma init
    pnpm dlx prisma migrate dev
    pnpm dlx prisma generate
```
