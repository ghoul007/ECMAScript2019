const obj = {
    name: "Ahmed",
    occupation: "Web Developer Engineer",
    age: 30,
    city: "Tunis",
    yearOfBirth: 1989
};

const renameKey = (obj, key, newKey) => {
    const objToArr = Object.entries(obj);
    const updateArr = objToArr.map(([k, v]) => (k === key) ? [newKey, v] : [k, v]);
    return Object.fromEntries(updateArr);
};


 
 
console.log(renameKey(obj, "name", 'firstName'));