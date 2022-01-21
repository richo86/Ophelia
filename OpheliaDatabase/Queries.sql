/*Query 1*/
SELECT nombre, costo_venta
FROM productos;

/*Query 2*/
SELECT nombre
FROM productos
WHERE cantidad > 5;

/*Query 3*/
SELECT nombre, edad, documento, telefono, direccion
FROM clientes c
INNER JOIN ventas v
ON v.id_cliente = c.id
WHERE v.fecha_compra >= '20000201'
AND v.fecha_compra <= '20000525';

/*Query 4*/
SELECT SUM(total_venta)
FROM detalle_ventas d
INNER JOIN ventas v
ON d.id = v.id;

/*Query 5*/
/*Encontrar última fecha de compra*/
SELECT TOP 1 fecha_compra
FROM clientes c
INNER JOIN ventas v
ON v.id_cliente = c.id
WHERE c.id = 1
ORDER BY fecha_compra DESC;

/*Encontrar promedio en dias de fechas*/
SELECT c.id, CASE 
        WHEN COUNT(*) < 2
            THEN 0
        ELSE DATEDIFF(dd, 
                MIN(
                    fecha_compra
                ), MAX(
                    fecha_compra
                )) / (
                COUNT(*) - 
                1
                )
        END AS avgtime_days,
FROM productos c
INNER JOIN ventas v
ON v.id_cliente = c.id
WHERE c.id = 1
GROUP BY c.id;

/*Con el promedio encontrar fecha estimada*/
DATEADD(day,178,GETDATE());