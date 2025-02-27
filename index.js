// Part 1 Growing Pains

const radius = 5; // in meters
const PI = 3.1415;
const area = PI * radius * radius; // in square meters
const growthRate = 2; // doubles every week
const plantSpace = 0.8; // in square meters

const startingPlants = 20;
const startingPlantSpace = startingPlants * plantSpace;

const plantsAfter1Week = startingPlants * growthRate;
const totalAreaAfter1Week = plantsAfter1Week * plantSpace;

// Week 1

console.log("\n");
console.log(`Number of plants after 1 week: ${plantsAfter1Week}`);
console.log(
  `Plant area occupied after 1 week: ${totalAreaAfter1Week} / ${area} Square Meters`
);

if (totalAreaAfter1Week > area * 0.8) {
  console.log("Analysis... the plants need to be pruned");
} else if (totalAreaAfter1Week >= area * 0.5) {
  console.log("Analysis... the plants need to be monitored");
} else {
  console.log("Analysis... more plants can be planted");
}

// Week 2

const plantsAfter2Weeks = plantsAfter1Week * growthRate;
const totalAreaAfter2Weeks = plantsAfter2Weeks * plantSpace;

console.log("\n");
console.log(`Number of plants after 2 weeks: ${plantsAfter2Weeks}`);
console.log(
  `Plant area occupied after 2 weeks: ${totalAreaAfter2Weeks} / ${area} Square Meters`
);

if (totalAreaAfter2Weeks > area * 0.8) {
  console.log("Analysis... the plants need to be pruned");
} else if (totalAreaAfter2Weeks >= area * 0.5) {
  console.log("Analysis... the plants need to be monitored");
} else {
  console.log("Analysis... more plants can be planted");
}

// Week 3

const plantsAfter3Weeks = plantsAfter2Weeks * growthRate;
const totalAreaAfter3Weeks = plantsAfter3Weeks * plantSpace;

console.log("\n");
console.log(`Number of plants after 3 weeks: ${plantsAfter3Weeks}`);
console.log(
  `Plant area occupied after 3 weeks: ${totalAreaAfter3Weeks} / ${area} Square Meters`
);

if (totalAreaAfter3Weeks > area * 0.8) {
  console.log("Analysis... the plants need to be pruned");
} else if (totalAreaAfter3Weeks >= area * 0.5) {
  console.log("Analysis... the plants need to be monitored");
} else {
  console.log("Analysis... more plants can be planted");
}
