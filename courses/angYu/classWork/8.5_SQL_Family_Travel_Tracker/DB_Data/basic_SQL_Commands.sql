-- ALTER A TABLE --
ALTER TABLE <tablename>
   <do something>
eg1
-- change table name --
alter table student
   rename to users
eg2
alter table user
   alter column first_name type text
eg3
alter table contact_detail
   add email text
eg4
alter table visited_countries
   add unique(user_id, country_code)
   -- (means this unique user_id & country_code combined can not be duplicated)

-- =============================== --

-- DROP A TABLE
drop table if exists visited_countries, users

-- =============================== --

-- UPDATE DATA --
UPDATE <table to update>
SET <column_to_update> = VALUE, ...
WHERE <some condition>

eg1
update users
   set name = "Freddy"
   where id = 1

-- =============================== --

-- ORDER BY --
SELECT *
   FROM <some_table>
   order by <some_condition>

eg1
select *
   from users
   order by id asc
eg2
select *
   from users
   order by id desc

-- =============================== --

-- DELETE DATA --
DELETE FROM <table_with_data>
   WHERE <some_condition>

eg1
delete from visited_countries
   where id = 6
