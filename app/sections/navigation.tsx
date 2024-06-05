import { motion } from "framer-motion";

export const Navigation = ({ open, setOpen }: { open: any; setOpen: any }) => {
  return (
    <motion.div
      className="bg-red-500 h-screen w-[70%] bg-transparent -z-10"
      animate={open ? { x: 100 } : { x: -300 }}
    >
      <button onClick={() => setOpen(false)}>Open</button>
    </motion.div>
  );
};
