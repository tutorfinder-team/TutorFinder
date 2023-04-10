export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-red-600 rounded-lg font-semibold text-sm text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-offset-2 dark:focus:ring-offset-dark transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
