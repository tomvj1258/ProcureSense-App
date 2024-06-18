"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addAnalyseStore } from "@/stores/addAnalyse";

const Step1Page = () => {

    const { setRequestForProposalFileList } = addAnalyseStore();

    const handleRFPUpload = (e) => {
        setRequestForProposalFileList(e.target.files);
    }

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
                    <Input id="rfp" type="file" onChange={(e) => { handleRFPUpload(e) }} accept="application/pdf" />
                </div>
            </CardContent>
        </div>
    );
}

export default Step1Page;