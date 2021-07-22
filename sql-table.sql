
CREATE Table customer (
    ID INT PRIMARY KEY IDENTITY (1, 1),
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    phone_number VARCHAR(10),
    curp VARCHAR(18),
    rfc VARCHAR(13),
    adress VARCHAR(50)
);

CREATE Table items (
    ID INT PRIMARY KEY IDENTITY (1, 1),
    item_name VARCHAR(10),
    price FLOAT(53) NOT NULL,
);

CREATE Table items_bought (
    ID INT PRIMARY KEY IDENTITY (1, 1),
    order_number INT,
    date_order DATE,
    price float(53),
    comment_order VARCHAR(100),
    ID_customer INT FOREIGN KEY REFERENCES customer(ID),
    ID_item INT FOREIGN KEY  REFERENCES items(ID)
);

INSERT INTO items VALUES ('tornillo',15)
INSERT INTO items VALUES ('taquete',8)
INSERT INTO items VALUES ('martillo',100)

INSERT INTO customer VALUES ('sebas','jimenez','9981513433','JIPS961219HCMY0P','JIPS961219GX9','KABAH 6TA PRIV')
INSERT INTO customer VALUES ('Diego','Reyes','9981513455','JIPD980915HCMY0P','JIPD980915121','KABAH 6TA PRIV')

INSERT INTO items_bought 
 VALUES (1503,'2021-07-19',50.5,'se pago con tarjeta',1,1)

 INSERT INTO items_bought 
 VALUES (2020,'2021-07-10',100,'se pago con efectivo',2,3)


