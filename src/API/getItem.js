import getData from "./getData";

async function getComments(mapUrl) {
  const comments = {};
  let nextComment = {};
  // Проверка
  for (let i = 0; i < mapUrl.length; i++) {
    //console.log(`i = ${i}`);
    let commentStr = "";
    let urlIdComment = `https://hacker-news.firebaseio.com/v0/item/${mapUrl[i]}.json?print=pretty`;
    let data = await getData(urlIdComment);
    console.log(data);
    commentStr = data.text;
    comments[i] = {};
    comments[i].id = mapUrl[i];
    if (Array.isArray(data.kids))
      comments[i].kids = await getComments(data.kids);
    comments[i].text = commentStr;
  }
  return comments;
}

export default async function getItem(url) {
  const itemData = await getData(url);
  // Проверка
  console.log(itemData);
  const dataComments = await getComments(itemData.kids);
  // let comments = {};
  console.log("data comments = ");
  console.log(dataComments);
  return { itemData, dataComments };
}

//export default getItem();
