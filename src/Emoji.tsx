import { Twemoji } from 'react-emoji-render';

import './Emoji.css'

const EMOJI = "🎂-🐌-🐟-🐝-🕷️-🦐-🐁-🦀-🐹-🐇-🐿️-🐰-🦔-🐗-🐨-🐒-🦍-🦒-🦏-🐪-🐫-🦭-🐔-🐍-🦜-🦆-🦢-🦩-🦚-🐩-🐶-🐻-🐺-🦊-🦌-🦓-🐎-🦬-🦣-🐅-🐆-🦇-🦅-🦑-🦈-🐊-🦂-🐉-🐲-🦕-🦖-🐘-🐯-🦉-🦁-🦄-🐷-🎂-🐌-🐟-🐝-🕷️-🦐-🐁-🦀-🐹-🐇-🐿️-🐰-🦔-🐗-🐨-🐼-🦟-🐜-😼-🐛-🦋-🐞-🦘-🐳-🐦-🐧-🐥-🕸-🕷-🐡-🐋-🙈-🐵-🦞-🐑-😺-🐸-🐐-🐽-😽-🦗-🦛-🐢-😻-🦎-🦠-🐠-🐏-😾-🦝-🐾-🦃-🐚-😿-😹-🦙-🐴-🐂-🐃-🙊-🐕-🐬-🐀-🐿-🐤-🐄-🙉-🐖-🐮-🦡-🐱-🐙-🐭-🐓-🐈-😸-🙀-🕊-🐣".split("-").filter(v => !!v)

export default function Emoji({ count }: { count: number }) {
  const em = EMOJI[count % EMOJI.length]
  return (
    <div>
      <h2 className="logo">
        <Twemoji text={em} />
      </h2>
    </div>
  )
}

