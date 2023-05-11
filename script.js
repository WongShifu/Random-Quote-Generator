  const quotes = [
    "Two better than one - anonymous",
    "Monkey love banana cha cha - anonymous",
]

const photos = [
    "https://i.pravatar.cc/150?img=63",
    "https://i.pravatar.cc/150?img=42"
  ];

function setQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const randomPhoto = photos[randomIndex]
  const quoteParts = randomQuote.split(" - ");
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quotePart[1]}`;
  document.getElementbyId("image").src= randomPhoto;
}