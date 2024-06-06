"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Step4Page = () => {

    return (
        <div>
            <CardHeader>
                <CardTitle>Step 4</CardTitle>
                <CardDescription>
                    Check the details of the proposal {1} document.
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
                                    <Label htmlFor="submission_date">Submission Date</Label>
                                    <Input id="submission_date" placeholder="Enter submission date" />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="company_address">Company Address</Label>
                                <Input id="company_address" placeholder="Enter company address" />
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-4/6">
                                    <Label htmlFor="company_email">Company Email</Label>
                                    <Input id="company_email" placeholder="Enter company email" />
                                </div>
                                <div className="grid gap-3 w-2/6">
                                    <Label htmlFor="company_website">Company website</Label>
                                    <Input id="company_website" placeholder="Enter company website" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Contact Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-3/6">
                                    <Label htmlFor="bank_details">Bank details</Label>
                                    <Input id="bank_details" placeholder="Enter bank details" />
                                </div>
                                <div className="grid gap-3 w-3/6">
                                    <Label htmlFor="contact">Contact</Label>
                                    <Input id="contact" placeholder="Enter contact" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Description Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-1/12">
                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input id="quantity" placeholder="Quantity" />
                                </div>
                                <div className="grid gap-3 w-5/12">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" placeholder="Description" />
                                </div>
                                <div className="grid gap-3 w-2/12">
                                    <Label htmlFor="description">Per unit rate</Label>
                                    <Input id="description" placeholder="Pre unit rate" />
                                </div>
                                <div className="grid gap-3 w-1/12">
                                    <Label htmlFor="description">Amount</Label>
                                    <Input id="description" placeholder="Amount" />
                                </div>
                                <div className="grid gap-3 w-1/12">
                                    <Label htmlFor="description">Taxes</Label>
                                    <Input id="description" placeholder="Taxes" />
                                </div>
                                <div className="grid gap-3 w-2/12">
                                    <Label htmlFor="description">Total Amount</Label>
                                    <Input id="description" placeholder="Total Amount" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Terms & conditions Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-full">
                                    <Label htmlFor="terms_condition">Terms & Conditions details</Label>
                                    <Input id="terms_condition" placeholder="Enter terms & condition details" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Payment & Delivery Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-full">
                                    <Label htmlFor="terms_condition">Payment details</Label>
                                    <Textarea id="terms_condition" placeholder="Enter payment details" />
                                </div>
                                <div className="grid gap-3 w-full">
                                    <Label htmlFor="terms_condition">Delivery details</Label>
                                    <Textarea id="terms_condition" placeholder="Enter delivery details" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Implementation Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-full">
                                    <Label htmlFor="terms_condition">Implementation Details</Label>
                                    <Textarea id="terms_condition" placeholder="Enter implementation details" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </CardContent>
        </div>
    );
}

export default Step4Page;