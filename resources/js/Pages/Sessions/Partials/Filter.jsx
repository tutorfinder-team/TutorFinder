import Card from "@/Components/Card";
import Radio from "@/Components/Radio";
import RadioOption from "@/Components/RadioOption";
import { router, usePage } from "@inertiajs/react";

export default function Filter({ filterType, heading, fields, icon: Icon }) {
    const values = fields.values;
    const {search, sort, type} = usePage().props;
    const getQuery = (newSearch, newSort, newType) => {
        const url = new URL(window.location.href);
        if (search) url.searchParams.set('search', search);
        if (sort) url.searchParams.set('sort', sort);
        if (type) url.searchParams.set('type', type);
        return url;
      };
    const handleChange = (e) => {
        router.get(
            getQuery(search, sort, type),
            { [filterType]: e.target.value },
            { preserveState: true }
        );
    }
    return (
        <Card>
            <h3 className="mb-4 text-lg sm:text-xl tracking-tight text-slate-900 font-semibold dark:text-slate-200 flexible gap-2">
                <Icon className="text-primary" />
                {heading}
            </h3>
            <div className="fields flex flex-col">
                <form action="" method="get" onChange={handleChange}>
                    {values.map((field) => (
                        <RadioOption
                            name={fields.name}
                            id={field.key}
                            key={field.key}
                            value={field.key}
                            label={field.value}
                            helper={field?.helper}
                            selected={field.key === sort || field.key === type}
                        />
                    ))}
                </form>
            </div>
        </Card>
    );
}
