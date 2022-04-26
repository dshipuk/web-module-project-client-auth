import React, { useState } from "react";
import axios from "axios";

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        axios.post("http://localhost:9000/api/friends", form, {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log({ err })
            })
    }
  return (
      <div>
          <h2>AddFriend</h2>;
          <form onSubmit={handleSubmit} onChange={handleChange}>
              <div>
                <label htmlFor="name">Name:</label>
                <input name="name" id="username" />
              </div>
              <div>
                <label htmlFor="age">Age:</label>
                <input name="age" id="age" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" />
              </div>
              <button>Submit</button>
          </form>
      </div>
  );
};

export default AddFriend;
