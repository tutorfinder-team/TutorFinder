import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, icon: Icon, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="relative">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400"/>
                </div>
            )}
            <input
                {...props}
                type={type}
                className={
                    'py-2 w-full text-darker border-gray-300 dark:border-gray-700 dark:bg-darker dark:text-gray-300 focus:border-primary dark:focus:border-primary focus:ring-primary/40 dark:focus:ring-primary/20 rounded-lg shadow-sm ' +
                    (Icon ? 'pl-10' : '') +
                    ' ' + className
                }
                ref={input}
            />
        </div>
    );
});
