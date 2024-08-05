create database loginDB;

use loginDB;

create table if not exists user_table(
	id bigint not null primary key auto_increment,
    username varchar(256) not null,
    password varchar(256) not null
);