create database project;
use project;

create table users(
    id int auto_increment primary key,
    name text not null,
    email text not null unique,
    password text not null,
    createdAt datetime,
    updatedAt datetime
);