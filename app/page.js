"use client";
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Steps, message, Upload, Button } from 'antd';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
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

export default function Home() {
  return (
    <div className='min-h-[60vh] w-[120vh] bg-b01 p-12 rounded-md items-center justify-center'>
      <div className='flex flex-col space-y-12'>
        <div className='flex w-full justify-center items-center'>
          <Steps
            current={1}
            className='w-2/3'
            status="process"
            labelPlacement="vertical"
            items={[
              {
                title: 'Finished'
              },
              {
                title: 'In Process'
              },
              {
                title: 'Waiting'
              },
            ]}
          />
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className='text-t01 mb-10 poppins-bold text-xl'>
            Upload purchase request document
          </div> */}
          <div className='flex justify-center items-center'>
            <Dragger className=' w-4/5' {...props}>
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
        </div>
        <div className='flex flex-row justify-between'>
          <Button size='large'>
            Previous
          </Button>
          <Button type="primary" size='large'>
            Save & Next
          </Button>
        </div>
      </div>
    </div>
  );
}
