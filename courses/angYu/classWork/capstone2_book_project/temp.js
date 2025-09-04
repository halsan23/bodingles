const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
const values = ['brianc', 'brianc@example.com'];

const res = await client.query(text, values);
console.log(res.rows); // Returns the inserted row




const users = await sql`insert into users (name, age) values (${ name }, ${ age }) returning name, age`;