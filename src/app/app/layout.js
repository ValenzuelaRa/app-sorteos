import "../globals.css";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <main className="app-main">{children}</main>
    </div>
  );
  
}
