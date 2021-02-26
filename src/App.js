import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.state = {
      post: [{
        title: `Their One Love`,
        body: `Dear Jack:
Marion is impatiently awaiting your return. Take care of yourself for her sake.
⁠Sincerely,
⁠Madeline.

Dear Jack:-
I guessed your secret the day you left us. You love Madeline and your love is returned.
⁠Always your friend,
Marion.

when he died he told me to send these to you whom he called "the dearest friends a boy ever had".
⁠Respectfully,
⁠A.C. Badley,
⁠Col. 49th. Inf. U.S.A.`,
      }, {
        title: `Shep's Race with Death`,
        body: `INSEPARABLE COMPANIONS. THE WIFE'S MOTHER, WHO ONLY LOVES ONE OF THE TWINS, PAYS THEM A VISIT. THE MOTHER-IN-LAW IS AN UNPLEASANT MEMBER OF THE FAMILY. THE SEPARATION. DAY AND NIGHT THE TWINS LONG FOR EACH OTHER. A WEEK LATER. A PRAYER OF THANKS.`,
      }],
    }
  }

  addPost(newPost) {
    const posts = [...this.state.post]
    posts.push(newPost);
    this.setState({ post: posts })
    console.log(newPost);
  }

  render() {
    return (
      <React.Fragment>
        <Form addPost={this.addPost} />
        <List post={this.state.post} />
      </React.Fragment>
    )
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: "",
      body: "",
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={this.handleInput} name="title" value={this.state.title} required />
      </div>
      <div>
        <label htmlFor="body">Post: </label>
        <input type="text" id="body" name="body" value={this.state.body} onChange={this.handleInput} required/>
      </div>
      <button type="submit">Post</button>
      </form>
    )
  }
}

class List extends Component {
  render() {
    const posts = this.props.post.map((post, index) => (
      <li key={index}>
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      </li>
    ))

    return (
      <React.Fragment>
        <ul>{posts}</ul>
      </React.Fragment>
    )
  }
}

export default App;
