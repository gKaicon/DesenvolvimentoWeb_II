create database if not exists atividade_node;

drop database if exists atividade_node;

use atividade_node;

show tables;

insert into
    genders
values (
        '1',
        'Ação',
        '2025-06-06 03:06:42',
        '2025-06-06 03:06:42'
    ),
    (
        '2',
        'Comédia',
        '2025-06-06 03:06:42',
        '2025-06-06 03:06:42'
    ),
    (
        '3',
        'Drama',
        '2025-06-06 03:06:42',
        '2025-06-06 03:06:42'
    ),
    (
        '4',
        'Romance',
        '2025-06-06 03:06:42',
        '2025-06-06 03:06:42'
    ),
    ('5', 'Aventura', now(), now());

insert into
    actors
values (
        null,
        'Alice',
        'Smith',
        '1990-05-15 00:00:00',
        '555-123-4567',
        'alice.smith@example.com',
        '2025-06-01 20:31:55',
        '2025-06-01 20:31:55'
    ),
    (
        null,
        'Bob',
        'Singer',
        '1960-05-15 00:00:00',
        '545-953-4567',
        'singer.bob@example.com',
        '2025-06-01 20:33:33',
        '2025-06-01 20:33:33'
    ),
    (
        null,
        'Dean',
        'Whinchester',
        '1979-01-24 00:00:00',
        '546-833-4865',
        'w.dean@example.com',
        '2025-06-01 20:33:33',
        '2025-06-01 20:33:33'
    ),
    (
        null,
        'Sam',
        'Whinchester',
        '1985-05-02 00:00:00',
        '547-652-9874',
        'w.sam@example.com',
        '2025-06-01 20:33:33',
        '2025-06-01 20:33:33'
    );

insert into
    films
values (
        null,
        'Sonic 3 - Shadow ',
        'Terceiro filme da franquia Live Action de Sonic the Hedgehog',
        '2025',
        '2025-06-01 20:11:12',
        '2025-06-01 20:20:32',
        5
    ),
    (
        null,
        'Scary Movie 2',
        'Segundo filme da franquia da paródia de humor de filmes de Terror',
        '2001',
        '2025-06-01 20:22:51',
        '2025-06-01 20:22:51',
        2
    );

insert into
    film_actor
values (NOW(), NOW(), 1,2),
    (NOW(), NOW(),1,1),
    (NOW(), NOW(),2,3),
    (NOW(), NOW(),3,4);

select * from films;

select * from genders;

select * from actors;