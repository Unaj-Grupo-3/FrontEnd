/* 
Florencio Varela: 15 usuarios 1-15
Quilmes: 15 usuarios 16-30
Berazategui: 14 usuarios 31-44
Almirante Brown: 13 usuarios 45-57 
Avellaneda: 11 usuarios 58-68
Lomas de Zamora: 10 usuarios 69-78
Lanús: 8 usuarios 79-86
Adrogué: 5 usuarios 87-91
Temperley: 4 usuarios 92-
Banfield: 5 usuarios
*/

-- Perfil 1
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (1, 'Juan', 'García', CAST('1990-05-15' AS DATE), 'Amante del deporte y la aventura.', 1, 3);

-- Perfil 2
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (2, 'María', 'Martínez', CAST('1985-11-28' AS DATE), 'Apasionada por el arte y la música.', 1, 2);

-- Perfil 3
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (3, 'Alejandro', 'Fernández', CAST('1995-08-02' AS DATE), 'Ingeniero en sistemas, amante de la tecnología.', 1, 1);

-- Perfil 4
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (4, 'Carolina', 'López', CAST('1988-03-19' AS DATE), 'Médica comprometida con el bienestar de los demás.', 1, 2);

-- Perfil 5
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (5, 'Andrés', 'Pérez', CAST('1992-07-12' AS DATE), 'Instructor de yoga y defensor del medio ambiente.', 1, 1);

-- Perfil 6
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (6, 'Laura', 'Gómez', CAST('1997-01-25' AS DATE), 'Estudiante de arte y amante de los animales.', 1, 2);

-- Perfil 7
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (7, 'Felipe', 'Rojas', CAST('1983-09-08' AS DATE), 'Emprendedor y apasionado por los negocios.', 1, 1);

-- Perfil 8
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (8, 'Cecilia', 'Suárez', CAST('1989-12-30' AS DATE), 'Bailarina de tango y promotora cultural.', 1, 2);

-- Perfil 9
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (9, 'Gabriel', 'Ramírez', CAST('1993-04-17' AS DATE), 'Entusiasta del deporte y la vida al aire libre.', 1, 1);

-- Perfil 10
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (10, 'Valeria', 'Luna', CAST('1996-06-23' AS DATE), 'Estudiante de psicología y defensora de los derechos humanos.', 1, 2);

-- Perfil 11
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (11, 'Martín', 'Acosta', CAST('1987-02-10' AS DATE), 'Amante de los viajes y la fotografía.', 1, 3);

-- Perfil 12
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (12, 'Lucía', 'Ortega', CAST('1994-10-04' AS DATE), 'Escritora y entusiasta de la literatura.', 1, 2);

-- Perfil 13
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (13, 'Pablo', 'Sánchez', CAST('1991-03-07' AS DATE), 'Ingeniero civil y amante de la arquitectura.', 1, 1);

-- Perfil 14
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (14, 'Ana', 'Torres', CAST('1986-08-14' AS DATE), 'Enfermera comprometida con la salud pública.', 1, 2);

-- Perfil 15
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (15, 'Sebastián', 'Mendoza', CAST('1990-12-01' AS DATE), 'Empresario y amante de los deportes acuáticos.', 1, 1);


-- Perfil 16
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (16, 'Gonzalo', 'López', CAST('1992-09-18' AS DATE), 'Apasionado por el fútbol y los videojuegos.', 2, 1);

-- Perfil 17
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (17, 'Florencia', 'Martínez', CAST('1988-05-07' AS DATE), 'Artista plástica y amante de la naturaleza.', 2, 3);

-- Perfil 18
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (18, 'Sebastián', 'Gómez', CAST('1995-02-23' AS DATE), 'Estudiante de arquitectura y aficionado al ciclismo.', 2, 1);

-- Perfil 19
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (19, 'Valentina', 'Rodríguez', CAST('1990-12-12' AS DATE), 'Abogada y defensora de los derechos humanos.', 2, 2);

-- Perfil 20
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (20, 'Eduardo', 'Acosta', CAST('1987-07-31' AS DATE), 'Emprendedor y amante de los negocios.', 2, 1);

-- Perfil 21
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (21, 'Luciana', 'Mendoza', CAST('1993-01-08' AS DATE), 'Estudiante de música y melómana empedernida.', 2, 2);

-- Perfil 22
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (22, 'Federico', 'Rojas', CAST('1984-11-25' AS DATE), 'Ingeniero informático y entusiasta de la tecnología.', 2, 1);

-- Perfil 23
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (23, 'Camila', 'Suárez', CAST('1989-06-03' AS DATE), 'Artista escénica y amante del teatro.', 2, 2);

-- Perfil 24
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (24, 'Ricardo', 'Fernández', CAST('1991-03-14' AS DATE), 'Amante de los deportes extremos y la adrenalina.', 2, 1);

-- Perfil 25
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (25, 'Romina', 'Torres', CAST('1996-08-22' AS DATE), 'Estudiante de psicología y defensora de los animales.', 2, 3);

-- Perfil 26
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (26, 'Luis', 'Ortega', CAST('1986-04-05' AS DATE), 'Empresario gastronómico y amante de la cocina.', 2, 1);

-- Perfil 27
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (27, 'Ana', 'Luna', CAST('1994-10-19' AS DATE), 'Investigadora científica y apasionada por la ciencia.', 2, 2);

-- Perfil 28
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (28, 'Gabriela', 'Pérez', CAST('1990-07-02' AS DATE), 'Entrenadora personal y amante del fitness.', 2, 2);

-- Perfil 29
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (29, 'Marina', 'García', CAST('1987-12-15' AS DATE), 'Periodista y viajera empedernida.', 2, 2);

-- Perfil 30
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (30, 'Diego', 'Sánchez', CAST('1993-03-29' AS DATE), 'Amante de la literatura y escritor aficionado.', 2, 1);


-- Perfil 31
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (31, 'Javier', 'González', CAST('1989-09-12' AS DATE), 'Amante de la música y aficionado a tocar la guitarra.', 3, 1);

-- Perfil 32
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (32, 'Carolina', 'Fernández', CAST('1995-05-03' AS DATE), 'Estudiante de medicina y amante de los animales.', 3, 2);

-- Perfil 33
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (33, 'Sergio', 'Rodríguez', CAST('1990-02-18' AS DATE), 'Apasionado por el cine y los clásicos del séptimo arte.', 3, 1);

-- Perfil 34
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (34, 'María', 'Suárez', CAST('1987-12-02' AS DATE), 'Chef profesional y amante de la gastronomía.', 3, 2);

-- Perfil 35
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (35, 'Pablo', 'Gómez', CAST('1985-08-19' AS DATE), 'Entusiasta del deporte y amante del fitness.', 3, 1);

-- Perfil 36
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (36, 'Valeria', 'Martínez', CAST('1993-03-06' AS DATE), 'Estudiante de arquitectura y apasionada por el diseño.', 3, 2);

-- Perfil 37
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (37, 'Federico', 'López', CAST('1988-11-23' AS DATE), 'Ingeniero informático y aficionado a la programación.', 3, 1);

-- Perfil 38
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (38, 'Camila', 'Rojas', CAST('1992-06-02' AS DATE), 'Amante de la fotografía y viajera incansable.', 3, 2);

-- Perfil 39
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (39, 'Diego', 'Pérez', CAST('1986-04-15' AS DATE), 'Emprendedor y apasionado por los negocios.', 3, 1);

-- Perfil 40
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (40, 'Luciana', 'García', CAST('1991-10-29' AS DATE), 'Estudiante de psicología y amante de la lectura.', 3, 2);

-- Perfil 41
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (41, 'Gustavo', 'Torres', CAST('1984-07-12' AS DATE), 'Artista plástico y amante de la pintura.', 3, 1);

-- Perfil 42
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (42, 'Romina', 'Ortega', CAST('1996-02-25' AS DATE), 'Estudiante de derecho y defensora de los derechos humanos.', 3, 2);

-- Perfil 43
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (43, 'Analía', 'Mendoza', CAST('1993-09-03' AS DATE), 'Amante de los deportes extremos y la adrenalina.', 3, 2);

-- Perfil 44
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (44, 'Marina', 'Luna', CAST('1989-04-16' AS DATE), 'Periodista y aficionada a los viajes.', 3, 2);


-- Perfil 45
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (45, 'Santiago', 'González', CAST('1988-11-14' AS DATE), 'Estudiante de ingeniería y aficionado a la tecnología.', 4, 1);

-- Perfil 46
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (46, 'Lucía', 'Fernández', CAST('1994-06-25' AS DATE), 'Apasionada por la música y amante de los conciertos.', 4, 2);

-- Perfil 47
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (47, 'Martín', 'Rodríguez', CAST('1989-03-08' AS DATE), 'Empresario y emprendedor en el sector tecnológico.', 4, 1);

-- Perfil 48
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (48, 'Laura', 'Suárez', CAST('1985-09-20' AS DATE), 'Estudiante de arquitectura y amante del diseño.', 4, 2);

-- Perfil 49
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (49, 'Jorge', 'Gómez', CAST('1993-02-13' AS DATE), 'Amante de los deportes al aire libre y la naturaleza.', 4, 1);

-- Perfil 50
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (50, 'María', 'Martínez', CAST('1967-07-06' AS DATE), 'Artista plástica y creadora de obras abstractas.', 4, 2);

-- Perfil 51
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (51, 'Carlos', 'López', CAST('1965-12-22' AS DATE), 'Amante de los libros y coleccionista de obras literarias.', 4, 1);

-- Perfil 52
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (52, 'Daniela', 'Rojas', CAST('1992-05-01' AS DATE), 'Estudiante de psicología y defensora de la salud mental.', 4, 2);

-- Perfil 53
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (53, 'Hernán', 'Pérez', CAST('1986-09-17' AS DATE), 'Emprendedor en el ámbito de la tecnología y la innovación.', 4, 1);

-- Perfil 54
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (54, 'Valentina', 'García', CAST('1991-04-03' AS DATE), 'Amante de los animales y defensora de los derechos de los animales.', 4, 2);

-- Perfil 55
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (55, 'Federico', 'Torres', CAST('1984-10-18' AS DATE), 'Apasionado por el cine y coleccionista de películas clásicas.', 4, 1);

-- Perfil 56
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (56, 'Romina', 'Ortega', CAST('1996-03-29' AS DATE), 'Estudiante de derecho y defensora de la justicia social.', 4, 2);

-- Perfil 57
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (57, 'Gastón', 'Mendoza', CAST('1993-10-11' AS DATE), 'Amante de los deportes acuáticos y surfista profesional.', 4, 1);


-- Perfil 58
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (58, 'Facundo', 'González', CAST('1989-09-05' AS DATE), 'Apasionado por la música y guitarrista en una banda local.', 5, 1);

-- Perfil 59
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (59, 'Marina', 'Fernández', CAST('1995-03-18' AS DATE), 'Estudiante de diseño de moda y amante de las pasarelas.', 5, 2);

-- Perfil 60
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (60, 'Andrés', 'Rodríguez', CAST('1986-12-01' AS DATE), 'Empresario y emprendedor en el sector financiero.', 5, 1);

-- Perfil 61
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (61, 'Carolina', 'Suárez', CAST('1992-07-14' AS DATE), 'Estudiante de medicina y apasionada por la salud.', 5, 2);

-- Perfil 62
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (62, 'Martín', 'Gómez', CAST('1990-02-27' AS DATE), 'Amante del fútbol y jugador en un equipo local.', 5, 1);

-- Perfil 63
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (63, 'Romina', 'Martínez', CAST('1987-08-10' AS DATE), 'Artista y pintora con exposiciones en galerías locales.', 5, 2);

-- Perfil 64
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (64, 'Sebastián', 'López', CAST('1994-01-23' AS DATE), 'Estudiante de psicología y apasionado por la mente humana.', 5, 1);

-- Perfil 65
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (65, 'Valeria', 'Rojas', CAST('1988-06-06' AS DATE), 'Emprendedora en el ámbito de la tecnología y la innovación.', 5, 2);

-- Perfil 66
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (66, 'Hernán', 'Pérez', CAST('1985-11-19' AS DATE), 'Amante de los viajes y explorador de nuevos destinos.', 5, 1);

-- Perfil 67
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (67, 'Laura', 'García', CAST('1991-04-02' AS DATE), 'Amante de los animales y voluntaria en un refugio.', 5, 2);

-- Perfil 68
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (68, 'Gustavo', 'Torres', CAST('1984-09-15' AS DATE), 'Cineasta independiente y director de cortometrajes.', 5, 1);


-- Perfil 69
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (69, 'Ignacio', 'González', CAST('1989-10-12' AS DATE), 'Amante de la fotografía y capturador de momentos únicos.', 6, 1);

-- Perfil 70
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (70, 'Camila', 'Fernández', CAST('1995-05-25' AS DATE), 'Estudiante de diseño gráfico y creativa en sus proyectos.', 6, 2);

-- Perfil 71
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (71, 'Martín', 'Rodríguez', CAST('1977-12-03' AS DATE), 'Empresario y amante de los negocios innovadores.', 6, 1);

-- Perfil 72
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (72, 'Valentina', 'Suárez', CAST('1993-07-16' AS DATE), 'Apasionada por la música y cantante en una banda local.', 6, 2);

-- Perfil 73
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (73, 'Lucas', 'Gómez', CAST('1991-02-28' AS DATE), 'Deportista y entrenador personal en un gimnasio local.', 6, 1);

-- Perfil 74
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (74, 'María', 'Martínez', CAST('1988-08-11' AS DATE), 'Amante de los libros y coleccionista de ediciones antiguas.', 6, 2);

-- Perfil 75
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (75, 'Javier', 'López', CAST('1994-01-24' AS DATE), 'Estudiante de psicología y apasionado por el comportamiento humano.', 6, 1);

-- Perfil 76
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (76, 'Carolina', 'Rojas', CAST('1989-06-07' AS DATE), 'Emprendedora en el ámbito de la moda y diseñadora de prendas exclusivas.', 6, 2);

-- Perfil 77
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (77, 'Gastón', 'Pérez', CAST('1986-11-20' AS DATE), 'Amante de los viajes y explorador de nuevas culturas.', 6, 1);

-- Perfil 78
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (78, 'Romina', 'García', CAST('1991-04-01' AS DATE), 'Amante de los animales y defensora de los derechos de los animales.', 6, 2);


-- Perfil 79
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (79, 'Juan', 'Pérez', CAST('1990-09-15' AS DATE), 'Amante de la tecnología y programador autodidacta.', 7, 1);

-- Perfil 80
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (80, 'María', 'González', CAST('1995-03-22' AS DATE), 'Estudiante de arquitectura y aficionada a la pintura.', 7, 2);

-- Perfil 81
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (81, 'Lucas', 'Rodríguez', CAST('1988-12-07' AS DATE), 'Emprendedor en el rubro gastronómico y amante de la cocina.', 7, 1);

-- Perfil 82
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (82, 'Carolina', 'Fernández', CAST('1993-07-18' AS DATE), 'Apasionada por el baile y profesora de danza contemporánea.', 7, 2);

-- Perfil 83
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (83, 'Martín', 'López', CAST('1991-02-29' AS DATE), 'Amante del fútbol y jugador en un equipo local.', 7, 1);

-- Perfil 84
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (84, 'Valentina', 'Martínez', CAST('1989-08-12' AS DATE), 'Artista y escultora con obras expuestas en galerías locales.', 7, 2);

-- Perfil 85
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (85, 'Sebastián', 'Gómez', CAST('1994-01-25' AS DATE), 'Estudiante de psicología y amante del estudio de la mente.', 7, 1);

-- Perfil 86
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (86, 'Laura', 'Rojas', CAST('1988-06-08' AS DATE), 'Emprendedora en el sector de la moda y diseñadora de accesorios.', 7, 2);


-- Perfil 87
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (87, 'Federico', 'González', CAST('1992-11-10' AS DATE), 'Amante de los animales y defensor de los derechos de los animales.', 8, 1);

-- Perfil 88
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (88, 'Gabriela', 'López', CAST('1993-05-03' AS DATE), 'Estudiante de medicina y apasionada por ayudar a los demás.', 8, 2);

-- Perfil 89
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (89, 'Matías', 'Fernández', CAST('1990-09-20' AS DATE), 'Aficionado al deporte y jugador de fútbol en un equipo local.', 8, 1);

-- Perfil 90
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (90, 'Luisa', 'Martínez', CAST('1994-02-13' AS DATE), 'Artista visual y pintora con exposiciones en galerías reconocidas.', 8, 2);

-- Perfil 91
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (91, 'Luciano', 'Pérez', CAST('1987-07-26' AS DATE), 'Emprendedor en el ámbito tecnológico y desarrollador de aplicaciones móviles.', 8, 1);



-- Perfil 92
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (92, 'Julia', 'Gómez', CAST('1991-06-05' AS DATE), 'Amante de los libros y escritora de novelas de misterio.', 9, 2);

-- Perfil 93
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (93, 'Fernando', 'López', CAST('1989-12-18' AS DATE), 'Empresario del rubro gastronómico y dueño de varios restaurantes.', 9, 1);

-- Perfil 94
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (94, 'Carolina', 'Martínez', CAST('1993-07-01' AS DATE), 'Estudiante de arquitectura y amante del diseño de interiores.', 9, 2);

-- Perfil 95
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (95, 'Sebastián', 'Fernández', CAST('1990-02-14' AS DATE), 'Deportista y corredor de maratones.', 9, 1);


-- Perfil 96
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (96, 'María', 'Gómez', CAST('1992-09-10' AS DATE), 'Apasionada por la música y cantante en una banda local.', 10, 2);

-- Perfil 97
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (97, 'Carlos', 'López', CAST('1988-05-23' AS DATE), 'Emprendedor en el rubro audiovisual y director de cine independiente.', 10, 1);

-- Perfil 98
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (98, 'Valentina', 'Martínez', CAST('1993-10-15' AS DATE), 'Estudiante de psicología y apasionada por el estudio del comportamiento humano.', 10, 2);

-- Perfil 99
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (99, 'Lucas', 'González', CAST('1989-03-28' AS DATE), 'Aficionado al fútbol y jugador en un equipo local.', 10, 1);

-- Perfil 100
INSERT INTO [dbo].[Users] ([UserId], [Name], [LastName], [Birthday], [Description], [LocationId], [GenderId])
VALUES (100, 'Ana', 'Pérez', CAST('1994-08-11' AS DATE), 'Amante de la naturaleza y activista ambiental.', 10, 2);

