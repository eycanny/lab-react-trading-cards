'use strict';
//welcome message to user
//link to /cards
//image @ /static/img/balloonicorn.jpg

function Homepage() {
  return (
    <div>
      <p>Welcome! This is the place to be if you like trading cards!</p>
      <a href="/cards">Click here for cards~</a><br></br>
      <img src="/static/img/balloonicorn.jpg" />
    </div> 
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
