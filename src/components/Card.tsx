import { IContent } from "../interfaces/IContent";

export function Card({ iconURL, content, imageAlt, title }: IContent) {
  return (
    <div>
      <img src={iconURL} alt={imageAlt} />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
