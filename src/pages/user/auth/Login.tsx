import { useState, type ChangeEvent } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
    // const hanldeChange = (e: ChangeEvent<HTMLInputElement >) => {
    //   const { name, value } = e.target;
    //   setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Login success", formData);
    };
  return (
    <div className="h-150 w-100 border border-bg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            className="border border-red-300 p-2 rounded-sm"
          />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
            className="border border-red-300 p-2 rounded-sm"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            className="border border-red-300 p-2 rounded-sm"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
