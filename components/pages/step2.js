"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import TagSelector from "@/components/ui/tag-selector"
import { addAnalyseStore } from "@/stores/addAnalyse";

const Step2Page = () => {

    const { analyseData, requestForProposalData } = addAnalyseStore();
    const useEffectRan = useRef(false);

    const [analyseName, setAnalyseName] = useState("")
    const [analyseDescription, setAnalyseDescription] = useState("")
    const [analyseTags, setAnalyseTags] = useState([])

    const [companyName, setCompanyName] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [deliveryTerms, setDeliveryTerms] = useState("")
    const [paymentTerms, setPaymentTerms] = useState("")
    const [termsConditions, setTermsConditions] = useState("")
    const [scopeOfWork, setScopeOfWork] = useState([{ quantity: "", description: "" }])
    const [rasiedBy, setRasiedBy] = useState("")
    const [contact, setContact] = useState("")

    useEffect(() => {
        // if (!useEffectRan.current) {
        //     useEffectRan.current = true;

        if (analyseData) {
            setAnalyseName(analyseData.name)
            setAnalyseDescription(analyseData.description)
            setAnalyseTags(analyseData.tags.map(tag => { return { id: uuidv4(), name: tag } }))
        }

        if (requestForProposalData) {
            setCompanyName(requestForProposalData.companyName)
            setReleaseDate(requestForProposalData.releaseDate)
            setCompanyAddress(requestForProposalData.companyAddress)
            setDeliveryTerms(requestForProposalData.deliveryTerms)
            setPaymentTerms(requestForProposalData.paymentTerms)
            setTermsConditions(requestForProposalData.termsConditions)
            setScopeOfWork(requestForProposalData.scopeOfWork)
            setRasiedBy(requestForProposalData.contactInformation.raisedBy)
            setContact(requestForProposalData.contactInformation.contactDetail)
        }
        // }
    }, [])

    const handleTagChange = (tags) => {
        setAnalyseTags(tags)
    }

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
                                Analyse Information
                            </legend>
                            <div className="grid gap-3">
                                <Label className="flex flex-row gap-3 items-center" htmlFor="analyse_name">
                                    Name*
                                    {analyseName === "" && <Badge variant="destructive">No analyse name available</Badge>}
                                </Label>
                                <Input id="company_name" placeholder="Enter analyse name" value={analyseName} />
                            </div>
                            <div className="grid gap-3">
                                <Label className="flex flex-row gap-3 items-center" htmlFor="release_date">
                                    Tags*
                                    {analyseTags.length === 0 && <Badge variant="destructive">No analyse tags available</Badge>}
                                </Label>
                                <TagSelector
                                    defaultTags={analyseTags}
                                    handleTagChange={(tags) => { handleTagChange(tags) }}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label className="flex flex-row gap-3 items-center" htmlFor="analyse_description">
                                    Description*
                                    {analyseDescription === "" && <Badge variant="destructive">No analyse description available</Badge>}
                                </Label>
                                <Textarea id="analyse_description" placeholder="Enter analyse description" value={analyseDescription} />
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                RFP Basic Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-4/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="company_name">
                                        Company Name
                                        {companyName === "" && <Badge variant="destructive">No company name available</Badge>}
                                    </Label>
                                    <Input id="company_name" placeholder="Enter company name" value={companyName} />
                                </div>
                                <div className="grid gap-3 w-2/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="release_date">
                                        Release Date
                                        {releaseDate === "" && <Badge variant="destructive">No release date available</Badge>}
                                    </Label>
                                    <Input id="release_date" placeholder="Enter release date" value={releaseDate} />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label className="flex flex-row gap-3 items-center" htmlFor="company_address">
                                    Company Address
                                    {companyAddress === "" && <Badge variant="destructive">No company address available</Badge>}
                                </Label>
                                <Input id="company_address" placeholder="Enter company address" value={companyAddress} />
                            </div>
                            <div className="grid gap-3">
                                <Label className="flex flex-row gap-3 items-center" htmlFor="terms_conditions">
                                    Terms & Conditions
                                    {termsConditions.length === 0 && <Badge variant="destructive">No terms & conditions available</Badge>}
                                </Label>
                                <Textarea id="terms_conditions" placeholder="Enter Terms & Conditions" value={termsConditions} />
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-3/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="delivery_terms">
                                        Delivery Terms
                                        {deliveryTerms.length === 0 && <Badge variant="destructive">No delivery terms available</Badge>}
                                    </Label>
                                    <Textarea id="delivery_terms" placeholder="Enter delivery Terms" value={deliveryTerms} rows={5}/>
                                </div>
                                <div className="grid gap-3 w-3/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="payment_terms">
                                        Payment Terms
                                        {paymentTerms.length === 0 && <Badge variant="destructive">No payment terms available</Badge>}
                                    </Label>
                                    <Textarea id="payment_terms" placeholder="Enter payment Terms" value={paymentTerms} />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Scope of Work Information
                            </legend>
                            {
                                scopeOfWork && scopeOfWork.map((scope, idx) => (
                                    <div key={idx} className="flex flex-row gap-3">
                                        <div className="grid gap-3 w-1/6">
                                            <Label htmlFor="quantity">Quantity*</Label>
                                            <Input id="quantity" placeholder="Enter quantity" value={scope.quantity} />
                                        </div>
                                        <div className="grid gap-3 w-5/6">
                                            <Label htmlFor="description">Description*</Label>
                                            <Input id="description" placeholder="Enter description" value={scope.description} />
                                        </div>
                                    </div>
                                ))
                            }
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                RFP Contact Information
                            </legend>
                            <div className="flex flex-row gap-3">
                                <div className="grid gap-3 w-3/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="rasied_by">
                                        Rasied by
                                        {rasiedBy === "" && <Badge variant="destructive">No rasied by available</Badge>}
                                    </Label>
                                    <Input id="rasied_by" placeholder="Enter rasied by" value={rasiedBy} />
                                </div>
                                <div className="grid gap-3 w-3/6">
                                    <Label className="flex flex-row gap-3 items-center" htmlFor="contact">
                                        Contact
                                        {contact === "" && <Badge variant="destructive">No contact available</Badge>}
                                    </Label>
                                    <Input id="contact" placeholder="Enter contact" value={contact} />
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