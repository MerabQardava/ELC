import Image from "next/image";
import styles from "./page.module.css";
import ClassesCard from "@/app/Components/ClassesCard/ClassesCard";

export default function Home() {
    return (
        <main className={styles.main}>
            <ClassesCard price={500} priceColor={"yellow"} title={"Classroom Name"}
                         backgroundImage={"https://cdn.pixabay.com/photo/2017/08/23/15/39/square-2673252_640.png"}
                         description={"The next generation of corporate learning."}/>

            <ClassesCard price={500} priceColor={"blue"} title={"Classroom Name"}
                         backgroundImage={"https://media.npr.org/assets/img/2022/12/22/gettyimages-1245203807-1536x1029_wide-9982607ca51f99999656d993bf5511d42533c0f2-s1100-c50.jpg"}
                         description={"The next generation of corporate learning."}/>

        </main>
    );
}
