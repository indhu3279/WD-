fetch("https://swapi.dev/api/people/1/")
  .then((res)=>{
    console.log("RESOLVED!",res);
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    return fetch("https://swapi.dev/api/people/5/")
  })
  .then((res)=>{
    console.log("SECOND REQUEST RESOLVED!!!");
    return res.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((e)=>{
    console.log("ERROR!",e);
  });

  //Using Async functions
const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/3");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/4/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!",e);
    }
};
loadStarWarsPeople();

    //Using Axios
    //Parsing of json is not needed
axios.get("https://swapi.dev/api/people/6/").then((res) => {
    console.log("RESPONSE: ",res);
})
    .catch((e)=>{
    console.log("ERROR!",e);
});

///////
const getStarWarsPerson1 = async(id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR",e);
    }
};
getStarWarsPerson1(8);
getStarWarsPerson1(9);
