CREATE DATABASE ng_tanques;

USE ng_tanques;

CREATE TABLE tanque (
    idTanque VARCHAR(11) NOT NULL,
    calidad VARCHAR(128),
    peso FLOAT,
    fechaEsperadaRetorno DATETIME,
    idEtiqueta INT,
    foto VARCHAR(250)
);

INSERT INTO tanque VALUES
    ("EURO5149661", "Buena", 50, "2020-02-02 10:00:00", "123", ""), 
    ("EURO514967", "Mala", 60, "2020-12-08 10:00:00", "324", ""),  
    ("NVVU100706", "Mala", 60, "2020-09-10 14:00:00", "543", "");
