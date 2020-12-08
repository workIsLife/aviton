import getData from "./getData";

export default async function getNews(url) {
  const idNews = await getData(url);
  const dataNews = [];
  // Проверка
  for (let i = 0; i < 100; i++) {
    const urlNewsId = `https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json?print=pretty`;
    const itemNews = await getData(urlNewsId);
    dataNews.push(itemNews);
  }
  return dataNews;
}
