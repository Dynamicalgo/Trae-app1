import { Card } from "@/components/ui/card";
import { ChevronDown, Mic, Phone, PieChart } from "lucide-react";

export function AdditionalSettings() {
  return (
    <>
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Speech Settings</h2>
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Call Settings</h2>
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Post-Call Analysis</h2>
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
      </Card>
    </>
  );
}