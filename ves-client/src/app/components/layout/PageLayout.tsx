import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children?: ReactNode;
};

export default function PageLayout({ children }: Props) {

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}