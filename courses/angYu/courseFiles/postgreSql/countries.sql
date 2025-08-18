CREATE TABLE capitals (
	id SERIAL PRIMARY KEY,
	country VARCHAR(45),
	capital VARCHAR(45)
);

CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name text,
	flag text
);


SELECT * FROM public.capitals
ORDER BY id ASC

SELECT * FROM public.flags
ORDER BY id ASC
