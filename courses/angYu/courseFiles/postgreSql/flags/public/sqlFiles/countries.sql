CREATE TABLE capitals (
	id SERIAL PRIMARY KEY,
	country VARCHAR(45),
	capital VARCHAR(45)
);


SELECT * FROM public.capitals
ORDER BY id ASC
