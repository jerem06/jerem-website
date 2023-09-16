import Image from "next/image";
import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";

export default function Home() {
  return (
    <div className="pt-10">
      <div className="flex flex-row justify-between flex-wrap mb-10">
        <Image
          className="self-end lg:mb-24"
          src="/shapes/shape2.png"
          quality={100}
          width={150}
          height={374}
          alt="test"
        />

        <div className="lg:absolute pr-10 m-10 lg:pr-96 lg:mx-40 lg:my-40">
          <Text className="text-headline text-4xl">
            Bonjour ! Je suis Jérémie BENCINI -
          </Text>
          <Text className="text-3xl my-2">Développeur React Native</Text>
          <div className="mt-10">
            <Text>
              Développeur{" "}
              <strong className="font-bold text-highlight-900">
                React Native, React, et Next
              </strong>{" "}
              avec plus de 3 ans d&#39;expérience dans le domaine du
              développement web et mobile, je suis passionné par la création
              d&#39;interfaces offrant des{" "}
              <strong className="font-bold text-highlight-900">UX / UI</strong>{" "}
              exceptionnelles.
              <p>
                Mon engagement est de concevoir des interfaces avec une
                esthétique soignée et une expérience utilisateur optimale.
              </p>
            </Text>
            <div className="mt-10">
              <Button className="mr-4 mb-5" variant="classic">
                <Text className="text-buttonText">Télécharger CV</Text>
              </Button>
              <Button
                className="mb-5 bg-primary-900 hover:bg-primary-700"
                variant="classic"
              >
                <Text className="text-buttonText">Me Contacter</Text>
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="ml-auto"
          src="/shapes/shape1.png"
          quality={100}
          width={600}
          height={739}
          alt="test"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 180"
        style={{ marginBottom: -1 }}
      >
        <path
          fill="#e8e4e6"
          fill-opacity="1"
          d="M0,128L26.7,122.7C53.3,117,107,107,160,101.3C213.3,96,267,96,320,101.3C373.3,107,427,117,480,133.3C533.3,149,587,171,640,165.3C693.3,160,747,128,800,122.7C853.3,117,907,139,960,149.3C1013.3,160,1067,160,1120,160C1173.3,160,1227,160,1280,154.7C1333.3,149,1387,139,1413,133.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-primary-900 p-5 sm:p-10 lg:px-60 flex items-center flex-col">
        <Text
          variant="body"
          className="text-buttonText text-4xl  mb-5 lg:mb-10"
        >
          Qui suis-je ?
        </Text>
        <iframe
          allowFullScreen
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
      </div>
      <svg
        style={{ marginTop: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 180"
        transform="rotate(180)"
      >
        <path
          fill="#e8e4e6"
          fill-opacity="1"
          d="M0,128L26.7,122.7C53.3,117,107,107,160,101.3C213.3,96,267,96,320,101.3C373.3,107,427,117,480,133.3C533.3,149,587,171,640,165.3C693.3,160,747,128,800,122.7C853.3,117,907,139,960,149.3C1013.3,160,1067,160,1120,160C1173.3,160,1227,160,1280,154.7C1333.3,149,1387,139,1413,133.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
