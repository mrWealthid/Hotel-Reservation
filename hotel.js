const lodge = [
  {
    id: 1,
    name: "Southern Serenade",
    description:
      "This elegant suite is highlighted with dramatic colors and a queen cherry rice bed. An antique couch sits in a bay window overlooking the sweeping lawn and the town of Rangford across the river. Adjoining the sitting-bedbookings is the original family bathbookings.",
    cost: { weekend: "$129.00", weekday: "$99.00" },
    details: ["Big Screen TV", "Free WIFI", "Jetted Tub", "Blue Ray Player"],
    photo: "images/serenade.jpg",
  },
  {
    id: 2,
    name: "Enchanted Escape",
    description:
      "This large but cozy bookings, warmly decorated in taupe and sea green, features a king bed and a pair of wing-backed chairs for relaxing. It is named for another early developer of Rangford who also resided in the home.",
    cost: { weekend: "$179.00", weekday: "$159.00" },
    details: ["Wine and Roses", "Jetted Tub", "King Sized Bed", ""],
    photo: "images/escape.jpg",
  },
  {
    id: 3,
    name: "Sandy Suite",
    description:
      "A favorite of guests, this bright and spacious bookings is delightfully decorated in sand and bamboo. It has four windows, three of which form a large bay embracing the luxurious cherry queen bed. Snuggle into this elegant four-poster or curl up on the sofa to read.",
    cost: { weekend: "$299.00", weekday: "$259.00" },
    details: [
      "Large Fan",
      "Sky Light",
      "Swimming Pool",
      "Complimentary Sun Screen",
    ],
    photo: "images/sandy.jpg",
  },
];

document.querySelector("body").onload = () => {
  getSuite(1);
};

const getSuite = (id) => {
  const Selected = lodge.find((room) => room.id === id);

  const features = `<p>${Selected.details[0]}</p> <p>${Selected.details[1]}</p>  <p>${Selected.details[2]}</p>  <p>${Selected.details[3]}</p> `;
  document.querySelector(".SuiteName").innerHTML = Selected.name;
  document.querySelector(".SuiteDesc").innerHTML = Selected.description;
  document.querySelector("img").src = Selected.photo;
  document.querySelector(
    ".weekday"
  ).innerHTML = `Weekday ${Selected.cost.weekday}`;
  document.querySelector(
    ".weekend"
  ).innerHTML = `Weekend ${Selected.cost.weekend}`;

  document.querySelector(".amenities").innerHTML = features;
};

document.getElementById("icons").onclick = () => {
  console.log("hi");
  document.querySelector(".btns").classList.toggle("show");
};
