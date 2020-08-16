import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      Fullname:"Trafalgar D. Water Law",
      bio:"known as just Trafalgar Law (トラファルガー・ロー Torafarugā Rō?) and by his epithet as the -Surgeon of Death- is a pirate from North Blue and the captain and doctor of the Heart Pirates.He is one of twelve pirates who are referred to as the Worst Generation.He became one of the Shichibukai during the timeskip,but his position was revoked for allying with the Straw Hat Pirates and bringing down Donquixote Doflamingo.Law, like many other pirates, dreams of finding the One Piece.",
      profession:"Pirate Captain, Doctor, Shichibukai (former)",
      show:true,
      imgSrc:"tra.jpg",
      buttonMsg:"Hide",
      life:"alive",
      StyleContainer:{
        width: "auto",
        border: "1px solid grey",
        backgroundColor: "#ede1f7"},
      time:0,
    };
  }

  btnStyle={
    width:"200px",
    backgroundColor:"#aaa",
    color:"#e7d7f5",
    border:"2px solid #000028",
    borderRadius:"50px",
    textAlign:"center",

  };
  handlebtn=()=>{
    if(this.state.show){
      this.setState({
        StyleContainer:{display:"none"},
        buttonMsg:"Hidden !",
        life:"still alive",
        show:false})
    }else{
      this.setState({
        StyleContainer:{
          width: "auto",
          border: "1px solid grey",
          backgroundColor: "#ede1f7"},
        buttonMsg:"Hide",
        life:"alive",
        show:true
      })}}
  updatetime=()=>{
    this.setState(prevState=>{return {time:prevState.time+1} })
  }
  componentDidMount() {
    setInterval(() => this.updatetime(),1000);
  }
  componentWillUnmount() {
   clearInterval(this.timerID);
  }
  render(){
    return (
      <React.Fragment>
        <div className="Container" style={this.state.StyleContainer}>
          <div className="row">
            <div className="column left" style={{backgroundColor:'#aaa'}}>
              <img width ='250px' heigth ='250px' style={{borderRadius:"7px",boxShadow:"0 0 90px 20px #ede1f7"}} src={this.state.imgSrc} alt="imgsrc"/>
            </div>
            <div className="column right" style={{backgroundColor:"#bbb"}}>
              <h3>Full Name : <span className="info-text">{this.state.Fullname}</span></h3>
              <h4>Profession : <span className="info-text">{this.state.profession}</span></h4>
              <h4>Bio : <span className="info-text">{this.state.bio}</span></h4>
            </div>
          </div>
      </div>
      <div className="btn">
        <h3>Trafalgar is {this.state.life} here for {this.state.time}</h3>
        <button style={this.btnStyle} onClick={this.handlebtn}>{this.state.buttonMsg}</button>
      </div>


      </React.Fragment>
  );
}
}

export default App;
