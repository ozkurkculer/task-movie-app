import Image from "next/image"

export default function Loading() {
    return (
        <div className="bg-background flex items-center justify-center w-full h-full">
            <Image src='/popcorn.png' width={189} height={189} alt="Loading image" />
        </div>
    )
}