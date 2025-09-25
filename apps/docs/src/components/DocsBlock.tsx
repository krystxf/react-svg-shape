import type { ReactNode } from "react";

export const DocsBlock = ({
  children,
  title,
  subtitle,
}: {
  title: string;
  children: ReactNode;
  subtitle?: string;
}) => {
  return (
    <section className="flex flex-col gap-8 my-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl font-semibold text-center text-neutral-800">
          {title}
        </h2>
        <p className="text-neutral-600 text-xl text-center">{subtitle}</p>
      </div>

      <div className="flex md:flex-row flex-col gap-4 items-center  ">
        {children}
      </div>
    </section>
  );
};
