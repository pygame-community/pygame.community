import Link from "next/link";

const linksMap = {
  twitter: "https://twitter.com/pygamecommunity",
  youtube: "https://www.youtube.com/@pygamecommunity",
  github: "https://github.com/pygame-community",
  discord: "https://discord.gg/pygame",
};

export default function Footer() {
  return (
    <footer className="flex justify-around bg-[rgb(20,20,20)]">
      <div className="p-[30px] w-[30%]">
        <h3 className="text-xl font-semibold mb-4">Pygame Community Edition</h3>
        <ul className="list-none text-decoration-none">
          {Object.entries(linksMap).map(([key, value]) => (
            <li key={key}>
              <Link href={value}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
