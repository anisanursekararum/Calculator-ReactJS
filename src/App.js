import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KalcForm from './component/KalcForm';
import KalcButton from './component/KalcButton';
import TextResult from './component/TextResult';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasil: 0,
      perhitungan: "",
      error: null
    }
  }

  onInputChange = (event) => {

    const { perhitungan} = this.state;
    const perhitunganText = event.target.value;
    this.setState({perhitungan: perhitunganText});
    const hasil = this.hitung(perhitunganText);
    this.setState({ hasil: hasil});
  }; 

  onClickButton =  (value) => {
    const {perhitungan} = this.state;
    const updatePerhitungan = String(perhitungan) + String(value);
    this.setState({ perhitungan: updatePerhitungan });
    const hasil = this.hitung(updatePerhitungan);
    this.setState({ hasil: hasil});
  } ;

  onClearPerhitungan = () => {
    this.setState({perhitungan: "",hasil:0});

  };

  onDelPerhitungan = () => {
    const { perhitungan} = this.state;
    const textLength = perhitungan.length - 1;
    const updatePerhitungan = perhitungan.substr(0,textLength); 

    const updateHasil = this.hitung(updatePerhitungan);
    this.setState({ perhitungan: updatePerhitungan,hasil: updateHasil});
  };

  hitung = (perhitungan) => {
    const splitPerhitungan = perhitungan.split("");
    let isOperator = false;
    let operator = "";
    let angkaTerbaru  = "";
    let angkaPertama = "";
    let hasil = 0;
    let isHasil = false;
    for(var i = 0; i < splitPerhitungan.length; i++){
      
      switch(splitPerhitungan[i]){
        case "+":
          if(isHasil){
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "+";
        break; 
        case "-":
         if(isHasil){
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "-";
        break; 
        case "/":
         if(isHasil){
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "/";
        break; 
        case "*":
         if(isHasil){
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "*";
        break;
        default:

         if(angkaTerbaru === ""){
          angkaTerbaru = splitPerhitungan[i];
         } else {
          angkaTerbaru = angkaTerbaru + String(splitPerhitungan[i]);
         }

         if(isOperator === true){
           if (operator === "+") {
            hasil = Number(angkaPertama) + Number(angkaTerbaru);
            isHasil = true;
            
           }
           if (operator === "-") {
            hasil = Number(angkaPertama) - Number(angkaTerbaru);
            isHasil = true;
            
           }
           if (operator === "*") {
            hasil = Number(angkaPertama) * Number(angkaTerbaru);
            isHasil = true;
            
           }
           if (operator === "/") {
            hasil = Number(angkaPertama) / Number(angkaTerbaru);
            isHasil = true;
            
           }
         }

      }
    } 
    return hasil;
  }
  
  render() {
    const {hasil,perhitungan} = this.state;
    return (
      <div className="App">
        <div className="hasil">
          <TextResult  
            hasil={hasil}
          />
          <KalcForm
            onInputChange={this.onInputChange}
            perhitungan={perhitungan}
          />
        </div>
        <br/>
        <div className="tombol">
          <KalcButton
            onClickButton={this.onClickButton}
            onClearPerhitungan={this.onClearPerhitungan}
            onDelPerhitungan={this.onDelPerhitungan}
          />
        </div>
      </div>
    );
  }
}

export default App;
