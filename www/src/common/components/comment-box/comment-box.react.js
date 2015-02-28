/**
 * Created by Danny Schreiber on 2/27/2015.
 */
// jshint ignore: start
var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
			</div>
		);
	}
});
React.render(
	<CommentBox url="comments.json" />,
	document.getElementById('test-content')
);