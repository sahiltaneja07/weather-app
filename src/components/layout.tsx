import { Header } from "./header";
import { Toaster } from "@/components/ui/sonner"

const Layout = ({children}) => {
    return <div className="bs-gradient-to-br from-background to-muted">
        <Header />
        <main className="min-h-screen px-8 py-8 bg-[#131313]">{children}</main>
        <Toaster />
    </div>;
};

export default Layout;