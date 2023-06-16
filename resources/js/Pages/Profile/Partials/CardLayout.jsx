import Card from "@/Components/Card";

export default function CardLayout({cardName, cardProps, Icon, children, FormModal}) {
    return (
        <Card className="p-0">
            <div className="header flexible justify-between py-3 px-5 border-b border-apply">
                <div className="flexible gap-2">
                    <Icon />
                    <h1>{cardName}</h1>
                    {cardProps && cardProps.percentage !== 100 && (
                        <div className="text-green-500">
                           +{cardProps.percentageToAdd}%
                        </div>
                    )}
                </div>
                <div>
                    {FormModal && <FormModal />}
                </div>
            </div>
            <div className="content py-3 px-5">
                {children}
            </div>
        </Card>
    );
}
