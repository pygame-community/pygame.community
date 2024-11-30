import Button from "@/components/button";

export default function GetInvolved() {
  return (
    <div className="flex justify-center items-center py-[100px] px-4 md:px-6">
      <div className="max-w-[650px] mx-auto my-[20px] mt-0 p-[15px] pt-0 pb-[2px]">
        <div className="text-[3rem] font-bold md:text-[2.5rem] sm:text-[2rem]">
          Get Involved
        </div>
        <p className="mb-6">
          Join the global team behind the most popular Python game library.
          Ranging from documentation revisions to introducing new features to
          the pygame API.
        </p>
        <div className="flex mt-[10px] flex-wrap gap-4">
          <Button
            text="GitHub"
            fontSize="1.2rem"
            link="https://github.com/pygame-community"
          />
          <Button
            text="Discord"
            fontSize="1.2rem"
            link="https://discord.gg/pygame"
          />
        </div>
      </div>
    </div>
  );
}
