import React, { Component } from 'react'

class KeypadComponent extends Component {

  render() {
    const border = {
        border: '3px solid black',
        fontSize: 24,
        textAlign: 'center'
    }
    return (
<div  className="button">
                <button style={border} name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button style={border} name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button style={border} name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button style={border} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button style={border} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button style={border} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button style={border} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button style={border} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button style={border}  name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button style={border}  name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button style={border}  name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style={border}  name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button style={border}  name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button style={border}  name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button style={border}  name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style={border}  name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button style={border}  name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button style={border}  name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button style={border}  name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button style={border}  name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
</div>
    )
  }
}

export default KeypadComponent;
