interface PageProps {
    params: Promise<{
        videoId: string;
    }>
}

const Page = async({params}: PageProps) => {
    const {videoId} = await params
    return (
        <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Video</h1>
        <p className="text-lg">This is the video page. {videoId}</p>
        </div>
    );
}
export default Page;