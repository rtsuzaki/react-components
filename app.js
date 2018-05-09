// TODO
var GroceryList = (props) => (
	  <ul>
	    {props.items.map(item =>
	    	<GroceryListItem item = {item} />
	    )}
	  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style = {style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList items ={['Cucumbers','Kale']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));