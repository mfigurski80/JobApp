import './Emoji.css'

const EMOJI = "🎂 🐌 🐟 🐝 🕷️ 🦐 🐁 🦀 🐹 🐇 🐿️ 🐰 🦔 🐗 🐨 🐒 🦍 🦒 🦏 🐪 🐫 🦭 🐔 🐍 🦜 🦆 🦢 🦩 🦚 🐩 🐶 🐻 🐺 🦊 🦌 🦓 🐎 🦬 🦣 🐅 🐆 🦇 🦅 🦑 🦈 🐊 🦂 🐉 🐲 🦕 🦖 🐘 🐯 🦉 🦁 🦄 🐷".split(" ")

export default function Emoji({ count }: { count: number }) {
  const em = count <= EMOJI.length ? EMOJI[count] : "⭐"

  return (
    <div>
      <h2 className="logo">{em}</h2>
    </div>
  )
}

