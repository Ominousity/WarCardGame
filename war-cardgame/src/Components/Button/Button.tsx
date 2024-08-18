import "./Button.css";

export interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps): JSX.Element {
  return (
    <>
      <button className="content-center py-3 font-bold m-6 scale-150 border-2 border-white min-w-48">
        {text}
      </button>
    </>
  );
}
