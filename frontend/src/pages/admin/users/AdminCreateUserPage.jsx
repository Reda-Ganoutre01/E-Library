import { useState } from "react";
import UserForm from "../../../components/form/user/UserForm"; // Import the UserForm component
import PageNavigator from "../../../components/navigation/PageNavigator";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../Page";
import createUser from "../../../features/user/actions/createUser"; // Import the createUser action
import { useNavigate } from "react-router-dom";

/**
 * AdminCreateUserPage component allows administrators to create a new user in the system.
 *
 * It provides a form to input user details such as username, password, email, full name, and role.
 * On form submission, the component validates that all required fields are filled. If any field is missing,
 * an alert is shown to notify the user. Upon successful form submission, a `createUser` action is dispatched
 * to add the new user to the database, and the user is navigated to the user list page.
 *
 * - Updates the document title to "E-Library - Create User".
 * - Displays a loading indicator if the user is being created.
 * - Handles form data submission, including the user details.
 * - Redirects to the `/admin/users` page once the user is successfully created.
 *
 * @returns {JSX.Element} The rendered AdminCreateUserPage component.
 */
export default function AdminCreateUserPage() {
  document.title = "E-Library - Create User";
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
    role: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.users);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !data.username ||
      !data.password ||
      !data.email ||
      !data.fullName ||
      !data.role
    ) {
      alert("All fields are required!");
      return;
    }

    dispatch(createUser({user : data})).then(() => {
      if (!loading && !error) {
        navigate("/admin/users");
      }
    });
  };

  return (
    <Page>
      <PageNavigator title={"Create User"} path={-1} />
      <UserForm
        data={data}
        setData={setData}
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
        submitValueText="Create User"
      />
    </Page>
  );
}