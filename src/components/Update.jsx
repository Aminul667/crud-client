import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {name, email}
    
    console.log(name, email);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert('user updated successfully');
        }
    })
  }

  return (
    <div>
      <h3>Update Information of {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input type="text" id="name" name="name" defaultValue={loadedUser?.name} />
        <br />
        <label>Email:</label>
        <input type="email" id="email" name="email" defaultValue={loadedUser?.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;

// 8 no module
