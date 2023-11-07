let pronoun = ["he", "they"];
let adj = ["smart", "fat"];
let noun = ["peanuts", "thigs"];
let domainSuffixes = [".com", ".net", ".org", ".io", ".co", ".es"];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateDomain() {
  let domain = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        const randomSuffix = getRandomElement(domainSuffixes);
        if (randomSuffix === ".com") {
          domain += pronoun[i] + adj[j] + noun[k] + randomSuffix + "<br>";
        } else {
          domain += pronoun[i] + adj[j] + randomSuffix + "<br>";
        }
      }
    }
  }
  document.getElementById("domain").innerHTML = domain;
}

document
  .getElementById("generateDomain")
  .addEventListener("click", generateDomain);
