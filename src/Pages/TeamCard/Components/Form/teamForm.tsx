// Button
import Button from "@mui/material/Button";

interface ITeamName {
  name: string | undefined;
}
export const TeamForm: React.FC<ITeamName> = ({ name }) => {
  return (
    <section className="team-form">
      <div className="box">
        <section className="form-inner">
          <section>
            <h2>Want to {name} share his expertise with you?</h2>
          </section>
          <form>
            <div>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
            </div>
            <input placeholder="Theme" type="text" />
            <br />
            <input placeholder="Message" type="text" />
            <br />
            <Button type="submit">Send</Button>
          </form>
        </section>
      </div>
    </section>
  );
};
