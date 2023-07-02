/*INSERT INTO [MicroservicePreferenceDB].[dbo].[GenderPreference]
select 
UserId
, case when GenderId = 1 
	then 2
	else 1
	end 
From MicroserviceUserDB.dbo.Users
WHERE UserId not in (1,5,8)
;

INSERT INTO [MicroservicePreferenceDB].[dbo].[GenderPreference]
VALUES(2,1);
*/

INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Signo Zodiacal');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Tiempo Libre');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Busco Sentimentalmente');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Educacion Alcanzada');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Planes Familiares');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Estilo de Comunicacion');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Mascotas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Frecuencia de Ejercicio');
INSERT INTO [MicroservicePreferenceDB].[dbo].[InterestCategory] VALUES('Dieta Alimentaria');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Aries');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Tauro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Geminis');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Cancer');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Leo');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Virgo');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Libra');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Escorpio');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Sagitario');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Capricornio');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Acuario');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 1,'Piscis');


INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Parrillada');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Fotografia');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Caminar');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Correr');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Leer');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Deportes');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Instagram');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Salir a Bailar');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Coches');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Basquet');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Futbol');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Cocinar');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Gimnasio');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Redes Sociales');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Parques');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Plazas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Musica');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Piletas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Motos');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES ( 2, 'Escritura');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Relacion');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Relacion, pero no me cierro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Diversion, pero no me cierro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Diversion a corto plazo');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Hacer amigxs');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (3, 'Lo sigo pensando');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Licenciatura');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Estudiante universitario');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Secundaria');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Doctorado');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Estudiando una maestria');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Maestria');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (4, 'Finalizando los estudios');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (5, 'Quiero tener hijos');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (5, 'No quiero tener hijos');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (5, 'Tengo hijos y quiero mas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (5, 'Tengo hijos y no quiero mas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (5, 'Todavia no se');


INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (6, 'Me encantan los mensajes');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (6, 'Llamada telefonica');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (6, 'Video llamada');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (6, 'No mando mensajes');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (6, 'Mejor en persona');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Sin mascotas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'No tengo pero me encantan');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Quiero una mascota');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Perro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Gato');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Reptil');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Anfibio');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Pajaro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Pescado');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Tortuga');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Hamster');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Conejo');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Otro');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Todas las mascotas');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (7, 'Me dan alergia las mascotas');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (8, 'Todos los dias');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (8, 'A menudo');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (8, 'Algunas veces');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (8, 'Nunca');

INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Vegano(a)');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Vegetariano(a)');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Pescetariano(a)');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Kosher');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Halal');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Carnivoro(a)');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Omnivoro(a)');
INSERT INTO [MicroservicePreferenceDB].[dbo].[Interest] VALUES (9, 'Otro');
/*


INSERT INTO [MicroservicePreferenceDB].[dbo].[OverallPreference] VALUES (2, 18, 32, 5);
INSERT INTO [MicroservicePreferenceDB].[dbo].[OverallPreference] VALUES (3, 26, 35, 15);
INSERT INTO [MicroservicePreferenceDB].[dbo].[OverallPreference] VALUES (4, 18, 65, 50);
INSERT INTO [MicroservicePreferenceDB].[dbo].[OverallPreference] VALUES (6, 20, 29, 3);
INSERT INTO [MicroservicePreferenceDB].[dbo].[OverallPreference] VALUES (7, 26, 28, 7);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,8,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,4,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,6,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,9,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,11,0,1);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,8,1,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,4,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,6,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,9,0,1);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,4,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,8,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,5,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,10,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,2,0,1);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,12,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,1,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,5,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,8,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,3,0,1);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,13,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,14,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,15,1,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (2,17,1,1);

INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,16,1,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,17,1,0);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (3,18,1,1);


INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,24,0,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (4,20,1,1);


INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,28,1,1);
INSERT INTO [MicroservicePreferenceDB].[dbo].[Preference] VALUES (6,31,1,1);*/