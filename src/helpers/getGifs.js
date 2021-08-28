export const getGift = async category => {
  // IU6KgrLSDw9QiYM2GgbZfsqwuJO2t0MY

  const body = {};

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
  };

  console.log("ingreso");
  const url = `https://www.breakingbadapi.com/api/quotes/1`;
  const resp = await fetch(url, requestOptions);
  const data = await resp.json();

  console.log(data);

  // const gifs = data.map(img => {
  //   return {
  //     id: img.id,
  //     title: img.title,
  //     url: img.images?.downsized_medium.url
  //   };
  // });

  return data;
};
