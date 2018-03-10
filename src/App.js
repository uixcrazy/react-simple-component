import React, { Component } from 'react';
import SimpleDropdown from './components/simple-dropdown/SimpleDropdown';
import logo from './logo.svg';
import './App.css';

const ITEMS = [
  { name: 'All Flowers' },
  { name: 'Chrysanthemumggggfgdgdsf' },
  { name: 'Ixora' },
  { name: 'Wild Sunflower' },
  { name: 'Bougainvillaea' },
  { name: 'Rose' },
  { name: 'Jasmine' },
  { name: 'Orchids' },
]

function actionChangeItem(item) {
  console.log('click item', item);
}

function renderItemSelected(item) {
  return <p>{item.name}</p>
}

function renderItem(item, currentItem, index ) {
  return (
    <React.Fragment>
      {/* {index + 1}.  */}
      <span>{item.name}</span>
      {(item.name === currentItem.name) ? <span class="checkmark" /> : '' }
    </React.Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="sample1" >
          <SimpleDropdown
            items={ITEMS}
            handleChangeItem={actionChangeItem}
            renderItem={renderItem}
            renderItemSelected={renderItemSelected}
            />
        </div>
      </div>
    );
  }
}

export default App;