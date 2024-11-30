import { Header } from "./header";
import { Toaster } from "@/components/ui/sonner"

const Layout = ({children}) => {
    return <div className="bs-gradient-to-br from-background to-muted">
        <Header />
        <main className="min-h-screen px-8 py-8 bg-[#131313]">{children}</main>
        <Toaster />
        <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Made with 💗 by Sahil</p>
            </div>
        </footer>
    </div>;
};

export default Layout;