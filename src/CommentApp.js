import React, { Component } from "react";
import CommentInput from "./commentInput";
import CommentList from "./commentList";

class CommentApp extends Component {
    render() {
        return (
            <div>input
                <CommentInput></CommentInput>
                <CommentList></CommentList>
            </div>
        )
    }
}

export default CommentApp