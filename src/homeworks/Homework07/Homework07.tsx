import { useEffect, useState } from "react";
import Loader from '../../components/loader/Loader';
import MyButton from "../../components/myButton/MyButton";

export default function Homework07() {
    const [fox, setFox] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleIncrease = () => {
       setIsLoading(true);
         fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => setFox(data.image));
      setIsLoading(false);
  };      
   
    useEffect(() => {
      handleIncrease()
    }, []); 

    return (
<div>
    <h1>Случайная лиса 🦊</h1>
    <div>
      <MyButton func={handleIncrease} text="Show another fox"></MyButton>  
    </div>
    {isLoading ? (<Loader/>) : (
      <img src={fox} alt="Random fox"/>
      )}
</div>
    );
}