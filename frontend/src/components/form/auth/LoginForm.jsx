import { CiUser } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../components/Input.jsx";
import Form from "../components/Form.jsx";
import FormTitle from "../components/FormTitle.jsx";
import FormBody from "../components/FormBody.jsx";
import FormFooter from "../components/FormFooter.jsx";

/**
 * LoginForm component that renders the login form UI and handles the form submission.
 * It takes credentials, loading, error, and onSubmit as props and triggers the onSubmit function upon form submission.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.credentials - The user's login credentials (username and password).
 * @param {Function} props.setCredentials - Function to update the login credentials in the parent component.
 * @param {boolean} props.loading - Flag indicating if the login process is loading.
 * @param {string|null} props.error - Error message in case of failed authentication.
 * @param {Function} props.onSubmit - Function to handle the form submission with the credentials.
 *
 * @returns {JSX.Element} The login form component with input fields and a submit button.
 */
export default function LoginForm({
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
      className="card bg-base-100 w-[34rem] h-[22rem] shadow-lg font-[poppins] border-[#ccc] border-[0.6px]"
      onAction={handleSubmit}
    >
      <FormTitle text={"Sign In"} />
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
          <button className="btn btn-primary w-full" disabled={loading} id="btn-signin"> 
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <span>
            New to the platform ?{" "}
            <Link to="/register" className="font-bold text-success" id="btn-register">
              Sign Up
            </Link>
          </span>
        </div>
      </FormFooter>
    </Form>
  );
}
