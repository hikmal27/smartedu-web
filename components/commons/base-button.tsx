import { Button } from "@/components/ui/button"

interface BaseButtonOPtions {
    label: string,
    children?: React.ReactNode
}
const BaseButton = ({ label, children }: BaseButtonOPtions) => {
    return (
        <Button variant="outline" className="space-x-3">
            {children}
            <p>{label}</p>
        </Button>
    );
};

export default BaseButton;