"use client";

import { Button, Pagination, Input } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

const Step5 = () => {
    const [currentPage, setPageCurrent] = useState(3);
    const onPaginationChange = (page) => {
        console.log(page);
        setPageCurrent(page);
    };
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className='text-2xl font-bold'>Upload Proposals</div>
                <div className='text-sm font-medium'>Descripition</div>
            </div>
            <div className="flex flex-col gap-3 bg-slate-50 p-3 border-2 rounded max-h-80 overflow-x-auto">
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Quotation Number</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Quotation Date</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Quotation Validity</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-1/2'>
                        <span className='text-xs font-medium'>Company Name</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/2'>
                        <span className='text-xs font-medium'>Company Address</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                </div>
                {/* <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company Phone Number</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company TIN Number</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company PAN Number</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company GST Number</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company SERVICE TAX Number</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/3'>
                        <span className='text-xs font-medium'>Company HSN/SAC Code</span>
                        <Input placeholder="Enter request name" required />
                    </div>
                </div> */}
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-full'>
                        <span className='text-xs font-medium'>Terms & Conditions</span>
                        <TextArea rows={4} placeholder="Enter request name" disabled />
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-full'>
                        <span className='text-xs font-medium'>Delivery Terms</span>
                        <TextArea rows={4} placeholder="Enter request name" disabled />
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-full'>
                        <span className='text-xs font-medium'>Tax Terms</span>
                        <TextArea rows={4} placeholder="Enter request name" disabled />
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-0.5 w-1/2'>
                        <span className='text-xs font-medium'>Total Quotation Value</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                    <div className='flex flex-col gap-0.5 w-1/2'>
                        <span className='text-xs font-medium'>Net Quotation Value</span>
                        <Input placeholder="Enter request name" disabled />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <Pagination current={currentPage} onChange={onPaginationChange} total={8} pageSize={1} hideOnSinglePage />
            </div>
            <div className='flex flex-row justify-between'>
                <Button>Previous</Button>
                <Button type="primary">Next</Button>
            </div>
        </div >
    );
};
export default Step5;