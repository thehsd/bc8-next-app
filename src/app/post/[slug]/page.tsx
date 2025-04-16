import Image from "next/image";
import Link from "next/link";

const DynamicPost = () => {
  return (
    <div>
      <Image
        src="https://dkstatics-public.digikala.com/digikala-products/d034271c4f1ee86a4402c6989f533eb759414c32_1728722854.jpg"
        alt="digi"
        width={300}
        height={300}
      />
      <Link href="/post"> go to post page</Link>
    </div>
  );
};

export default DynamicPost;
