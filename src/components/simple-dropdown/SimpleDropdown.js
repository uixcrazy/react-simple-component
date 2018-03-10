import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleDropdown.css';

class SimpleDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      currentItem: null,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeItem(item) {
    this.props.handleChangeItem(item);
    this.setState(
      {
        isShow: false,
        currentItem: item,
      }
    )
  }

  onOpen() {
    this.setState(
      {
        isShow: !this.state.isShow,
      }
    )
  }

	render() {
    const {
      items,
      startAt,
      renderItem,
      renderItemSelected,
     } = this.props;
     const { isShow, currentItem } = this.state;
     const _currentItem = currentItem || items[0]
    return (
      <div className={`SimpleDropdown ${isShow ? 'active' : ''}`} >
        <div className="current" onClick={this.onOpen.bind(this)}>
          {renderItemSelected(_currentItem)}
        </div>
        <ol start={startAt}>
          {
            items.map((item,index) => {
              return (
                <li key={index}
                  onClick={this.handleChangeItem.bind(this, item)}>
                  {renderItem(item, _currentItem, index)}
                </li>
              )
            })
          }
        </ol>
      </div>
    )
  }
}

SimpleDropdown.defaultProps = {
  items: [],
  startAt: 0,
};

SimpleDropdown.propTypes = {
  items: PropTypes.array,
  startAt: PropTypes.number,
  handleChangeItem: PropTypes.func,
  renderItem: PropTypes.func,
  renderItemSelected: PropTypes.func,
}

export default SimpleDropdown;
