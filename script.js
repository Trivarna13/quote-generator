document.addEventListener("DOMContentLoaded", () => {
	const newQuoteButton = document.getElementById("new-quote");
	const quoteText = document.querySelector(".quote-text");
	const quoteAuthor = document.querySelector(".quote-author");

	async function generateRandomQuote() {
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		if (response.ok) {
			quoteText.innerHTML = `<i class="fa-solid fa-quote-left"></i>${data.content}<i class="fa-solid fa-quote-right"></i>`;
			quoteAuthor.textContent = data.author;
		} else {
			quoteText.textContent = "An error occured";
			console.log(data);
		}
	}

	newQuoteButton.addEventListener("click", generateRandomQuote);
	generateRandomQuote();
});
