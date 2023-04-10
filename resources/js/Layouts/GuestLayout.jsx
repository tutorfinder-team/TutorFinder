import Logo from '@/Components/Logo';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Logo />
            </div>

            <div className="w-full sm:max-w-md mt-8 px-7 py-6 bg-white dark:bg-gray-800 shadow-lg overflow-hidden sm:rounded-xl">
                {children}
            </div>
        </div>
    );
}
