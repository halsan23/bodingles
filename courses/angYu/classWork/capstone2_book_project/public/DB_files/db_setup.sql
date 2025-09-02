CREATE DATABASE books
   WITH
      OWNER = postgres
      ENCODING = 'UTF8'
      LOCALE_PROVIDER = 'libc'
      CONNECTION LIMIT = -1
      IS_TEMPLATE = False;


CREATE TABLE bookData(
   id SERIAL PRIMARY KEY,
   olid VARCHAR(15),
   editOlid VARCHAR(15)
);


CREATE TABLE details(
   id SERIAL PRIMARY KEY,
   ref_id INTEGER REFERENCES bookdata(id),
   title text,
   author text,
   published integer,
   descr text,
   rating varchar(5)
);


CREATE TABLE links(
   id SERIAL PRIMARY KEY,
   ref_id INTEGER REFERENCES bookdata(id),
   cover text,
   weblink text
);