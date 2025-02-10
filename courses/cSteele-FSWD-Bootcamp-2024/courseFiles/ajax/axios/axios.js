// set variable to print names
const swPeople = document.getElementById('swPeople');

// Using Axios and a Async function to send multiple requests
const getStarWarsPeople = async (id) => {
   try {
      const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
      const newLI = document.createElement("LI");
      newLI.innerHTML = `<b>- ${res.data.result.properties.name} -</b>`;
      swPeople.append(newLI);
   } catch (e) {
      console.log("ERROR!!!", e);
   }
};

// for loop to process request for persons 3/5/7
for (let i = 3; i < 8; i = i + 2) {
   getStarWarsPeople(i);
}
