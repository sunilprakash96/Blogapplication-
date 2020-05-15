import React, { Component } from "react";
import '../css/modalWindow.css'

class ModalWindow extends Component {
    state = {
        account: {
            title: "",
            post: ""
        },
        errors: []
    };
    handleOnchange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    validate = () => {
        const errors = {}
        if (this.state.account.title.trim() === "") {
            errors.title = "Title is required";
        }

        if (this.state.account.post.trim() === "") {
            errors.post = "Post is required";
        }

        return errors;
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const errors = { ...this.state.errors };
        const error = this.validate();
        this.setState({ errors: error });
        console.log("Added Blog");
    };

    render() {
        const { errors } = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.handleOnSubmit}>
                    <div class="form-group">
                        <label for="title" class="col-form-label">Title:</label>
                        <input type="text" name="title" onChange={this.handleOnchange}
                            value={this.state.account.title} class="form-control" id="title" />
                        {errors.title && <div className=" alert alert-danger ">{errors}</div>}
                    </div>
                    <div class="form-group">
                        <label for="post" class="col-form-label">Post:</label>
                        <textarea class="form-control" name="post" onChange={this.handleOnchange}
                            value={this.state.account.post} id="post"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                    <button type="submit" class="btn btn-primary ml-4">Cancel</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ModalWindow;