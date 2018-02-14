
var React = require("react");
var axios = require("axios");


// Create the News component
class News extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     articles: [],
   
   };
}

componentDidMount() {
    var self = this;
 var articles = [];
 axios.get("/articles").then(function (res) {
     var articles = res.data.slice(0, 10);


      self.setState({
        articles: articles
 })
})
}



 render() {


      return (



        <div className="row">
      <div className="col-md-2">
      </div>
          <div className="well col-md-8">
          <table className="table table-dark">
          <thead>
          <tr><th><h1>
          The Latest Foreign Currency Exchange news and updates!
          </h1></th></tr>
          </thead>

          <tbody>
            { this.state.articles.map(article =>
                  <tr>
                   <td><a href={article.link}> {article.title}</a></td>

                   </tr> 
)}
          </tbody>
</table>



          </div>
          <div className="col-md-2">
          </div>
          </div>

          )
}
}


    module.exports = News;