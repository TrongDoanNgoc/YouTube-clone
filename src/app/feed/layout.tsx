interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
export default Layout;
