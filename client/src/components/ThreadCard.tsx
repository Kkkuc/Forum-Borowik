interface ThreadCardInterface {
  title: string;
  content: string;
  date: Date;
}

const ThreadCard = ({ title, content, date }: ThreadCardInterface) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-600 p-4 m-4 rounded-sm min-w-[50%] shadow-lg">
      <div className="flex flex-row max-sm p-2 justify-between dark:text-slate-50">
        <h2 className="text-nowrap">{title}</h2>{" "}
        <p className="text-slate-400 text-ellipsis text-nowrap">
          {date.toLocaleString()}
        </p>
      </div>
      <p className="py-2 px-4 text-justify">{content}</p>
    </div>
  );
};

export { ThreadCard, type ThreadCardInterface };
