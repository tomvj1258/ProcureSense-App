"use client";

const StepsLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
            <div className="w-[50%] border rounded p-6 bg-white">
                {children}
            </div>
        </div>
    );
}

export default StepsLayout;