// Include React
var React = require("react");


class Intro extends React.Component {



render() {

    return(

    <div id="introContainer">
    <svg className="intro" id="butter" viewBox="0 0 200 86">
    {this.start()}
  <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">BUY</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">SELL</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">TRADE</text>
  <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">BUY</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">SELL</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">TRADE.</text>
  <defs>
    <clipPath id="text1">
      <text textAnchor="start" x="10" y="30" className="text">BUY</text>
    </clipPath>
    <clipPath id="text2">
      <text textAnchor="start" x="10" y="50" className="text">SELL</text>
    </clipPath>
    <clipPath id="text3">
      <text textAnchor="start" x="10" y="70" className="text">TRADE</text>
    </clipPath>
  </defs>
</svg>
</div>
    )
}

start() {
document.addEventListener('DOMContentLoaded', function(){ 
    var element = document.getElementById('butter')
    
        setTimeout(function(){ 
            element.classList.add('introgo')
            console.log('hello friend')
            ; }, 500)
    
        }, false);
    }
}

// Export the component back for use in other files
module.exports = Intro;