create table bookdata (
	id serial primary key,
	olid varchar(15),
	editolid varchar(15),
	title text,
	author text,
	published varchar,
	descr text,
	rating varchar,
	cover text,
	webaddress text
)

insert into bookdata (
		olid,
		editolid,
		title,
		author,
		published,
		descr,
		rating,
		cover,
		webaddress
	)
	values (
		'bookolid',
		'editionolid',
		'title',
		'author',
		'date',
		E'descr',
		'rat',
		'cover link',
		'book link'
	)