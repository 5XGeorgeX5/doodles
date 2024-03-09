import RootLayout from "../layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout showUser={false}>
      <div className="h-full flex items-center justify-center">{children}</div>
    </RootLayout>
  );
}
