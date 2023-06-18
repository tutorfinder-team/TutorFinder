export default function InputLabel({ hint, value, Icon, className = '', children, ...props }) {
    let color = 'text-gray-700 dark:text-gray-100 ';
    if (className.includes('text-primary')) color = 'text-primary ';
    return (
        <>
        <label {...props} className={`flexible ml-1 gap-1 text-[0.9rem] ` + color + className}>
            {Icon && <Icon className="text-red-500" size={16} />}
            {value ? value : children}
        </label>
        {hint && <p className="text-xs text-gray-500 dark:text-gray-400 ml-1 mb-2">{hint}</p>}
        </>
    );
}
