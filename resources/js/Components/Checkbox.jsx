export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-darker border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/0  dark:focus:ring-offset-dark ' +
                className
            }
        />
    );
}
