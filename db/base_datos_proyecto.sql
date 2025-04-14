CREATE SCHEMA progra_dos_proyecto;
USE progra_dos_proyecto;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(30) not null,
contraseña varchar(255) not null,
fecha date not null,
identificacion int unsigned not null,
foto varchar(100),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarios_id INT UNSIGNED NOT NULL,
imagen VARCHAR(100),
producto VARCHAR(50) NOT NULL,
descripcion VARCHAR(200) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
producto_id INT UNSIGNED NOT NULL,
usuarios_id INT UNSIGNED NOT NULL,
comentario VARCHAR(150) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);


INSERT INTO usuarios (email, contraseña, fecha, identificacion, foto)
VALUES ("sofiasanmarco@gmail.com", 198473403, "2006-02-08", 47890765, "https://img.freepik.com/foto-gratis/retrato-expresivo-mujer-joven_1258-48167.jpg"),
("milagrostschudy@gmail.com", 38439703, "2006-02-25", 47820876, "/images/images/users/chica-pelo-mas-corto.jpg"),
("miataussig@gmail.com", 7739433, "2006-08-28", 47987542, "/images/images/users/chica-pelo-corto.jpg"),
("bahiavassallo@gmail.com", 48398409, "2005-06-06", 46897531, "/images/images/users/chico-3.webp"),
("agustinawartjes@gmail.com", 093746392, "2006-09-27", 47653921, "/images/images/users/chico-dos.jpg");

ALTER TABLE productos
MODIFY imagen VARCHAR(100);

INSERT INTO productos (usuarios_id, imagen, producto, descripcion)
VALUES (1, "../images/images/libro1.jpg", "Anna & the French kiss", "Publicada en el 2010, es la novela debut de Stephanie Perkins."),
(1, "../images/images/libro2.jpg", "The song of Achilles","Es la primera novela de la novelista y profesora estadounidense Madeline Miller."),
(2, "../images/images/libro3.jpeg", "Pride and Prejudice", "Publicada por primera vez el 28 de enero de 1813 es la más famosa de las novelas de Jane Austen"),
(2, "../images/images/libro4.jpg", "Sense and Sensibility", "Es la primera novela de la autora inglesa Jane Austen, publicada en 1811."),
(3, "../images/images/libro5.jpeg", "Little Women", "Es una novela sobre la mayoría de edad escrita por la novelista estadounidense Louisa May Alcott."),
(3, "../images/images/libro6.jpeg", "Romeo and Juliet", "La tragedia de Romeo y Julieta, es una tragedia escrita por William Shakespeare al principio de su carrera."),
(4, "../images/images/libro7.jpeg", "Anne of Green Gables", "Es una novela de 1908 de la autora canadiense Lucy Maud Montgomery"),
(4, "../images/images/libro8.jpeg", "Six of Crows", "Es una novela de fantasía escrita por la autora israelí-estadounidense Leigh Bardugo."),
(5, "../images/images/libro9.jpeg", "The Picture of Dorian Gray", "Es una novela de ficción filosófica y terror gótico de 1890 del escritor irlandés Oscar Wilde"),
(5, "../images/images/libro10.jpeg", "Emma", "Emma es una novela escrita por la autora inglesa Jane Austen.");

INSERT INTO comentarios (producto_id, usuarios_id, comentario)
VALUES (1, 2, "Este libro me hizo viajar sin moverme del lugar."),
(1, 5, "Me encantó el final, no lo esperaba."),
(1, 3, "¡No podía dejar de leer!"),
(2, 4, "Me gustó cómo hablaban los personajes."),
(2, 1, "Fue como ver una película en mi cabeza."),
(2, 3, "Me quedé con ganas de seguir leyendo."),
(3, 2, "Me hizo reír en varias partes."),
(3, 5, "Aprendí algo nuevo mientras lo leía."),
(3, 1, "Me gustó porque el personaje era valiente."),
(4, 2, "Sentí que yo también vivía la historia."),
(4, 1, "Me sorprendió lo que pasó en el medio."),
(4, 5, "Lo elegiría otra vez sin dudar."),
(5, 4, "El comienzo fue misterioso, me atrapó."),
(5, 2, "Me gustó cómo resolvieron el problema."),
(5, 1, "Me dieron ganas de conocer más libros del autor."),
(6, 3, "Me hizo pensar en mis propios sueños."),
(6, 4, "Este libro fue distinto a los que suelo leer."),
(6, 2, "Me encantó el lugar donde ocurre la historia."),
(7, 1, "Los dibujos acompañaban muy bien el texto."),
(7, 5, "Me sentí identificado con un personaje."),
(7, 3, "Lo terminé y se lo recomendé a un amigo."),
(8, 4, "Me gustó tanto que lo leí dos veces."),
(8, 1, "Tenía muchas emociones mezcladas."),
(8, 2, "Me gustó cómo hablaban de la amistad."),
(9, 5, "Me ayudó a entender algo que me pasaba."),
(9, 4, "Me costó al principio, pero después me enganché."),
(9, 1, "Sentí que los personajes eran como yo."),
(10, 2, "Me dieron ganas de escribir mi propio libro."),
(10, 3, "Fue fácil de leer y muy entretenido."),
(10, 5, "Me gustaría que tenga segunda parte.");

 







