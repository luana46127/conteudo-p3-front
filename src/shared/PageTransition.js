<<<<<<< HEAD
import React, { Children } from 'react'

const pageVariant = {}
  return (
    <div>PageTransition</div>
  )

const PageTransition = ({Children}) => (
=======
import { motion } from "framer-motion";

const pageVariant = {
    initial: {
        opacity: 0,
        y: 30
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1] // transição da animação
        },
    },
    out: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 0.3
        }
    }   
}

const PageTransition = ({children}) => {
>>>>>>> upstream/main
    return (
        <motion.div
            variants={pageVariant}
            initial="initial"
            animate="in"
            exit="out"
<<<<<<< HEAD
            style={{width: 100%}}
        >


        </motion.div>
    )
)



export default PageTransition
=======
            style={{width: "100%", height: "100%"}}
        >
            {children}
        </motion.div>
    )
}
export default PageTransition;
>>>>>>> upstream/main
