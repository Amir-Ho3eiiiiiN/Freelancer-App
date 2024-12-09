import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    lable: "رد شده",
    value: 0,
  },
  {
    lable: "در انتظار تایید",
    value: 1,
  },
  {
    lable: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose, userStatus }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, // {userId, data: {status:0, 1, 2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          lable="تغییر وضعیت"
          register={register}
          required
          options={options}
          select={userStatus}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="w-full btn btn--primary" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ChangeUserStatus;
