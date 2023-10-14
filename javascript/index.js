// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
function getInstruction(step, callback, errorCallback) {
  setTimeout(() => {
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[step]}</li>`;

    if (!mashedPotatoes[step]) errorCallback("Instructions not found.");
    else callback(step + 1);
  }, 1000);
}

getInstruction(0, () => {
  getInstruction(1, () => {
    getInstruction(2, () => {
      getInstruction(3, () => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>Mashed Potatoes are ready!</li>`;
        document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
      });
    });
  });
});

// Iteration 2 - using promises
function obtainInstruction(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;
      if (!steak[step]) reject("Instructions not found.");
      else resolve();
    }, 1000);
  });
}
obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() =>
    (document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`)(
      document.querySelector("#steakImg").removeAttribute("hidden")
    )
  )

  .catch((err) => console.log(err));

// Iteration 3 using async/await
function obtainInstructions(step) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoli[step]}</li>`;
    if (!broccoli[step]) reject(console.log("Instructions not found"));
    else resolve();
    // }, 2000);
  });
}
async function getBroccoliInstructions() {
  await obtainInstructions(0);
  await obtainInstructions(1);
  await obtainInstructions(2);
  await obtainInstructions(3);
  await obtainInstructions(4);
  await obtainInstructions(5);
  await obtainInstructions(6);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

getBroccoliInstructions();
// Bonus 2 - Promise all
