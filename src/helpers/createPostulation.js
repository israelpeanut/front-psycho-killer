export const createPostulation = async body => {
  // IU6KgrLSDw9QiYM2GgbZfsqwuJO2t0MY

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  console.log("ingreso");
  const url = `https://api-pyscho-killer.herokuapp.com/newPostulation`;
  // const url = `http://localhost:3001/newPostulation`;
  const resp = await fetch(url, requestOptions);
  const data = await resp.json();

  console.log(data);

  return data;
};
