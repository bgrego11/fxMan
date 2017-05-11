// Include React
var React = require("react");


// Create the News component
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
     
    };
}

componentDidMount() {
	var self = this
  var articles = [];
  axios.get("/articles").then(function (response) {
  	console.log(response);

  })
}


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
  	 	{this.state}

  	 	</tbody>
</table>



  	 	</div>

  	 	)
}
}


 	module.exports = News;