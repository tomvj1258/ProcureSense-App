"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Step2Page = () => {
    return (
        <div>
            <CardHeader>
                <CardTitle>Step 2</CardTitle>
                <CardDescription>
                    Check the details of the RFP document.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-1.5">
                    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Basic Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-4/6">
                                    <Label htmlFor="company_name">Company Name</Label>
                                    <Input id="company_name" placeholder="Enter company name" />
                                </div>
                                <div className="grid gap-3 w-2/6">
                                    <Label htmlFor="release_date">Release Date</Label>
                                    <Input id="release_date" placeholder="Enter release date" />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="company_address">Company Address</Label>
                                <Input id="company_address" placeholder="Enter company address" />
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Description Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-1/6">
                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input id="quantity" placeholder="Enter quantity" />
                                </div>
                                <div className="grid gap-3 w-5/6">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" placeholder="Enter description" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Contact Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-3/6">
                                    <Label htmlFor="rasied_by">Rasied by</Label>
                                    <Input id="rasied_by" placeholder="Enter rasied by" />
                                </div>
                                <div className="grid gap-3 w-3/6">
                                    <Label htmlFor="contact">Contact</Label>
                                    <Input id="contact" placeholder="Enter contact" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </CardContent>
        </div>
    );
}

export default Step2Page;