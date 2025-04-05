// parse()
const data = '{"superHeroes":{"squad":"Super Squad","home":"Metro","base":"Secret Tower","active":true,"members":["Molecule Man","Madame Uppercut","Eternal Flame"]}}';

const parsedData = JSON.parse(data);


// stringify
const sHeroes = {
   squad: 'Super Squad',
   home: 'Metro',
   base: 'Secret Tower',
   active: true,
   members: ['Molecule Man', 'Madame Uppercut', 'Eternal Flame']
}

const stringifiedHeroes = JSON.stringify(sHeroes);