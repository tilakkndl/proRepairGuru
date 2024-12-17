import RouteTitle from "../../components/shared/RouteTitle";
import JoinTeamForm from "../../components/specific/JoinTeamForm";

const JoinUs = () => {
  const joinUsFormInfo = {
    title: "Join Our Passionate Team",
    namePlaceholder: "Your Name",
    name: "name",
    email: "email",
    emailPlaceholder: "Your Email",
    address: "address",
    addressPlaceholder: "Your Address",
    subject: "field",
    subjectPlaceholder: "Your Field",
    description: "description",
    descriptionPlaceholder: "Your Description",
  };

  return (
    <>
      <RouteTitle />
      <JoinTeamForm {...joinUsFormInfo} />
    </>
  );
};

export default JoinUs;
