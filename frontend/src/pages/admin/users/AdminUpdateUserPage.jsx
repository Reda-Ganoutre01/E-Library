import { useNavigate, useParams } from "react-router-dom";
import PageNavigator from "../../../components/navigation/PageNavigator";
import Page from "../../Page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchUser from "../../../features/user/actions/fetchUser";
import UserForm from "../../../components/form/user/UserForm";
import Loader from "../../../components/loader/Loader";
import updateUser from "../../../features/user/actions/updateUser";

/**
 * AdminUpdateUserPage component allows administrators to update an existing user in the system.
 *
 * It fetches the user's current data based on the `id` parameter from the URL and populates the form.
 * On form submission, the component validates that all required fields are filled. If any field is missing,
 * an alert is shown to notify the user. Upon successful form submission, an `updateUser` action is dispatched
 * to update the user in the database, and the user is navigated back to the previous page.
 *
 * - Updates the document title to "E-Library - Edit User #{id}".
 * - Displays a loading indicator if the user data is being fetched or updated.
 * - Handles form data submission, including the user details.
 * - Redirects to the previous page once the user is successfully updated.
 *
 * @returns {JSX.Element} The rendered AdminUpdateUserPage component.
 */
export default function AdminUpdateUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  document.title = `E-Library - Edit User #${id}`;
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.users);
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(fetchUser({ id: id }));
  }, [id, dispatch]);

  useEffect(() => {
    if (currentUser) {
      setData({
        username: currentUser.username,
        password: "",
        email: currentUser.email,
        fullName: currentUser.fullName,
        role: currentUser.role,
      });
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

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

    dispatch(updateUser({ id: id, user: data }))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.error("Failed to update user:", error);
      });
  };

  return (
    <Page className="container flex flex-col px-12 mt-12">
      <PageNavigator title={`Update User #${id}`} path={-1} />
      {loading ? (
        <Loader />
      ) : (
        <UserForm
          data={data}
          loading={loading}
          setData={setData}
          error={error}
          submitValueText="Update User"
          onSubmit={handleSubmit}
        />
      )}
    </Page>
  );
}
