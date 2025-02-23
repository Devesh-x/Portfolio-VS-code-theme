function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "r.rajput12111@gmail.com",
      href: "mailto:r.rajput12111@gmail.com",
    },
    {
      social: "github",
      un: "Devesh-x",
      href: "https://github.com/Devesh-x/",
    },
    {
      social: "linkedin",
      un: "devesh2904",
      href: "www.linkedin.com/in/devesh2904/",
    },
    {
      social: "instagram",
      un: "deveeeesh",
      href: "https://www.instagram.com/deveeeesh",
    },
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
