import {motion} from "framer-motion"

// next step : change example to component name 
// define the animation you want 
// crate the components 
// while scrol animation 


export const Example =()=>{
  const list = { hidden: { opacity: 0 },visible: { opacity: 1 } }
  const item = { hidden: { x: -10, opacity: 0 },visible: { opacity: 1 } }
  
  const view ={initial:{opacity:0},whileInView:{opacity:1} }
    return(
      <>
                <motion.div className="bg-slate-400 w-[200px] h-[200px] rounded-md text-center p-2"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Example 01 to use Framer-motion 
      </motion.div>

{/* list  lean today 
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}

*/}
  <motion.ul initial="hidden" animate="visible" variants={list}>
    <motion.li initial="hidden" animate="visible" variants={item} >Item 1</motion.li>
    <motion.li initial="hidden" animate="visible" variants={item} >Item 1</motion.li>
    <motion.li initial="hidden" animate="visible" variants={item}>Item 1</motion.li>
  </motion.ul>


<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
>

  Card
</motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
></motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
></motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
></motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
></motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
></motion.div>
<motion.div
  className="w-[300px] mt-4 h-[300px] bg-cyan-400 rounded-md"
  initial={{ opacity: 0 , scale:0.5}}
  whileInView={{ opacity: 1 , scale:1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0.1, 0.7, 0.3, 1]
  }}
></motion.div>
      </>
    )
}