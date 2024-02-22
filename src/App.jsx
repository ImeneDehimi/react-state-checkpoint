import { useEffect, useState } from "react";
import image from "./assets/blank-profile-picture-973460_960_720.webp"

const App = () => {
  const [shows , setShows] = useState(false)
  const [person, setPerson] = useState({
    fullName : "Nom complet", 
    bio: "Biographie", 
    imgSrc: image,
    profession :"Profession"
  })
  const [mountTime, setMountTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Composant monté depuis:", (Date.now() - mountTime)/1000, "s");
    }, 1000);
    return () => clearInterval(interval); 
  }, []); 
  return (
    <>
    
    <div className="container">
    <button onClick={()=>setShows(!shows)}>Show</button>
    {shows &&
    <div className="profile">
      <img src={person.imgSrc} alt=""/>
      <p>Full Name: {person.fullName}</p>
      <p>Profession: {person.profession}</p>
      <p>Bio: {person.bio}</p>
      </div>
      }
      <p>Temps écoulé depuis le montage : {(Date.now() - mountTime)/1000} s</p>
    </div>
    </>
  );
};

export default App;