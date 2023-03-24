// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { Form } from "./Components/Form/form";

export const Contacts: React.FC = () => {
  return (
    <>
      <HeaderPage title={"Frequently asked questions"} supTitle={"Contacts"} />
      <Form />
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38936.82632507313!2d35.21563787683323!3d31.764463186487266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sil!4v1675511130745!5m2!1sru!2sil"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </>
  );
};
