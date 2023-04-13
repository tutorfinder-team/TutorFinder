import Card from "@/Components/Card";
import Radio from "@/Components/Radio";

export default function Filter({ heading, fields, icon: Icon }) {
    const values = fields.values;
    return (
        <Card>
            <h3 className="mb-4 text-lg sm:text-xl tracking-tight text-slate-900 font-semibold dark:text-slate-200 flexible gap-2">
                <Icon className="text-primary" />
                {heading}
            </h3>
            <div className="fields flex flex-col">
                {values.map((field) => (
                    <Radio
                        name={fields.name}
                        id={field.key}
                        key={field.key}
                        value={field.key}
                        label={field.value}
                        helper={field?.helper}
                    />
                ))}
            </div>
        </Card>
    );
}
