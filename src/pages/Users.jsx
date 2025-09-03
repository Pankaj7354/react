import { useState } from "react";

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skill, setSkill] = useState([]);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSkill = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSkill([...skill, value]);
    } else {
      setSkill(skill.filter((e) => e !== value));
    }
  };

  const handleSubmit = () => {
    console.log({
      name,
      email,
      password,
      skill,
      gender,
      country,
    });

    // Reset all fields after submit
    setName("");
    setEmail("");
    setPassword("");
    setSkill([]);
    setGender("");
    setCountry("");
  };

  return (
    <>
      <div>
        <h1>Register User</h1>

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <h3>{name}</h3>

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
        <h3>{email}</h3>

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
        <h3>{password}</h3>

        {/* Skills */}
        <div>
          <h3>Select Your Skills</h3>
          <input
            onChange={handleSkill}
            type="checkbox"
            id="php"
            value="php"
            checked={skill.includes("php")}
          />
          <label htmlFor="php">PHP</label>

          <input
            onChange={handleSkill}
            type="checkbox"
            id="js"
            value="js"
            checked={skill.includes("js")}
          />
          <label htmlFor="js">JS</label>

          <input
            onChange={handleSkill}
            type="checkbox"
            id="python"
            value="python"
            checked={skill.includes("python")}
          />
          <label htmlFor="python">Python</label>

          <h3>{skill.join(", ")}</h3>
        </div>

        {/* Gender */}
        <div>
          <h3>Gender</h3>
          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="others"
            value="Others"
            checked={gender === "Others"}
          />
          <label htmlFor="others">Others</label>

          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="male"
            value="Male"
            checked={gender === "Male"}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="female"
            value="Female"
            checked={gender === "Female"}
          />
          <label htmlFor="female">Female</label>

          <h3>{gender}</h3>
        </div>

        {/* Country */}
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <h3>{country}</h3>

        {/* Submit Button */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Users;
