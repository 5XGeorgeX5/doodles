import { Body } from "@/components/body";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Body showUser={false}>
      <div className="h-full flex items-center justify-center">{children}</div>
      </Body>
  );
}
