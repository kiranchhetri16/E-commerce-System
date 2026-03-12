import { useState, type ChangeEvent } from "react";
import { InputType } from "../../../components/form-component/InputTypeProps";
import CustomButton from "../../../components/CustomButton";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "../../../layout/AuthLayout";

export const Login = () => {
    const [showPassword, setShowPassword]= useState(false);

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
    <AuthLayout>
    <div className="p-8">
        
      <form onSubmit={handleSubmit} className="w-[320px] flex  flex-col text-[#71717A] max-[776px] gap-4">
        <div className="flex flex-col gap-2">
 <h2 className="text-xl leading-8 font-bold text-center text-[#09090B] font-geist">
              Welcome Back
            </h2>
            <p className="text-base leading-6 font-normal text-center pr-0.5 ">
              Login to your System AI{" "}
            </p>
            </div>
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
        <div className="relative">
        <InputType
        label="Password"
        name="password"
        type={showPassword? "text":"password"}
        value={formData.password}
        placeholder="ENter password"
        handleInputChange={hanldeChange}
        
        />
        <div className="absolute top-9 right-8 text-primary" onClick={()=>setShowPassword(!showPassword)}>
          {showPassword ? <Eye className="size-4"/>: <EyeOff className="size-4" />}
        </div>
        </div>
        <CustomButton className="w-full flex justify-center items-center" type="submit">Submit</CustomButton>
      </form>
      </div>
   
    </AuthLayout>
  );
};
