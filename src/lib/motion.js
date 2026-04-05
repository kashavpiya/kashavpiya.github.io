const EASE_OUT_EXPO = [0.22, 1, 0.36, 1]

/** Fade up on scroll entry */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

/** Container that staggers children. Has no own animation — only orchestrates children. */
export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

/** Single card item used inside stagger container */
export const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
}

/** Green underline draw (scaleX 0→1). Set style={{ originX: 0 }} on the motion element. */
export const underlineDraw = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.2 },
  },
}
