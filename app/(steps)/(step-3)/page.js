"use client";

import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const { Dragger } = Upload;

const Step2 = () => {
    const uploaderProps = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className='text-2xl font-bold'>Upload Request for Proposal</div>
                <div className='text-sm font-medium'>Descripition</div>
            </div>
            <div className="flex flex-col gap-3">
                <Dragger {...uploaderProps}>
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
            <div className='flex flex-row justify-between'>
                <Button>Previous</Button>
                <Button type="primary">Next</Button>
            </div>
        </div>
    );
};
export default Step2;