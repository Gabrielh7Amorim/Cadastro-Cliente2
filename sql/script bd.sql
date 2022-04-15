CREATE DATABASE webii;
USE webii;

CREATE TABLE `usuario` (
`id` int NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(50) NULL DEFAULT NULL,
`senha` VARCHAR(50) NULL DEFAULT NULL,
PRIMARY KEY(`id`));
drop table usuario;

INSERT INTO usuario (nome, senha) VALUES ('Icaro', 'dihsiwi87752hds9jslskh');
INSERT INTO usuario (nome, senha) VALUES ('Aline', 'hdsaiididsak99h7t73y73');

SELECT * FROM usuario;

UPDATE usuario SET nome='Frank' WHERE id=1;
UPDATE usuario SET nome='Icaro' WHERE id=2;

DELETE FROM usuario where id=1;
