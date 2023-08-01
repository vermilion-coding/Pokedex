import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name + '' );
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input className ="form_field"
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokémon name..."
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites.front_default} alt="Sprite"/>
            <div className="divTable" >
              <div className="divTableBody">
                <div className="divTableHeading">
                  Information
                </div>  
                <div className="divTableRow">
                  <div className="divTableCell">Pokédex Number</div>
                  <div className="divTableCell">#{data.id}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
            </div>
            <div className="divTable" style={{position:'absolute', left:'220px', top:'0px'}}>
              <div className="divTableBody">
                <div className="divTableHeading">
                    Stats
                  </div>  
                  <div className="divTableRow">
                    <div className="divTableCell">HP</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[0].base_stat)}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Attack</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[1].base_stat)}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Defense</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[2].base_stat)}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Sp. Attack</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[3].base_stat)}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Sp. Defense</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[4].base_stat)}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Speed</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.stats[5].base_stat)}
                    </div>
                </div>
              </div>




              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;