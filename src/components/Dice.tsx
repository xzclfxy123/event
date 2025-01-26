import type React from "react"
import { motion } from "framer-motion"

interface DiceProps {
  value: number
  rolling: boolean
}

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

export const Dice: React.FC<DiceProps> = ({ value, rolling }) => {
  return (
    <motion.div
      className="text-4xl bg-white rounded-lg p-4 shadow-lg"
      animate={rolling ? { rotate: 360 } : {}}
      transition={rolling ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : {}}
    >
      {diceFaces[value - 1]}
    </motion.div>
  )
}

