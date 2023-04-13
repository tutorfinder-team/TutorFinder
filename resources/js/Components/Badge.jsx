export default function Badge({ icon: Icon, text, className }) {
    return (
            <span className={`cursor-pointer inline-flex items-center gap-1 font-semibold text-xs rounded-lg px-2 py-1 mr-3 ${className}`}>
                {Icon && <Icon/>}
                {text}
            </span>
    );
}
