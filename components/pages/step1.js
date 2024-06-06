"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Step1Page = () => {
    return (
        <div>
            <CardHeader>
                <CardTitle>Step 1</CardTitle>
                <CardDescription>
                    Upload your request for proposal (RFP) document.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="rfp">Request for proposal</Label>
                    <Input id="rfp" type="file" />
                </div>
            </CardContent>
        </div>
    );
}

export default Step1Page;