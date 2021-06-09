
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import abyssinian_cat from './abyssinian-cat.svg';
import './My_app.css';


class Cat extends PureComponent {

  state = {
    error: null,
    top: '50px',
    left: '300px',
    blockLeft: '',
    blockRight: '',
    isShow:false
  };

  handleMove = (e) => {

    const elem = document.getElementById("block");
    let rect = elem.getBoundingClientRect();  //определяем координаты элемента
    //console.log(elem.getBoundingClientRect());
    let isShow = false;
    if (e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom)
    {
      isShow = true;
    }

    this.setState(   (state, props) =>
    {
      return {top: e.clientY + 'px',
         left: e.clientX + 'px',
         isShow: isShow
       } ;});

  }


  render() {

    return (
        <div>
          { this.state.isShow && <div style={{width:'150px',position:'relative',top:(parseInt(this.state.top) - 40) +'px' ,left:(parseInt(this.state.left) - 35) + 'px'}}>Покорми меня!</div>}
          <div className="example" id="block" style={{width:'100px',position:'relative',top:this.state.top,left:this.state.left}}>

            <img src={abyssinian_cat} className="cat" alt="logo" />

          </div>
        </div>
    );
  }

  componentDidMount() {
    window.addEventListener("mousemove",this.handleMove)
  }
}

export default Cat;

Cat.propTypes = {};

Cat.defaultProps = {};
