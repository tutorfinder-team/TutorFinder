export default function InputLabel({ value, Icon, className = '', children, ...props }) {
    return (
        <label {...props} className={`flexible ml-1 gap-1 font-medium text-[0.9rem] text-gray-700 dark:text-gray-100 ` + className}>
            {Icon && <Icon className="text-red-500" size={16} />}
            {value ? value : children}
        </label>
    );
}
