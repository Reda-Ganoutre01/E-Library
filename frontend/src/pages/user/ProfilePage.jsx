import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";
import { useDispatch, useSelector } from "react-redux";
import fetchUserBorrowRecords from "../../features/borrowRecord/actions/fetchUserBorrowRecords.js";
import fetchMessages from "../../features/messages/actions/fetchMessages.js";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { userBooks, loadingUserBooks, errorUserBooks } = useSelector(
    (state) => state.borrowRecords
  );
  const { messages, loadingMessages, errorMessages } = useSelector(
    (state) => state.messages
  );
  const [activeTab, setActiveTab] = useState("Info");
  const page = 0;
  const size = 10;
  useEffect(() => {
    if (user?.id && activeTab === "Borrowed Books") {
      dispatch(fetchUserBorrowRecords(user.id));
    }
  }, [dispatch, user, activeTab]);
  useEffect(() => {
    if (user?.id && activeTab === "Messages") {
      dispatch(fetchMessages({ user: user.id, page, size }));
    }
  }, [dispatch, user, activeTab]);

  return (
    <section className={"container flex flex-col px-12 mt-12"}>
      <PageNavigator title={"Profile"} path={-1} />
      <div className="tabs tabs-border font-[poppins]">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-xl"
          aria-label="Info"
          checked={activeTab === "Info"}
          onChange={() => setActiveTab("Info")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <p>
            <span>ID:&nbsp; </span>
            <span>{user.id}</span>
          </p>
          <p>
            <span>USERNAME:&nbsp; </span>
            <span>{user.sub}</span>
          </p>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-xl"
          aria-label="Borrowed Books"
          checked={activeTab === "Borrowed Books"}
          onChange={() => setActiveTab("Borrowed Books")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {loadingUserBooks && <p>Loading borrowed books...</p>}
          {errorUserBooks && (
            <p className="text-red-500">Error: {errorUserBooks}</p>
          )}
          {userBooks.length > 0 ? (
            <ul>
              {userBooks.map((book) => (
                <li key={book.id} className="mb-4">
                  <h3 className="font-bold">{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Category: {book.category}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loadingUserBooks && <p>No books borrowed.</p>
          )}
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-xl"
          aria-label="Messages"
          checked={activeTab === "Messages"}
          onChange={() => setActiveTab("Messages")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {loadingMessages && <p>Loading messages...</p>}
          {errorMessages && (
            <p className="text-red-500">Error: {errorMessages}</p>
          )}
          {messages?.content?.length > 0 ? (
            <ul>
              {messages.content.map((msg) => (
                <li key={msg.id} className="mb-4 border p-2 rounded">
                  <p>{msg.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loadingMessages && <p>No messages available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
