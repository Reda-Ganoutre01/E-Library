import Form from "../components/Form";
import Input from "../components/Input";
import Select from "../components/Select";
import Option from "../components/Option";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";

export default function UserForm({ data, setData, loading, error, onSubmit, submitValueText }) {
  const roles = [
    { id: "ROLE_USER", name: "USER" },
    { id: "ROLE_LIBRARIAN", name: "LIBRARIAN" },
  ];

  return (
    <Form onAction={onSubmit}>
      <FormBody className="flex flex-col gap-3 font-[poppins]">
        {/* Username */}
        <div className="flex flex-row gap-2">
          <Input
            value={data?.username || ""}
            name="username"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
            placeHolder="Username"
          />
        </div>

        {/* Password */}
        <div className="flex flex-row gap-2">
          <Input
            value={data?.password || ""}
            name="password"
            type="password"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            placeHolder="Password"
          />
        </div>

        {/* Email */}
        <div className="flex flex-row gap-2">
          <Input
            value={data?.email || ""}
            name="email"
            type="email"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            placeHolder="Email"
          />
        </div>

        {/* Full Name */}
        <div className="flex flex-row gap-2">
          <Input
            value={data?.fullName || ""}
            name="fullName"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                fullName: e.target.value,
              }))
            }
            placeHolder="Full Name"
          />
        </div>

        {/* Role */}
        <div className="flex flex-row gap-2">
          <Select
            name="role"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                role: e.target.value,
              }))
            }
            value={data?.role || ""}
            className="select select-md w-full"
          >
            <Option value="" disabled>
              Select a role
            </Option>
            {roles.map((role) => (
              <Option key={role.id} value={role.id} innerText={role.name} />
            ))}
          </Select>
        </div>
      </FormBody>
      <FormFooter className="flex flex-col">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : submitValueText}
        </button>
        {error && <p className="text-red-500 text-sm mt-2 font-black">Error: {error}</p>}
      </FormFooter>
    </Form>
  );
}