import Image from "next/image";

export function JkosBadge() {
  return (
    <span
      aria-label="JKOS"
      className="inline-flex h-[26px] w-[68px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-jk-brand-green px-2 shadow-[0_2px_10px_-4px_rgba(32,53,46,0.28)]"
      title="Part of JKOS"
    >
      <Image
        alt=""
        className="h-auto max-h-[13px] w-auto max-w-[50px] object-contain"
        height={205}
        src="/brand/jkos.png"
        width={700}
      />
    </span>
  );
}
