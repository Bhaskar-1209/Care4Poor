import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-black text-[#F8E190] py-6 px-6">
      <motion.div
        className="w-full border-2 border-[#F8E190] rounded-3xl p-12 bg-black backdrop-blur-sm shadow-2xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // whileHover={{
        //   scale: 1.01,
        //   boxShadow: "0px 8px 30px rgba(248,225,144,0.4)",
        // }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          About Us
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          className="gap-8 text-base leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            At <span className="font-bold">Care4Poor</span>, we believe that every child deserves a fair
            start in life — regardless of where they are born or the challenges they face. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio optio, tenetur quam eligendi iure repudiandae, reprehenderit sint dolorum molestiae illum quod quis tempora! Impedit vero non cumque fugit. Dignissimos, consequatur corrupti accusamus voluptatibus unde quos cumque asperiores saepe? Repellat aut harum asperiores quae consequuntur dicta architecto ipsa provident? Deserunt doloremque suscipit vitae. Quidem blanditiis facilis optio cum necessitatibus. Quod aperiam sapiente ut temporibus ab magni, ea laborum. Dolorem eveniet reprehenderit nisi optio libero rem culpa ea quidem deserunt est tenetur, aut iusto esse repellat? Consequatur consequuntur repudiandae pariatur aliquam, sunt odio possimus temporibus asperiores magnam beatae ut modi mollitia?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam at consequuntur delectus quidem officiis minima, error, ab ea nam distinctio iusto aliquid? Reprehenderit quidem unde nemo officiis saepe in dicta ab, voluptate facilis molestias pariatur reiciendis, nobis autem quas veritatis rem. Deleniti fugit magnam natus odit suscipit quia nemo! Facere cum eaque excepturi! Nemo adipisci labore rem cumque placeat natus! Magni possimus, ducimus corrupti reiciendis placeat enim excepturi quisquam quo pariatur, suscipit soluta. Rerum nisi ad nesciunt fugit, autem dolor quasi odio ratione voluptate ullam, repudiandae maiores voluptatem, similique facilis! Libero labore exercitationem quae facilis possimus culpa ea consectetur provident tempore, doloribus et reiciendis aut dicta sit praesentium nobis quis laborum neque consequatur. Velit atque magnam deserunt quasi! Aliquid doloribus eos non temporibus quae distinctio eius dignissimos reprehenderit, repellendus nam illo rem amet perspiciatis eum, fugiat molestiae soluta dolor optio nisi commodi blanditiis porro iste illum quo. Et enim voluptatum alias impedit? Asperiores, sed necessitatibus! Aperiam deserunt vero sit, harum a maxime culpa possimus corporis, autem incidunt in consequatur id architecto molestias esse perspiciatis magnam nam vitae inventore reprehenderit fuga non velit blanditiis dignissimos! Voluptatum velit quae, deleniti laudantium unde accusamus, molestiae rerum culpa, delectus eaque deserunt animi molestias numquam.
          </motion.p>

          {/* <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Our mission is to empower underprivileged communities by focusing on
            education, healthcare, and sustainable development programs.
          </motion.p> */}

          {/* <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            We work closely with volunteers and partners to create opportunities
            that foster growth, hope, and lasting change.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Together, we are building a future where compassion, equality, and
            justice guide our actions for a better tomorrow.
          </motion.p> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
