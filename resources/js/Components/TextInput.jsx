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
                    'py-2 w-full text-darker border border-apply dark:bg-darker dark:text-gray-300 focus:border-primary focus:ring-primary/10 focus:ring-4 rounded-lg shadow-sm ' +
                    (Icon ? 'pl-10' : '') +
                    ' ' + className
                }
                ref={input}
            />
        </div>
    );
});
