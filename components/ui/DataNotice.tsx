type DataNoticeProps = {
  message?: string;
};

export function DataNotice({ message }: DataNoticeProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-sm border-2 border-cei-shadow bg-cei-alert px-4 py-3 text-[15px] font-semibold leading-6 text-cei-shadow shadow-pixel">
      {message}
    </div>
  );
}
