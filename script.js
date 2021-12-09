const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.count);
  });

const countPromise = apiPromise.then((data) => {
  return data.count;
});
// console.log(countPromise);
