CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name text,
	flag text
);

SELECT * FROM public.flags
ORDER BY id ASC
