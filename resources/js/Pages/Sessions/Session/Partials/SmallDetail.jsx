import Card from "@/Components/Card";
import React from "react";
import { BiDollar } from "react-icons/bi";

export default function SmallDetail({Icon, h1, h2, className, ...props}) {
    return (
        <div className={`flexible gap-2 ${className}`} >
            <Card className="w-10 h-10 flexible-center p-0">
                <Icon size={18} />
            </Card>
            <div className="-mt-4 text-sm">
                <h1 className="font-semibold break-words">{h1}</h1>
                <h2 className="font-medium opacity-60">{h2}</h2>
            </div>
        </div>
    );
}
