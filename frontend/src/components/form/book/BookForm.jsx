import Form from "../components/Form";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

import { MdOutlineTitle } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import Select from "../components/Select";
import { useSelector } from "react-redux";
import Option from "../components/Option";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";

export default function BookForm({ data, setData, loading, error, onSubmit, submitValueText }) {
  const { categories } = useSelector((state) => state.categories);

  return (
    <Form onAction={onSubmit} encType="multipart/form-data">
      <FormBody className="flex flex-col gap-3 font-[poppins]">
        <div className="flex flex-row gap-2 font-[poppins]">
          <Input
            value={data?.title}
            name="title"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            icon={<MdOutlineTitle />}
            placeHolder="Title"
          />
        </div>
        <div className="flex flex-row gap-2">
          <TextArea
            value={data?.description}
            name="description"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeHolder="Description"
            className="textarea textarea-bordered textarea-lg w-full h-[2rem]"
          />
        </div>
        <div className="flex flex-row gap-2">
          <Input
            value={data?.isbn}
            name="isbn"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                isbn: e.target.value,
              }))
            }
            placeHolder="ISBN"
          />
          <Input
            value={data?.author}
            name="author"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                author: e.target.value,
              }))
            }
            icon={<FaUserAlt />}
            placeHolder="Author"
          />
        </div>
        <div className="flex items-center flex-row gap-2">
          <Input
            value={data?.copies}
            name="copies"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                copies: e.target.value,
              }))
            }
            type="number"
            placeHolder="Copies"
          />
          <Select
            name="category"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                category: Number(e.target.value),
              }))
            }
            value={data.category} 
            className="select select-md"
          >
            <Option value="" disabled>
              Select a category
            </Option>
            {categories?.content?.map((item) => (
              <Option key={item.id} value={item.id} innerText={item.name} />
            ))}
          </Select>
        </div>
        <div className="flex flex-row gap-2">
          <Input
            type="file"
            className="file-input file-input-ghost w-full"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                file: e.target.files[0],
              }))
            }
          />
        </div>
      </FormBody>
      <FormFooter className="flex flex-col">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : submitValueText}
        </button>
        {error && <p className="text-red-500 text-sm mt-2 font-black">Error : {error}</p>}
      </FormFooter>
    </Form>
  );
}