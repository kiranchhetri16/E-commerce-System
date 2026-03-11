import { UserLayout } from "../../layout/UserLayout";
import type { User } from "../../types/HomeType.type";


 const Home = () => {

    const user: User[] = [
    { id: 1, name: "Robin", class: 6, dob: "Jan 22" }, 
    {id:2, name:"kiran", class:10, dob:"jul 8"}
  ]
  return (
    <UserLayout>
<>
  {user.map((item)=>(
   <div key={item.id} className="flex justify-center gap-6">
    <h1 className="text-primary font-primary">{item.name}</h1>
    <p>{item.class}</p>
    <p>{item.dob}</p>
    <p></p>
   </div>
   ))}
    </>
    </UserLayout>





  )
}

export default Home;


