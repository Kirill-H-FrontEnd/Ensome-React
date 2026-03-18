import s from "./_TeamForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faComments } from "@fortawesome/free-solid-svg-icons";

interface ITeamName {
  name: string | undefined;
}

export const TeamForm: React.FC<ITeamName> = ({ name }) => {
  return (
    <section className={s.teamForm}>
      <div className="box">
        <div className={s.formInner}>
          {/* ── Left: heading block ── */}
          <div className={s.formLeft}>
            <span className={s.formLabel}>Get in touch</span>
            <h2 className={s.formTitle}>
              Want {name} to share expertise with you?
            </h2>
            <p className={s.formSubtitle}>
              Fill in the form and {name} will get back to you within one
              business day.
            </p>

            <div className={s.formHint}>
              <span className={s.hintIcon}>
                <FontAwesomeIcon icon={faComments} />
              </span>
              <p>
                We respond to every message personally — no bots, no templates.
              </p>
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className={s.formCard}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={s.formRow}>
                <div className={s.formGroup}>
                  <label className={s.formFieldLabel}>Your name</label>
                  <input
                    className={s.formInput}
                    type="text"
                    placeholder="John Smith"
                  />
                </div>
                <div className={s.formGroup}>
                  <label className={s.formFieldLabel}>Email address</label>
                  <input
                    className={s.formInput}
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className={s.formGroup}>
                <label className={s.formFieldLabel}>Subject</label>
                <input
                  className={s.formInput}
                  type="text"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className={s.formGroup}>
                <label className={s.formFieldLabel}>Message</label>
                <textarea
                  className={s.formTextarea}
                  rows={5}
                  placeholder="Tell us a bit about what you need..."
                />
              </div>

              <button className={s.formSubmit} type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
