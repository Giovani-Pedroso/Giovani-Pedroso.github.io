import { motion } from 'framer-motion'
import { BsPersonCircle } from 'react-icons/bs'
import { AiFillChrome } from 'react-icons/ai'

//whileInView
//animate={{ rotate: [0, 90, 0], scale: [1, 1.4, 1], y: [0, -50, 0] }}
export default function Responsivo() {
  return (
    <div className="flex flex-col-reverse justify-between my-[50px] md:flex-row">
      <div className="flex flex-col items-center w-full">
        {/* The smartphone*/}
        <motion.div className="flex w-[25vw] h-[50vw] bg-black rounded-lg p-1 md:p-3 md:w-[200px] md:h-[400px]"
          initial={{ rotate: 0, scale: 1, y: 0 }}
          whileInView={{ rotate: 90, scale: 1.4, y: -50 }}
          transition={{ duration: 1 }}
        >
          <div
            className="flex justify-center items-center flex-col text-white justify-center bg-white rounded-lg h-full w-full bg-[#1a1a1a]">
            <AiFillChrome className="text-[40px] md:text-[80px]" />

          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col  items-center justify-between bg-[#1a1a1a] md:w-[200px] md:h-[100px] p-2 rounded-lg">
          <Keys />
          <Keys />
          <div className="bg-black w-[80%] h-[10px] md:h-[20px]">

          </div>
        </motion.div>
      </div>
      <div className="flex w-full items-center ">
        <h1 className="text-primary text-[40px] mb-[100px] w-full text-right">100% responsive websites</h1>
      </div>
    </div >
  )
}


/*

	
<div className="flex w-full text-[10px] justify-between px-2">
  <BsPersonCircle className="text-[40px]" />
  <p className="leading-[0.8rem]">
    ▂▂▂▂▂▂▂▂▂▂▂▂▂
    <br />
    ▂▂▂▂▂▂▂▂▂▂▂▂▂
    <br />
    ▂▂▂▂▂▂▂▂▂▂▂▂▂
  </p>
</div>
<div className="px-2">
  <p className="leading-[0.8rem]">
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂
    ▂▂▂▂▂ ▂▂▂▂ ▂ ▂▂▂ ▂▂▂▂▂ ▂▂ ▂▂▂▂ ▂ ▂▂▂

  </p>
</div>
*/

const Line = () => {

  return (
    <div className="w-full border-2">

    </div>
  )
}

const Keys = () => {
  const styles = {
    key: "w-[10px] h-[10px] mx-[2px] md:w-[20px] md:h-[20px] md:mx-[4px] bg-black"
  }
  return (
    <div className="flex justify-around mb-2">
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
    </div>
  )

}

const Keyboard = () => {

  return (
    <p></p>
  )
}


/*

 */
