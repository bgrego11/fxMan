// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class News extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: articles.title,
//       link: articles.link
//     };
// }

  render() {


  	 return ( 

  	 	<div className="well col-lg-10 col-sm-11 col-md-10">
  	 	<table className="table table-hover">
  	 	<thead>
  	 	<tr><th><h2>
  	 	The Latest Foreign Currency Exchange news and updates!
  	 	</h2></th></tr>
  	 	</thead>

  	 	<tbody>


  	 	</tbody>
</table>



  	 	</div>

  	 	)
}
}


 	module.exports = News;