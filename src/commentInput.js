import React, { Component } from "react";

class CommentInput extends Component {
    render() {
        return (
            <div className="wrapperinput">
                <div className="winput">
                    <div className="nameinput">
                        <span>姓名：</span>
                        <input className="ninput"></input>
                    </div>
                    <div className="contentinput">
                        <span>评论：</span>
                        <textarea className="cinput"></textarea>
                    </div>
                    <div className="buttoninput">
                        <button className="binput">发布</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentInput