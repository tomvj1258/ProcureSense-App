// "use client";

// import Link from "next/link"
// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// const SettingsLayout = ({ children }) => {
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     return (
//         <div className="mx-auto grid w-full max-w-6xl gap-5">
//             <h1 className="flex flex-row gap-3 items-center text-3xl font-semibold">
//                 <div onClick={() => setIsNavOpen(!isNavOpen)}>Settings</div>
//                 <div className="md:hidden">
//                     <div onClick={() => setIsNavOpen(!isNavOpen)}>
//                         {isNavOpen ? <ChevronDown /> : <ChevronUp />}
//                     </div>
//                 </div>
//             </h1>
//             <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr]">
//                 <nav className={`grid gap-4 text-sm text-muted-foreground ${isNavOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-col`}>
//                     {/* <Link href="/settings/general" className="font-semibold text-primary">General</Link> */}
//                     <Link href="/settings/security" className="font-semibold text-primary">Security</Link>
//                 </nav>
//                 <div className="grid gap-6">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SettingsLayout;