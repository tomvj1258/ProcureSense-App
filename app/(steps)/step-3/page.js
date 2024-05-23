"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { AxiosInstance } from '@/services/axios.service.js';
import { useAnalysisContext } from '@/contexts/analysis.context.js';

const { Dragger } = Upload;

const axios_instance = new AxiosInstance({ 'Content-Type': 'multipart/form-data' });

const Step3 = () => {
    const router = useRouter();
    const { analysisId } = useAnalysisContext();
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleNext = async () => {

        setUploading(true);

        await axios_instance.initialize();
        const formData = new FormData();

        fileList.forEach((file) => {
            formData.append('files', file);
        });

        console.log(formData);
        axios_instance.post(`/api/ingest-p?analysisId=${analysisId}`, formData)
            .then((response) => {
                fileList.forEach((file) => {
                    setUploading(false);
                    message.success(`${file.name} File uploaded successfully.`);
                });
            })
            .catch((error) => {
                console.log(error);
                setUploading(false);
                message.error(`${fileList[0].name} File upload failed.`);
            });
        router.push('/step-4');
    };

    // const handlePrevious = () => {
    //     router.push('/step-1');
    // };

    const handleFileUpload = async () => {
        setFileList(fileList)
    }

    const handleFileRemove = (file) => {
        setFileList((currentFileList) => currentFileList.filter((f) => f.uid !== file.uid));
    };

    const handleBeforeUpload = (file) => {
        setFileList([...fileList, file]);
        return false;
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className='text-2xl font-bold'>Upload Proposal</div>
                <div className='text-sm font-medium'>Descripition</div>
            </div>
            <div className="flex flex-col gap-3">
                <Dragger fileList={fileList} beforeUpload={handleBeforeUpload} onChange={handleFileUpload} onRemove={handleFileRemove} maxCount={8} multiple={true}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
            </div>
            <div className='flex flex-row justify-end'>
                {/* <Button onClick={handlePrevious} >Previous</Button> */}
                <Button onClick={handleNext} type="primary" disabled={fileList.length === 0} loading={uploading} iconPosition={'end'}>Next</Button>
            </div>
        </div>
    );
};
export default Step3;