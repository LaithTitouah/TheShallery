const [searchData, setSearchData] = useState("");
const [id, setId] = useState("");

useEffect(() => {
  console.log(name)
  const searchterm = encodeURIComponent(
    name.trimEnd().replace(/\s+/g, "%20").toLowerCase()
  );
  // const url = `https://www.giantbomb.com/api/search/?api_key=8a95221cd0dac41e2cac3d2c2299690d2ba478d1&format=json&query=${searchterm}&resources=game`;
  const url = `https://www.giantbomb.com/api/game/3030-41355/?api_key=ed05c2b922ebc262b103b462266498c2b55d52ee&format=json&field_list=name,deck`
  fetch(url, {mode: 'no-cors'})
    .then((r) => r.json())
    .then((r) => setSearchData(r))
    .catch((e) => setSearchData(`${e}`));
}, [name]);

