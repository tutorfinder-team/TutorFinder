export default function Badge({ icon: Icon, size, text, className, ...props }) {
    return (
            <span {...props} className={`cursor-pointer inline-flex items-center gap-1 font-semibold text-xs rounded-md px-2 py-1 mr-3 ${className}`}>
                {Icon && <Icon size={size}/>}
                {text}
            </span>
    );
}
