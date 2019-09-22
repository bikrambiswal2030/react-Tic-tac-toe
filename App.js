import React from "react";
import "./App.css";
import { tsImportEqualsDeclaration } from "@babel/types";

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      btn1: "",
      btn2: "",
      btn3: "",
      btn4: "",
      btn5: "",
      btn6: "",
      btn7: "",
      btn8: "",
      btn9: "",
      message: "",
      btn1d: false,
      btn2d: false,
      btn3d: false,
      btn4d: false,
      btn5d: false,
      btn6d: false,
      btn7d: false,
      btn8d: false,
      btn9d: false,
      redwon:"",
      greenwon:""



    }
  }
  reset(){
    this.setState({
      btn1: "",
      btn2: "",
      btn3: "",
      btn4: "",
      btn5: "",
      btn6: "",
      btn7: "",
      btn8: "",
      btn9: "",
      message: "",
      btn1d: false,
      btn2d: false,
      btn3d: false,
      btn4d: false,
      btn5d: false,
      btn6d: false,
      btn7d: false,
      btn8d: false,
      btn9d: false
    })
  }
  checkResult() {
    if (this.state.btn1 == this.state.btn2 && this.state.btn1 == this.state.btn3){
      if (this.state.btn1 == "red") {
        this.setState({
          message: "red has won",
          redwon:this.state.redwon+1
        })
      } else if (this.state.btn1 == "green") {
        this.setState({
          message: "green has won",
          greenwon:this.state.greenwon+1
        })
      }
    }
    if (this.state.btn4 == this.state.btn5 && this.state.btn4 == this.state.btn6) {
      if (this.state.btn4 == "red") {
        this.setState({
          message: "red has won",
          redwon:this.state.redwon+1
        })
      } else if (this.state.btn4 == "green") {
        this.setState({
          message: "green has won",
          greenwon:this.state.greenwon+1
        })
      }
    }
      if (this.state.btn7 == this.state.btn8 && this.state.btn7 == this.state.btn9) {
        if (this.state.btn7 == "red") {
          this.setState({
            message: "red has won",
            redwon:this.state.redwon+1
          })
        } else if (this.state.btn7 == "green") {
          this.setState({
            message: "green has won",
            greenwon:this.state.greenwon+1
          })
        }
    }
    if (this.state.btn1 == this.state.btn5 && this.state.btn1 == this.state.btn9) {
      if (this.state.btn1 == "red") {
        this.setState({
          message: "red has won",
          redwon:this.state.redwon+1
        })
      } else if (this.state.btn1 == "green") {
        this.setState({
          message: "green has won",
          greenwon:this.state.greenwon+1
        })
      }
  }
  if (this.state.btn3 == this.state.btn5 && this.state.btn3 == this.state.btn7) {
    if (this.state.btn3 == "red") {
      this.setState({
        message: "red has won",
        redwon:this.state.redwon+1
      })
    } else if (this.state.btn3 == "green") {
      this.setState({
        message: "green has won",
        greenwon:this.state.greenwon+1
      })
    }
}
if (this.state.btn1 == this.state.btn4 && this.state.btn1 == this.state.btn7) {
  if (this.state.btn1 == "red") {
    this.setState({
      message: "red has won",
      redwon:this.state.redwon+1
    })
  } else if (this.state.btn1 == "green") {
    this.setState({
      message: "green has won",
      greenwon:this.state.greenwon+1
    })
  }
}
  if (this.state.btn2 == this.state.btn5 && this.state.btn2 == this.state.btn8) {
    if (this.state.btn2 == "red") {
      this.setState({
        message: "red has won",
        redwon:this.state.redwon+1
      })
    } else if (this.state.btn2 == "green") {
      this.setState({
        message: "green has won",
        greenwon:this.state.greenwon+1
      })
    }
  }
  if (this.state.btn3 == this.state.btn6 && this.state.btn3 == this.state.btn9) {
    if (this.state.btn3 == "red") {
      this.setState({
        message: "red has won",
        redwon:this.state.redwon+1
      })
    } else if (this.state.btn3 == "green") {
      this.setState({
        message: "green has won",
        greenwon:this.state.greenwon+1
      })
    }
}
}



  

    handleclick(location) {
      if (this.state.i % 2 == 0) {
        if (location == 1) {
          this.setState({
            btn1: "red",
            btn1d: true,
            i: this.state.i + 1
          }, function () {
            this.checkResult()
          })

        }
        else if (location == 2) {
          this.setState(
            {
              btn2: "red",
              btn2d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        }
        else if (location == 3) {

          this.setState(
            {
              btn3: "red",
              btn3d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 4) {
          this.setState(
            {
              btn4: "red",
              btn4d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 5) {
          this.setState(
            {
              btn5: "red",
              btn5d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 6) {
          this.setState(
            {
              btn6: "red",
              btn6d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 7) {
          this.setState(
            {
              btn7: "red",
              btn7d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 8) {
          this.setState(
            {
              btn8: "red",
              btn8d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            })
        } else if (location == 9) {
          this.setState(
            {
              btn9: "red",
              btn9d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        }

      } else {
        if (location == 1) {
          this.setState({
            btn1: "green",
            btn1d: true,
            i: this.state.i + 1
          }, function () {
            this.checkResult()
          })
        }
        else if (location == 2) {
          this.setState(
            {
              btn2: "green",
              btn2d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        }
        else if (location == 3) {

          this.setState(
            {
              btn3: "green",
              btn3d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 4) {
          this.setState(
            {
              btn4: "green",
              btn4d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 5) {
          this.setState(
            {
              btn5: "green",
              btn5d: true,
              i: this.state.i + 1
            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 6) {
          this.setState(
            {
              btn6: "green",
              btn6d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 7) {
          this.setState(
            {
              btn7: "green",
              btn7d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        } else if (location == 8) {
          this.setState(
            {
              btn8: "green",
              btn8d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            })
        } else if (location == 9) {
          this.setState(
            {
              btn9: "green",
              btn9d: true,
              i: this.state.i + 1

            }, function () {
              this.checkResult()
            }
          )
        }

      }

    }

    render() {
      return ( 
        <div style={{ textAlign: "center" }}>
          TIK TAK TOE
          <br/>
          <button className="btn" style={{ backgroundColor: this.state.btn1 }}
            onClick={this.handleclick.bind(this, 1)}
            disabled={this.state.btn1d}></button>


          <button className="btn" style={{ backgroundColor: this.state.btn2 }}
            onClick={this.handleclick.bind(this, 2)}
            disabled={this.state.btn2d}></button>

          <button className="btn" style={{ backgroundColor: this.state.btn3 }}
            onClick={this.handleclick.bind(this, 3)}
            disabled={this.state.btn3d}></button>
          <br />

          <button className="btn" style={{ backgroundColor: this.state.btn4 }}
            onClick={this.handleclick.bind(this, 4)}
            disabled={this.state.btn4d}></button>

          <button className="btn" style={{ backgroundColor: this.state.btn5 }}
            onClick={this.handleclick.bind(this, 5)}
            disabled={this.state.btn5d}></button>

          <button className="btn" style={{ backgroundColor: this.state.btn6 }}
            onClick={this.handleclick.bind(this, 6)}
            disabled={this.state.btn6d}></button>
          <br />
          <button className="btn" style={{ backgroundColor: this.state.btn7 }}
                onClick={this.handleclick.bind(this, 7)}
              disabled={this.state.btn7d}></button>


          <button className="btn" style={{ backgroundColor: this.state.btn8 }}
            onClick={this.handleclick.bind(this, 8)}
            disabled={this.state.btn8d}></button>
          <button className="btn" style={{ backgroundColor: this.state.btn9 }}
            onClick={this.handleclick.bind(this, 9)}
            disabled={this.state.btn9d}></button>
          <br />
          <button
          onClick={this.reset.bind(this)}>RESET</button>
          <br/>
          {this.state.message}
          <br/>
          Red Won
          {this.state.redwon} &nbsp;&nbsp;&nbsp;Green Won {this.state.greenwon}

        </div>
      );
    }

  }
