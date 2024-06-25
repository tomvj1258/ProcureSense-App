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
    const [proposalFiles, setProposalFiles] = useState([{ id: uuidv4(), file: null }]);
    const { setProposalFileList } = addAnalyseStore();

    const handleFileAdd = () => {
        setProposalFiles([...proposalFiles, { id: uuidv4(), file: null }]);
    }
    const handleFileRemove = (id) => {
        setProposalFiles(proposalFiles.filter((file) => file.id !== id));
    }

    const handleProposalFileUpload = (e, id) => {
        setProposalFiles((prevProposalFiles) => {
            const updatedFiles = prevProposalFiles.map(file =>
                file.id === id ? { ...file, file: e.target.files[0] } : file
            );
            return updatedFiles;
        });
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
                    <Button size="sm" className="flex flex-row gap-2" onClick={() => { handleFileAdd() }}>
                        <Plus size={12} absoluteStrokeWidth={1} />
                        <span>Add Proposal</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-1.5">
                    {proposalFiles.map((file, index) => (
                        <div key={file.id}>
                            <Label htmlFor="proposal">Proposal {index + 1}</Label>
                            <div className="flex flex-row items-center gap-2">
                                <Input id="proposal" type="file" onChange={(e) => { handleProposalFileUpload(e, file.id) }} />
                                <Button variant="destructive" onClick={() => { handleFileRemove(file.id) }} disabled={proposalFiles.length > 1 ? false : true}>
                                    <Trash2 size={20} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </div>
    );
}

export default Step3Page;