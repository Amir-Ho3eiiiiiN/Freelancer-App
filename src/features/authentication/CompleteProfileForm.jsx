import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

export default function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onsubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید می‌باشد", { icon: "🌟" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full xs:max-w-screen-xs">
      <h3 className="mb-4 text-2xl font-semibold text-center">تکمیل اطلاعات</h3>
      <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "وارد کردن ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل وارد شده معتبر نیست",
            },
          }}
          errors={errors}
        />
        <RadioInputGroup
          errors={errors}
          register={register}
          watch={watch}
          configs={{
            name: "role",
            validationSchema: {
              required: `نقش ضروری است`,
            },
            options: [
              { value: "OWNER", lable: "کارفرما" },
              { value: "Freelancer", lable: "فریلنسر" },
            ],
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className="w-full btn btn--primary">تایید</button>
        )}
      </form>
    </div>
  );
}
