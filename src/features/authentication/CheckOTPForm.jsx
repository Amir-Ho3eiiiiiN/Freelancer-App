import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

export default function CheckOTPForm({ phoneNumber, setStep, onResendOtp }) {
  const [otp, SetOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید می‌باشد", { icon: "🌟" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
      if (user.role === "ADMIN") navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <form className="space-y-5" onSubmit={checkOtpHandler}>
        <div>
          <div className="mb-6 space-y-1">
            <button onClick={() => setStep((s) => s - 1)}>
              <ArrowRightIcon className="size-5 text-secondary-500" />
            </button>
            <p className="flex items-center gap-1 text-secondary-700">
              کد تایید برای شماره موبایل {phoneNumber} ارسال گردید{" "}
              <PencilSquareIcon
                className="text-yellow-400 cursor-pointer size-5"
                onClick={() => setStep((s) => s - 1)}
              />
            </p>
            <div className="text-secondary-500">
              {time > 0 ? (
                <p>
                  {Math.floor(time / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(time > 59 ? time - 60 : time).toString().padStart(2, "0")}
                  {"  "}
                  ثانیه تا ارسال مجدد کد
                </p>
              ) : (
                <p className="flex items-center gap-2">
                  <span>ارسال مجدد کد </span>
                  <ArrowPathIcon
                    className="text-green-500 cursor-pointer size-5"
                    onClick={() => {
                      onResendOtp;
                      setTime(RESEND_TIME);
                    }}
                  />
                </p>
              )}
            </div>
          </div>
          <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        </div>
        <OTPInput
          value={otp}
          onChange={SetOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle="border border-primary-400 rounded-md py-1 px-2 !w-8 outline-none"
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
