"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Plus } from 'lucide-react';
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addAnalyseStore } from "@/stores/addAnalyse";

const Step3Page = () => {
    const [proposalFiles, setProposalFiles] = useState([]);
    const { setProposalFileList } = addAnalyseStore();

    // const handleFileAdd = () => {
    //     setProposalFiles([...proposalFiles, { id: uuidv4(), file: null }]);
    // }

    const handleFileRemove = (id) => {
        setProposalFiles(proposalFiles.filter((file) => file.id !== id));
    }

    const handleProposalFileUpload = (e) => {
        let tempProposalFiles = [];
        for (let file of e.target.files) {
            if (file.type === 'application/pdf') {
                tempProposalFiles.push({ id: uuidv4(), file: file });
            }
        }
        setProposalFiles([...tempProposalFiles])
        console.log(tempProposalFiles)
    }

    const bytesToMegabytes = (bytes) => {
        let megabytes = bytes / (1024 * 1024);
        return megabytes.toFixed(2)
    }

    useEffect(() => {
        setProposalFileList(proposalFiles.map(file => file.file))
    }, [setProposalFileList, proposalFiles]);

    return (
        <div>
            <CardHeader>
                <CardTitle>Step 3</CardTitle>
                <div className="flex flex-row justify-between items-start">
                    <span className="text-sm text-muted-foreground">Upload your proposal document.</span>
                    {/* <Button size="sm" className="flex flex-row gap-2" onClick={() => { handleFileAdd() }}>
                        <Plus size={12} absoluteStrokeWidth={1} />
                        <span>Add Proposal</span>
                    </Button> */}
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <Input id="proposal" type="file" webkitdirectory="true" multiple onChange={(e) => { handleProposalFileUpload(e) }} />
                    {proposalFiles.map((file, index) => (
                        <div className="flex flex-row justify-between px-4 py-2 items-center border rounded" key={file.id}>
                            <div className="flex flex-col gap-1 text-xs w-8/12">
                                <span className="font-semibold">Proposal {index + 1}</span>
                                <div className="flex flex-row justify-between w-9/12">
                                    {file.file && (
                                        <>
                                            <span>File Name: {file.file.name}</span>
                                            <span>Size: {bytesToMegabytes(file.file.size)} Mb</span>
                                        </>)
                                    }
                                </div>
                            </div>
                            <Trash2 className="text-destructive cursor-pointer" size={20} onClick={() => { handleFileRemove(file.id) }} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </div>
    );
}

export default Step3Page;