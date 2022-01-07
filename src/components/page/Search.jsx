import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharacterSearch from "./CharacterSearch";
import CharacterCard from "../base/CharacterCard";
import BASE_URL from "../../api";
import { RiErrorWarningLine } from "react-icons/ri";
const Search = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search = urlParams.get("name");
  const [searchCharacter, setSearchCharacter] = useState([]);

  console.log(searchCharacter);

  useEffect(() => {
    fetch(`${BASE_URL}/?name=${search}`)
      .then((res) => res.json())
      .then((results) => {
        const data = results.results;
        setSearchCharacter(data);
      });
  }, [search]);

  const isSearch = search !== null && !searchCharacter?.length;

  if (isSearch) {
    return (
      <>
        <CharacterSearch />
        <div className="container my-5">
          <div className="alert d-flex flex-row" role="alert">
            <RiErrorWarningLine size={35} color="red" className="me-3" />
            <h2>There is no item...</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CharacterSearch />

      <div className="container">
        <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
          {searchCharacter
            .filter((character) =>
              character.name.toLowerCase().includes(search)
            )
            .map((item) => (
              <div className="col-md-4 py-3" key={item.id}>
                <CharacterCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Search;
