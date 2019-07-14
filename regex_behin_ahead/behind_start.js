const inventory = [
    {
      berry: "Strawberries",
      status: true
    },
    {
      berry: "Blueberries",
      status: true
    },
    {
      berry: "Mulberries",
      status: true
    },
    {
      berry: "Cranberries",
      status: true
    },
    {
      berry: "Blackberries",
      status: true
    }
  ];

const pattern = /(?<=blue)berries/i;

let nodes = "";
inventory.forEach(({ berry }) => {
  if (berry.search(pattern) !== -1) {
    nodes += `<div class="listItem">${berry}</div>`;
}
});
console.log("nodes ", nodes); //Blueberries