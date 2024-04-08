import { Button } from "../ui/button"

interface MagicLinkEmailTemplateProps {
  magicLinkUrl: string
}

export const MagicLinkEmailTemplate: React.FC<
  Readonly<MagicLinkEmailTemplateProps>
> = ({ magicLinkUrl }) => (
  <div>
    <h1>Welcome, click on the button below to login!</h1>
    <Button
      onClick={() => {
        window.location.href = magicLinkUrl
      }}
    >
      Click here to login
    </Button>
  </div>
)
