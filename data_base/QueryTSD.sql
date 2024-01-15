CREATE DATABASE TALLERSD01;

-- Creación de las tablas
CREATE TABLE Rol (
    id_rol INT PRIMARY KEY IDENTITY(1,1),
    descripcion VARCHAR(255),
    estado BIT
);

CREATE TABLE Empleado (
    id_empleado INT PRIMARY KEY IDENTITY(1,1),
    nombres VARCHAR(255),
    genero VARCHAR(20),
    dni VARCHAR(15),
    n_celular VARCHAR(15),
    estado BIT
);
CREATE TABLE Tarjeta_RFID (
    id_tarjeta INT PRIMARY KEY IDENTITY(1,1),
    UID_tarjeta VARCHAR(50),
    estado BIT
);

CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY IDENTITY(1,1),
    id_rol INT,
    id_empleado INT,
    id_rfid INT,
    correo VARCHAR(255),
    contraseña VARCHAR(255),
    estado BIT,
    FOREIGN KEY (id_rol) REFERENCES Rol(id_rol),
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado),
	FOREIGN KEY (id_rfid) REFERENCES Tarjeta_RFID(id_tarjeta)
);

CREATE TABLE Contrato (
    id_contrato INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    fecha_inicio DATE,
    fecha_fin DATE,
    hora_entrada TIME,
    hora_salida TIME,
    puesto VARCHAR(255),
    salario DECIMAL(10, 2),
    estado BIT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE tipo_marcacion (
    id_tipo_marcacion INT PRIMARY KEY IDENTITY(1,1),
    descripcion VARCHAR(255),
    slug VARCHAR(50),
    estado BIT
);

CREATE TABLE Marcacion (
    id_marcacion INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    marcacion_entrada DATETIME,
    marcacion_salida DATETIME,
    fecha DATE,
    id_tipo_marcacion INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_tipo_marcacion) REFERENCES tipo_marcacion(id_tipo_marcacion)
);

/*SELECT * FROM ROL;
SELECT * FROM empleado;
SELECT * FROM Usuario;
SELECT * FROM Tarjeta_RFID;
SELECT * FROM Contrato;
SELECT * FROM tipo_marcacion;
SELECT * FROM Marcacion;
DELETE FROM Usuario;
DROP TABLE Usuario;
DBCC CHECKIDENT ('Usuario', RESEED, 0);
DBCC CHECKIDENT ('Contrato', RESEED, 0);*/

-- INSERTS

INSERT INTO Empleado (nombres, genero, dni, n_celular, estado) VALUES ('Juan Perez', 'Masculino', '123456789', '987654321', 1);
INSERT INTO Empleado (nombres, genero, dni, n_celular, estado) VALUES ('Ana Rodriguez', 'Femenino', '987654321', '123456789', 1);
INSERT INTO Empleado (nombres, genero, dni, n_celular, estado) VALUES ('Carlos López', 'Masculino', '567890123', '876543210', 1);
INSERT INTO Empleado (nombres, genero, dni, n_celular, estado) VALUES ('María García', 'Femenino', '345678901', '210987654', 1);

INSERT INTO Rol (descripcion, estado) VALUES ('Administrador', 1);
INSERT INTO Rol (descripcion, estado) VALUES ('Empleado', 1);
INSERT INTO Rol (descripcion, estado) VALUES ('Supervisor', 1);
INSERT INTO Rol (descripcion, estado) VALUES ('Gerente', 1);

INSERT INTO Tarjeta_RFID (UID_tarjeta, estado) VALUES ('ABC123', 1);
INSERT INTO Tarjeta_RFID (UID_tarjeta, estado) VALUES ('XYZ789', 1);
INSERT INTO Tarjeta_RFID (UID_tarjeta, estado) VALUES ('123456', 1);
INSERT INTO Tarjeta_RFID (UID_tarjeta, estado) VALUES ('789ABC', 1);

INSERT INTO tipo_marcacion (descripcion, slug, estado) VALUES ('Google', 'AA-G', 1);
INSERT INTO tipo_marcacion (descripcion, slug, estado) VALUES ('Auten', 'AA-R', 1);

INSERT INTO Usuario (id_rol, id_empleado, id_rfid, correo, contraseña, estado) VALUES (1, 1, 1, 'juan.perez@example.com', 'password123', 1);
INSERT INTO Usuario (id_rol, id_empleado, id_rfid, correo, contraseña, estado) VALUES (2, 2, 2, 'ana.rodriguez@example.com', 'password456', 1);
INSERT INTO Usuario (id_rol, id_empleado, id_rfid, correo, contraseña, estado) VALUES (3, 3, 3, 'carlos.lopez@example.com', 'password789', 1);
INSERT INTO Usuario (id_rol, id_empleado, id_rfid, correo, contraseña, estado) VALUES (4, 4, 4, 'maria.garcia@example.com', 'passwordABC', 1);

INSERT INTO Contrato (id_usuario, fecha_inicio, fecha_fin, hora_entrada, hora_salida, puesto, salario, estado) VALUES (1, '2022-01-01', '2022-12-31', '08:00:00', '17:00:00', 'Analista de Sistemas', 50000.00, 1);
INSERT INTO Contrato (id_usuario, fecha_inicio, fecha_fin, hora_entrada, hora_salida, puesto, salario, estado) VALUES (2, '2022-01-01', '2022-12-31', '09:00:00', '18:00:00', 'Asistente Administrativo', 40000.00, 1);
INSERT INTO Contrato (id_usuario, fecha_inicio, fecha_fin, hora_entrada, hora_salida, puesto, salario, estado) VALUES (3, '2022-01-01', '2022-12-31', '08:30:00', '17:30:00', 'Supervisor de Ventas', 60000.00, 1);
INSERT INTO Contrato (id_usuario, fecha_inicio, fecha_fin, hora_entrada, hora_salida, puesto, salario, estado) VALUES (4, '2022-01-01', '2022-12-31', '09:30:00', '18:30:00', 'Gerente de Recursos Humanos', 80000.00, 1);

INSERT INTO Marcacion (id_usuario, marcacion_entrada, marcacion_salida, fecha, id_tipo_marcacion) VALUES (1, '2022-01-05 08:00:00', '2022-01-05 17:00:00', '2022-01-05', 1);
INSERT INTO Marcacion (id_usuario, marcacion_entrada, marcacion_salida, fecha, id_tipo_marcacion) VALUES (2, '2022-01-05 09:00:00', '2022-01-05 18:00:00', '2022-01-05', 2);
INSERT INTO Marcacion (id_usuario, marcacion_entrada, marcacion_salida, fecha, id_tipo_marcacion) VALUES (3, '2022-01-05 08:30:00', '2022-01-05 17:30:00', '2022-01-05', 1);
INSERT INTO Marcacion (id_usuario, marcacion_entrada, marcacion_salida, fecha, id_tipo_marcacion) VALUES (4, '2022-01-05 09:30:00', '2022-01-05 18:30:00', '2022-01-05', 2);


