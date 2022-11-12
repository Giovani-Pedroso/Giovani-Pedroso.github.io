import { motion } from "framer-motion";
import Link from "next/link";

type Prop = {
  img: string;
  title: string;
  category?: string;
  description: string;
  id?: string;
  link?: string;
};

const CardBlog = (props: Prop) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      className="mt-[32px] max-w-[587px] p-2 cursor-pointer "
    >
      <Link
        href={props.link ? `${props.link}` : `./blog/${props.title}`}
        passHref
      >
        <div>
          <a target="_blank">
            <img
              alt="image blog"
              src={props.img}
              className="border-2 border-[#ABAAAA]"
            />
            <h2 className="mt-2 text-[24px] text-[#01A7C2]">{props.title}</h2>
            <h3 className=" text-[20px] text-[#ABAAAA]">{props.category}</h3>
            <p className=""> {props.description}</p>
          </a>
        </div>
      </Link>
    </motion.div>
  );
};

export default CardBlog;
