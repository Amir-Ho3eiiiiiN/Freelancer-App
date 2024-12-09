import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfiles() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl ">
        <div className="flex items-center justify-center pt-10">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfiles;
