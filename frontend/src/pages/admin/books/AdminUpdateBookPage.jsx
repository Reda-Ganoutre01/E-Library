import { useNavigate, useParams } from "react-router-dom";
import PageNavigator from "../../../components/navigation/PageNavigator";
import Page from "../../Page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchBook from "../../../features/book/actions/fetchBook";
import BookForm from "../../../components/form/book/BookForm";
import Image from "../../../components/image/Image";
import Loader from "../../../components/loader/Loader";
import updateBook from "../../../features/book/actions/updateBook";

export default function AdminUpdateBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  document.title = `E-Library - Edit #${id}`;
  const dispatch = useDispatch();
  const { book, loadingBook, errorBook } = useSelector((state) => state.books);
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(fetchBook({ id: id }));
  }, [id, dispatch]);

  useEffect(() => {
    if (book) {
      setData({
        title: book.title,
        description: book.description,
        isbn: book.isbn,
        author: book.author,
        copies: book.copies,
        category: book.category,
      });
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.title ||
      !data.author ||
      !data.isbn ||
      !data.copies ||
      !data.category
    ) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append(
      "bookRequestDto",
      JSON.stringify({
        title: data.title,
        author: data.author,
        description: data.description || "",
        isbn: data.isbn,
        copies: Number(data.copies),
        categoryId: Number(data.category),
      })
    );

    if (data.file) {
      formData.append("file", data.file);
    }

    dispatch(updateBook({ id: id, data: formData }))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.error("Failed to update book:", error);
      });
  };

  return (
    <Page className="container flex flex-col px-12 mt-12">
      <PageNavigator title={`Update Book #${id}`} path={-1} />
      {loadingBook ? (
        <Loader />
      ) : (
        <section className="flex flex-row justify-center">
          <BookForm
            data={data}
            loading={loadingBook}
            setData={setData}
            error={errorBook}
            submitValueText={"Update"}
            onSubmit={handleSubmit}
          />
          <Image
            className="w-1/4 rounded-md"
            src={`/storage/${book.cover}`}
            alt="Book Cover"
          />
        </section>
      )}
    </Page>
  );
}
