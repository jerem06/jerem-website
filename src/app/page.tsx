import Image from "next/image";
import { Text } from "@/components/atoms";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="self-end lg:mb-24">
          <Image
            src="/shapes/shape2.png"
            quality={100}
            width={150}
            height={374}
            alt="test"
          />
        </div>
        <div className="lg:absolute pr-10 m-10 lg:pr-96 lg:mx-40 lg:my-40">
          <Text className="text-headline text-4xl">
            Bonjour ! Je suis Jérémie BENCINI -
          </Text>
          <Text className="text-3xl">Développeur React Native</Text>
          <Text className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos a
            repudiandae autem? Debitis expedita quod asperiores commodi
            consequatur, cupiditate facilis rerum excepturi atque accusamus
            ipsum reiciendis sed quo repellat! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo eos a repudiandae autem? Debitis
            expedita quod asperiores commodi consequatur, cupiditate facilis
            rerum excepturi atque accusamus ipsum reiciendis sed quo repellat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos a
            repudiandae autem? Debitis expedita quod asperiores commodi
            consequatur, cupiditate facilis rerum excepturi atque accusamus
            ipsum reiciendis sed quo repellat!
          </Text>
        </div>
        <div>
          <Image
            src="/shapes/shape1.png"
            quality={100}
            width={600}
            height={739}
            alt="test"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus
        dignissimos, illum facilis explicabo repudiandae, accusantium, ut non ab
        aliquam tenetur minima ratione suscipit tempore voluptas natus
        distinctio sed delectus!
      </div>
    </>
  );
}
