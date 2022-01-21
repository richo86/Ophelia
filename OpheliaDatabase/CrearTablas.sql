CREATE TABLE productos (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    costo_produccion FLOAT NOT NULL,
    costo_venta FLOAT NOT NULL,
	cantidad INT NOT NULL
);

INSERT INTO productos(nombre, costo_produccion, costo_venta, cantidad)
VALUES('Camisa negra','10000','30000','10'),
('Pantalon clásico','50000','100000','2'),
('Gorro de lana','8000','25000','15'),
('Guantes','5000','12000','13'),
('Chaqueta','70000','150000','20');

CREATE TABLE clientes (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
	documento BIGINT NOT NULL,
	telefono BIGINT NOT NULL,
    edad INT,
	direccion VARCHAR(200)	
);

INSERT INTO clientes(nombre, documento, telefono, edad, direccion)
VALUES('Nicolas Isaza','1651366','3006523236','37','Calle 32a #51-14, Bogota'),
('Andres Gonzalez','8657356','3101254896','32','Calle 117 # 12-25, Bogota'),
('Pilar Garcia','28125456','3137154563','26','Carrera 19 #30-15, Bogota'),
('Carlos Lopez','1020175456','3014578412','25','Calle 127#20-35, Bogota');

CREATE TABLE ventas (
    id INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT NOT NULL,
	fecha_compra DATE NOT NULL,
	tipo_entrega VARCHAR(200),
	FOREIGN KEY (id_cliente) REFERENCES clientes (id)
);

INSERT INTO ventas(id_cliente, fecha_compra, tipo_entrega)
VALUES('1','20000118','Domicilio'),
('2','20000513','Reclama en tienda'),
('3','20000620','Domicilio'),
('1','20000714','Domicilio'),
('4','20010210','Domicilio');

CREATE TABLE detalle_ventas (
    id INT PRIMARY KEY IDENTITY(1,1),
    id_venta INT NOT NULL,
	id_producto INT NOT NULL,
	total_venta FLOAT NOT NULL,
	cantidad INT NOT NULL,
	impuesto FLOAT,
	FOREIGN KEY (id_venta) REFERENCES ventas (id),
	FOREIGN KEY (id_producto) REFERENCES productos (id)
);

INSERT INTO detalle_ventas(id_venta, id_producto, total_venta, cantidad, impuesto)
VALUES('1','2','200000','2','16'),
('2','1','30000','1','16'),
('3','4','24000','2','16'),
('4','1','90000','3','16'),
('5','5','150000','1','19');