// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync

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

// const potatoes = document.getElementById("mashedPotatoes");
// console.log(potatoes);
// const newItem = document.createElement("li");
// newItem.textContent = "Mashed potatoes are ready";
// // console.log(newItem);

// potatoes.appendChild(newItem);

// console.log(mashedPotatoes);

// Iteration 1 - using callbacks
// ...

getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;

                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// const potatoes = document.getElementById("mashedPotatoes");
// console.log(potatoes);
// const newItem = document.createElement("li");
// newItem.textContent = "Mashed potatoes are ready";
// // console.log(newItem);

// potatoes.appendChild(newItem);

// console.log(mashedPotatoes);

// Iteration 2 - using promises
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
});

obtainInstruction("steak", 1).then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
});

obtainInstruction("steak", 2).then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
});

obtainInstruction("steak", 3).then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
});

obtainInstruction("steak", 4).then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
});

obtainInstruction("steak", 5).then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
});

obtainInstruction("steak", 6).then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
});

obtainInstruction("steak", 7).then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
});

obtainInstruction("steak", 7).then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
});

// ... Your code here

async function makeBroccoli() {
  for (const step of broccoli) {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    await new Promise((resolve) => setTimeout(resolve, 1000)); //
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
console.log(brusselsSprouts);
Promise.all(brusselsSprouts).then(() => {
  setTimeout(() => {
    for (let i = 0; i < brusselsSprouts.length; i++) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${brusselsSprouts[i]}</li>`;
    }
  }, 1000);
  setTimeout(() => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  }, 1500);
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
