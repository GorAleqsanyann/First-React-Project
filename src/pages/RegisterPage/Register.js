import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";

import "./Register.css";

const InputsInfo = [
  {
    id: 1,
    type: "text",
    placeholder: "First Name",
    name: "firstName",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
  },
  {
    id: 3,
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    id: 4,
    type: "password",
    placeholder: "password",
    name: "password",
  },
];

export default function Register() {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section id="formheader">
      <form onSubmit={handleSubmit(onSubmit)}>
        {InputsInfo.map((e) => (
          <div key={e.id}>
            <Input
              type={e.type}
              placeholder={e.placeholder}
              control={control}
              name={e.name}
            />
          </div>
        ))}
        <input type="submit" value="sxmir indz azizssss" />
      </form>
    </section>
  );
}
