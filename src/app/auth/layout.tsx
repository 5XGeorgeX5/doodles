import { Body } from "@/components/body";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Body showUser={false}>
      <div
        className="
        my-6 
        flex
        items-center
        justify-center
        "
      >
        {children}
      </div>
    </Body>
  );
}
