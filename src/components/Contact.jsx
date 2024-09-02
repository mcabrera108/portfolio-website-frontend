import Layout from "./Layout";
import style from "../style_modules/component_modules/section.module.css";
import contactStyle from "../style_modules/component_modules/contact.module.css";

function Contact() {
  return (
    <Layout>
      <section className={style.sectionBanner}>
        <div className={style.sectionTitleContainer}>
          <h1 className={style.heroTitle}>Contact Me</h1>
        </div>
        <div className={contactStyle.contactContainer}>
          <div className={contactStyle.contactDescriptionContainer}>
            <h1>
              Have any questions or need a consultation? Please leave your
              details and I'll get back to you as soon as possible.
            </h1>
          </div>
          <form
            className={contactStyle.formContainer}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input
              type="text"
              className={contactStyle.contactFormName}
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              className={contactStyle.contactFormName}
              name="email"
              placeholder="Email"
            />
            <textarea
              name="message"
              placeholder="Message"
              className={contactStyle.contactFormName}
              rows="10"
            ></textarea>
            <div className={contactStyle.contactSubmitContainer}>
              <button
                type="submit"
                className={contactStyle.contactFormSubmitBtn}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
export default Contact;
