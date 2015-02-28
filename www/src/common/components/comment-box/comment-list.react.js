/**
 * Created by Danny Schreiber on 2/27/2015.
 */
// jshint ignore: start
var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){

			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});