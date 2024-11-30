/**
 * ```css
 * .card {
 *   margin: 20px;
  padding: 15px;
}

.card:hover {
  color: cadetblue;
  transition: all;
  transition-duration: 300ms;
}

.name {
 *   font-size: 1.5rem;
 *   font-weight: 700;
 * }
 * ```
 */

interface PoweredCardProps {
  name: string;
  author: string;
  link: string;
}

export default function PoweredCard(props: PoweredCardProps) {
  return (
    <div className="m-5 p-[15px] hover:text-[cadetblue] transition-all duration-300">
      <a href={props.link}>
        <div className="text-[1.5rem] font-bold">{props.name}</div>
        <div>{props.author}</div>
      </a>
    </div>
  );
}
