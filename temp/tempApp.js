const scores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedra: 81,
    vonnie:  60
}

for (let person in scores) {
    console.log(`${person} scored a ${scores[person]}`);
}

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));


for (let person of Object.keys(scores)) {
    console.log(`${person} scored a ${scores[person]}`);
}