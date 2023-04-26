export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    let px = 'px-4'
    let py = 'py-2'
    if (className.includes('px-')) {
        px = ''
    } else if (className.includes('py-')) {
        py = ''
    }
    return (
        <button
            {...props}
            type={type}
            className={
                `btn-secondary ${px} ${py} disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
