import React, { Component } from "react";
import CommentInput from "./commentInput";
import CommentList from "./commentList";
import "./index.css"
class CommentApp extends Component {
    render() {
        return (
            <div className="wrapper">
                <CommentInput></CommentInput>
                <CommentList></CommentList>
            </div>
        )
    }
}

export default CommentApp