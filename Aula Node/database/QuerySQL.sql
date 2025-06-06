create database if not exists atividade_node;
drop database if exists atividade_node;
use atividade_node;

show tables;

insert into genders values  ('1', 'Ação', '2025-06-06 03:06:42', '2025-06-06 03:06:42'),
                            ('2', 'Comédia', '2025-06-06 03:06:42', '2025-06-06 03:06:42'),
                            ('3', 'Drama', '2025-06-06 03:06:42', '2025-06-06 03:06:42'),
                            ('4', 'Romance', '2025-06-06 03:06:42', '2025-06-06 03:06:42'),
                            ('5', 'Aventura', now(), now());

insert into actors values   ('1', 'Alice', 'Smith', '1990-05-15 00:00:00', '555-123-4567', 'alice.smith@example.com', '2025-06-01 20:31:55', '2025-06-01 20:31:55'),
                            ('2', 'Bob', 'Singer', '1960-05-15 00:00:00', '545-953-4567', 'singer.bob@example.com', '2025-06-01 20:33:33', '2025-06-01 20:33:33');

insert into films values    ('1', 'Sonic 3 - Shadow ', 'Terceiro filme da franquia Live Action de Sonic the Hedgehog', '2025', '2025-06-01 20:11:12', '2025-06-01 20:20:32', 5),
                            ('2', 'Scary Movie 2', 'Segundo filme da franquia da paródia de humor de filmes de Terror', '2001', '2025-06-01 20:22:51', '2025-06-01 20:22:51', 2);

select * from films;
select * from genders;
select * from actors;