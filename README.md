# Final-project-backend


Route | Type | Description
| -- | -- | -- |
/index | GET | Home para usuarios no logueados y también búsqueda rápida


Route | Type | Description
| -- | -- | -- |
/user/home | GET | Crear usuario 
/user/signup | POST | Crear usuario usuario 
/user/login | GET | Entrar usuario 


Route | Type | Description
| -- | -- | -- |
/dict/words | GET | Ver todas las palabras del diccionario
/dict/addword | POST | Añadir palabra al diccionario
/dict/:id/edit | POST | Editar palabra


Route | Type | Description
| -- | -- | -- |
/post/post | GET | Ver los posts en general
/post/post/:id | POST | Editar post perteneciente al mismo usuario que lo quiere modificar


Route | Type | Description
| -- | -- | -- |
/admin/ | GET | Ver los post, los usuarios etc.
/admin/:id/edit | POST | Editar cualquier usuario
/admin/:id/post | POST | Editar cualquier post
