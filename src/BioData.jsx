import  React,{useState} from "react";

function BioData() {
    const [user,setUser]= useState({
     name: "Divya",
     age: 22,
     gender: "Female",
     isMarried: true,
     country: "India",
     bio: "Wrte something about yourself",
      });
      const changeHandler =(e) => {
        const{name, type, checked, value}= e.target;
        const newValue = type=== "checkbox"? checked: value;
        setUser((prevUser) => ({...prevUser, [name]:newValue}));
      };
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>isMarried</td>
                <td>{user.isMarried}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.Country}</td>
            </tr>
              <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
              </tr>

        </tbody>
    </table>
    <form>
       < input type="text" placeholder="Full Name" value={user.name}
       onchange={changeHandler}
       name="name"/>

       <input type="number" placeholder="Age" value={user.age}
       onchange={changeHandler}
       age="age"/>

       <div className="gender">
        <label htmlFor="male">
            <input type="radio" name="gender"
            onchange={changeHandler} id="male"
            checked={user.gender==="Female"}value="Male"/>
            Male
            </label>
            <label htmlFor="female">
                <input type="radio" name="gender"
                onchange={changeHandler} id="female"
                checked={user.gender==="Male"}value="Female"/>
                Female
        </label>
       </div>
       <label htmlFor="isMarried">
        <input type="checkbox" 
        onchange={changeHandler} id="isMarried" name="isMarried"
        checked={user.isMarried}/>
        is Married
       </label>

    <div className="select-div">
   <label htmlFor="country">select country:
   </label>
   <select name="country"id="country"value={user.country}
   onchange={changeHandler}>
    <option value="india">"India"</option>
    <option value="USA">"USA"</option>
    <option value="UK">"UK"</option>
   </select>
    </div>
    <textarea name="bio" id="bio"
    cols="30" rows="5" value={user.bio}
    placeholder="Write about you"
    onChange={changeHandler}></textarea>
    </form>
    </>
  );
}

export default BioData