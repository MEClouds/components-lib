"use client"
import Image from "next/image";
import {motion} from "framer-motion"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <motion.div className="bg-slate-400 w-[200px] h-[200px] rounded-md text-center p-2"
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
>
  hi there
</motion.div>
    </main>
  );
}
