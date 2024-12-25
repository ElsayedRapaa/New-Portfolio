import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { homeContact } from "../data/home-contact";
import HomeContact from "../components/home-contact";

const Home = () => {
  return (
    <div
      className="
        pt-6
        pb-12
      "
    >
      <Container>
        <div
          className="
            flex
            justify-between
            gap-x-12
          "
        >
          <div
            className="
              flex-1
              flex-col
            "
          >
            <PageTitle
              title="Welcom To My Portfolio"
              subTitle="Elsayed Rapaa"
              textBig
            />
            <p
              className="
                text-gray-300
                text-2xl
                font-light
                tracking-wider
                my-6
                animate-text-to-top
                
              "
            >
              React.js Front-End Developer & Next.js
            </p>
            <div
              className="
                bg-gray-800/50
                p-6
                rounded-2xl
                flex
                flex-col
                gap-y-4
                backdrop-blur
                animate-text-bigger
              "
            >
              {homeContact.map((item) => (
                <HomeContact
                  key={item.id}
                  title={item.title}
                  contactID={item.contactID}
                />
              ))}
            </div>
          </div>
          <div
            className="
              rounded-3xl
              overflow-hidden
              md:block
              hidden
              w-[50%]
              animate-text-bigger
            "
          >
            <img
              src="/images/main.png"
              alt="main"
              className="
                hover:scale-110
                duration-700
                rounded-3xl
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
