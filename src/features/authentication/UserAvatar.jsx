function UserAvatar({user}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        className="rounded-full h-11 w-11 outline outline-offset-2 outline-secondary-200"
        src="/public/images/user.jpg"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  ); 
}

export default UserAvatar;
