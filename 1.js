async function getProductArticles() {
  const productLinks = Array.from(
    document.querySelectorAll('a[href*="/products/"]')
  ).map((link) => link.href);

  const articles = [];

  for (const link of productLinks) {
    try {
      const response = await fetch(link);
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const properties = Array.from(doc.querySelectorAll("div._property"));
      const article = properties
        .filter(
          (property) =>
            property.querySelector("div._name")?.textContent.trim() ===
            "Артикул"
        )
        .map((property) =>
          property.querySelector("div._value")?.textContent.trim()
        )[0];

      if (article) {
        articles.push(article);
      }
    } catch (error) {
      console.error(`Ошибка загрузки ${link}:`, error);
    }
  }

  console.log(articles);
  return articles;
}

getProductArticles();
