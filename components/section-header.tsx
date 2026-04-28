type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
};

export function SectionHeader({ number, label, title }: SectionHeaderProps) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.38em] text-muted-foreground sm:text-xs">
        {number} / {label}
      </p>
      <h2 className="font-heading mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-tight text-foreground">
        {title}
      </h2>
    </header>
  );
}
