function ConfirmDelete({ resourceName, onClose, onCarfirm, disabled }) {
  return (
    <>
      <h2 className="mb-8 text-base font-bold">
        ایا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex items-center justify-around gap-8">
        <button onClick={onClose} className="flex-1 btn btn--primary">
          انصراف
        </button>
        <button onClick={onCarfirm} className="flex-1 py-3 btn btn--danger">
          تایید
        </button>
      </div>
    </>
  );
}

export default ConfirmDelete;
