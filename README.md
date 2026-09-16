Ariel Eduardo Borbon Izaguirre 252116

Preguntas:

¿por qué esta interfaz no menciona Express, NestJS ni memoria?
porque la interfaz es del dominio y esta no debe estar conectada a ninguna BD para que se pueda escalar y reutilizar



¿qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?
"Implements" ya que al decir implements MiembroRepository se crea el contrato y TS obliga a implementar todos los metodos de la interfaz




¿por qué este archivo no sabe qué es una petición HTTP?
porque el service se encarga de manejar la logica junto con el repositorio para procesar datos, todo lo de rutas / requests y codigos de estado se encarga el controller





¿por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?
porque MiembrosService es una clase en si, pero el repositorio se define como interfaz y al ser interfaz en tiempo de ejecucion (en JS) estas se borran, por eso ocupamos un token para decirle a NestJS que clase en especifico se debe instanciar cuando se solicite




¿qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?
Cuando ejecutamos el servidor con npm run start:dev y revisamos los endpoints de inscripciones, estas siguen funcionando igual que siempre, ya que como estamos trabajando en modulos esta logica queda aislada y segura a los cambios que hacemos en este modulo