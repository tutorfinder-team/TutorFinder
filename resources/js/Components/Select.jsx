export default function Select({name, options}) {
    return (
            <select
                id={name}
                className="bg-slate-50 border border-apply text-slate-900 text-sm rounded-lg focus:ring-primary/0 focus:border-primary p-2.5 dark:bg-dark dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary"
            >
                <option>Hello</option>
                {options.map((o) => {

                    <option value={o.value}>{o.label}</option>
                })}
            </select>
    );
}
