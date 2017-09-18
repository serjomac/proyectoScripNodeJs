-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-09-10 21:17:19.905

-- tables
-- Table: figura
DROP DATABASE diagramaDb;
CREATE DATABASE diagramaDb;
USE diagramaDb;

CREATE TABLE figura (
    id varchar(255) NOT NULL,
    nombre varchar(255) NOT NULL,
    texto varchar(255) NOT NULL,
    posicionX double(17,14) NOT NULL,
    posicionY double(17,14) NOT NULL,
    color varchar(255) NOT NULL,
    flujo_id int NOT NULL,
    size varchar(255) NOT NULL,
    rotacion varchar(255) 
);

-- Table: flujo
CREATE TABLE flujo (
    id int NOT NULL,
    numerofiguras int NOT NULL,
    usuario_id int NOT NULL,
    CONSTRAINT flujo_pk PRIMARY KEY (id)
);

-- Table: usuario
CREATE TABLE usuario (
    id int NOT NULL,
    nombre varchar(255) NOT NULL,
    nombreUsuario varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (id)
);

-- End of file.

