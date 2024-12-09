import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposalForm({ projectId, onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onsubmit = (data) => {
    const newProposal = {
      projectId,
      ...data,
    };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose(), reset();
      },
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
      <TextField
        label="توضیحات پروژه"
        name="description"
        required
        register={register}
        validationSchema={{
          required: "توضیحات پروژه ضروری است",
          minLength: {
            value: 10,
            message: "طول نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        required
        register={register}
        validationSchema={{
          required: "قیمت ضروری است",
        }}
        errors={errors}
      />
      <TextField
        label="مدت زمان"
        name="duration"
        type="number"
        required
        register={register}
        validationSchema={{
          required: "مدت زمان ضروری است",
        }}
        errors={errors}
      />
      <div className="pt-3">
        {!isCreating ? (
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

export default CreateProposalForm;
