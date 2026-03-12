import { useState, type ChangeEvent } from "react";
import { InputType } from "../../../components/form-component/InputTypeProps";
import CustomButton from "../../../components/CustomButton";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
    const hanldeChange = (e: ChangeEvent<HTMLInputElement >) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Login success", formData);
    };
  return (
    <div className="h-screen w-full bg-primary flex justify-center  items-center">
      <form onSubmit={handleSubmit} className="flex w-100 flex-col gap-4 border border-border shadow-custom rounded-md p-4 bg-white">
     
        <InputType
        label="User Name"
        type="text"
        name="username"
        value={formData.username}
        placeholder="Enter user Name"
        handleInputChange={hanldeChange }
        />


      
        <InputType 
        label="Email"
        name="email"
        value={formData.email}
        placeholder="Enter you email"
        handleInputChange={hanldeChange}

        />
        
        <InputType
        label="Password"
        name="password"
        value={formData.password}
        placeholder="ENter password"
        handleInputChange={hanldeChange}
        
        />
        <CustomButton className="w-full flex justify-center items-center" type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};
