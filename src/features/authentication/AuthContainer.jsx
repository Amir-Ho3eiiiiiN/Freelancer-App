import { useEffect, useState } from "react";
import SendOTPForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOTP } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("09380340580");

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    //, data : otpResponse
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setStep(2);
    }
  };

  const { register, handleSubmit, getValues } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
            // phoneNumber={phoneNumber}
            // onchange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            phoneNumber={getValues("phoneNumber")}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full xs:max-w-screen-xs"> {renderStep()}</div>;
}

export default AuthContainer;
