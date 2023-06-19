export default function Table({title, subtitle, columns, children }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-2xl">
            <table className="w-full text-sm text-left first-letter backdrop-blur rounded-2xl transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border shadow-md ">
                <caption className="p-5 text-lg font-semibold text-left rounded-t-2xl backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border">
                   {title}
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darker dark:text-gray-400">
                    <tr>
                        {columns.map((column) => column && (
                          <th scope="col" className="px-6 py-3" key={column}>
                            {column || ''}
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}
