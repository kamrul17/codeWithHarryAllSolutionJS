const imgDiv = document.querySelector(".cardImg");

const title1 = document.querySelector(".title1");

const title2 = document.querySelector(".title2");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  const imgtag = document.createElement("img");

  imgtag.classList.add("cardImage1");

  imgtag.src = thumbnail;

  let formattedNumber = (views / 1000).toFixed(0) + "k";

  title1.innerHTML = title;

  title2.innerHTML = `${cName} . ${formattedNumber} . ${monthsOld} months ago`;
  imgDiv.appendChild(imgtag);
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
