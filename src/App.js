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
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => {
        console.log(data)
        this.setState({allBeastes: data.beastes, showingBeastes: data.beastes})
      })
      .catch(error => console.error(error));
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
        <h1 className='app-title'>Fantastic beastes</h1>
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
