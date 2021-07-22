CREATE DATABASE DWH;

CREATE Table customer (
    ID INT PRIMARY KEY IDENTITY (1, 1),
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    phone_number VARCHAR(10),
    curp VARCHAR(18),
    rfc VARCHAR(13),
    adress VARCHAR(50),
    item_name VARCHAR(10),
    price FLOAT(53) NOT NULL,
    order_number INT,
    date_order DATE,
    total float(53),
    comment_order VARCHAR(100)
);
