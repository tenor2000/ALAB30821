// Part 3 Errors in Judgment

const radius = 5; // in meters
const PI = 3.1415;
const areaMax = PI * radius * radius; // in square meters
const growthRate = 2; // doubles every week
const plantPersonalSpace = 0.8; // in square meters

const startPlantsNum = 100;

console.log(
  `\nWe will start our experiment with ${startPlantsNum} plants and monitor them closely...\n
  The containment area will be ${areaMax} square meters...\n
  Each plant will take ${plantPersonalSpace} square meters of space...\n
  The number of plants should grow times ${growthRate} per week...\n
  May god have mercy on us all...\n`
);

// Week 1
let weekNumber = 1;
{
  const totalPlants = startPlantsNum * growthRate ** weekNumber;
  const totalArea = totalPlants * plantPersonalSpace;
  let analysis = "";
  try {
    if (totalArea > areaMax) {
      throw `***ERROR*** It's week ${weekNumber} and... Oh the humanity, why didn't they listen to the software engineers? \nThe plants have broken containment and are now unstoppable! \nWhy... didn't... they listen...?`;
    } else if (totalArea > areaMax * 0.8) {
      analysis =
        "the plants have taken over the city and must be stopped at all costs by PRUNING!";
    } else if (totalArea >= areaMax * 0.5) {
      analysis =
        "the plants have expanded their territory agressively and need to be MONITORED!";
    } else {
      analysis =
        "the plants appear docile, our scientists can be allowed to have more plants PLANTED!";
    }

    const report = `After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...
    The numbers have grown to ${totalPlants} plants which occupies ${totalArea} square meters of space. 
    This is ${
      (totalArea / areaMax) * 100
    }% of the total containment area of ${areaMax} square meters. 
    ANALYSIS: ${analysis}.`;

    console.log(report);
  } catch (error) {
    console.log(`After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...`);
    console.log(error);
  }
}

// Week 2
weekNumber = 2;
{
  const totalPlants = startPlantsNum * growthRate ** weekNumber;
  const totalArea = totalPlants * plantPersonalSpace;
  let analysis = "";
  try {
    if (totalArea > areaMax) {
      throw `***ERROR*** It's week ${weekNumber} and... Oh the humanity, why didn't they listen to the software engineers? \nThe plants have broken containment and are now unstoppable! \nWhy... didn't... they listen...?`;
    } else if (totalArea > areaMax * 0.8) {
      analysis =
        "the plants have taken over the city and must be stopped at all costs by PRUNING!";
    } else if (totalArea >= areaMax * 0.5) {
      analysis =
        "the plants have expanded their territory agressively and need to be MONITORED!";
    } else {
      analysis =
        "the plants appear docile, our scientists can be allowed to have more plants PLANTED!";
    }

    const report = `After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...
    The numbers have grown to ${totalPlants} plants which occupies ${totalArea} square meters of space. 
    This is ${
      (totalArea / areaMax) * 100
    }% of the total containment area of ${areaMax} square meters. 
    ANALYSIS: ${analysis}.`;

    console.log(report);
  } catch (error) {
    console.log(`After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...`);
    console.log(error);
  }
}

// Week 3
weekNumber = 3;
{
  const totalPlants = startPlantsNum * growthRate ** weekNumber;
  const totalArea = totalPlants * plantPersonalSpace;
  let analysis = "";
  try {
    if (totalArea > areaMax) {
      throw `***ERROR*** It's week ${weekNumber} and... Oh the humanity, why didn't they listen to the software engineers? \nThe plants have broken containment and are now unstoppable! \nWhy... didn't... they listen...?`;
    } else if (totalArea > areaMax * 0.8) {
      analysis =
        "the plants have taken over the city and must be stopped at all costs by PRUNING!";
    } else if (totalArea >= areaMax * 0.5) {
      analysis =
        "the plants have expanded their territory agressively and need to be MONITORED!";
    } else {
      analysis =
        "the plants appear docile, our scientists can be allowed to have more plants PLANTED!";
    }

    const report = `After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...
    The numbers have grown to ${totalPlants} plants which occupies ${totalArea} square meters of space. 
    This is ${
      (totalArea / areaMax) * 100
    }% of the total containment area of ${areaMax} square meters. 
    ANALYSIS: ${analysis}.`;

    console.log(report);
  } catch (error) {
    console.log(`After ${weekNumber} week${weekNumber > 1 ? "s" : ""}...`);
    console.log(error);
  }
}
