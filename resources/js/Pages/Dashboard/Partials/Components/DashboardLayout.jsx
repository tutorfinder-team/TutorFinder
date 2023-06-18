import MainLayout from "@/Layouts/MainLayout";
import SideBar from "./SideBar";

export default function DashboardLayout({children}) {
    return (
        <MainLayout>
            <div className="">
                <SideBar />
                <div className="p-4 sm:ml-64">
                    {children}
                </div>
            </div>
        </MainLayout>
    );
}
