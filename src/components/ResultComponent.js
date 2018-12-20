import React, { Component } from 'react'

class ResultComponent extends Component {
  render() {
      let {result} = this.props;
    return (
      <div className="result">
            <p style={{fontSize: 36, border: '3px solid black'}}>{result}</p>
        
      </div>
    )
  }
}


export default ResultComponent;