import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <section className="w-full text-center my-20">
        <Title text="War The Card Game" />
      </section>
      <section className="w-full text-center my-5">
        <Button text="Versus A.I" />
        <br />
        <Button text="Versus Player" />
        <br />
        <Button text="Rules" />
      </section>
    </>
  );
}
