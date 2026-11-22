interface LoginCartInterface {
  children: React.ReactNode;
}

const LoginCart = ({ children }: LoginCartInterface) => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-100 dark:bg-slate-500">
      <div className="flex flex-col gap-5 min-h-fit px-10 py-15 shadow-lg rounded-sm bg-slate-50 dark:bg-slate-600">
        {children}
      </div>
    </div>
  );
};

export { LoginCart, type LoginCartInterface };
