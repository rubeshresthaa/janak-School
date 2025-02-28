import Providers from "@/store/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>{" "}
        {/* Wrap everything in Redux Provider */}
      </body>
    </html>
  );
}
