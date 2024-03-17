import { Body } from "@/components/body";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Body showUser={false}>
      <div className="flex h-full items-center justify-center">{children}</div>
    </Body>
  );
}
