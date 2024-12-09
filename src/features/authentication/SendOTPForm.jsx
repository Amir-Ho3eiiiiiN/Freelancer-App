import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ register, onSubmit, isSendingOtp }) {
  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          // value={phoneNumber}
          // onChange={onchange}
        />
        <div>
          {isSendingOtp ? (
            <Loading width={80} height={60} />
          ) : (
            <button type="submit" className="w-full btn btn--primary">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default SendOTPForm;
