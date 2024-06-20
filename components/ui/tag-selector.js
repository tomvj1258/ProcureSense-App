"use client";

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from 'lucide-react';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner"
import { set } from "react-hook-form";

const TagSelector = ({ defaultTags = [], handleTagChange, maxTags = 6 }) => {

    const [tags, setTags] = useState([...defaultTags])

    const [tagName, setTagName] = useState('')

    const handleTagAdd = () => {
        if (tags.length >= maxTags) {
            toast.error(`You can only add ${maxTags} tags !`)
            return
        }

        if (tagName === '') return

        if (tags.find(tag => tag.name === tagName)) {
            toast.error(`Tag ${tagName} already exists !`)
            return
        }

        setTags([...tags, { id: uuidv4(), name: tagName }])

        setTagName('')

        toast.info(`Tag ${tagName} added !`)
    }

    useEffect(() => {
        handleTagChange(tags)
    }, [tags])

    const handleTagRemove = (id) => {
        setTags(tags.filter((tag) => tag.id !== id))
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-2">
                {tags.map((tag, idx) =>
                    <Badge key={idx} variant="secondary" className="flex flex-row gap-2 mb-2">
                        {tag.name}
                        <X size={14} onClick={() => handleTagRemove(tag.id)} />
                    </Badge>
                )}
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Input
                    id="tag"
                    placeholder="Enter tag"
                    value={tagName}
                    onChange={(e) => { setTagName(e.target.value) }}
                />
                <Button size="sm" type="button" onClick={() => { handleTagAdd() }}>
                    <Plus size={14} />
                    Add New Tag
                </Button>
            </div>
        </div>
    )
}

export default TagSelector;