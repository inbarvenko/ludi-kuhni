import svgPaths from "../../shared/imports/svg-7785u1ndul";
// import imgImage35 from "figma:asset/30a02c4fa73a26fc0d4acc5724f74dec064cfad9.png";
// import imgImage36 from "figma:asset/88706366ffb03348798fd1658d6fbf6e7b46116c.png";
// import imgImage37 from "figma:asset/11bdee9c24e012c070e079bfa8dd36885ad2f419.png";

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p39120b00} fill="#79BF3A" />
        </g>
      </svg>
    </div>
  );
}

function ScheduleIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p409d200} fill="#79BF3A" />
        </g>
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p2b6fdc00} fill="#79BF3A" />
        </g>
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p12606d00} fill="#79BF3A" />
        </g>
      </svg>
    </div>
  );
}

function TelegramIcon() {
  return (
    <div className="h-[27px] relative shrink-0 w-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 27"
      >
        <g>
          <path d={svgPaths.p3ea92600} fill="#79BF3A" />
        </g>
      </svg>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  content,
  isClickable = false,
}: {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  isClickable?: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      {icon}
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#0f0449] text-left">
        <div
          className="font-['Montserrat:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[16px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[normal]">{title}</p>
        </div>
        <div
          className={`font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] ${
            isClickable ? "" : "text-nowrap"
          }`}
        >
          {typeof content === "string" ? (
            <p className="block leading-[normal] whitespace-pre">{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}

function PhoneNumbers() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#0f0449] text-[14px] text-left text-nowrap">
      <div className="relative shrink-0">
        <a
          href="tel:+78634311707"
          className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[normal] text-nowrap whitespace-pre hover:text-[#79BF3A] transition-colors"
        >
          +7 863 431-17-07
        </a>
      </div>
      <div className="relative shrink-0">
        <a
          href="tel:+78634314707"
          className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[normal] text-nowrap whitespace-pre hover:text-[#79BF3A] transition-colors"
        >
          +7 863 431-47-07
        </a>
      </div>
    </div>
  );
}

function PhoneContact() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <PhoneIcon />
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0">
        <div
          className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#0f0449] text-[16px] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[normal]">Телефоны</p>
        </div>
        <PhoneNumbers />
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative shrink-0 w-full">
      <a
        href="#"
        className="bg-center bg-cover bg-no-repeat shrink-0 size-9 hover:scale-110 transition-transform cursor-pointer"
        // style={{ backgroundImage: `url('${imgImage35}')` }}
        title="VKontakte"
      />
      <a
        href="#"
        className="bg-center bg-no-repeat bg-size-[116.22%_116.22%] shrink-0 size-[37px] hover:scale-110 transition-transform cursor-pointer"
        // style={{ backgroundImage: `url('${imgImage36}')` }}
        title="WhatsApp"
      />
      <a
        href="#"
        className="bg-center bg-cover bg-no-repeat shrink-0 size-9 hover:scale-110 transition-transform cursor-pointer"
        // style={{ backgroundImage: `url('${imgImage37}')` }}
        title="Telegram"
      />
    </div>
  );
}

export default function ContactBlock() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f9f9f9] blur-[35.5px] filter h-[592px] left-0 rounded-[20px] top-0 w-[521px]" />
      <div className="absolute box-border content-stretch flex flex-col gap-9 items-center justify-center left-[100px] p-0 top-[62px] w-[322px]">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0 w-full">
          <div
            className="font-['Mak:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f0449] text-[30px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[normal] text-accent">
              Свяжитесь с нами!
            </p>
          </div>
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[281px]">
            <ContactItem
              icon={<LocationIcon />}
              title="Адрес"
              content="г. Таганрог, ул. Петровская 15"
            />

            <ContactItem
              icon={<ScheduleIcon />}
              title="График работы"
              content="Пн-Сб 10.00 - 19.00"
            />

            <PhoneContact />

            <ContactItem
              icon={<EmailIcon />}
              title="Почта"
              content={
                <a
                  href="mailto:info@company.ru"
                  className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[normal] whitespace-pre hover:text-[#79BF3A] transition-colors"
                >
                  barvenko@list.ru
                </a>
              }
              isClickable
            />

            <ContactItem
              icon={<TelegramIcon />}
              title="Наш канал в telegram"
              content={
                <a
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[normal] whitespace-pre hover:text-[#79BF3A] transition-colors"
                >
                  @ludikuhni
                </a>
              }
              isClickable
            />
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}
