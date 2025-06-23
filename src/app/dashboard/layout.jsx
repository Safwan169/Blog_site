import AdminNavbar from '@/components/admin/Navbar';
import AdminDrawer from '@/components/admin/AdminDrawer';
import "../globals.css";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Manage your blog here',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminNavbar />
        <div className="flex">
          <AdminDrawer />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
