CREATE DATABASE toDoList
   WITH
   OWNER = postgres
   ENCODING = 'UTF8'
   LOCALE_PROVIDER = 'libc'
   CONNECTION LIMIT = -1
   IS_TEMPLATE = False;

create table todos (
	id serial primary key,
	todo varchar(100)
)