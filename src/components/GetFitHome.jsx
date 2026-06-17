import "./GetFitHome.css";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

function GetFitHome() {
  return (
    <section id="get-fit-home" className="get-fit-home">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <h2>
          Getting Fit At Home Has Never Been This Easy!
        </h2>
      </motion.div>

      {/* Block 1 */}
      <div className="getfit-container">

        <motion.div
          className="getfit-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>
            Take Yoga, HIIT, Pilates & Strength Classes At Home
          </h3>

          <p>
            You don't even have to step out.
            Explore our wide variety of online workouts
            that you can join from home.
          </p>

          <div className="workout-image">
            <img src="/images/hero2.jpeg" alt="" />
          </div>
        </motion.div>

        <motion.div
          className="phone-container"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src="/images/mobile.png" alt="" />
        </motion.div>

      </div>

      {/* Block 2 */}
      <div className="getfit-container reverse">

        <motion.div
          className="phone-container"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src="/images/lower.png" alt="" />
        </motion.div>

        <motion.div
          className="getfit-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>LIVE Coaching By Instructors</h3>

          <p>
            Our instructors coach you in real-time
            and guide you according to your fitness level.
          </p>

          <div className="workout-image">
            <img src="/images/hero.webp" alt="" />
          </div>
        </motion.div>

      </div>

      {/* Block 3 */}
      <div className="getfit-container third-block">

        <motion.div
          className="getfit-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Real-Time Feedback On Posture</h3>

          <p>
            Our instructors provide instant feedback
            on posture and form.
          </p>
        </motion.div>

        <motion.div
          className="workout-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src="/images/gym.jpg" alt="" />
        </motion.div>

      </div>

    </section>
  );
}

export default GetFitHome;