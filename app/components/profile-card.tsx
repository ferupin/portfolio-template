import { GlareCard } from "../components/ui/glare-card";
import { motion } from "motion/react";

export function GlareCardDemo() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1.3 }}
      >
        <GlareCard className="flex flex-col items-center justify-center">
          <motion.img
                src="/github-pfp.jpg"
                className="rounded-full"
                style={{ width: "350px", height: "350px" }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
        </GlareCard>
      </motion.div>
    </div>
  );
}
