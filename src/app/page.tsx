import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   'https://utfs.io/f/nLOFjVrvhB5HA2FO3tokqvdJnobFpKtf1wi3xaQR5BM4VPGO',
//   'https://utfs.io/f/nLOFjVrvhB5HFus6Pfn7odHcr3Unt5DTzC0kYm9EgQJaBsPx',
//   'https://utfs.io/f/nLOFjVrvhB5H2Fhv7bsVS78Ud0bZisxWrTHpJReuDwFjLcaB'
// ]

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }))

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id * Math.random()} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      {/* Content that can be seen when logged out */}
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      {/* Content when you sign in */}
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
