import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const SlideInFromRight = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        delay: 0.2,
        duration: 0.5,
        type: "just",
        stiffness: 260,
        damping: 20,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideInFromRight
