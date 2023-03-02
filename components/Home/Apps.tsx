import Link from "next/link";
import CardApp from "./CardApp";
/* import styles from  */

export default function Apps() {
  function appsRequest() {
    return <CardApp />;
  }
  return (
    <section>
      <div className="flex flex-row items-baseline">
        <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300] mr-6">
          Apps{" "}
        </h1>
        {/* <Link href="./projects">
            <a className="text-[20px] text-[#01A7C2]  underline">See all</a>
            </Link> */}
      </div>
      <div className="flex  h-[80vh] justify-between flex-wrap">
        {appsRequest()}
      </div>
    </section>
  );
}
