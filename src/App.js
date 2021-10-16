import { Component } from "react";
import "./App.css";
import Card from "./Card";
const API_URL = "https://www.breakingbadapi.com/api/characters";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  //APi calling Handler
  fetchData = () => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => this.setState({ data: res }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        {this.state.data.length > 0 ? (
          this.state.data.map((charcter) => (
            <Card data={charcter} key={charcter.char_id} />
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    );
  }
}

export default App;
