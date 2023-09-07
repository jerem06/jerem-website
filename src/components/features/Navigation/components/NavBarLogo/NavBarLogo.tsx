import { Button } from "@/components/molecules";
import { Text } from "@/components/atoms";
import Image from "next/image";

export const NabBarLogo = () => {
  return (
    <Button className="flex flex-row items-center my-2 mx-6 px-2 rounded-md bg-primary-900">
      <Image src="/Emote1.png" width={50} height={50} alt="test" />
      <Text className="ml-3">Jérémie</Text>
    </Button>
  );
};
