import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  { lable: "رد شده", value: 0 },
  { lable: "در انتظار تایید", value: 1 },
  { lable: "تایید شده", value: 2 },
];

function ChangeProposalStatus({ onClose, proposalId }) {
  const { id: projectId } = useParams();
  const { handleSubmit, register } = useForm();
  const { isUpdating, changeProposalStatus } =
    useChangeProposalStatus(projectId);
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      {
        proposalId,
        projectId,
        ...data, 
      },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          lable="تغییر وضعیت"
          name="status"
          register={register}
          options={options}
          required
        />
        <div className="mt-6">
          {isUpdating ? (
            <Loading width="4rem" height="2rem" />
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

export default ChangeProposalStatus;
