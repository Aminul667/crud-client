import "./App.css";

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('User added successfully');
        form.reset();
      }
    });
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <label>Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label>Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
