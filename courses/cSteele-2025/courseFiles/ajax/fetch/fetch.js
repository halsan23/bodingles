// simple fetch() to return a single request
fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("Person 1:", res);
    return res.json();
  })
  .then((data) => {
    console.log(data.result.properties);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });


// Async function to send multiple requests
const loadStarWarsPeople = async (id) => {
   let apiAddress = `https://swapi.tech/api/people/${id}/`;
   try {
      const res = await fetch(apiAddress);
      const data = await res.json();
      console.log(`Person ${id}:`)
      console.log(data.result.properties);
   } catch (e) {
      console.log("ERROR!!!", e);
   }
};

for (let i = 2; i < 7; i = i + 2) {
   loadStarWarsPeople(i);
}