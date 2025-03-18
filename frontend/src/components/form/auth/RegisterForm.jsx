import { CiUser } from "react-icons/ci";
import { MdOutlinePassword, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../components/Input.jsx";

import Form from "../components/Form.jsx";
import FormTitle from "../components/FormTitle.jsx";
import FormBody from "../components/FormBody.jsx";
import FormFooter from "../components/FormFooter.jsx";

export default function RegisterForm({
  credentials,
  setCredentials,
  loading,
  error,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <Form
      className="card bg-base-100 w-[34rem] h-[26rem] shadow-lg font-[poppins] border-[#ccc] border-[0.6px]"
      onAction={handleSubmit}
    >
      <FormTitle text={"Sign Up"} />
      <FormBody className={"flex flex-col gap-2"}>
        <Input
          icon={<CiUser />}
          type="text"
          name="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, username: e.target.value }))
          }
          className="grow w-full not-valid:ring-error"
          placeHolder="Username"
        />
        <Input
          icon={<CiUser />}
          type="text"
          name="Full Name"
          value={credentials.fullName}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className="grow w-full not-valid:ring-error"
          placeHolder="Full Name"
        />
        <Input
          icon={<MdEmail />}
          type="email"
          name="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
          className="grow w-full not-valid:outline-error"
          placeHolder="Email"
        />
        <Input
          icon={<MdOutlinePassword />}
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
          className="grow w-full not-valid:outline-error"
          placeHolder="Password"
        />
      </FormBody>
      <FormFooter>
        {error && (
          <p className="text-red-500 text-sm text-center">
            Authentication Error: Invalid credentials
          </p>
        )}
        <div className="card-actions flex mt-4 justify-center">
          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <span>
            Already a member? {" "}
            <Link to="/login" className="font-bold text-success">
              Sign In
            </Link>
          </span>
        </div>
      </FormFooter>
    </Form>
  );
}