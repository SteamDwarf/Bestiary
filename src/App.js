import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchInput from './components/search-input/search-input.component';

//Каждый классовый компонент, должен наследоваться от клсса Component
class App extends Component {

  //Конструктор, необходимый для создания состояний
  constructor() {
    super();

    this.state = {
      allBeastes: [],
      showingBeastes: [],
      filter: ''
    }
  }

  //Должны получить изображения с сервера
  componentDidMount() {
    this.fetchBeastes();
  }

  fetchBeastes() {
    fetch("http://localhost:5000/beastes")
      .then(response => response.json())
      .then(json => this.setState({allBeastes: json, showingBeastes: json}));
  }

  onSearchChange = (e) => {
    this.setState(() => {return {filter: e.target.value}},
    () => {
      let filteredBeastes = this.getFilteredBeasted();
      this.setState({showingBeastes: filteredBeastes});
    });
  }

  getFilteredBeasted() {
    let filteredBeastes = this.state.allBeastes.filter((beast) => {
      return beast.name.toLowerCase().includes(this.state.filter.toLowerCase());
    })

    return filteredBeastes;
  }

  //Данный метод рендерит возвращаемый JSX код
  render() {
    let {filter, showingBeastes} = this.state;
    let {onSearchChange} = this;

    return (
      <div className="App">
        <div className='app-title'>Fantastic beastes</div>
        <SearchInput 
          className="beastes-search-input"
          value={filter}
          onChange={onSearchChange}
          placeholder='Поиск существa'
        />
        <CardList cards={showingBeastes}/>
      </div>
    );
  }
}

export default App;
