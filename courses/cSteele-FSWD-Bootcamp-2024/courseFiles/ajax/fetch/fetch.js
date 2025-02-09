// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

const loadStarWarsPeople = async (id) => {
   let apiAddress = `https://swapi.tech/api/people/${id}/`;
   try {
      const res = await fetch(apiAddress);
      const data = await res.json();
      console.log(data.result.properties);
   } catch (e) {
      console.log("ERROR!!!", e);
   }
};

for (let i = 2; i < 7; i = i + 2) {
   loadStarWarsPeople(i);
}