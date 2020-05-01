console.log('run urlParam.js');
const urlParam = (myParam) => {
  let allParamsOfUrl = new URLSearchParams(window.location.search);
  return allParamsOfUrl.get(myParam);
}
