import { Button } from "../ui/button"

interface MagicLinkEmailTemplateProps {
  magicLinkUrl: string
}

export const MagicLinkEmailTemplate: React.FC<
  Readonly<MagicLinkEmailTemplateProps>
> = ({ magicLinkUrl }) => (
  <div>
    <h1>Welcome, click on the button below to login!</h1>
    <a
      href={`${magicLinkUrl}`}
      className="rounded-xl bg-stone-400 px-4 py-2 text-stone-50"
      target="_blank"
      rel="noreferrer"
    >
      Click here to login
    </a>
  </div>
)
