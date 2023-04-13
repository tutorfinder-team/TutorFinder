import Gradient from "@/Components/Gradient";
import Logo from "@/Components/Logo";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-grid-slate-900 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100/40 dark:bg-darker">
                <Gradient />
                <div>
                    <Logo />
                </div>
                <div className="w-full relative z-50 sm:max-w-md mt-8 px-7 py-6 bg-white dark:bg-dark shadow-lg overflow-hidden sm:rounded-xl">
                    {children}
                </div>
            </div>
    );
}
