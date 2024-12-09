import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "./useCAtegory";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : new Date());
  const { categories } = useCategory();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const onsubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
      <TextField
        label="عنوان پروژه"
        name="title"
        required
        register={register}
        validationSchema={{
          required: "عنوان پروژه ضروری است",
          minLength: {
            value: 10,
            message: "طول نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        required
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 20,
            message: "طول نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        required
        register={register}
        type="number"
        validationSchema={{
          required: "بودجه ضروری است",
          min: {
            value: 100000,
            message: "حداقل مقدار بودجه باید 100 تومان باشد",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        lable="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label htmlFor="tags" className="block mb-2 text-secondary-700">
          تگ‌
        </label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          classNames={{}}
        />
      </div>
      <DatePickerField lable="ددلاین" date={date} setDate={setDate} />
      <div className="mt-5">
        {(!isCreating && !isEditSession) || (!isEditing && isEditSession) ? (
          <button type="submit" className="w-full btn btn--primary">
            تایید
          </button>
        ) : (
          <Loading />
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
