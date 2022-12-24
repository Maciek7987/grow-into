import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "../styles/Modal.module.scss";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <>
      <a
        onClick={openModal}
        className={styles.termsConditions__link}
      >
        Terms & Conditions <div className={styles.line} />
      </a>
      <Popup
        closeOnDocumentClick
        open={open}
        onClose={closeModal}
        modal
        lockScroll
      >
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>
            <svg
              className={styles.svg}
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={styles.svg__line}
                y1="-0.75"
                x2="16.4886"
                y2="-0.75"
                transform="matrix(-0.687934 0.725773 -0.687934 -0.725774 11.843 0.233185)"
                stroke="#000"
                strokeWidth="1.5"
              />
              <line
                className={styles.svg__line}
                y1="-0.75"
                x2="16.4886"
                y2="-0.75"
                transform="matrix(-0.687934 -0.725774 0.687934 -0.725773 12.5 12.2332)"
                stroke="#000"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <div className={styles.header}> Terms and Conditions </div>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae
            corporis esse in sunt possimus illum id placeat iusto est, officia
            eligendi unde? Sint eum possimus earum obcaecati nesciunt, neque
            perspiciatis, dolore accusantium iusto adipisci debitis ratione illo
            aut eveniet, sapiente eos quos repellendus ab quo. Maxime, totam!
            Corrupti minus ipsum sunt quia harum asperiores dolor excepturi quas
            quo doloremque, consequuntur sint sed ipsam impedit pariatur
            laborum, nam tenetur ratione natus. Alias placeat commodi numquam
            error provident nisi magnam aperiam cumque ducimus. Quisquam, fuga,
            ex vel doloremque facere dolores molestias quod distinctio
            voluptate, quos excepturi maiores aut officia laborum cupiditate?
            Expedita, exercitationem aut. Qui, ducimus odit neque, iusto
            assumenda possimus nisi blanditiis inventore, ex nemo nobis eius
            magnam sunt provident veritatis. Numquam sit omnis id veniam eius
            fuga et sed tempora consectetur tenetur nam cumque, fugit nobis
            ratione iusto aut voluptas deleniti. Illo ad incidunt labore sequi
            beatae cumque molestiae dolore soluta ratione unde sint esse
            debitis, minima, ut earum natus optio tenetur sapiente accusamus
            exercitationem ab quos? Quo ex, error quos sunt et repudiandae
            reiciendis laudantium dolorem vero, velit quis mollitia aliquid
            ipsum est possimus impedit exercitationem odio iure? Animi quo
            molestias dicta expedita. Fugiat doloribus aperiam praesentium sint
            suscipit nobis est distinctio reiciendis repellendus delectus quam
            itaque nemo, iure quo. Voluptate veritatis assumenda magni sed,
            officiis ex earum blanditiis hic quia voluptatem ratione doloribus
            similique? Ad, quidem. Consequuntur, blanditiis obcaecati culpa
            exercitationem totam deleniti, consequatur molestias eaque animi
            saepe in est provident ullam eos reprehenderit qui natus
            necessitatibus consectetur? Voluptatum, perferendis perspiciatis.
            Error ratione adipisci nihil nulla quos dolorum tempore. Facere
            reprehenderit corporis, officiis possimus tenetur sunt animi iste
            illo, ex atque praesentium quos qui nobis minus deserunt assumenda
            sint illum nihil mollitia harum. Sequi minima totam provident
            perferendis, minus voluptate cupiditate tempore est itaque et
            repellendus nobis necessitatibus. Beatae itaque fugit, fuga hic ex
            repellendus delectus illum quidem dolorum dicta, corporis molestias
            quisquam blanditiis quaerat. Illum adipisci minus deserunt qui iure
            nobis expedita? Laudantium perferendis assumenda incidunt, veniam
            amet optio obcaecati inventore ex ipsum officiis cumque magnam,
            possimus quaerat reprehenderit qui veritatis! Ullam corrupti illo
            mollitia, deleniti aut cupiditate molestiae quisquam accusamus in.
            Blanditiis ab, exercitationem dolor consequatur sint minima deserunt
            unde officia quos! Rem, aspernatur voluptas perspiciatis qui
            quibusdam quia dolorem facere ad atque dignissimos aperiam, veniam
            soluta deserunt obcaecati ut voluptates voluptatibus sint incidunt.
            Neque reprehenderit similique nemo voluptates delectus cupiditate!
            Recusandae necessitatibus in officia! Aut, autem minus! Quis
            officiis perferendis nemo, obcaecati deleniti possimus vitae quia
            accusamus sed fugit iure in aspernatur, cupiditate, eos ut ullam
            impedit labore! Odit, dolores quis sed fugit harum tenetur aliquid
            provident porro vel. Dolore cupiditate, exercitationem adipisci nisi
            excepturi deleniti quaerat doloremque molestiae cumque facilis animi
            fugiat necessitatibus consequatur optio, ullam sunt enim blanditiis,
            rerum inventore accusamus? Incidunt, porro perferendis fugit
            possimus quibusdam placeat adipisci veniam, rerum id molestiae rem
            architecto, earum repellendus. Sed veritatis fugit, incidunt magni
            saepe inventore perferendis, vel quam ab reprehenderit doloremque
            temporibus minima adipisci. Totam explicabo repudiandae ratione sunt
            consequuntur veritatis ullam officia itaque, incidunt nesciunt amet
            quos officiis quae debitis adipisci? Sequi, unde a recusandae
            explicabo eos voluptatum itaque tenetur quae. Repellendus recusandae
            nostrum totam iusto molestiae, aspernatur itaque illum ex ad
            voluptate quae tempora dolorum placeat, vel odio eius, quo est
            consequatur veniam quis! Dolorem laudantium animi consequatur fuga
            sint, qui voluptas perferendis, incidunt itaque enim quia sapiente
            aut eaque hic maiores deserunt asperiores cum. Corporis similique
            ullam assumenda sed nostrum illum eaque suscipit fugiat tempore, ut
            eveniet quis repellat nisi blanditiis. Id nostrum, quo tenetur
            voluptatibus magni tempore. Explicabo dicta accusamus nam iusto
            consectetur sit vero provident? Iure quos nostrum laborum facere
            repellat beatae laboriosam tenetur ducimus, reiciendis culpa
            repellendus aliquid nam modi maxime earum. Vitae est quasi tenetur
            nostrum iusto velit veritatis libero fugiat eius rerum omnis veniam,
            reprehenderit quas. Est, autem neque? Blanditiis tenetur, ratione
            impedit sapiente fugit unde amet. Maiores quaerat natus delectus
            voluptate cum excepturi earum laboriosam quis, odio aperiam fugiat
            veniam ipsa aspernatur suscipit magnam quidem perferendis quisquam
            rerum quo accusantium obcaecati incidunt molestiae mollitia? Sed
            quas, quaerat error officiis aperiam, sit consectetur rem nobis
            cumque inventore voluptatibus, molestiae delectus quasi ex molestias
            vitae! Tenetur dicta aspernatur, ea officia molestiae autem
            explicabo, ullam, animi nulla doloribus pariatur error consequatur
            quo. Corporis hic alias numquam praesentium explicabo obcaecati,
            vero quisquam? Consequatur eos, tempora a doloremque eveniet amet
            praesentium, exercitationem obcaecati iste architecto dicta, harum
            molestiae esse! Nemo ipsa numquam nobis quis laborum omnis iure
            enim, cumque debitis necessitatibus alias corrupti explicabo beatae
            et cum commodi a distinctio asperiores! Nobis dicta qui voluptatum
            maiores laboriosam recusandae nulla harum! Autem exercitationem iure
            veniam quidem, quia ab iusto qui quibusdam nam sapiente dolore
            dolorum corporis perspiciatis quisquam expedita fuga est iste id
            blanditiis reprehenderit molestias tenetur nihil quam? Molestiae
            praesentium quis, nihil unde veritatis ea doloribus possimus at
            soluta reprehenderit, cumque sed corrupti ab. Id similique officiis
            quia ad minus voluptates alias omnis itaque modi vero ipsum ab
            adipisci reiciendis quas earum saepe accusantium iusto ea deserunt
            blanditiis sint, cum ut iste! Sequi perspiciatis possimus fugit
            voluptas, nisi officiis facere inventore impedit corporis quo a
            cupiditate est magni eum amet, iure quasi nihil nobis, ut ad illum
            voluptatum doloribus perferendis! Adipisci sit commodi, nobis,
            laborum nesciunt culpa corrupti sequi dolores repellat animi aliquid
            ullam eveniet, tempore dicta! Dolorem consectetur, voluptas saepe
            consequuntur distinctio quidem nihil deserunt, corporis hic debitis
            minima, excepturi illum! Ex quis alias voluptate inventore veniam
            non illum! Nam, eligendi? Fugiat incidunt repudiandae necessitatibus
            blanditiis assumenda cumque quisquam consequatur rerum. At, fugit
            excepturi quod quos harum iste, similique ut odit corporis aliquid
            nostrum ducimus consequuntur eaque quae facere laborum numquam
            adipisci. Hic doloremque earum quas voluptatem labore aliquid
            molestiae in sunt incidunt maxime optio perferendis perspiciatis
            minus corrupti, officia quis ullam explicabo! Voluptatibus,
            praesentium quis cumque ipsa natus veritatis rem, neque ut minima,
            incidunt voluptatem. Eveniet voluptatem, quibusdam dicta soluta
            velit officiis similique ex nulla repellendus sit suscipit culpa
            minima facilis ab, deserunt illum veritatis, fugit dolorum fugiat
            accusantium doloremque vitae odit vel? Assumenda est earum ipsum.
          </p>
        </div>
      </Popup>
    </>
  );
}
