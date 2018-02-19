// Include React
var React = require("react");


class Intro extends React.Component {



render() {

    return(

    <div id="introContainer">
    <svg className="intro" id="butter" viewBox="0 0 200 86">
    {this.start()}
  <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Where</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">Ideas</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">Begin.</text>
  <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Where</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Ideas</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Begin.</text>
  <defs>
    <clipPath id="text1">
      <text textAnchor="start" x="10" y="30" className="text">Where</text>
    </clipPath>
    <clipPath id="text2">
      <text textAnchor="start" x="10" y="50" className="text">Ideas</text>
    </clipPath>
    <clipPath id="text3">
      <text textAnchor="start" x="10" y="70" className="text">Begin.</text>
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
            ; }, 1500)
    
        }, false);
    }
/*
start() {
  var element = document.getElementsByClassName("intro")
  element.classList.add('go');
    document.getElementsByClassName('reload').onclick(function(next) {
        element.classNameList.remove('go').delay(200).queue(function(next) {
            element.classNameList.add('go')
            next();
        })
    })
}

$(function() {
    $('.intro').addClass('go');
  
    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });
  }
  */
}

// Export the component back for use in other files
module.exports = Intro;